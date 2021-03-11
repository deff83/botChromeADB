function ajaxPOST(url, params, callback){
	var request = new XMLHttpRequest();
	
	request.addEventListener('readystatechange', function() {
		// если состояния запроса 4 и статус запроса 200 (OK)
		if ((request.readyState==4) && (request.status==200)) {
			callback(request.responseText);
		}
	});
	
	request.open('POST',url,true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	request.send(params);
}

function ajaxGET(url, callback){
	var request = new XMLHttpRequest();
	
	request.addEventListener('readystatechange', function() {
		// если состояния запроса 4 и статус запроса 200 (OK)
		if ((request.readyState==4) && (request.status==200)) {
			callback(request.responseText);
		}
	});
	
	request.open('GET',url,true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	request.send();
}



