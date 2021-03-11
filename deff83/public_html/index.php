<!DOCTYPE html>
<?php
   include("ini/Config.php");
   session_start();
?>
<html>
<head>
  <meta charset="UTF-8">
  <title>Deff83 - сайт</title>
  <!-- b0a8e2d8ccb04b24683d347076e80d29e451a385:d3aa2e6571e673001cb012eda23bd97d02234f0b -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
  

	<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="css/general.css" />
	<link rel="stylesheet" type="text/css" href="css/animationPage.css" />
  <style>
  
  
	.img_logo{
		min-width:90px;
		width: 15%;
		margin: 5px;
	}
	.img_logos{
		padding-right: 10%;
		padding-left: 10%;
		text-align: center;
		
	}
	


  </style>
</head>
<body>

<a href="http://mellow.link/5Q0aK">тест</a>
<a href="usergetajaxCaptcha.php">captcha</a>

<div class="kolon">
	<img src="img/kolon1.png">
</div>
<div class="kolon2">
	<img src="img/kolon1.png">
</div>
        
		
<div class="vert">
<div class="mainobl">
<div class="left">
	<div class="octo">
        <img src="img/logopr.png">
      </div>
	  <div class="stat_game">
		<?php
			// Проверяем, пусты ли переменные логина и id пользователя
			if (empty($_SESSION['login']) or empty($_SESSION['id']))
			{
				
			// Если пусты, то мы не выводим ссылку
			echo "Invest-Ferma<br>";
			// Проверяем, пусты ли переменные логина и id пользователя
					if (!empty($_SESSION['errorcod']))
					{
						switch ($_SESSION['errorcod']) {
							case 1:
								echo "<div class='error'>Такого аккаунта нет!</div>";
							break;
							case 2:
								echo "<div class='error'>Неверный пароль!</div>";
							break;
							case 3:
								echo "<div class='error'>Вы ввели не всю информацию, заполните все поля!</div>";
							break;
							case 4:
								echo "<div class='error'>Пополнено!</div>";
							break;
							
						}
						$_SESSION['errorcod'] = '';
					}
					
				
			include('login.php');
			echo "<a href='reg.php'>Зарегистрироваться</a> ";
			}
			else
			{
			echo "Invest-Ferma<br>";
			if (!empty($_SESSION['errorcod']))
					{
						switch ($_SESSION['errorcod']) {
							case 4:
								echo "<div class='errornot'>Пополнено!</div>";
							break;
							
						}
						$_SESSION['errorcod'] = '';
					}
			// Если не пусты, то мы выводим ссылку
			
			include('panel.php');
			}
		?>	  
	</div>
	 <ul id="menu">
		<li><a href="#"><span>lua-коды</span></a></li>
		<li><a href="#"><span>java-программы</span></a></li>
		<li><a href="crypto.php"><span>Кошельки</span></a></li>
		<li><a href="math.php"><span>Математика</span></a></li>
                <?php
                if(in_array($_SESSION["login"], $Config_admins)) {
                    echo "<li><a href='/admin.php'><span>Панель администратора</span></a></li>";
                }
                ?>
	</ul>
		
</div>
  <div class="top">
    <header>
      
    </header>
    <main>
      
     <div class="alert">
		<div class="center">
			<div class="text">
			  <h1>Сайт программ Deff83</h1>
			  Благодарим Вас за то, что Вы выбрали наши услуги!<br/>
			  Если у Вас возникли вопросы, мы с удовольствием ответим на них. </br>
			  <div><a href="mailto:artemslanc2018@gmail.com">artemslanc2018@gmail.com</a></div>
			</div>
		</div>
	</div>
	<br>
	<div class="img_logos">
	<img class="img_logo text" src="img/logo/oracle_java.jpg"><img class="img_logo text" src="img/logo/java_Android.jpg"><img class="img_logo text" src="img/logo/php.png"><img class="img_logo text" src="img/logo/python.jpg"><img class="img_logo text" src="img/logo/html.png"><img class="img_logo text" src="img/logo/csh.png"><img class="img_logo text" src="img/logo/bash.png">
	
	</div>
	<br>
      
      <div class="hint" id="cache-hint">
		<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://ru.cryptonator.com/merchant-button?merchant_id=06b9c870dc0f77f19a2f1cde3283e53c&text=3&size=2&color=2&icon=2&name=bitcoin&description=&order_id=&amount=0.001&currency=bitcoin&success=&failed=" height="46" width="100%"></iframe>
	  </div>
    </main>
  
 </div>
 
  
  
</div>

<div class="clear">
</div>
<div class="advertising">
	<?php
		include('advertising.php');
	?>
</div>
 <hr>
<div class="bottom">
	<?php
		include('bottom.php');
	?>
  </div>
  </div>
  <script type="text/javascript" src="https://adbit.biz/js/show_ads.js"></script>

<!--отобопжение анимации поверх страницы-->
<div class="animclass">
    <?php
		include('animalpage.php');
	?>
</div>


</body>
</html>
