//скрипт подключаемый
try{
	//setURL('https://litecoinfree.info/login')
	//setTimeout(function() {	
	
	
	//writeField("Name", "address", 0, "16oe4cdMcvNTXscpJmaycnMeH6FUJhDjf7")
	//writeField("ClassName", "pass-input", 0, "0704galaxArt")
	//clickButton("ClassName", "button", 1);
	//}, 2000);
	
	
	hideDiv("Id", "menu", -1);
	hideDiv("Id", "promo1", -1);
	hideDiv("ClassName", "vertical-menu mm-active", -1);
	hideDiv("ClassName", "ads", -1);
	hideDiv("ClassName", "col-lg-6 col-xl-3", -1);
	hideDiv("ClassName", "col-6 col-md-2 col-lg-3 order-md-1 p-0 row justify-content-around left-ads", -1);
	
	
	hideReklammBan();
	
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

	drawDIVUser('1', "clickButton('ClassName', 'btn btn-primary btn-lg claim-button', 0);");
	

	
}catch(Exc){alert(Exc);};





