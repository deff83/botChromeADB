<?php
	session_start();
	if (isset($_POST['name'])) { $name = $_POST['name']; if ($name == '') { unset($name);} }
	
	$login = $_SESSION['login'];
	$coor = array();
	$code_message = '';
	$code = 0;
	
	
	
	if (empty($name) && ($name == $login)){
		$code = 1; 
		$code_message = 'params not found';
		if(empty($login)){$code = 2; $code_message = 'login not found in session';};
	} else {
		$code = 0;
		$code_message = 'SUCCESS';
		
		$db = mysql_connect ("localhost","s929107n_deff83","18819801s", "coord");
		mysql_select_db("s929107n_deff83",$db);
		
		$result_into = mysql_query ("INSERT INTO coord (name, coordX, coordY) VALUES('$login',450,200)");
		
		$result = mysql_query("SELECT * FROM coord WHERE name='$login'",$db); 
		
		 if ($result){
			$myrow = mysql_fetch_array($result);
			$namepl = $myrow['name'];
			$coordXpl = $myrow['coordX'];
			$coordYpl = $myrow['coordY'];
			$coor = array(
				'name' => $namepl,
				'coor_x' => $coordXpl,
				'coor_y' => $coordYpl
			);
			
			
		 }else{
			$code = 3;
			$code_message = 'SQL Error';
		 }
		mysqli_close($db);
		
		
		
	}
	$answer = array(
		'code' => $code,
		'code_message' => $code_message,
		'name' => $login,
		'coord' => $coor
	);
	echo json_encode($answer);
?>