<?php

session_start();

// Создание платежа
 
// необходимое вам кол-во подтверждений
define('CONFIRMATIONS', 3);
 
// уровень комиссии, чем выше, тем быстрее зачисление
define('FEE_LEVEL', 'low');
  
// адрес вашей логики приема callback'ов
$callback = 'http://s929107n.beget.tech/Bitaps/callback.php';
$callback = urlencode($callback);
 
 
 
 
// echo "Example 3\n\n";
//echo "Get wallet information with password:\n";


$wallet_id = $Config_wallet_id;
$wallet_id_hash = $Config_wallet_id_hash;
$nonce=round(microtime(true) * 1000);
$signature = sign_HMAC_signature($wallet_id, $wallet_id_hash, $password, $nonce);

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.bitaps.com/btc/v1/wallet/state/".$wallet_id_hash,
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
 $answer = json_decode($response, true);
 //echo $response."<br>";
echo '<div>
	Кошелек ID:'.$Config_wallet_id.'<br>';
echo '
	Баланс кошелька: '.$answer["balance_amount"].'<br>';
echo '
	Количество созданных адресов: '.$answer["address_count"].'<br>';
echo '
	Количество отправленных транзакций: '.$answer["sent_tx"].'<br>';
echo '
	Количество полученных транзакций: '.$answer["received_tx"].'<br>';
echo '
	Количество не валидных транзакций: '.$answer["invalid_tx"].'<br>';
echo '
	Сумма отправленных транзакций: '.$answer["sent_amount"].'<br>';
echo '
	Количество неподтвержденных транзакций : '.$answer["pending_received_tx"].'<br>';
echo '
	Сумма неподтвержденных отправленных платежей: '.$answer["pending_sent_amount"].'<br>';
echo '
	Количество неподтвержденных отправленных транзакций : '.$answer["pending_sent_tx"].'<br>';
echo '
	Сумма неподтвержденных трназакций: '.$answer["pending_received_amount"].'<br><br><br>';

echo '<div><a href="../Bitaps/createpayment.php">Создать адрес</a></div>';


echo "</div>";
}
 
?>
