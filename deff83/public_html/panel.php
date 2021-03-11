<?php
	session_start();
	include ("bd.php");
	$id = $_SESSION['id'];
	$result = mysql_query("SELECT * FROM users WHERE id='$id'",$db); //извлекаем из базы все данные о пользователе с введенным id
	$myrow = mysql_fetch_array($result);
	echo "Вы вошли на сайт, как ".$myrow['login']."<br>
	Монет: ".$myrow['balance']." (<a href='buy.php'>пополнить</a>)<br><a href='game.php'>game</a><br>
	<a href='exit.php'>выход</a>";
?>
