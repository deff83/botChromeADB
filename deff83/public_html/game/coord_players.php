<?php
	session_start();
	if (isset($_POST['name'])) { $name = $_POST['name']; if ($name == '') { unset($name);} }
	if (isset($_POST['pl_x'])) { $pl_x = $_POST['pl_x']; if ($pl_x == '') { unset($pl_x);} }
	if (isset($_POST['pl_y'])) { $pl_y = $_POST['pl_y']; if ($pl_y == '') { unset($pl_y);} }
	$login = $_SESSION['login'];
	$coor = array();
	$code_message = '';
	$code = 0;
	
	
	
	if (empty($name) or empty($pl_x) or empty($pl_y) or empty($login)){
		$code = 1; 
		$code_message = 'params not found';
		if(empty($login)){$code = 2; $code_message = 'login not found in session';};
	} else {
		$code = 0;
		$code_message = 'SUCCESS';
		
		$db = mysql_connect ("localhost","s929107n_deff83","18819801s", "coord");
		mysql_select_db("s929107n_deff83",$db);
		
		$result_into = mysql_query ("INSERT INTO coord (name, coordX, coordY) VALUES('$login','$pl_x','$pl_y')");
		$result_update = mysql_query ("UPDATE coord SET coordX = '$pl_x', coordY = '$pl_y' WHERE name = '$login'");
		
		$result = mysql_query("SELECT * FROM coord",$db); 
		
		 if ($result){
			 /*$count = mysql_result($result);
			 $coor[] = array(
					'name' => 'text'.mysql_error(),
					'coor_x' => $count,
					'coor_y' => '100'
				);*/
			 /////////////цикл//////////////
			while ( $row = mysql_fetch_array($result) )
			{
				$namepl = $row['name'];
				$coordXpl = $row['coordX'];
				$coordYpl = $row['coordY'];
				$coor[] = array(
					'name' => $namepl,
					'coor_x' => $coordXpl,
					'coor_y' => $coordYpl
				);
				//$coor[0] = $namepl;
				
			};
			
			////////////////////////////////
			
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