var indexPrZEC; //индекс в массиве Programms

var fiat = true;


var tabidADZEC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADZEC(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrZEC = indexProg;
	Programms[indexPrZEC].boolStartingDOGE = true;
	for (var i = 0; i < tabidADZEC.length; i++) { 
		try{
			chrome.tabs.remove(tabidADZEC[i]);
		}catch(Exc){} 
	}
	console.log("startADZEC start");

	injectScriptDOGE('https://adzec.cc/index');
	console.log("startADZEC end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADZEC.push(tab.id);
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
	
	if(request.src == 'adzec.cc'){
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
			
			if(!tabidADZEC.contains(sender.tab.id))tabidADZEC.push(sender.tab.id);
			
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
						Programms[indexPrZEC].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://adzec.cc/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn ZEC'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adZECHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adZECSkip.js'});
										return;
									}
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
									
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adZECOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://adzec.cc/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrZEC].boolStartingDOGE = false;
									Programms[indexPrZEC].textmessage = "noAds";
									block = false;
									if(tabidADZEC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADZEC.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adZECSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adZECSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrZEC].boolStartingDOGE = false;
				Programms[indexPrZEC].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrZEC].boolStartingDOGE);
				console.log(Exc);
				if(tabidADZEC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADZEC.remove(sender.tab.id);
				
			}
			}, 1000);
	}
	if(tabidADZEC.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'adzec.cc'){
			tabidADZEC.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADZEC.length == 0){
				setTimeout(function() {
					if(tabidADZEC.length == 0){
						Programms[indexPrZEC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADZEC, changeInfo, tab){
//	console.log(tab);console.log(tabidADZEC);
//});





