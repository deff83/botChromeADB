//скрипт подключаемый
try{
	//setURL('https://litecoinfree.info/login')
	//setTimeout(function() {	
	
	
	//writeField("Name", "address", 0, "16oe4cdMcvNTXscpJmaycnMeH6FUJhDjf7")
	//writeField("ClassName", "pass-input", 0, "0704galaxArt")
	//clickButton("ClassName", "button", 1);
	//}, 2000);
	
	
	//hideDiv("Id", "claimButton", -1);
	hideDiv("Id", "fixedbanner", -1);
	hideDiv("Id", "page-topbar", -1);
	hideDiv("ClassName", "mt-5 mb-4 w-100-p flex center", -1);
	hideDiv("ClassName", "w-100-p text-center", -1);
	hideDiv("ClassName", "mb-4 mt-2 flex gap-06em mobile-wrap", -1);
	hideDiv("ClassName", "col-lg-2 flex center mt-4 d-sm-n", -1);
	
	
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

	drawDIVUser('1', "clickButton('Id', 'claimButton', 0); setTimeout(function() {location.reload();}, 2000)");
	

	
}catch(Exc){alert(Exc);};





