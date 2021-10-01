var indexPrEarnFast;

var colImgEarnFast = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidEarnFast = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnFast(indexPrfree){
	block = true;
	indexPrEarnFast = indexPrfree;
	for (var i = 0; i < tabidEarnFast.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnFast[i]);
		}catch(Exc){} 
	}
	Programms[indexPrEarnFast].boolStartingDOGE = true;
	
	colImgEarnFast = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("EarnFast start");
	injectScriptEarnFast('https://earnfaster.xyz');
	console.log("EarnFast end");
}

	

function injectScriptEarnFast(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnFast.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'earnfaster.xyz'){
		console.log('startMes');
		
		if(!tabidEarnFast.contains(sender.tab.id))tabidEarnFast.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrEarnFast].text_test = '1';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrEarnFast].balance = parseFloat(col_coin);
						Programms[indexPrEarnFast].text_test = Math.floor((parseFloat(col_coin)*0.00000015)*100000000)/100000000;
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					console.log(buttonclaimFaucet);
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							if (colImgEarnFast<2){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnFast.js'});
							}
							colImgEarnFast = colImgEarnFast + 1;
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
						Programms[indexPrEarnFast].startintervalDOGE = Programms[indexPrEarnFast].intervalDOGE - second;
						Programms[indexPrEarnFast].boolStartingDOGE = false;
						block = false;
						if(tabidEarnFast.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidEarnFast.remove(sender.tab.id);
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnFastReload.js'});
					//return;
					return;
				/*
				*/
				
				if(idfaucetMessage==null){
					// Programms[indexPrEarnFast].boolStartingDOGE = false;
					// block = false;
					// if(tabidEarnFast.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					// tabidEarnFast.remove(sender.tab.id);
					return;
				}
				
				// Congratulations, your lucky number was 75,299 and you won 11.44 Bits!
				//  Please wait...
				//
				console.log(idfaucetMessage.textContent.split(' ')[2]);
				if (idfaucetMessage.textContent.split(' ')[2]=='your'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnFastReload.js'});
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
				Programms[indexPrEarnFast].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEarnFast].boolStartingDOGE);
				console.log(Exc);
				if(tabidEarnFast.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnFast.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidEarnFast.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfaster.xyz'){
			tabidEarnFast.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidEarnFast.length == 0){
				setTimeout(function() {
					if(tabidEarnFast.length == 0){
						Programms[indexPrEarnFast].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnFast, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnFast);
//});





