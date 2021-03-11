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
 
 
 
 echo "Example 3\n\n";
echo "Create wallet with password:\n";

$params = array("callback_link" => $callback,
                "password" => $password);
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.bitaps.com/btc/v1/create/wallet",
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
  print_r(json_decode($response));
}
 
 /*
// формируем адрес для создания платежа
$requestUrl .= '/create/wallet';


$content = array(
            'callback_link' => $callback,
            'password' => $password
        );

try {

	
	
$content = json_encode($content);

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
    die("Error: call to URL $requestUrl failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
}


curl_close($curl);

$response = json_decode($json_response, true);
echo $json_response;
	
} catch (Exception $e) {
	echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
}
echo '<br>success';*/

?>