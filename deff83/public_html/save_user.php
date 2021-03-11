<?php
	session_start();
	$base_url = "http://s929107n.beget.tech";
	$login = $_SESSION['logincode'];
	$password = $_SESSION['passwordcode'];
	$mail = $_SESSION['mailcode'];
	$activation = $_SESSION['activation'];
	
    if (isset($_POST['code'])) { $code = $_POST['code']; if ($code == '') { unset($code);} }
	if (empty($code)) 
    {
		header('Location: codemessage.php');
    }
    if($code == $activation){
		include ("bd.php");
		//сохраняем данные
		$newbalance = 0;
                if(strpos($login, '#') or strpos($login, '--') or strpos($login, '/*') or
                   strpos($password, '#') or strpos($password, '--') or strpos($password, '/*') or
                   strpos($mail, '#') or strpos($mail, '--') or strpos($mail, '/*')) {
                   $_SESSION['error'] = "Логин, пароль и почта не могут содержать следующие сочетания символов: #, --, /*";
                   header('Location: reg.php');
                   exit;
                } elseif(strlen($login) > 15 or strlen($password) > 15) {
                   $_SESSION['error'] = "Логин и/или пароль слишком длинный!";
                   header('Location: reg.php');
                   exit;
                }
		$result2 = mysql_query ("INSERT INTO users (login,password,email,balance) VALUES('$login',MD5(SHA1('$password')),'$mail','$newbalance')");
		// Проверяем, есть ли ошибки
		
		if ($result2=='TRUE')
		{
			
			$_SESSION['login']=$login; 
			$result = mysql_query("SELECT * FROM users WHERE login='$login'",$db); //извлекаем из базы все данные о пользователе с введенным логином
			$myrow = mysql_fetch_array($result);
			$_SESSION['id']=$myrow['id'];//эти данные очень часто используются, вот их и будет "носить с собой" вошедший пользователь
			header('Location: index.php');
		}
	 else {
		$_SESSION['error'] = "Ошибка! Вы не зарегистрированы!";
		header('Location: reg.php');
		exit;
		}
	}else{
		$_SESSION['error'] = "Неверный код подтверждения!";
		header('Location: codemail.php');
		exit;
		
	}
    ?>
