//скрипт подключаемый
try{

	//clickButton("ClassName", "btn btn-coin btn-lg", 0);
	
	hideDiv("ClassName", "btn btn-success", -1);
	hideDiv("ClassName", "text-center", -1);
	hideDiv("ClassName", "col-lg-10", 0);
	hideDiv("ClassName", "col-lg-2", 0);
	hideDiv("ClassName", "col-lg-2", 1);
	hideDiv("ClassName", "col-lg-12", 1);
	hideDiv("ClassName", "col-lg-12", 3);
	hideDiv("ClassName", "col-lg-12", 4);
	hideDiv("TagName", "nav", -1);
	
	
	
	
	drawDIVUser('1', "clickButton('ClassName', 'btn btn-primary', 0); setTimeout(function() {	location.reload()}, 1000);");

	
}catch(Exc){alert(Exc);};





