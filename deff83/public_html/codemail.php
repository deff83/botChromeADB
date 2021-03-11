<!DOCTYPE html>
<?php
   session_start();
?>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Deff83 - сайт</title>
  <!-- b0a8e2d8ccb04b24683d347076e80d29e451a385:d3aa2e6571e673001cb012eda23bd97d02234f0b -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="css/general.css" />
  <style>
  
	

  </style>
</head>
<body>
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
	 <ul id="menu">
		<li><a href="index.php"><span>Главная</span></a></li>
		<li><a href="#"><span>lua-коды</span></a></li>
		<li><a href="#"><span>java-программы</span></a></li>
		<li><a href="crypto.php"><span>Кошельки</span></a></li>
		
	</ul>
		
</div>
  <div class="top">
    <header>
      
    </header>
    <main>
      
      <div class="alert">
        
		
		<div class="center">
			<div class="text">
			  <h1>Код подтверждения</h1>
			  Введите код присланный на ваш e-mail<br/>
			  <?php
					// Проверяем, пусты ли переменные логина и id пользователя
					if (!empty($_SESSION['error']))
					{
						echo "<div class='error'>".$_SESSION['error']."</div>";
						$_SESSION['error'] = '';
					}
				?>
					<form action="save_user.php" method="post">
					<!--**** save_user.php - это адрес обработчика.  То есть, после нажатия на кнопку "Зарегистрироваться", данные из полей  отправятся на страничку save_user.php методом "post" ***** -->
				<p>
					<input name="code" type="text" size="15" maxlength="15">
					</p>
				
				<p>
					<input type="submit" name="submit" value="Вход">
				<!--**** Кнопочка (type="submit") отправляет данные на страничку save_user.php ***** --> 
				</p></form>
			  
			</div>
		</div>
			
		
		
	  </div>
      <div class="hint" id="cache-hint">
		<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://ru.cryptonator.com/merchant-button?merchant_id=06b9c870dc0f77f19a2f1cde3283e53c&text=3&size=2&color=2&icon=2&name=Перевод bitcoin&description=&order_id=&amount=0.001&currency=bitcoin&success=&failed=" height="46" width="100%"></iframe>
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
</body>
</html>

    
