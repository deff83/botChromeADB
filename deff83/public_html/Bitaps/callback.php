<?php

	session_start();
	if (isset($_POST['invoice'])) { $invoice = $_POST['invoice']; if ($invoice == '') { unset($invoice);} }
	if (isset($_POST['event'])) { $event = $_POST['event']; if ($event == '') { unset($event);} }
	if (isset($_POST['address'])) { $address = $_POST['address']; if ($address == '') { unset($address);} }
	if (isset($_POST['amount'])) { $amount = $_POST['amount']; if ($amount == '') { unset($amount);} }
	if (isset($_POST['received_amount'])) { $received_amount = $_POST['received_amount']; if ($received_amount == '') { unset($received_amount);} }
	
	$db = mysql_connect ("localhost","s929107n_deff83","18819801s", "crypto");
    mysql_select_db("s929107n_deff83",$db);
	$result = mysql_query("INSERT INTO crypto SET first_name='Ivan', last_name='Dulin';",$db); //изаписываем занчения
	
	$result_into = mysql_query ("INSERT INTO `crypto` (`event`, `address`, `amount`, `received_amount`) VALUES ('$event', '$address', '$amount', '22') ");
	//$result_update = mysql_query ("UPDATE coord SET coordX = '$pl_x', coordY = '$pl_y' WHERE name = '$login'");
	
	echo $invoice;
	

?>