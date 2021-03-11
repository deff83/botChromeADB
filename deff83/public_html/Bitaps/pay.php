<?php

session_start();

// Создание платежа
 
// необходимое вам кол-во подтверждений
define('CONFIRMATIONS', 3);

define('wallet_id', 'BTCvRLjNCHSL2zG6aYHP77Yc5A9RvaMpszgKyB7zZz8ep6LnbZt37');
define('wallet_id', 'BTCvRLjNCHSL2zG6aYHP77Yc5A9RvaMpszgKyB7zZz8ep6LnbZt37');


 
// уровень комиссии, чем выше, тем быстрее зачисление
define('FEE_LEVEL', 'low');
  
// адрес вашей логики приема callback'ов
$callback = 'http://s929107n.beget.tech/Bitaps/callback.php';
$callback = urlencode($callback);
 
// формируем адрес для создания платежа
$requestUrl = 'https://api.bitaps.com/btc/testnet/v1/';
$requestUrl .= 'create/payment/address';

// Данные для отправки
$request = array(
    'forwarding_address' => YOU_BITCOIN_PAYMENT_ADDRESS,
    'callback_link' => $callback,
    'confirmations' => CONFIRMATIONS
);



	$content = json_encode($request);

	$curl = curl_init($requestUrl);
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_HTTPHEADER,
			array("Content-type: application/json"));
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $content);

	$json_response = curl_exec($curl);

	$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

	if ( $status != 200 ) {
		die("Error: call to URL $requestUrl failed with status $status, request $content, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
	}


	curl_close($curl);

	$response = json_decode($json_response, true);
	
	exit($response);

?>