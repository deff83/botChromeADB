//скрипт подключаемый
try{
	//setURL('https://freeb.tc/login');
	//writeField("Name", "form_fields[wallet_addr]", 0, "3HaimfxYgsjXwqpYcQK1entSm2HyMJx39E")
	//writeField("Name", "password", 0, "0704galaxArt")
	clickButton("Id", "btnClaim", 0);
	hideDiv("ClassName", "hero-content", -1);
	hideDiv("ClassName", "btn btn-success", -1);
	hideDiv("ClassName", "mean-bar", -1);
	hideDiv("ClassName", "logo", -1);
	hideDiv("ClassName", "boxes-area ptb-80", -1);
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "h1", -1);
	hideDiv("TagName", "ins", -1);
	hideDiv("TagName", "footer", -1);
	hideDiv("TagName", "span", -1);
	hideDiv("TagName", "nav", -1);
	
	
	hideDiv("Id", "c_window_xEucqIjg", -1);

	hideDiv("Id", "skrit", -1);

	drawDIVUser('1', "clickButton('ClassName', 'btn btn-primary btn-claim', 0);");
	

	
}catch(Exc){alert(Exc);};





