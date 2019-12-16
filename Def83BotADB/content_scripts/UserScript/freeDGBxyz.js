//скрипт подключаемый
try{

	//clickButton("ClassName", "btn btn-coin btn-lg", 0);
	hideDiv("TagName", "nav", -1);
	hideDiv("ClassName", "card text-center pt-1 pb-3", -1);
	hideDiv("ClassName", "card-header", -1);
	hideDiv("ClassName", "d-none d-md-block", -1);
	hideDiv("ClassName", "list-group-item small", -1);
	hideDiv("ClassName", "btn btn-success", -1);
	hideDiv("TagName", "table", -1);

	
	

	drawDIVUser('1', "clickButton('ClassName', 'btn btn-success', 0); setTimeout(function() {	location.reload()}, 1000);");
	

	
}catch(Exc){alert(Exc);};





