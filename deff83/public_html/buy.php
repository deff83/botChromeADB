<!DOCTYPE html>
<?php
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
  <style>


.alert {

	border-bottom-color: #70a123;

display:relative;

}




.text{
	margin:10px;
	background: #ffffff;
	padding: 10px;
	border-style: ridge;
	border-width: 5px;
	border-color: #eeeef0;
	opacity:0;
	transition: 1s; /*Скорость*/
	animation: show 3s 1; /* Указываем название анимации, её время и количество повторов*/
	animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
/* animation-delay: 1s;  Задержка перед началом */
}
@keyframes show{
	0%{
		opacity:0;
	}
	100% {
		opacity:1;
	}
}

.stat_game{	/*правая игровая панель*/
	color: #555522;
	background: #ffffff;
	display: block;
	border-style: ridge;
	border-width: 5px;
	border-color: #eeeef0;
	padding: 10px;
}



	
	.textbuy{
		position:relative;
		margin:10px;
		width:200px;
		float:left;
	background: #ffffff;
	padding: 10px;
	border-style: ridge;
	border-width: 5px;
	border-color: #eeeef0;
	opacity:0;
	transition: 1s; /*Скорость*/
	animation: show 3s 1; /* Указываем название анимации, её время и количество повторов*/
	animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
/* animation-delay: 1s;  Задержка перед началом */
	}



.butbuy{
	width:100%;
	height:35px;
	background: #3f3fff;
	-moz-border-radius:  7px; /* Firefox */
	-webkit-border-radius:  7px; /* Safari 4 */
	border-radius:  7px; /* IE 9, Safari 5, Chrome */
	color: #ffffff;
	
	font:  bold 20px/30px Arial, serif;
}
.butbuy:hover{
	background: #7f7fff;
}
.inputbuy{
	width:100%;
	height:20px;
	font:  bold 14px Arial, serif;
	-moz-border-radius: 5px; /* Firefox */
	-webkit-border-radius:  5px; /* Safari 4 */
	border-radius:  5px; /* IE 9, Safari 5, Chrome */
}
.textchange{
	font:  bold 12px Arial, serif;
	color: #0000ff;
	padding-top: 5px;
}
.payimg{
	width:100%;
}
.texthelpbuy{
	font:  bold 12px Arial, serif;
	color: #000000;
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
      <div class="text">
			  <h1>Пополнение</h1>
			  <?php
					// Проверяем, пусты ли переменные логина и id пользователя
					if (!empty($_SESSION['error']))
					{
						echo "<div class='error'>".$_SESSION['error']."</div>";
						$_SESSION['error'] = '';
					}
				?>
			  Криптокошельки для переводов.<br/>
			  
			  
			</div>
      <div class="alert">
        
		

			

			<div class="textbuy">
				
				<img src="img/bitcoinpay.png" class="payimg">
					
				<form action="genbutton/butbitcoin.php" method="post">
					<div class="texthelpbuy">Сумма пополнения в биткоинах</div>
					<input  class="inputbuy" name="pricebuy"  type="text" placeholder="0.001" min="0.0001" maxlength="10" step="0.0001" required pattern="[0-9]+([.][0-9]+)?"><br>
					
					<div class="textchange">0.0001 BTC - 10 000 монет</div>
					<input type="submit"  value="Пополнить" class="butbuy">
				</form>
			</div>
			<div class="textbuy">
				
				<img src="img/yandexpay.png" class="payimg">
					
				<?php
					include('genbutton/butyandex.php');
				?>
				
			</div>
			<div class="textbuy">
				
				<img src="img/payeerpay.png" class="payimg">
					
				<?php
					//include('genbutton/butpayeer.php');
				?>
			</div>
			<div class="textbuy">
				
				<img src="img/bitcoinpay.png" class="payimg">
					
				<form action="genbutton/butbitcoin.php" method="post">
					<div class="texthelpbuy">Сумма пополнения в биткоинах</div>
					<input  class="inputbuy" name="pricebuy"  type="text" placeholder="0.001" min="0.0001" maxlength="10" step="0.0001" required pattern="[0-9]+([.][0-9]+)?"><br>
					
					<div class="textchange">0.0001 BTC - 10 000 монет</div>
					<input type="submit"  value="Пополнить" class="butbuy">
				</form>
			</div>
			<div class="textbuy">
				
				<img src="img/bitcoinpay.png" class="payimg">
					
				<form action="genbutton/butbitcoin.php" method="post">
					<div class="texthelpbuy">Сумма пополнения в биткоинах</div>
					<input  class="inputbuy" name="pricebuy"  type="text" placeholder="0.001" min="0.0001" maxlength="10" step="0.0001" required pattern="[0-9]+([.][0-9]+)?"><br>
					
					<div class="textchange">0.0001 BTC - 10 000 монет</div>
					<input type="submit"  value="Пополнить" class="butbuy">
				</form>
			</div>
			<div class="textbuy">
				
				<img src="img/bitcoinpay.png" class="payimg">
					
				<form action="genbutton/butbitcoin.php" method="post">
					<div class="texthelpbuy">Сумма пополнения в биткоинах</div>
					<input  class="inputbuy" name="pricebuy"  type="text" placeholder="0.001" min="0.0001" maxlength="10" step="0.0001" required pattern="[0-9]+([.][0-9]+)?"><br>
					
					<div class="textchange">0.0001 BTC - 10 000 монет</div>
					<input type="submit"  value="Пополнить" class="butbuy">
				</form>
			</div>
			<div class="textbuy">
				
				<img src="img/bitcoinpay.png" class="payimg">
					
				<form action="genbutton/butbitcoin.php" method="post">
					<div class="texthelpbuy">Сумма пополнения в биткоинах</div>
					<input  class="inputbuy" name="pricebuy"  type="text" placeholder="0.001" min="0.0001" maxlength="10" step="0.0001" required pattern="[0-9]+([.][0-9]+)?"><br>
					
					<div class="textchange">0.0001 BTC - 10 000 монет</div>
					<input type="submit"  value="Пополнить" class="butbuy">
				</form>
			</div>
			<div class="textbuy">
				
				<img src="img/bitcoinpay.png" class="payimg">
					
				<form action="genbutton/butbitcoin.php" method="post">
					<div class="texthelpbuy">Сумма пополнения в биткоинах</div>
					<input  class="inputbuy" name="pricebuy"  type="text" placeholder="0.001" min="0.0001" maxlength="10" step="0.0001" required pattern="[0-9]+([.][0-9]+)?"><br>
					
					<div class="textchange">0.0001 BTC - 10 000 монет</div>
					<input type="submit"  value="Пополнить" class="butbuy">
				</form>
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