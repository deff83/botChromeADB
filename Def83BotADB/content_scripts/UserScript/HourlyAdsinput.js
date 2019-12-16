//скрипт подключаемый
try{
	//setURL('https://tfbitcoin.com/login');
	writeField("Name", "email", 0, "masleey@mail.ru")
	writeField("Name", "password", 0, "0704galaxArt")
	//clickButton("Name", "submit", 0);
	
	hideDiv("ClassName", "large-6 medium-6 columns show-for-medium-up", -1);
	
	hideDiv("ClassName", "btn btn-primary text-center large hover-effect mb-3", -1);
	hideDiv("ClassName", "large-11 medium-11 columns", -1);
	hideDiv("Name", "email", 0);
	hideDiv("Name", "password", 0);
	
	
	
	/*
	hideDiv("ClassName", "d-none d-sm-block", -1);
	hideDiv("ClassName", "col-12 text-center p-0", -1);
	hideDiv("ClassName", "cc-grower", -1);
	hideDiv("ClassName", "text-center mt-3", -1);
	hideDiv("ClassName", "col-12 text-center", -1);
	hideDiv("ClassName", "table-responsive", -1);
	*/
	hideDiv("TagName", "p", -1);
	hideDiv("TagName", "h1", -1);
	hideDiv("TagName", "h3", -1);
	hideDiv("TagName", "h5", -1);
	hideDiv("TagName", "ins", -1);
	hideDiv("TagName", "footer", -1);
	hideDiv("TagName", "span", -1);
	hideDiv("TagName", "nav", -1);
	hideDiv("TagName", "label", -1);
	hideDiv("Id", "promomodal", -1);
	hideDiv("Id", "skrit", -1);

	drawDIVUser('1', "clickButton('ClassName', 'new_button_style profile_page_button_style center', 0);");
	

	
}catch(Exc){alert(Exc);};





