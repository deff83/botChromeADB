﻿var indexPrTRX; //индекс в массиве Programms

var fiat = true;


var tabidADTRX = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADTRX(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrTRX = indexProg;
	Programms[indexPrTRX].boolStartingDOGE = true;
	for (var i = 0; i < tabidADTRX.length; i++) { 
		try{
			chrome.tabs.remove(tabidADTRX[i]);
		}catch(Exc){} 
	}
	console.log("startADTRX start");

	injectScriptDOGE('https://surf-trx.com/index');
	console.log("startADTRX end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADTRX.push(tab.id);
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
	
	if(request.src == 'surf-trx.com'){
		getCountTab(sender.tab.id);
		chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Reload200000.js'});
		
		console.log('startMes');
		unClose = true;
		setTimeout(function() {
			console.log(iCount);
			if (iCount>1) {
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CloseHide.js'});
				setTimeout(function() {
					try{chrome.tabs.remove(sender.tab.id);}catch(Exc){}
				}, 100000);
				return;
			}
			
			if(!tabidADTRX.contains(sender.tab.id))tabidADTRX.push(sender.tab.id);
			
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
						Programms[indexPrTRX].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://surf-trx.com/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn TRX'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adTRXHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adTRXSkip.js'});
										return;
									}
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
									
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adTRXOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://surf-trx.com/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrTRX].boolStartingDOGE = false;
									Programms[indexPrTRX].textmessage = "noAds";
									block = false;
									if(tabidADTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADTRX.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adTRXSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adTRXSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrTRX].boolStartingDOGE = false;
				Programms[indexPrTRX].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrTRX].boolStartingDOGE);
				console.log(Exc);
				if(tabidADTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADTRX.remove(sender.tab.id);
				
			}
			}, 1000);
	}
	if(tabidADTRX.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'surf-trx.com'){
			tabidADTRX.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADTRX.length == 0){
				setTimeout(function() {
					if(tabidADTRX.length == 0){
						Programms[indexPrTRX].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADTRX, changeInfo, tab){
//	console.log(tab);console.log(tabidADTRX);
//});





