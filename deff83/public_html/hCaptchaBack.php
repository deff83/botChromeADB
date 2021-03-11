<?php

	session_start();
	 
	$data = array(
				'secret' => "0x369610c8db2A813a6aF5625Bbaaf5fd23E7074AB",
				'response' => $_POST['h-captcha-response']
			);
	$verify = curl_init();
	curl_setopt($verify, CURLOPT_URL, "https://hcaptcha.com/siteverify");
	curl_setopt($verify, CURLOPT_POST, true);
	curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
	curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($verify);
	// var_dump($response);
	$responseData = json_decode($response);
	if($responseData->success) {
		// your success code goes here
		//echo('success');
		$_SESSION['successHcaptha'] = 'success';
		header("Location: admin.php");
	} 
	else {
	   // return error to user; they did not pass
	   $_SESSION['errorHcaptha'] = 'error';
	   header("Location: admin.php");
	}
	exit;
?>

