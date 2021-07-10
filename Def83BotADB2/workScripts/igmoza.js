var indexPrIGM; //индекс в массиве Programms


var tabidADIGM = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startIGM(indexPrIGMog){
	block = true;
	fiat = true;
	first = true;
	indexPrIGM = indexPrIGMog;
	Programms[indexPrIGM].boolStartingDOGE = true;
	for (var i = 0; i < tabidADIGM.length; i++) { 
		try{
			chrome.tabs.remove(tabidADIGM[i]);
		}catch(Exc){} 
	}
	countsec = 0
	console.log("startADIGM start");

	injectScriptIGM('http://igmoza.com/');
	console.log("startADIGM end");
}



function injectScriptIGM(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADIGM.push(tab.id);
  });
};

var countsec = 0


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	
	if(request.src == 'igmoza.com'){

		
		console.log('startMes');

		
			
			if(!tabidADIGM.contains(sender.tab.id))tabidADIGM.push(sender.tab.id);
		

			try{
				console.log('hhh');
				let frag = document.createRange().createContextualFragment(request.html);
				
				var home = frag.getElementById("home");
				
				
				//
					try{
					var button1 = home.getElementsByTagName('input')[0];
					
					//console.log('Deff83 igm', home);
					
					if (button1.value=='Получить деньги'){
						countsec = countsec + 1
						if (countsec == 3){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/IGM1.js'});
							
						}
						else{
							f_callback('reload'); 
							console.log('reload'+countsec);
							
						}
						return;
					}
					console.log('jjk');
					if (countsec>2) {
						
						countsec = 0
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/IGM2.js'});
						
					}
					
					
					}catch(Exc){}
				//}
				
				
			}catch(Exc){
				Programms[indexPrIGM].boolStartingDOGE = false;
				Programms[indexPrIGM].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrIGM].boolStartingDOGE);
				console.log(Exc);
				if(tabidADIGM.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADIGM.remove(sender.tab.id);
				
			}
			
			
	}
	if(tabidADIGM.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'igmoza.com'){
			tabidADIGM.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADIGM.length == 0){
				setTimeout(function() {
					if(tabidADIGM.length == 0){
						Programms[indexPrIGM].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADIGM, changeInfo, tab){
//	console.log(tab);console.log(tabidADIGM);
//});





