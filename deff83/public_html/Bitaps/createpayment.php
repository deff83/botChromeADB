<?php

session_start();
include ($_SERVER['DOCUMENT_ROOT']."/Bitaps/sha256.php");
include ($_SERVER['DOCUMENT_ROOT']."/ini/Config.php");

// Создание платежа
 
// необходимое вам кол-во подтверждений
define('CONFIRMATIONS', 3);
 
// уровень комиссии, чем выше, тем быстрее зачисление
define('FEE_LEVEL', 'low');
  
// адрес вашей логики приема callback'ов
$callback = 'http://s929107n.beget.tech/Bitaps/callback.php';
$callback = urlencode($callback);
 
 
 
 
//echo "Example 5\n\n";
//echo "Create wallet address with exactly count of confirmation notifications:\n";
$params = array("wallet_id"=> $Config_wallet_id,
                "callback_link" => $callback,
                "confirmations" => 3);

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.bitaps.com/btc/v1/create/wallet/payment/address",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode($params)
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  //print_r(json_decode($response));
}


header('Location: /admin.php');

?>
