<?php
	session_start();
	if (isset($_POST['type'])) { $type = $_POST['type']; if ($type == '') { unset($type);} }
	
	$login = $_SESSION['login'];
	$code = 0;
	$home = "";
	$stylehome = "";
	
	
	if (empty($type) ){
		echo "";
		exit;
	}else{
		switch($type){
			case 1://BRICK Home
				include '../object/Home/newHome.php';
				$stylehome = "<link rel='stylesheet' type='text/css' href='../object/Home/css/newHomeBrick.css'>";
				$home = $htmlcodeSimple;
			break;//TREE Home
			case 2:
				include '../object/Home/newHome.php';
				$stylehome = "<link rel='stylesheet' type='text/css' href='../object/Home/css/newHomeTree.css'>";
				$home = $htmlcodeSimple;
			break;
		}
	}
	echo $home;
	echo $stylehome;
?>