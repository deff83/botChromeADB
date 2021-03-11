<?php
	
	$db = mysql_connect ("127.0.0.1","s929107n_deff83","18819805sS", "captcha");
    mysql_select_db("s929107n_deff83",$db);
	
	if (isset($_GET['active'])) { $active = $_GET['active']; if ($active == '') { unset($active); }}
	
	
	if(!empty($active)){
		
		$result = mysql_query("SELECT * FROM captcha WHERE urladress='$active'",$db);
			if($result){
			$massiv = array();
			
			while($myrow=mysql_fetch_array($result))
			{
				if($myrow['active']==1){
					$massiv[] = $myrow;
				}
				
			}
			
			if (count($massiv)>0){
				echo('click');
			}else{
				echo('false');
			}
			}else
				{
					echo('false');
				}
		
		exit;
	}
	
	
	
	$result = mysql_query("SELECT * FROM captcha",$db);
	if($result){
	$massiv = array();
	
	while($myrow=mysql_fetch_array($result))
	{
		$massiv[] = $myrow;
		
	}
	
	
	echo(json_encode($massiv));
	}else
		{
			print mysql_error();
		}
	
	
	
	
	
	
?>