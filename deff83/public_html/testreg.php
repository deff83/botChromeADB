<?php
    session_start();//  вс€ процедура работает на сесси€х. »менно в ней хран€тс€ данные  пользовател€, пока он находитс€ на сайте. ќчень важно запустить их в  самом начале странички!!!
if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} } //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
    if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
    //заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную
if (empty($login) or empty($password)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
    {
    
	$_SESSION['errorcod'] = 3; //"¬ы ввели не всю информацию, заполните все пол€!";
	
    header('Location: index.php');
	exit;
    }
    //если логин и пароль введены,то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $login = stripslashes($login);
    $login = htmlspecialchars($login);
$password = stripslashes($password);
    $password = htmlspecialchars($password);
//удал€ем лишние пробелы
    $login = trim($login);
    $password = trim($password);
// подключаемс€ к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 
 
$result = mysql_query("SELECT * FROM users WHERE login='$login'",$db); //извлекаем из базы все данные о пользователе с введенным логином
    $myrow = mysql_fetch_array($result);
    if (empty($myrow['password']))
    {
    //если пользовател€ с введенным логином не существует
	
    $_SESSION['errorcod'] = 1; //"»звините, введЄнный вами login или пароль неверный."
	
    header('Location: index.php');
	exit;
    }
    else {
    //если существует, то свер€ем пароли
    if ($myrow['password']==md5(sha1($password))) {
    //если пароли совпадают, то запускаем пользователю сессию! ћожете его поздравить, он вошел!
    $_SESSION['login']=$myrow['login']; 
    $_SESSION['id']=$myrow['id'];//эти данные очень часто используютс€, вот их и будет "носить с собой" вошедший пользователь
    header('Location: index.php');
    }
 else {
    //если пароли не сошлись
	
	$_SESSION['errorcod'] = 2; //"Ќеверна€ пара логин - пароль!"
    header('Location: index.php');
	exit;
    }
	
    }
    ?>
