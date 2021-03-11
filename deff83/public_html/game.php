<?php
   session_start();
   if (empty($_SESSION["login"])){
		header("Location: index.php");
		exit('1');
	}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Deff83 - сайт</title>
  <!-- b0a8e2d8ccb04b24683d347076e80d29e451a385:d3aa2e6571e673001cb012eda23bd97d02234f0b -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="css/general.css" />
  <style>
	.game{
		width:950px;
		height:800px;
		
	}
	.text2{
		background-color: #ffffff;
		border: 5px ridge #eeeef0;
		width:950px;
		
	}
	
	
	

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
      
      <div class="alert2">
        
		
		
			<div class="text2">
			  <h1>Игра</h1>
			  текст<br/>
			  <?php
					// Проверяем, пусты ли переменные логина и id пользователя
					if (!empty($_SESSION['error']))
					{
						echo "<div class='error'>".$_SESSION['error']."</div>";
						$_SESSION['error'] = '';
					}
				?>
					
			  <div class="game">
			<?php
				include('game_pane.php');
			?>
		</div>
			</div>
			
		
			
		
		
	  </div>
	  
    </main>
  
 </div>
 
  
  
</div>

<div class="clear">
</div>
<div class="advertising">
	
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

    
