var indexPrBobUlt;

var colImgBobUlt = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBobUlt = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBobUlt(indexPrfree){
	block = true;
	indexPrBobUlt = indexPrfree;
	for (var i = 0; i < tabidBobUlt.length; i++) { 
		try{
			chrome.tabs.remove(tabidBobUlt[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBobUlt].boolStartingDOGE = true;
	
	colImgBobUlt = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BobUlt start");
	injectScriptBobUlt('https://bobultimate.xyz');
	console.log("BobUlt end");
}

	

function injectScriptBobUlt(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBobUlt.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'bobultimate.xyz'){
		console.log('startMes');
		
		if(!tabidBobUlt.contains(sender.tab.id))tabidBobUlt.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrBobUlt].text_test = '50';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrBobUlt].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					console.log(buttonclaimFaucet);
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BobUlt.js'});
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
						Programms[indexPrBobUlt].startintervalDOGE = Programms[indexPrBobUlt].intervalDOGE - second;
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BobUltReload.js'});
					//return;
					return;
				/*
				*/
				
				if(idfaucetMessage==null){
					Programms[indexPrBobUlt].boolStartingDOGE = false;
					block = false;
					if(tabidBobUlt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBobUlt.remove(sender.tab.id);
					return;
				}
				
				// Congratulations, your lucky number was 75,299 and you won 11.44 Bits!
				//  Please wait...
				//
				console.log(idfaucetMessage.textContent.split(' ')[2]);
				if (idfaucetMessage.textContent.split(' ')[2]=='your'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BobUltReload.js'});
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
				Programms[indexPrBobUlt].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBobUlt].boolStartingDOGE);
				console.log(Exc);
				if(tabidBobUlt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBobUlt.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBobUlt.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bobultimate.xyz'){
			tabidBobUlt.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrBobUlt].alreadytrue == true){
				Programms[indexPrBobUlt].startintervalDOGE = Programms[indexPrBobUlt].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidBobUlt.length == 0){
				setTimeout(function() {
					if(tabidBobUlt.length == 0){
						Programms[indexPrBobUlt].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBobUlt, changeInfo, tab){
//	console.log(tab);console.log(tabidBobUlt);
//});





