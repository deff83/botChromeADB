var indexPr; //индекс в массиве Programms

var fiat = true;
var first = true;

var tabidADB = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startADB(indexProg){
	block = true;
	fiat = true;
	first = true;
	indexPr = indexProg;
	Programms[indexPr].boolStartingDOGE = true;
	for (var i = 0; i < tabidADB.length; i++) { 
		try{
			chrome.tabs.remove(tabidADB[i]);
		}catch(Exc){} 
	}
	console.log("startADB start");

	injectScriptDOGE('https://adbtc.top/index');
	console.log("startADB end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADB.push(tab.id);
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
	
	if(request.src == 'adbtc.top'){
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
			
			if(!tabidADB.contains(sender.tab.id))tabidADB.push(sender.tab.id);
		
		
		
		
			try{
				//console.log('Deff83 moonDOGE', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				//balance card-panel
				var fragRowBalance = frag.querySelectorAll('div')[7];
				
				try{
					var balancetext = fragRowBalance.getElementsByClassName('balance card-panel')[0].getElementsByTagName('b')[0].textContent.split(' ')[0];
					console.log(balancetext);
					Programms[indexPr].balance = parseFloat(balancetext);
				}catch(Exc){console.log(Exc);}
				
				
				/*
				
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDOGEinput.js'});
					return;
				}
				
				*/
				
				//var gh = frag.querySelectorAll('div')[7];
				//console.log(gh);
				var fragRow = frag.querySelectorAll('div')[7];
				
				if (fragRow!=null){
					
					//trk_jschal_nojs
					
					var trk_jschal_nojs = frag.getElementById("trk_jschal_nojs");
					
					if (trk_jschal_nojs!= null){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					
					console.log(fragRow);
					
					
					
					var index = fragRow.getElementsByClassName('btn light-blue darken-4')[0];
					
					//console.log(index);
					
					if (index!=null){
						//Начать зарабатывать биткоины
						//console.log(index.textContent);
						//console.log('Начать зарабатывать биткоины');
						
						if (index.textContent=='Начать зарабатывать биткоины'){
							
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adbSurf.js'});
							return;
						}
					}
					
					//закрыть все ненужное 
						funstart('closeall', 'https://adbtc.top/favicon.ico');
					//
					console.log("JJJ");
					
					setTimeout(function() {
						
						
						if (first){
							try{
								var fiatlink = fragRow.getElementsByClassName('col s12 m9')[0].getElementsByTagName('a')[1];
								if (fiatlink!=0){
									
									console.log(fiatlink.textContent);
									
									if(fiatlink.textContent=='Серфинг в сатоши'){
										console.log('tyt');
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adbOpenFiat.js'});
									}
								}
								first = false;
							}catch(Exc){console.log(Exc);}
							
						}
						
						
						for(var i = 0; i < 10; i++){
							
							var openbut = frag.getElementById("open");
							if (openbut!=null){
								//зеленая кнопка рядом с пропустить
								//unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adbOpenBut.js'});
								/*
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://adbtc.top/favicon.ico');
									}, 2000);
								*/
								return;
							}
							
							
							var buttonOpen4 = fragRow.getElementsByClassName('col s4 offset-s'+i+' ')[0];
							console.log(buttonOpen4);
							if (buttonOpen4!=null){
								
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adbOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('perekl', 'https://adbtc.top/favicon.ico');
									}, 10000);
								
								
								
								return;
							}
							
							
						}
						//не нашел ничего
						
						
						var selected = fragRow.getElementsByClassName('select-wrapper')[0];
						
						if (selected!=null){
							//есть капча
						}else{
							
							//col s12 m9
							
							if (fiat){
								fiat = false;
								try{
									var fiatlink = fragRow.getElementsByClassName('col s12 m9')[0].getElementsByTagName('a')[1];
									if (fiatlink!=0){
										
										console.log(fiatlink.textContent);
										
										if(fiatlink.textContent=='Серфинг в ₽'){
											console.log('tyt');
											chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adbOpenFiat.js'});
										}
									}
								}catch(Exc){
									
									
									var balancetext = fragRowBalance.getElementsByClassName('balance card-panel')[0];
									
									if (balancetext!=null){
									
										console.log(Exc);
										//если нет кнопки открыть 
										tekSbor = -1;
										Programms[indexPr].boolStartingDOGE = false;
										Programms[indexPr].textmessage = "noAds";
										block = false;
										if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
										tabidADB.remove(sender.tab.id);
										return;
									}
									
									
									
									}
								
							}
							
							
							
							//если нет кнопки открыть 
							var balancetext = fragRowBalance.getElementsByClassName('balance card-panel')[0];
									
									if (balancetext!=null){
										
										tekSbor = -1;
										Programms[indexPr].boolStartingDOGE = false;
										Programms[indexPr].textmessage = "noAds";
										block = false;
										if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
										tabidADB.remove(sender.tab.id);
									}
						}
						
					}, 2000);
				}else{
					//console.log("tyt");
					console.log(frag.querySelectorAll('div')[6]);
				}
				
				
				
				
			}catch(Exc){
				Programms[indexPr].boolStartingDOGE = false;
				Programms[indexPr].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPr].boolStartingDOGE);
				console.log(Exc);
				if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADB.remove(sender.tab.id);
				
			}
			}, 1000);
	}
	if(tabidADB.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'adbtc.top'){
			tabidADB.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADB.length == 0){
				setTimeout(function() {
					if(tabidADB.length == 0){
						Programms[indexPr].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADB, changeInfo, tab){
//	console.log(tab);console.log(tabidADB);
//});





