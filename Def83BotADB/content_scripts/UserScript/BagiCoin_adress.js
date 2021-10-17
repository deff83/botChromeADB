//скрипт подключаемый
try{
	//setURL('https://litecoinfree.info/login')
	//setTimeout(function() {	
	//clickButton("Id", "submit", -1);
	
	var title_name = document.getElementsByClassName('navbar-brand')[0]
	if(title_name!=null){
		var crypto_name = title_name.textContent.split(' ')[2];
		if(crypto_name=='BITCOIN'){
			writeField("Name", "address", 0, "16oe4cdMcvNTXscpJmaycnMeH6FUJhDjf7");
		}
		if(crypto_name=='BNB'){
			writeField("Name", "address", 0, "0x9dd7c1c32A072e09Ab581790Ef5ab19ac5A53845");
		}
		if(crypto_name=='BITCOINCASH'){
			writeField("Name", "address", 0, "qzt4jhtcyp3jcfysre35qf4va9uh00ztegkefqnf6h");
		}
		if(crypto_name=='DASH'){
			writeField("Name", "address", 0, "XeXHwJx5q4zAXRd9nLNVyX56qUGKKoWSDZ");
		}
		if(crypto_name=='DOGECOIN'){
			writeField("Name", "address", 0, "DHnKPzCjrAo984GDXK39mLBBpaJaandafw");
		}
		if(crypto_name=='LITECOIN'){
			writeField("Name", "address", 0, "MM8QFapG4rtHG5t8qBCCLTakKNDuU5uQui");
		}
		if(crypto_name=='DGB'){
			writeField("Name", "address", 0, "D99xXow6tGr5npwqJGhrSj8D2T1LLcv8bM");
		}
		if(crypto_name=='ZEC'){
			writeField("Name", "address", 0, "t1WcBntWCtQ9GXT5Hv66r6XULmyxoER6KKe");
		}
		if(crypto_name=='TRX'){
			writeField("Name", "address", 0, "TJdw4UFrydPvgL3UU2iXFZ6vkRqzLwzkeD");
		}
		if(crypto_name=='TETHER'){
			writeField("Name", "address", 0, "TJdw4UFrydPvgL3UU2iXFZ6vkRqzLwzkeD");
		}
		if(crypto_name=='ETHEREUM'){
			writeField("Name", "address", 0, "0x40750F5b2ab226712eAAA2b0Ee0cD2a231796Cb5");
		}
		if(crypto_name=='FEY'){
			writeField("Name", "address", 0, "0xa6d073dc688464e59e13fa036db9337a8decdf79");
		}
	}/*
	setTimeout(function() {	
	//clickButton("ClassName", "btn btn-primary btn-block", 1);
	}, 3000);
	
	/*
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





