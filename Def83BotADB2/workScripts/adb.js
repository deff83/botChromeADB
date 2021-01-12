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
		console.log('startMes');
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
							}catch(Exc){}
							first = false;
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
									console.log(Exc);
									//если нет кнопки открыть 
									tekSbor = -1;
									Programms[indexPr].boolStartingDOGE = false;
									block = false;
									if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
									tabidADB.remove(sender.tab.id);
									return;
									}
								
							}
							
							
							
							//если нет кнопки открыть 
							
							
							tekSbor = -1;
							Programms[indexPr].boolStartingDOGE = false;
							block = false;
							if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidADB.remove(sender.tab.id);
						}
						
					}, 2000);
				}else{
					//console.log("tyt");
					console.log(frag.querySelectorAll('div')[6]);
				}
				
				
				
				/*
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidADB.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPr].boolStartingDOGE = false;
					block = false;
					return;
				}
				//Timer
				var timer = frag.getElementById('PageLayout').getElementsByClassName('faucetValue')[0];
				if(timer == null){};
				//console.log('timer'+timer.innerHTML);
				try {
				
					if(! (timer.innerHTML == 'masleey@mail.ru')){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
				}catch(Exc){
					console.log(Exc);
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/noScrit.js'});
					return;
				}
				//выход по баланс
				var balance = frag.getElementById('Navigation').getElementsByTagName('span')[1].getElementsByTagName('a')[0].textContent; 
				if(Programms[indexPr].balance != 0 && Programms[indexPr].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPr].balance);
					Programms[indexPr].balance = parseFloat(balance);
					Programms[indexPr].boolStartingDOGE = false;
					block = false;
					if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidADB.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPr].balance);
				Programms[indexPr].balance = parseFloat(balance);
				console.log(Programms[indexPr].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					poschetDOGE = poschetDOGE + 1;
					if (poschetDOGE<20){
						f_callback('reload'); 
						console.log('reload');
					}else{
						Programms[indexPr].boolStartingDOGE = false;
						block = false;
						if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidADB.remove(sender.tab.id);
					}
					
					return;
				}
				poschetDOGE = 0;
				//доступность кнопки
				console.log(request.html);
				var divClaim = frag.getElementById('Faucet').getElementsByClassName('btn btn-coin btn-lg')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				console.log(styleinputdivClaim == null);
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDOGE.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}else{
					
					if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidADB.remove(sender.tab.id);
					Programms[indexPr].boolStartingDOGE = false;
					block = false;
				}*/
			}catch(Exc){
				Programms[indexPr].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPr].boolStartingDOGE);
				console.log(Exc);
				if(tabidADB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidADB.remove(sender.tab.id);
				
			}
			
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





