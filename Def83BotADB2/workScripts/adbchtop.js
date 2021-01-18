var indexPrBCHTOP; //индекс в массиве Programms


var tabidADBCHTOP = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function startBCHTOP(indexPrBCHTOPog){
	block = true;
	fiat = true;
	first = true;
	indexPrBCHTOP = indexPrBCHTOPog;
	Programms[indexPrBCHTOP].boolStartingDOGE = true;
	for (var i = 0; i < tabidADBCHTOP.length; i++) { 
		try{
			chrome.tabs.remove(tabidADBCHTOP[i]);
		}catch(Exc){} 
	}
	console.log("startADBCHTOP start");

	injectScriptBCHTOP('https://adbch.top/surf/browse/');
	console.log("startADBCHTOP end");
}



function injectScriptBCHTOP(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidADBCHTOP.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	
	if(request.src == 'adbch.top'){
		console.log('startMes');
		if(!tabidADBCHTOP.contains(sender.tab.id))tabidADBCHTOP.push(sender.tab.id);
		
			setTimeout(function() {
			try{
				//console.log('Deff83 moonDOGE', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				
				
				
				var fragRow = frag.querySelectorAll('div')[1];
				var fragRow2 = frag.querySelectorAll('div')[0];
				var fragRow3 = frag.querySelectorAll('div')[5];
				
				
				
				console.log(fragRow);
				console.log(fragRow2);
				console.log(fragRow3);
				
				if (fragRow!= null&&fragRow2!=null&&fragRow3!=null){
					
					
					
					
					try{
						var fragRowBalance = fragRow.getElementsByClassName('white-text flow-text')[0].getElementsByTagName('b')[0].textContent.split(' ')[0];
						console.log(fragRowBalance.replace(',', '.'));
						Programms[indexPrBCHTOP].balance = parseFloat(fragRowBalance.replace(',', '.'));
					}catch(Exc){
						console.log(Exc);
						return;
					}
					
					funstart('closeallhost', 'adbch.top');
					
					var Earn_LTC = fragRow2.getElementsByClassName('header white-text')[0];
					
					if (Earn_LTC==null) {fragRow2 = fragRow3;}
					
					var Earn_LTC = fragRow2.getElementsByClassName('header white-text')[0];
					
					console.log(Earn_LTC);
					if (Earn_LTC!=null){
						if (Earn_LTC.textContent=='Получайте Bitcoin Cash за просмотр сайтов'){
							//
							//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHTOPHide.js'});
							var openBut = frag.getElementById('nachat');
							
							// 
							
							
							
							
							if (openBut!=null){
								
								//card
								
								//название
								try{
									var openName = fragRow2.getElementsByClassName('flow-text')[0].textContent;
									if(openName==nameOpen){
										
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHTOPSkip.js'});
										return;
									}
									
									
									nameOpen = nameOpen2;
									nameOpen2 = openName;
								}catch(Exc){}
								
								console.log('tyt');
								unClose = true;
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHTOPOpen.js'});
								
								setTimeout(function() {
									
									//и переключится на сайт adb
									funstart('pereklhost', 'adbch.top');
									
									
									
									
									}, 10000);
								
								
								return;
							}else{
								unClose = false;
								//No ads
								var noAds = fragRow2.getElementsByTagName('h3')[0];
								if(noAds!=null&&noAds.textContent=='No ads'){
									tekSbor = -1;
									Programms[indexPrBCHTOP].boolStartingDOGE = false;
									Programms[indexPrBCHTOP].textmessage = "Exc";
									block = false;
									if(tabidADBCHTOP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADBCHTOP.remove(sender.tab.id);
									return;
								}
								
								
								return;
							}
							
							
							
							
						}
						
						if (Earn_LTC.textContent=='Bitcoin Cash реклама - adbch.top'){
							unClose = false;
							var noAds = fragRow2.getElementsByTagName('h5')[1];
							
							
							if(noAds!=null&&noAds.textContent.split(',')[0]=='Вы просмотрели все сайты на данный момент'){
								tekSbor = -1;
								Programms[indexPrBCHTOP].boolStartingDOGE = false;
								Programms[indexPrBCHTOP].textmessage = "noAds";
								block = false;
								if(tabidADBCHTOP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
								tabidADBCHTOP.remove(sender.tab.id);
								return;
							}
						}
						
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHTOPSurf.js'});
						return;
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/adBCHTOPSurf.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				
				
				
				
				/*
				
				//balance card-panel
				var fragRowBalance = frag.querySelectorAll('div')[7];
				
				try{
					var balancetext = fragRowBalance.getElementsByClassName('balance card-panel')[0].getElementsByTagName('b')[0].textContent.split(' ')[0];
					console.log(balancetext);
					Programms[indexPrBCHTOP].balance = parseFloat(balancetext);
				}catch(Exc){console.log(Exc);}
				
				/*

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
										Programms[indexPrBCHTOP].boolStartingDOGE = false;
										block = false;
										if(tabidADBCHTOP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
										tabidADBCHTOP.remove(sender.tab.id);
										return;
									}
									
									
									
									}
								
							}
							
							
							
							//если нет кнопки открыть 
							var balancetext = fragRowBalance.getElementsByClassName('balance card-panel')[0];
									
									if (balancetext!=null){
										
										tekSbor = -1;
										Programms[indexPrBCHTOP].boolStartingDOGE = false;
										block = false;
										if(tabidADBCHTOP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
										tabidADBCHTOP.remove(sender.tab.id);
									}
						}
						
					}, 2000);
				}else{
					//console.log("tyt");
					console.log(frag.querySelectorAll('div')[6]);
				}*/
				
				
				
				
			}catch(Exc){
				Programms[indexPrBCHTOP].boolStartingDOGE = false;
				Programms[indexPrBCHTOP].textmessage = "Exc";
				block = false;
				console.log(Programms[indexPrBCHTOP].boolStartingDOGE);
				console.log(Exc);
				if(tabidADBCHTOP.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADBCHTOP.remove(sender.tab.id);
				
			}
			
			}, 2000);
			
	}
	if(tabidADBCHTOP.contains(sender.tab.id)){	//если во вкладке где был ADB другой адрес
		if(request.src != 'adbch.top'){
			tabidADBCHTOP.remove(sender.tab.id);
			//chrome.tabs.remove(sender.tab.id);
			if(tabidADBCHTOP.length == 0){
				setTimeout(function() {
					if(tabidADBCHTOP.length == 0){
						Programms[indexPrBCHTOP].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidADBCHTOP, changeInfo, tab){
//	console.log(tab);console.log(tabidADBCHTOP);
//});





