var indexPrGrabtc;

var colImgGrabtc = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidGrabtc = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonGrabtc(indexPrfree){
	block = true;
	indexPrGrabtc = indexPrfree;
	for (var i = 0; i < tabidGrabtc.length; i++) { 
		try{
			chrome.tabs.remove(tabidGrabtc[i]);
		}catch(Exc){} 
	}
	Programms[indexPrGrabtc].boolStartingDOGE = true;
	
	colImgGrabtc = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Grabtc start");
	injectScriptGrabtc('https://grab.tc');
	console.log("Grabtc end");
}

	

function injectScriptGrabtc(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidGrabtc.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'grab.tc'){
		console.log('startMes');
		
		if(!tabidGrabtc.contains(sender.tab.id))tabidGrabtc.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//---------------------------block Deff83---------------------------------------//
				var fragment = document.createDocumentFragment();
				var div_1 = document.createElement('div');
				div_1.id='deff83';
				fragment.appendChild(div_1);
				fragment.getElementById('deff83').appendChild(frag);
				console.log('Deff83', fragment);
				frag = fragment;
				//-----------------------------------------------------------------------------//

				var idBody = frag.getElementById('deff83');
				if (idBody==null){
				return;
				}


				
				
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrGrabtc].text_test = '3000';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = idBody.getElementsByClassName('col-xl-3 col-lg-3 col-md-3 mb-5')[0];
				
				
				
				
				
				
				
				
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[1];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrGrabtc].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					console.log(buttonclaimFaucet);
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Grabtc.js'});
							//return;
						}
					}						
				}
				
				var idclaimTime = frag.getElementById('claimTime');
					console.log(idclaimTime);
				//01 minutes and 58 seconds
				if (idclaimTime!=null){
					var idclaimTimeText = idclaimTime.textContent;
					var minutes = idclaimTimeText.split(' ')[0];
					var minutes_word = idclaimTimeText.split(' ')[1];
					var seconds = idclaimTimeText.split(' ')[3];
					if (minutes_word=='seconds'){
						seconds = minutes;
						minutes = 0;
					}
					
					
					console.log(idclaimTimeText);
					
					if (seconds==null){
						seconds = 0;
					}
					
					if (minutes!=null && seconds!=null){
						var second = minutes * 60 + seconds*1 + 65;
						console.log(second);
						Programms[indexPrGrabtc].startintervalDOGE = Programms[indexPrGrabtc].intervalDOGE - second;
					}
				}
				
				var idloginModal = frag.getElementById('loginModal');
				if (idloginModal!=null){
					return;
				}
				
				
				var idfaucetMessage = frag.getElementById('faucetMessage');
				console.log(idfaucetMessage);
				/*
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GrabtcReload.js'});
					//return;
					return;
				/*
				*/
				
				if(idfaucetMessage==null){
					Programms[indexPrGrabtc].boolStartingDOGE = false;
					block = false;
					if(tabidGrabtc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidGrabtc.remove(sender.tab.id);
					return;
				}
				
				// Congratulations, your lucky number was 75,299 and you won 11.44 Bits!
				//  Please wait...
				//
				console.log(idfaucetMessage.textContent.split(' ')[2]);
				if (idfaucetMessage.textContent.split(' ')[2]=='your'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GrabtcReload.js'});
					//return;
					return;
				}
				
				
				f_callback('reload3'); 
				console.log('reload3');
				return;
						
				/*
				
				
				
				
				
				
				----------------------------------------------
				
				
				
				
				
				
				
				
				
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrGrabtc].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrGrabtc].boolStartingDOGE);
				console.log(Exc);
				if(tabidGrabtc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGrabtc.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidGrabtc.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'grab.tc'){
			tabidGrabtc.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrGrabtc].alreadytrue == true){
				Programms[indexPrGrabtc].startintervalDOGE = Programms[indexPrGrabtc].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidGrabtc.length == 0){
				setTimeout(function() {
					if(tabidGrabtc.length == 0){
						Programms[indexPrGrabtc].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidGrabtc, changeInfo, tab){
//	console.log(tab);console.log(tabidGrabtc);
//});





