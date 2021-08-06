//скрипт подключаемый
try{
	//setURL('https://litecoinfree.info/login')
	//setTimeout(function() {	
	
	
	//writeField("Name", "address", 0, "16oe4cdMcvNTXscpJmaycnMeH6FUJhDjf7")
	//writeField("ClassName", "pass-input", 0, "0704galaxArt")
	//clickButton("ClassName", "button", 1);
	//}, 2000);
	
	
	hideDiv("ClassName", "col-md-4", 0);
	//hideDiv("ClassName", "col-md-4", 0);
	hideDiv("ClassName", "section-header", -1);
	hideDiv("Id", "header", -1);
	hideDiv("Id", "btn-claim", -1);
	
	
	
	hideDiv("ClassName", "tb-faucet", -1);
	//hideDiv("TagName", "center", 1);
	//hideDiv("TagName", "center", 3);
	// hideDiv("TagName", "h2", -1);
	// hideDiv("TagName", "h1", -1);
	// hideDiv("TagName", "p", -1);
	// hideDiv("TagName", "header", 0);
	
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

	drawDIVUser('1', "try{clickButton('Id', 'btn-claim', 0);}catch(Exc){console.log(Exc);};  try{drawDIVSkrit(1);}catch(Exc){console.log(Exc);}; location.reload();");
	

	
}catch(Exc){alert(Exc);};





