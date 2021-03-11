<?php

session_start();
	$base_url = "http://s929107n.beget.tech";
    if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} } //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
    if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
    //заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную
	if (isset($_POST['mail'])) { $mail=$_POST['mail']; if ($mail =='') { unset($mail);} }
 if (empty($login) or empty($password) or empty($mail)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
    {
		$_SESSION['error'] = "Вы ввели не всю информацию, заполните все поля!";
		header('Location: reg.php');
		exit;
    }
    //если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $login = stripslashes($login);
    $login = htmlspecialchars($login);
	$password = stripslashes($password);
    $password = htmlspecialchars($password);
 //удаляем лишние пробелы
    $login = trim($login);
    $password = trim($password);
 // подключаемся к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 
 // проверка на существование пользователя с таким же логином

    $result = mysql_query("SELECT id FROM users WHERE login='$login'",$db);
	$myrow = mysql_fetch_array($result);
	
    if (!empty($myrow['id'])) {
    
	$_SESSION['error'] = "Извините, введённый вами логин уже зарегистрирован. Введите другой логин.";
	header('Location: reg.php');
		exit;
    }
	
    $result = mysql_query("SELECT id FROM users WHERE email='$mail'",$db);
	$myrow = mysql_fetch_array($result);
	
    if (!empty($myrow['id'])) {
		$_SESSION['error'] = "Извините, аккаунт с адресом '$mail' уже зарегистрирован. Введите другой email.";
		header('Location: reg.php');
		exit;
    }
	
						$subject = "Подтверждение";
						$from = "Invest-Ferma";
						$activation = "123456789";
						$message = "Пожалуйста, подтвердите адрес вашей электронной почты: <br/>".$activation." <br/> ";
						include("functions/mail.php");
						
						sendMail($mail, $subject, $message, $from);
						
						$_SESSION['logincode'] = $login;
						$_SESSION['passwordcode'] = $password;
						$_SESSION['mailcode'] = $mail;
						$_SESSION['activation'] = $activation;
						header('Location: codemail.php');
						
						exit;
    ?>
