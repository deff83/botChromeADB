var indexPrBitCoinTrick;

var colImgBitCoinTrick = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBitCoinTrick = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitCoinTrick(indexPrfree){
	block = true;
	indexPrBitCoinTrick = indexPrfree;
	for (var i = 0; i < tabidBitCoinTrick.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitCoinTrick[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBitCoinTrick].boolStartingDOGE = true;
	
	colImgBitCoinTrick = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BitCoinTrick start");
	injectScriptBitCoinTrick('https://bitcointricks.com/?page=faucet');
	console.log("BitCoinTrick end");
}

	

function injectScriptBitCoinTrick(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitCoinTrick.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'bitcointricks.com'){
		console.log('startMes');
		
		if(!tabidBitCoinTrick.contains(sender.tab.id))tabidBitCoinTrick.push(sender.tab.id);
		
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

				var buttonclaimFaucetshortlink = idBody.getElementsByClassName('btn btn-info btn-md w-100 mt-2')[0];
				
				if (buttonclaimFaucetshortlink!=null){
					console.log(buttonclaimFaucetshortlink.textContent);
					return;
				}
				
				
				
				
				
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrBitCoinTrick].text_test = '1';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('td')[1];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrBitCoinTrick].balance = parseFloat(col_coin);
						//Programms[indexPrBitCoinTrick].text_test = Math.floor((parseFloat(col_coin)*0.00000015)*100000000)/100000000;
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					console.log(buttonclaimFaucet);
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							if (colImgBitCoinTrick<2){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitCoinTrick.js'});
							}
							colImgBitCoinTrick = colImgBitCoinTrick + 1;
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
						Programms[indexPrBitCoinTrick].startintervalDOGE = Programms[indexPrBitCoinTrick].intervalDOGE - second;
						
						Programms[indexPrBitCoinTrick].boolStartingDOGE = false;
						block = false;
						if(tabidBitCoinTrick.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitCoinTrick.remove(sender.tab.id);
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitCoinTrickReload.js'});
					//return;
					return;
				/*
				*/
				console.log('tyt2');
				if(idfaucetMessage==null){
					/*Programms[indexPrBitCoinTrick].boolStartingDOGE = false;
					block = false;
					if(tabidBitCoinTrick.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitCoinTrick.remove(sender.tab.id);*/
					return;
				}
				console.log('tyt');
				// Congratulations, your lucky number was 75,299 and you won 11.44 Bits!
				//  Please wait...
				//
				console.log(idfaucetMessage.textContent.split(' ')[2]);
				if (idfaucetMessage.textContent.split(' ')[2]=='your'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitCoinTrickReload.js'});
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
				Programms[indexPrBitCoinTrick].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitCoinTrick].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitCoinTrick.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitCoinTrick.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBitCoinTrick.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bitcointricks.com'){
			tabidBitCoinTrick.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBitCoinTrick.length == 0){
				setTimeout(function() {
					if(tabidBitCoinTrick.length == 0){
						Programms[indexPrBitCoinTrick].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitCoinTrick, changeInfo, tab){
//	console.log(tab);console.log(tabidBitCoinTrick);
//});





