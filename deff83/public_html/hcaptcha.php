<?php

	session_start();
	 
?>


<script src='https://www.hCaptcha.com/1/api.js' async defer></script>


<?php
	if (!empty($_SESSION['successHcaptha'])){
		echo "<div class='errornot'>Success!</div>";
	}
	if (!empty($_SESSION['errorHcaptha'])){
		echo "<div class='error'>Error!</div>";
	}
	$_SESSION['successHcaptha'] = '';
	$_SESSION['errorHcaptha'] = '';
	
?>

    <form action="hCaptchaBack.php" method="post">

    <div class="h-captcha" data-sitekey="48d2f945-b816-4d36-ace7-c1d3235941f4"></div>
    <input type="submit" name="submit" value="Войти">

    <!--**** Кнопочка (type="submit") отправляет данные на страничку testreg.php ***** --> 
</form>