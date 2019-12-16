//скрипт подключаемый
try{

	//clickButton("ClassName", "btn btn-coin btn-lg", 0);
	hideDiv("ClassName", "notdisplaytablet", -1);
	hideDiv("ClassName", "card bg-primary text-white", -1);
	hideDiv("ClassName", "btn btn-success", -1);
	hideDiv("ClassName", "col-md-8", -1);
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "h1", -1);
	hideDiv("TagName", "ins", -1);
	hideDiv("TagName", "footer", -1);
	hideDiv("TagName", "span", -1);
	hideDiv("TagName", "nav", -1);
	hideDiv("Id", "skrit", -1);
	hideDiv("Id", "p_native", -1);

	drawDIVUser('1', "clickButton('ClassName', 'btn btn-success', 0); setTimeout(function() {	location.reload()}, 1000);");
	

	
}catch(Exc){alert(Exc);};





