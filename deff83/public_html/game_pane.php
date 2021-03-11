<?php
   session_start();
 ?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/game.css" />

	
</head>
<body>

	<div class="pole" id = "pole" onselectstart="return false" onmousedown="return false">
		<div class="poler"><!-- platform anim -->
			<div class="ground">
				<div class="left_ground side"></div>
				<div class="right_ground side"></div>
				<div class="top_ground side"></div>
			</div>
			<div id="HomeObj">
				
			</div>
		</div>
	<div id = "infotext" class="infotext">test</div>
	<input type='hidden' name='login' id='name_login' value='<?php 
		$login = $_SESSION['login'];
		
		echo $login;
	?>'>
		<div class="panel">
			<div class="chat">
				<p class="chat-messager">Evgen:</p>
				<p class="chat-message">если что,я ещё не доделал не ругайтесь плз</p>
			</div>
			<div class="chat-form">
				<textarea></textarea>
				<button><button>
			</div>
		</div>
	</div>
	<script src = "js/ajax.js"></script>
	<script src = "js/game.js"></script>


<body>
<html>
