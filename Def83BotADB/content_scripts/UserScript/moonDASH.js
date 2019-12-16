//скрипт подключаемый
try{

	clickButton("ClassName", "btn btn-coin btn-lg", 0);
	hideDiv("ClassName", "flexContainer", -1);
	hideDiv("Id", "ProgressModal", -1);
	hideDiv("ClassName", "modal-header", -1);
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "a", -1);
	hideDiv("TagName", "small", -1);
	hideDiv("TagName", "label", -1);
	hideDiv("TagName", "input", -1);
	hideDiv("ClassName", "modal-footer", -1);
	hideDiv("Id", "skrit", -1);

	drawDIVUser('1', "clickButton('ClassName', 'btn btn-coin d-none', 0); setTimeout(function() {	location.reload()}, 1000);");
	

	
}catch(Exc){alert(Exc);};







