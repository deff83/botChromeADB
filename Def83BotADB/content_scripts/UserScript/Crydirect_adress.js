//скрипт подключаемый
try{
	//setURL('https://litecoinfree.info/login')
	//setTimeout(function() {	
	
	
	var title_name = document.getElementsByClassName('entry-title')[0]
	if(title_name!=null){
		var crypto_name = title_name.textContent.split(' ')[2];
		if(crypto_name=='BTC'){
			writeField("Name", "address", 0, "16oe4cdMcvNTXscpJmaycnMeH6FUJhDjf7");
		}
		if(crypto_name=='ETH'){
			writeField("Name", "address", 0, "0x40750F5b2ab226712eAAA2b0Ee0cD2a231796Cb5");
		}
		if(crypto_name=='DOGE'){
			writeField("Name", "address", 0, "DHnKPzCjrAo984GDXK39mLBBpaJaandafw");
		}
		if(crypto_name=='DASH'){
			writeField("Name", "address", 0, "XeXHwJx5q4zAXRd9nLNVyX56qUGKKoWSDZ");
		}
		if(crypto_name=='LTC'){
			writeField("Name", "address", 0, "MM8QFapG4rtHG5t8qBCCLTakKNDuU5uQui");
		}
		/*if(crypto_name=='BCH'){
			writeField("Name", "address", 0, "qptpdv4due0zht9e3wvs23rq6wxtnq3e5gwyl9ayel");
		}*/
	}
	
	hideDiv("ClassName", "site-header", -1);
	hideDiv("ClassName", "code-block code-block-1", -1);
	
	
	for (var i = 0; i < 7+7; i++) { 
	hideDiv("TagName", "center", i);
	}
	
	for (var i = 7+7+2; i < 7+7+6; i++) { 
	hideDiv("TagName", "center", i);
	}
	window.scroll(0,100);
	
	//writeField("Name", "address", 0, "MM8QFapG4rtHG5t8qBCCLTakKNDuU5uQui");
	
	
	//window.scroll(0,2300);
	//writeField("ClassName", "pass-input", 0, "0704galaxArt")
	//clickButton("ClassName", "button", 1);
	//}, 2000);
	
	/*
	hideDiv("ClassName", "grid_2", -1);
	hideDiv("ClassName", "m", -1);
	
	
	hideDiv("TagName", "center", 0);
	//hideDiv("TagName", "center", 1);
	//hideDiv("TagName", "center", 3);
	hideDiv("TagName", "h2", -1);
	hideDiv("TagName", "h1", -1);
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "header", 0);
	
	/*hideDiv("ClassName", "notdisplaytablet", -1);
	hideDiv("ClassName", "btn btn-success", -1);
	hideDiv("ClassName", "col-md-8", -1);
	hideDiv("ClassName", "btn btn-success btnbasic", -1);
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "h1", -1);
	hideDiv("TagName", "ins", -1);
	hideDiv("TagName", "footer", -1); setTimeout(function() {	location.reload()}, 1000);
	hideDiv("TagName", "span", -1);
	hideDiv("TagName", "nav", -1);
	hideDiv("Id", "skrit", -1);*/

	//drawDIVUser('1', "location.reload();");
	

	
}catch(Exc){alert(Exc);};





