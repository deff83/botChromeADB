var indexPrBTC; //индекс в массиве Programms

var fiat = true;


var tabidADBTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADBTC(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrBTC = indexProg;
	Programms[indexPrBTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidADBTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidADBTC[i]);
		}catch(Exc){} 
	}
	console.log("startADBTC start");

	injectScriptDOGE('https://surfingbtc.cc/index');
	console.log("startADBTC end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADBTC.push(tab.id);
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
	
	if(request.src == 'surfingbtc.cc'){
		
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
			
			if(!tabidADBTC.contains(sender.tab.id))tabidADBTC.push(sender.tab.id);
		
		
		
		
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
						Programms[indexPrBTC].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://surfingbtc.cc/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn BTC'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBTCHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBTCSkip.js'});
										return;
									}
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
									
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBTCOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://surfingbtc.cc/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrBTC].boolStartingDOGE = false;
									Programms[indexPrBTC].textmessage = "noAds";
									block = false;
									if(tabidADBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADBTC.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBTCSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBTCSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrBTC].boolStartingDOGE = false;
				Programms[indexPrBTC].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrBTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidADBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADBTC.remove(sender.tab.id);
				
			}
			}, 1000);
	}
	if(tabidADBTC.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'surfingbtc.cc'){
			tabidADBTC.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADBTC.length == 0){
				setTimeout(function() {
					if(tabidADBTC.length == 0){
						Programms[indexPrBTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
	
});
//chrome.tabs.onUpdated.addListener(function(tabidADBTC, changeInfo, tab){
//	console.log(tab);console.log(tabidADBTC);
//});





