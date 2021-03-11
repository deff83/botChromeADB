<?php
function postRequest($url, $data, $header = []){
		
		$curlObj = curl_init();
		$ssl = stripos($url,'https://') === 0 ? true : false;
		$options = [
			CURLOPT_URL => $url,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_POST => 1,
			CURLOPT_POSTFIELDS => $data,
			CURLOPT_FOLLOWLOCATION => 1,
			CURLOPT_AUTOREFERER => 1,
			CURLOPT_USERAGENT => 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)',
			CURLOPT_TIMEOUT => 10,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_0,
			CURLOPT_HTTPHEADER => ['Expect:'],
			CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4
			
		];
		if (!empty($header)) {
			$options[CURLOPT_HTTPHEADER] = $header;
		}
		
		if ($ssl) {
			//support https
			$options[CURLOPT_SSL_VERIFYHOST] = false;
			$options[CURLOPT_SSL_VERIFYPEER] = false;
		}
		curl_setopt_array($curlObj, $options);
		$returnData = curl_exec($curlObj);
		if (curl_errno($curlObj)) {
			//error message
			$returnData = curl_error($curlObj);
		}
		curl_close($curlObj);

		return $returnData;
	}
?>