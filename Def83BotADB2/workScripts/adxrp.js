var indexPrXRP; //индекс в массиве Programms

var fiat = true;


var tabidADXRP = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADXRP(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrXRP = indexProg;
	Programms[indexPrXRP].boolStartingDOGE = true;
	for (var i = 0; i < tabidADXRP.length; i++) { 
		try{
			chrome.tabs.remove(tabidADXRP[i]);
		}catch(Exc){} 
	}
	console.log("startADXRP start");

	injectScriptDOGE('https://adxrp.cc/index');
	console.log("startADXRP end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADXRP.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (request.message == 'content') {
		
		//console.log('Deff83 content');
	}else{
		if (request.message == 'preload') {
			//console.log('Deff83 preload');
		}
		return;
	}
	
	if(request.src == 'adxrp.cc'){
		console.log('startMes');
		if(!tabidADXRP.contains(sender.tab.id))tabidADXRP.push(sender.tab.id);
			try{
				//console.log('Deff83 moonDOGE', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				
				//
				
				var index_banner = frag.getElementById("index-banner");
				
				if (index_banner!=null){
					
					try{
						var logintest = index_banner.getElementsByClassName("row center")[1];
						console.log(logintest);
						
						var login = index_banner.getElementsByClassName("row center")[1].getElementsByTagName('a')[0].textContent;
						
						if (login=='LOGIN'){
							
							return;
						}
					}catch(Exc){console.log(Exc);}
				}
				
				
				var fragRow = frag.querySelectorAll('div')[1];
				var fragRow2 = frag.querySelectorAll('div')[0];
				var fragRow3 = frag.querySelectorAll('div')[5];
				
				
				
				console.log(fragRow);
				console.log(fragRow2);
				console.log(fragRow3);
				
				if (fragRow!= null&&fragRow2!=null&&fragRow3!=null){
					
					//balance card-panel
					
					//login
					try{
						var logintest = fragRow.getElementsByTagName("h2")[0];
						console.log(logintest);
						
						var login = logintest.textContent;
						
						if (login=='login'){
							
							return;
						}
					}catch(Exc){console.log(Exc);}
					
					
					
					
					
					try{
						var fragRowBalance = fragRow.getElementsByClassName('white-text flow-text')[0].getElementsByTagName('b')[0].textContent.split(' ')[0];
						console.log(fragRowBalance);
						Programms[indexPrXRP].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://adxrp.cc/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn XRP'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adXRPHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adXRPSkip.js'});
										return;
									}
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
									
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adXRPOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://adxrp.cc/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrXRP].boolStartingDOGE = false;
									Programms[indexPrXRP].textmessage = "noAds";
									block = false;
									if(tabidADXRP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADXRP.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adXRPSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adXRPSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrXRP].boolStartingDOGE = false;
				Programms[indexPrXRP].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrXRP].boolStartingDOGE);
				console.log(Exc);
				if(tabidADXRP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADXRP.remove(sender.tab.id);
				
			}
			
	}
	if(tabidADXRP.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'adxrp.cc'){
			tabidADXRP.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADXRP.length == 0){
				setTimeout(function() {
					if(tabidADXRP.length == 0){
						Programms[indexPrXRP].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADXRP, changeInfo, tab){
//	console.log(tab);console.log(tabidADXRP);
//});





