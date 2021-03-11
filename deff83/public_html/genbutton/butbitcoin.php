<?php
   session_start();
   if (isset($_POST['pricebuy'])) { $pr = $_POST['pricebuy']; if ($pr == '') { unset($pr);} }
   //if (isset($_REQUEST['pricebuy'])) { $pr = stripslashes($_REQUEST['pricebuy']); if ($pr == '') { unset($pr);} } 
	$login = $_SESSION['login'];
	if (empty($pr) or empty($login)){
		echo "<div class='error'>ошибка</div>";
		exit("ошибка");
	}
	 include ($_SERVER['DOCUMENT_ROOT']."/bd.php");
	 $result = mysql_query("SELECT * FROM users WHERE login='$login'",$db); //извлекаем из базы все данные о пользователе с введенным логином
    $myrow = mysql_fetch_array($result);
    $balance = $myrow['balance'];
	$_SESSION['pricebuy'] = $pr;
	$secretcode = sha1($pr."test".$_SESSION['login'].$balance."test");
	$success_url = "http://s929107n.beget.tech/genbutton/successbuy.php?secretcode=".$secretcode."%26type=crypto";
	$item_name = "Invest-Ferma (".$login.")";
	$idmerchant = "06b9c870dc0f77f19a2f1cde3283e53c";
	$itemdescription = "Login:".$login;
	$url = "https://api.cryptonator.com/api/merchant/v1/startpayment?merchant_id=".$idmerchant."&item_name=".$item_name."&invoice_amount=".$pr."&invoice_currency=bitcoin&success_url=".$success_url."&item_description=".$itemdescription."";
	//echo $secretcode;
	//////////////////////////////////////DELETE////////////////////////////////////
	/*	$subject = "Пополнение ".$pr." BITCOIN ".$login;
		$from = "Invest-Ferma";
		$message = "Код: <br/>".$secretcode."<br/> ";
		include($_SERVER['DOCUMENT_ROOT']."/functions/mail.php");
		sendMail($myrow['email'], $subject, $message, $from);*/
	////////////////////////////////////////////////////////////////////////////////
						
	header('Location: '.$url);
	
?>