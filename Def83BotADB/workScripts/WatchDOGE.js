var indexPrWatchDOGE;

var colImgWatchDOGE = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidWatchDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonWatchDOGE(indexPrfree){
	block = true;
	indexPrWatchDOGE = indexPrfree;
	for (var i = 0; i < tabidWatchDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidWatchDOGE[i]);
		}catch(Exc){} 
	}
	Programms[indexPrWatchDOGE].boolStartingDOGE = true;
	
	colImgWatchDOGE = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("WatchDOGE start");
	injectScriptWatchDOGE('https://watchdoge.xyz/roll.html');
	console.log("WatchDOGE end");
}

	

function injectScriptWatchDOGE(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidWatchDOGE.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'watchdoge.xyz'){
		console.log('startMes');
		
		if(!tabidWatchDOGE.contains(sender.tab.id))tabidWatchDOGE.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/scrit.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrWatchDOGE].text_test = '50';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrWatchDOGE].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					console.log(buttonclaimFaucet);
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							
							
							
							
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/WatchDOGE.js'});
							//return;
						}
					}						
				}
				
				var idclaimTime = frag.getElementById('claimTime');
					console.log(idclaimTime);
					//01 hours, 27 minutes and 58 seconds
				//01 minutes and 58 seconds
				if (idclaimTime!=null){
					var idclaimTimeText = idclaimTime.textContent;
					var hou = 0;
					
					var tuyuyu_massiv = idclaimTimeText.split(' hours, ');
					if(tuyuyu_massiv.length>1){
						idclaimTimeText=tuyuyu_massiv[1];
						hou = tuyuyu_massiv[0];
					}
					
					

					
					
					
					var minutes = idclaimTimeText.split(' ')[0];
					var minutes_word = idclaimTimeText.split(' ')[1];
					var seconds = idclaimTimeText.split(' ')[3];
					
					if(minutes_word!='seconds' && minutes_word!='minutes'){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					
					if (minutes_word=='seconds'){
						seconds = minutes;
						minutes = 0;
					}
					
					
					console.log(idclaimTimeText);
					console.log(hou);
					
					if (seconds==null){
						seconds = 0;
					}
					
					if (minutes!=null && seconds!=null){
						var second = hou*60*60 + minutes * 60 + seconds*1 + 65;
						console.log(second);
						Programms[indexPrWatchDOGE].startintervalDOGE = Programms[indexPrWatchDOGE].intervalDOGE - second;
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/WatchDOGEReload.js'});
					//return;
					return;
				/*
				*/
				
				if(idfaucetMessage==null){
					
					Programms[indexPrWatchDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidWatchDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidWatchDOGE.remove(sender.tab.id);
					return;
					
				}
				
				// Congratulations, your lucky number was 75,299 and you won 11.44 Bits!
				//  Please wait...
				//
				console.log(idfaucetMessage.textContent.split(' ')[2]);
				if (idfaucetMessage.textContent.split(' ')[2]=='your'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/WatchDOGEReload.js'});
					//return;
					return;
				}
				/**/
				
				f_callback('reload3'); 
				console.log('reload3');
				return;
						
				/*
				
				
				
				
				
				
				----------------------------------------------
				
				
				
				
				
				
				
				
				
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrWatchDOGE].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrWatchDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidWatchDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidWatchDOGE.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidWatchDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'watchdoge.xyz'){
			tabidWatchDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrWatchDOGE].alreadytrue == true){
				Programms[indexPrWatchDOGE].startintervalDOGE = Programms[indexPrWatchDOGE].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidWatchDOGE.length == 0){
				setTimeout(function() {
					if(tabidWatchDOGE.length == 0){
						Programms[indexPrWatchDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidWatchDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidWatchDOGE);
//});





