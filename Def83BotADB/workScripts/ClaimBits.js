var indexPrClaimBits;

var colImgClaimBits = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidClaimBits = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonClaimBits(indexPrfree){
	block = true;
	indexPrClaimBits = indexPrfree;
	for (var i = 0; i < tabidClaimBits.length; i++) { 
		try{
			chrome.tabs.remove(tabidClaimBits[i]);
		}catch(Exc){} 
	}
	Programms[indexPrClaimBits].boolStartingDOGE = true;
	
	colImgClaimBits = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ClaimBits start");
	injectScriptClaimBits('https://claimbits.net/faucet.html');
	console.log("ClaimBits end");
}

	

function injectScriptClaimBits(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidClaimBits.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'claimbits.net'){
		console.log('startMes');
		
		if(!tabidClaimBits.contains(sender.tab.id))tabidClaimBits.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				var idchallengeform = frag.getElementById('challenge-form');
				if(idchallengeform!=null){
					return;
				}
				
				
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrClaimBits].text_test = '1000';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrClaimBits].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='ROLL'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimBits.js'});
							return;
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
						Programms[indexPrClaimBits].startintervalDOGE = Programms[indexPrClaimBits].intervalDOGE - second;
					}
				}
				
				var idloginModal = frag.getElementById('loginModal');
				if (idloginModal!=null){
					return;
				}
				var idloginModal = frag.getElementById('login2Modal');
				if (idloginModal!=null){
					return;
				}
				
				
				Programms[indexPrClaimBits].boolStartingDOGE = false;
				block = false;
				if(tabidClaimBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimBits.remove(sender.tab.id);
				/*
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrClaimBits].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClaimBits].boolStartingDOGE);
				console.log(Exc);
				if(tabidClaimBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimBits.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidClaimBits.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'claimbits.net'){
			tabidClaimBits.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrClaimBits].alreadytrue == true){
				Programms[indexPrClaimBits].startintervalDOGE = Programms[indexPrClaimBits].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidClaimBits.length == 0){
				setTimeout(function() {
					if(tabidClaimBits.length == 0){
						Programms[indexPrClaimBits].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidClaimBits, changeInfo, tab){
//	console.log(tab);console.log(tabidClaimBits);
//});





