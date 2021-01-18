var indexPrLTC; //индекс в массиве Programms

var fiat = true;

var tabidADLTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADLTC(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrLTC = indexProg;
	Programms[indexPrLTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidADLTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidADLTC[i]);
		}catch(Exc){} 
	}
	console.log("startADLTC start");

	injectScriptDOGE('https://adltc.cc/index');
	console.log("startADLTC end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADLTC.push(tab.id);
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
	
	if(request.src == 'adltc.cc'){
		console.log('startMes');
		if(!tabidADLTC.contains(sender.tab.id))tabidADLTC.push(sender.tab.id);
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
						Programms[indexPrLTC].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://adltc.cc/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn LTC'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adLTCHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adLTCSkip.js'});
										return;
									}
									
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adLTCOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://adltc.cc/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrLTC].boolStartingDOGE = false;
									Programms[indexPrLTC].textmessage = "noAds";
									block = false;
									if(tabidADLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADLTC.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adLTCSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adLTCSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrLTC].boolStartingDOGE = false;
				Programms[indexPrLTC].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrLTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidADLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADLTC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidADLTC.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'adltc.cc'){
			tabidADLTC.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADLTC.length == 0){
				setTimeout(function() {
					if(tabidADLTC.length == 0){
						Programms[indexPrLTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADLTC, changeInfo, tab){
//	console.log(tab);console.log(tabidADLTC);
//});





