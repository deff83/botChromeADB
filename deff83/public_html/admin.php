<?php
    session_start();
    include("ini/Config.php");
	include ($_SERVER['DOCUMENT_ROOT']."/Bitaps/sha256.php");
	include ($_SERVER['DOCUMENT_ROOT']."/ini/Config.php");
    if(in_array($_SESSION["login"], $Config_admins)) {
		} else {
    header("Location: index.php");
    exit;
}
?>
<html>
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
		
			 <?php
					include('hcaptcha.php');
				?>
		
			<div class="text">
			  
			  <?php
					include('Bitaps/getState.php');
				?>
				
			</div>
			<div class="text">
			  
			  <?php
					include('Bitaps/getListAddres.php');
				?>
				
			</div>
			<div class="text">
			  
			  <?php
					include('Bitaps/withraw.php');
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
</html>

