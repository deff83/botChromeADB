<?php
	session_start();
	if(isset($_GET['secretcode'])){$secretcode = $_GET['secretcode'];}
	if(isset($_GET['type'])){$type = $_GET['type'];}
	if (empty($secretcode) ){exit;}
	$pr = $_SESSION['pricebuy'];
	include ($_SERVER['DOCUMENT_ROOT']."/bd.php");
	$login = $_SESSION['login'];
	$result = mysql_query("SELECT * FROM users WHERE login='$login'",$db); 
    $myrow = mysql_fetch_array($result);
	if (empty($myrow['id'])) {
		exit("Error - Resource not found (id)");
		
	}
    $balance = $myrow['balance'];
	$secretcodemy = sha1($pr."test".$login.$balance."test");
	if($secretcode == $secretcodemy){
		$_GET['secretcode'] = '';
		if ($type == 'crypto'){
			$newbalance = $balance + $_SESSION['pricebuy'] * 100000000;
			$result2 = mysql_query ("UPDATE users SET balance = '$newbalance' WHERE login = '$login'");
			if ($result2=='TRUE')
			{
				$_SESSION['errorcod'] = 4;
				header('Location: http://s929107n.beget.tech/index.php');
			}
			exit;
		}
		if ($type == 'yandex'){
			$newbalance = $balance + $_SESSION['pricebuy'] * 400;
			$result2 = mysql_query ("UPDATE users SET balance = '$newbalance' WHERE login = '$login'");
			if ($result2=='TRUE')
			{
				$_SESSION['errorcod'] = 4;
				header('Location: http://s929107n.beget.tech/index.php');
			}
			exit;
		}
		if ($type == 'payeer'){
			$newbalance = $balance + $_SESSION['pricebuy'] * 400;
			$result2 = mysql_query ("UPDATE users SET balance = '$newbalance' WHERE login = '$login'");
			if ($result2=='TRUE')
			{
				$_SESSION['errorcod'] = 4;
				header('Location: http://s929107n.beget.tech/index.php');
			}
			exit;
		}
		exit("Error - Not found type");
	}else{
		exit("Error - Wrong code");
	}
?>