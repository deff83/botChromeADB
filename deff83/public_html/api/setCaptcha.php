<?php

	$db = mysql_connect ("localhost","s929107n_deff83","18819805sS", "captcha");
    mysql_select_db("s929107n_deff83",$db);

//http://s929107n.beget.tech/api/setCaptcha.php?images=test&id=0&type=3

	
	if (isset($_GET['idsolved'])) { $idsolved = $_GET['idsolved']; if ($idsolved == '') { unset($idsolved); }}
	if (isset($_GET['solve'])) { $solve = $_GET['solve']; if ($solve == '') { unset($solve); }}
	if (isset($_GET['delete'])) { $delete = $_GET['delete']; if ($delete == '') { unset($delete); }}
	if (isset($_GET['type'])) { $type = $_GET['type']; if ($type == '') { unset($type); }}
	
	if (isset($_GET['urladress'])) { $urladress = $_GET['urladress']; if ($urladress == '') { unset($urladress); }}
	
	if (isset($_GET['deleteurl'])) { $deleteurl = $_GET['deleteurl']; if ($deleteurl == '') { unset($deleteurl); }}
	if (isset($_GET['active'])) { $active = $_GET['active']; if ($active == '') { unset($active); }}
	
	if (isset($_GET['idurl'])) { $idurl = $_GET['idurl']; if ($idurl == '') { unset($idurl); }}
	if (isset($_GET['masstabid'])) { $masstabid = $_GET['masstabid']; if ($masstabid == '') { unset($masstabid); }}
	
	if (empty($masstabid)==false){
		
		
		$masstabid_array = explode("and", $masstabid);
		
		//echo(json_encode($masstabid_array));
		
		
		$result = mysql_query("SELECT * FROM captcha",$db);
		if($result){
		
		
		while($myrow=mysql_fetch_array($result))
		{
			$tabiddel = $myrow['tabid'];
			$tabiddelstr = "".$tabiddel;
			
			//echo($tabiddelstr);
			
			
			if (in_array($tabiddelstr, $masstabid_array)==false) {
				$result2 = mysql_query ("DELETE FROM captcha WHERE tabid = '$tabiddel';");
				
				echo('deleted'.$tabiddelstr);
			}
			
		}
		
		
		//echo(json_encode($massiv));
		}else
			{
				print mysql_error();
			}
		
		
		
		exit;
	}
	
	
	
	//if (isset($_GET['id'])) { $id = $_GET['id']; if ($id == '') { unset($id); }}
	
	if (empty($idurl)==false){
		
		if (empty($urladress)==false){
			$result2 = mysql_query ("UPDATE captcha SET urladress = '$urladress' WHERE tabid = '$idurl'; ");
			
			if($result2){
				
					$resulttfft = mysql_query("SELECT * FROM captcha WHERE tabid='$idurl';",$db);
					
					$myrowtfft_have=mysql_fetch_array($resulttfft);
					
					if ($resulttfft){
						
						echo($myrowtfft_have['id']);
						
						
					}else{
						echo('error2');
					}
				
				
				//echo('error');
				
				
				
				}else
					{
						echo('error');
						
					}
			
		}
		
		exit;
	}
	
	
	
	if (empty($active)==false){
		
		//echo($deleteurl);
		
		$result2 = mysql_query ("SELECT * FROM captcha WHERE active = '1';");
		//$myroww3 = mysql_fetch_array($result2);
		if($result2){
			while($myrow3r=mysql_fetch_array($result2))
			{
				$myroww3id = $myrow3r['id'];
				
				if($myrow3r['urladress'] != $active){
				
					$result2 = mysql_query ("UPDATE captcha SET active = '0' WHERE id = '$myroww3id'; ");
				}
			}
		}else
		{
			//print mysql_error();
		}
		
		
		$result22 = mysql_query ("UPDATE captcha SET active = '1' WHERE urladress = '$active'; ");
		
		
		/*
		
		
		$result22 = mysql_query ("SELECT * FROM captcha WHERE urladress = '$active';",$db);
		//$myroww3 = mysql_fetch_array($result2);
		echo mysql_error( $db );
		//echo(json_encode(mysql_fetch_array($result22)));
		//exit;
		
		if($result22){

			
			while($myrow32=mysql_fetch_array($result22))
			{
				//echo('');
				$myroww3id2 = $myrow32['id'];
				$result22 = mysql_query ("UPDATE captcha SET active = '1' WHERE id = '$myroww3id2'; ");
			}
		}else
		{
			//print mysql_error();
		}
		*/
		echo($result22);
		
		exit;
	}
	
	
	
	if (empty($deleteurl)==false){
		
		//echo($deleteurl);
		
		$result2 = mysql_query ("DELETE FROM captcha WHERE urladress = '$deleteurl';");
		echo($result2);
		exit;
	}
	
	
	
	if (empty($urladress)==false){
		$result2 = mysql_query ("UPDATE captcha SET urladress = '".$urladress."' WHERE id = '$idsolved'; ");
		header('Location: http://192.168.0.12/public_html/usergetCaptcha.php');
		exit;
	}
	
	if (empty($delete)==false){
		$result2 = mysql_query ("DELETE FROM `captcha` WHERE `captcha`.`id` = ".$delete.";");
		header('Location: http://192.168.0.12/public_html/usergetCaptcha.php');
		exit;
	}
	
	
	if (empty($idsolved)==false){
		
		if (empty($solve)){//если решение пустое
			$result2 = mysql_query ("UPDATE captcha SET solve = 'skip' WHERE id = '$idsolved'; ");
			header('Location: http://192.168.0.12/public_html/usergetCaptcha.php');
			exit;
		}
		//

		if ($type == 3 && $solve == '#'){
			$solve = '#$25$';
			//echo($solve);
		}
		if ($type == 1 && $solve == '#'){
			$solve = '#$25$';
			//echo($solve);
		}
		
		
		$result2 = mysql_query ("UPDATE captcha SET solve = '$solve' WHERE id = '$idsolved'; ");
		//header('Location: http://s929107n.beget.tech/usergetCaptcha.php');
		exit;
		
		
	}
	
	
	
	if (isset($_GET['images'])) { $images = $_GET['images']; if ($images == '') { unset($images); }}
	if (isset($_GET['id'])) { $id = $_GET['id']; if ($id == '') { unset($id); }}
	if (isset($_GET['type'])) { $type = $_GET['type']; if ($type == '') { unset($type); }}
	if (isset($_GET['name'])) { $name = $_GET['name']; if ($name == '') { unset($name); }}
	if (isset($_GET['tabid'])) { $tabid = $_GET['tabid']; if ($tabid == '') { unset($tabid); }}
	
	
	if (empty($images) or empty($id) or empty($type) or empty($name) or empty($tabid)){
		//0 - это тоже empty
		echo('error');
		exit;
	}
	
	
	$myrowtfft_have = null;
	
	//if (empty($tabid) == false){
		$resulttfft = mysql_query("SELECT * FROM captcha WHERE tabid='$tabid';",$db);
		
		$myrowtfft_have=mysql_fetch_array($resulttfft);
		
		if ($resulttfft){
			
		}else{
			$myrowtfft_have = null;
		}
	//}
	
	if ($myrowtfft_have==null){//если нет в базе id вкладки
		$id = 1;
	}
	
	
	
	
	
	if ($id == 1){
		//если новая капча
		
					
					
					
					//$result2 = mysql_query ("UPDATE captcha SET type = '$type', images = '$images', name = '$name', urladress = '$urladress', solve = ''  WHERE tabid = '$tabid'; ");
					
				
		
		if ($myrowtfft_have!=null){
			
			$idfft_have = $myrowtfft_have['id'];
			
			if ($myrowtfft_have['images'] != $images){//если картинка поменялась
				$result2 = mysql_query ("UPDATE captcha SET type = '$type', images = '$images', name = '$name', solve = ''  WHERE id = '$idfft_have'; ");
			}
			
			
			
			echo($idfft_have);
			
			exit;
		}
		
		
		
		
		
		
		
		$id = rand();
		//$id = time ();
		$result2 = mysql_query ("INSERT INTO captcha (id, images,type, name, solve, urladress, active, tabid) VALUES('$id', '$images','$type','$name','','$urladress', 3, '$tabid')");
		if($result2){
			echo($id);
		}else
		{
			print mysql_error();
		}
		
		
		
		
		exit;
		
	}
	
	//echo('tut');
	/*
	$resultt = mysql_query("SELECT * FROM captcha WHERE images='$images';",$db);//если картинка уже существовала
	$myroww = mysql_fetch_array($resultt);
		*/
	if ($myrowtfft_have['images'] != $images){//если картинка поменялась
		$result2 = mysql_query ("UPDATE captcha SET type = '$type', images = '$images', name = '$name', solve = ''  WHERE id = '$id'; ");
	}

	
	
	$result = mysql_query("SELECT * FROM captcha WHERE id='$id'",$db);
	$myrow = mysql_fetch_array($result);
	
	
	
	
	
	
	
	if (empty($myrow)){
		echo('nothave');

	}else{
		echo($id);
	}
	
	 
	
	









?>