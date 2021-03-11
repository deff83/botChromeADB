<?php
	
	$db = mysql_connect ("localhost","s929107n_deff83","18819805sS", "captcha");
    mysql_select_db("s929107n_deff83",$db);
	
	
	if (isset($_GET['idsity'])) { $idsity = $_GET['idsity']; if ($idsity == '') { unset($idsity); }}
	
	if (empty($idsity)){
		echo('pusto');
		exit;
	}
	
	if ($idsity=='nothave'){
		echo('nothave');
		exit;
	}
	
	if ($idsity=='1'){
		echo('new');
		exit;
	}
	
	
	$result = mysql_query("SELECT * FROM captcha WHERE id = '$idsity';",$db);
	$myrow=mysql_fetch_array($result);
	
	
	if($myrow['solve']!=null && $myrow['solve']!=''){
		$urladressd = $myrow['urladress'];
		
		$result2 = mysql_query ("UPDATE captcha SET type = '-1', images = 'null', name = 'null', solve = ''  WHERE idsity = '$idsity'; ");
		
		//$result2 = mysql_query ("INSERT INTO captcha (id, images,type, name, solve, urladress) VALUES('0', 'null','0','null','$27','$urladressd')");
		//mysql_query ("DELETE FROM captcha WHERE id = '$idsity'; ");
	}

	echo($myrow['solve']."@".$myrow['images']);
	
	
	
	
	
	
	
?>