//скрипт подключаемый

try{

	//clickButton("ClassName", "btn btn-coin btn-lg", 0);
	hideDiv("ClassName", "firstPanel", -1);
	hideDiv("ClassName", "text-align:center;margin-top:10px", -1);
	hideDiv("ClassName", "rc-inline-block", -1);
	hideDiv("ClassName", "modal fade", -1);
	hideDiv("ClassName", "img", -1);
	hideDiv("ClassName", "lastPanel", -1);
	hideDiv("ClassName", "btn btn-primary btn-lg", -1);
	hideDiv("ClassName", "siteInfo", -1);
	hideDiv("ClassName", "form-control", -1);
	hideDiv("ClassName", "btn btn-info", -1);
	
	hideDiv("Id", "bonus_button", -1);
	
	/*for (var i = 0; i<5; i++){
		hideDiv("TagName", "iframe", i);
	}*/
	
	
	
	
	
	
	
	// 
	hideDiv("TagName", "a", -1);
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "h1", -1);
	hideDiv("TagName", "h2", -1);
	hideDiv("TagName", "img", -1);
	// hideDiv("TagName", "ins", -1);
	// hideDiv("TagName", "footer", -1);
	// hideDiv("TagName", "span", -1);
	// hideDiv("TagName", "nav", -1);
	height = document.body.scrollHeight;
    window.scrollTo(0, height);

	drawDIVUser('1', "clickButtonInDIV('Id', 'FaucetForm', 0, 'TagName', 'button', 1); setTimeout(function() {	location.reload()}, 5000); ");
	
	
}catch(Exc){alert(Exc);};





