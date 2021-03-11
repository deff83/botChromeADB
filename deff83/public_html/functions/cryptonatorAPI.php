<?php
require_once ($_SERVER['DOCUMENT_ROOT'].'/ini/Config.php');
	
	function getinvoice (){
		$merchant_id = Config::$cryptonator_merchant_id;
		include ($_SERVER['DOCUMENT_ROOT']."/functions/request.php");
		$url = 'https://api.cryptonator.com/api/merchant/v1/getinvoice';
		$data = array(
			'merchant_id' => $merchant_id, 
			'invoice_id' => $invoice_id,
			'secret_hash' => $secret_hash, 

		);
		
		$headers[] = 'Content-Type: text/xml';
		$request = postRequest($url, $data, $headers);
		
		return $request;
	}
	echo getinvoice();

?>