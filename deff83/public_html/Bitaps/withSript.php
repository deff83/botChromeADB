<?php

session_start();
include ($_SERVER['DOCUMENT_ROOT']."/Bitaps/sha256.php");
include ($_SERVER['DOCUMENT_ROOT']."/ini/Config.php");

if (isset($_POST['adress'])) { $adress = $_POST['adress']; if ($adress == '') { unset($adress);} }
if (isset($_POST['sum'])) { $sum = $_POST['sum']; if ($sum == '') { unset($sum);} }

if (empty($adress) or empty($sum)){
	echo "<div class='error'>ошибка</div>";
	exit("ошибка");
}

// Создание платежа
 
// необходимое вам кол-во подтверждений
define('CONFIRMATIONS', 3);
 
// уровень комиссии, чем выше, тем быстрее зачисление
define('FEE_LEVEL', 'low');
  
// адрес вашей логики приема callback'ов
$callback = 'http://s929107n.beget.tech/Bitaps/callback.php';
$callback = urlencode($callback);
 
 

 

$wallet_id = $Config_wallet_id;
$wallet_id_hash = $Config_wallet_id_hash;


$params = array("receivers_list"=> array(array("address" => $adress,
                                               "amount" =>  $sum),) );
$params = json_encode($params);


$nonce=round(microtime(true) * 1000);
$key = hash("sha256",(hash("sha256",$wallet_id.$password,true)),true);
$msg = $wallet_id_hash.$params.$nonce;
$signature = hash_hmac("sha256",$msg,$key);



$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.bitaps.com/btc/v1/wallet/send/payment/".$wallet_id_hash,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_HTTPHEADER => array("Access-Nonce: ".$nonce,"Access-Signature: ".$signature),
  CURLOPT_POSTFIELDS => $params
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
  print_r ($err);
} else {
  print_r(json_decode($response));
  
  echo $response."<br>";
echo $adress."<br>";
echo $sum."<br>";
echo json_encode($params)."<br>";
}




?>
