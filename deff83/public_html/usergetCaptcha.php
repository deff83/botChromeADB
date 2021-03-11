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
			
			$db = mysql_connect ("localhost","s929107n_deff83","18819805sS", "captcha");
			mysql_select_db("s929107n_deff83",$db);
			
			
			
			$result = mysql_query("SELECT * FROM captcha",$db);
			
			$count_captchas = 0;
			
			while($myrow=mysql_fetch_array($result))
			{
				if (empty($myrow['solve'])) {
					$count_captchas = $count_captchas + 1;
					
					echo('<div class="text">');
					
					echo($myrow['id']);
					
					echo('<br>');
					
					echo($myrow['urladress']);
					
					echo('<br>');
					
					echo($myrow['name']);
					
					echo('<br>');
					
					/*<iframe src="banner.html" width="468" height="60" align="left">Ваш браузер не поддерживает плавающие фреймы!</iframe>*/
					
					
					if ($myrow['type']==2){//3*3
					
					echo('<div style="width: 324px; height: 324px;">');
					
					for ($i = 0; $i <= 2; $i++) {
						for ($j = 0; $j <= 2; $j++) {
							
							echo('<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'.$myrow['id'].'`).value+=`$'.($i*3+$j).'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'.$myrow['id'].'`).value = document.getElementById(`s'.$myrow['id'].'`).value.replace(`$'.($i*3+$j).'$`,``); }; return false;"><div style="margin-top: -'.($i*100).'px; margin-left: -'.($j*100).'px;"><img src="');			
							echo($myrow['images']);
							echo('"></div></div>');
						}
					}
					
					echo('</div>');
					}
					
					
					if ($myrow['type']==1){//4*4
					
					
					echo('<div style="width: 432px; height: 432px;">');
					
					for ($i = 0; $i <= 3; $i++) {
						for ($j = 0; $j <= 3; $j++) {
							
							echo('<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'.$myrow['id'].'`).value+=`$'.($i*4+$j).'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'.$myrow['id'].'`).value = document.getElementById(`s'.$myrow['id'].'`).value.replace(`$'.($i*4+$j).'$`,``); }; return false;"><div style="margin-top: -'.($i*100).'px; margin-left: -'.($j*100).'px;"><img src="');						
							echo($myrow['images']);
							echo('" style="width: 400px; height: 400px;"></div></div>');
						}
					}
					
					echo('</div>');
					
					}
					
					if ($myrow['type']==3){
						
						//echo($myrow['images']);
						echo('<div style="width: 432px; height: 432px;">');
						$imagety = explode('$$', $myrow['images']);
						
						//echo('<br>');
						if (count($imagety)>0){
							echo('<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'.$myrow['id'].'`).value+=`$'.$imagety[1].'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'.$myrow['id'].'`).value = document.getElementById(`s'.$myrow['id'].'`).value.replace(`$'.$imagety[1].'$`,``); }; return false;"><img src="');
							echo($imagety[0]);
							echo('"></div>');
						}
						
						if (count($imagety)>2){
						
							echo('<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'.$myrow['id'].'`).value+=`$'.$imagety[3].'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'.$myrow['id'].'`).value = document.getElementById(`s'.$myrow['id'].'`).value.replace(`$'.$imagety[3].'$`,``); }; return false;"><img src="');
							echo($imagety[2]);
							echo('"></div>');
						}
						
						if (count($imagety)>4){
							echo('<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'.$myrow['id'].'`).value+=`$'.$imagety[5].'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'.$myrow['id'].'`).value = document.getElementById(`s'.$myrow['id'].'`).value.replace(`$'.$imagety[5].'$`,``); }; return false;"><img src="');
							echo($imagety[4]);
							echo('"></div>');
						}
						
						
						echo('</div>');
						
						
					}
					
					
					echo('<br>');
					
					
					
					echo($myrow['type']);
					
					echo('<br>');
					
					
					
					echo($myrow['solve']);
					
					echo('<br>');
					
					
					/*<form action="hCaptchaBack.php" method="post">

		<div class="h-captcha" data-sitekey="48d2f945-b816-4d36-ace7-c1d3235941f4"></div>
		<input type="submit" name="submit" value="Войти">

		<!--**** Кнопочка (type="submit") отправляет данные на страничку testreg.php ***** --> 
	</form>*/
					echo('<form action="api/setCaptcha.php" method="get"><input name="idsolved" type="hidden" value="'.$myrow['id'].'"><input name="solve" id="s'.$myrow['id'].'" type="text" value="#"><input name="type" type="hidden" value="'.$myrow['type'].'">');
					echo('<input type="submit" name="submit" value="Далее"></form>');
					
					echo('<form action="api/setCaptcha.php" method="get"><input name="delete" type="hidden" value="'.$myrow['id'].'">');
					echo('<input type="submit" name="submit" value="Удалить"></form>');
					
					echo('</div>');
				}
			}
			
			if ($count_captchas == 0){
				
				//header('Location: http://s929107n.beget.tech/usergetCaptcha.php');
				//exit;
			}
			
			
			
			
			
			
			
			
		?>
		
		
		
		
		
		
		
		
		
			 
			
			
			
			
			
			
			
			
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







