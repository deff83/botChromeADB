<?php

//session_start();


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
$nonce=round(microtime(true) * 1000);
$key = hash("sha256",(hash("sha256",$wallet_id.$password,true)),true);
$msg = $wallet_id_hash.$nonce;
$signature = hash_hmac("sha256",$msg,$key);

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.bitaps.com/btc/v1/wallet/addresses/".$wallet_id_hash,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array("Access-Nonce: ".$nonce,"Access-Signature: ".$signature),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $answer = json_decode($response);
  $address_list = $answer->address_list;
  
  foreach ( $address_list as $address ) {
	  echo("".print_r($address));
	echo "<div class='text'>";
		echo "Адрес: <a href='https://bitaps.com/".$address->address."' target='_blank'>".$address->address."</a><br>";
		echo "Сумма полученная адресом: ".$address->received_amount."<br>";
		echo "Неподтвержденная сумма полученная адресом : ".$address->pending_received_amount."<br>";
		echo "Количество транзакций полученых адресом : ".$address->received_tx."<br>";
		echo "Количество неподтвержденных транзакций полученых адресом  : ".$address->pending_received_tx."<br>";
	echo "</div>";
  }

  


}

 
?>
