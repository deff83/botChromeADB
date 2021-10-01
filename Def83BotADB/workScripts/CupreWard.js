var indexPrCupreWard;

var colImgCupreWard = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCupreWard = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCupreWard(indexPrfree){
	block = true;
	indexPrCupreWard = indexPrfree;
	for (var i = 0; i < tabidCupreWard.length; i++) { 
		try{
			chrome.tabs.remove(tabidCupreWard[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCupreWard].boolStartingDOGE = true;
	
	colImgCupreWard = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CupreWard start");
	injectScriptCupreWard('https://cupreward.xyz');
	console.log("CupreWard end");
}

	

function injectScriptCupreWard(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCupreWard.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'cupreward.xyz'){
		console.log('startMes');
		
		if(!tabidCupreWard.contains(sender.tab.id))tabidCupreWard.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrCupreWard].text_test = '1';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrCupreWard].balance = parseFloat(col_coin);
						
						Programms[indexPrCupreWard].text_test = Math.floor((parseFloat(col_coin)*0.00000015)*100000000)/100000000;
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					console.log(buttonclaimFaucet);
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							if (colImgCupreWard<2){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CupreWard.js'});
							}
							colImgCupreWard = colImgCupreWard + 1;
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
						Programms[indexPrCupreWard].startintervalDOGE = Programms[indexPrCupreWard].intervalDOGE - second;
						Programms[indexPrCupreWard].boolStartingDOGE = false;
						block = false;
						if(tabidCupreWard.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCupreWard.remove(sender.tab.id);
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CupreWardReload.js'});
					//return;
					return;
				/*
				*/
				
				if(idfaucetMessage==null){
					
					return;
				}
				
				// Congratulations, your lucky number was 75,299 and you won 11.44 Bits!
				//  Please wait...
				//
				console.log(idfaucetMessage.textContent.split(' ')[2]);
				if (idfaucetMessage.textContent.split(' ')[2]=='your'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CupreWardReload.js'});
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
				Programms[indexPrCupreWard].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCupreWard].boolStartingDOGE);
				console.log(Exc);
				if(tabidCupreWard.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCupreWard.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCupreWard.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'cupreward.xyz'){
			tabidCupreWard.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCupreWard.length == 0){
				setTimeout(function() {
					if(tabidCupreWard.length == 0){
						Programms[indexPrCupreWard].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCupreWard, changeInfo, tab){
//	console.log(tab);console.log(tabidCupreWard);
//});





