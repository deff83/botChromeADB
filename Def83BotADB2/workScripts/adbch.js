var indexPrBCH; //индекс в массиве Programms

var fiat = true;

var tabidADBCH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADBCH(indexProg){
	block = true;
	fiat = true;
	nameOpen = 'no';
	indexPrBCH = indexProg;
	Programms[indexPrBCH].boolStartingDOGE = true;
	for (var i = 0; i < tabidADBCH.length; i++) { 
		try{
			chrome.tabs.remove(tabidADBCH[i]);
		}catch(Exc){} 
	}
	console.log("startADBCH start");

	injectScriptDOGE('https://adbch.cc/index');
	console.log("startADBCH end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADBCH.push(tab.id);
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
	
	if(request.src == 'adbch.cc'){
		console.log('startMes');
		if(!tabidADBCH.contains(sender.tab.id))tabidADBCH.push(sender.tab.id);
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
						Programms[indexPrBCH].balance = parseFloat(fragRowBalance);
					}catch(Exc){console.log(Exc);}
					
					
					
					funstart('closeall', 'https://adbch.cc/images/img/favicon.ico');
					
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('text-center')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Earn BCH'){
							//
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHHide.js'});
							var openBut = fragRow2.getElementsByClassName('btn btn-primary btn-large')[0];
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('card')[0].getElementsByTagName('b')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHSkip.js'});
										return;
									}
									
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://adbch.cc/images/img/favicon.ico');
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrBCH].boolStartingDOGE = false;
									Programms[indexPrBCH].textmessage = "noAds";
									block = false;
									if(tabidADBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADBCH.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHSurf.js'});
					return;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrBCH].boolStartingDOGE = false;
				Programms[indexPrBCH].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrBCH].boolStartingDOGE);
				console.log(Exc);
				if(tabidADBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADBCH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidADBCH.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'adbch.cc'){
			tabidADBCH.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADBCH.length == 0){
				setTimeout(function() {
					if(tabidADBCH.length == 0){
						Programms[indexPrBCH].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADBCH, changeInfo, tab){
//	console.log(tab);console.log(tabidADBCH);
//});





