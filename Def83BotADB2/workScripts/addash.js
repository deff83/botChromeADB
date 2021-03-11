var indexPrDASH; //индекс в массиве Programms

var fiat = true;

var tabidADDASH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADDASH(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrDASH = indexProg;
	Programms[indexPrDASH].boolStartingDOGE = true;
	for (var i = 0; i < tabidADDASH.length; i++) { 
		try{
			chrome.tabs.remove(tabidADDASH[i]);
		}catch(Exc){} 
	}
	console.log("startADDASH start");

	injectScriptDOGE('https://addash.cc/index');
	console.log("startADDASH end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADDASH.push(tab.id);
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
	
	if(request.src == 'addash.cc'){
		getCountTab(sender.tab.id);
		
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
			
			if(!tabidADDASH.contains(sender.tab.id))tabidADDASH.push(sender.tab.id);
			
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
				var fragRow2 = frag.querySelectorAll('div')[5];
				var fragRow3 = frag.querySelectorAll('div')[0];
				
				
				
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
						Programms[indexPrDASH].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://addash.cc/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn DASH'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adDASHHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adDASHSkip.js'});
										return;
									}
									
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adDASHOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://addash.cc/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrDASH].boolStartingDOGE = false;
									Programms[indexPrDASH].textmessage = "noAds";
									block = false;
									if(tabidADDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADDASH.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adDASHSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adDASHSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrDASH].boolStartingDOGE = false;
				Programms[indexPrDASH].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrDASH].boolStartingDOGE);
				console.log(Exc);
				if(tabidADDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADDASH.remove(sender.tab.id);
				
			}
			}, 1000);
	}
	if(tabidADDASH.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'addash.cc'){
			tabidADDASH.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADDASH.length == 0){
				setTimeout(function() {
					if(tabidADDASH.length == 0){
						Programms[indexPrDASH].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADDASH, changeInfo, tab){
//	console.log(tab);console.log(tabidADDASH);
//});





