var indexPrClFreeBits;

var colImgClFreeBits = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidClFreeBits = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonClFreeBits(indexPrfree){
	block = true;
	indexPrClFreeBits = indexPrfree;
	for (var i = 0; i < tabidClFreeBits.length; i++) { 
		try{
			chrome.tabs.remove(tabidClFreeBits[i]);
		}catch(Exc){} 
	}
	Programms[indexPrClFreeBits].boolStartingDOGE = true;
	
	colImgClFreeBits = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ClFreeBits start");
	injectScriptClFreeBits('https://claimfreebits.com/?page=faucet');
	console.log("ClFreeBits end");
}

	

function injectScriptClFreeBits(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidClFreeBits.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'claimfreebits.com'){
		console.log('startMes');
		
		if(!tabidClFreeBits.contains(sender.tab.id))tabidClFreeBits.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrClFreeBits].text_test = '2000';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[1];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrClFreeBits].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='Roll'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClFreeBits.js'});
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
						Programms[indexPrClFreeBits].startintervalDOGE = Programms[indexPrClFreeBits].intervalDOGE - second;
					}
				}
				
				var idloginModal = frag.getElementById('loginModal');
				if (idloginModal!=null){
					return;
				}
				
				
				Programms[indexPrClFreeBits].boolStartingDOGE = false;
				block = false;
				if(tabidClFreeBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClFreeBits.remove(sender.tab.id);
				/*
				
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrClFreeBits].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClFreeBits].boolStartingDOGE);
				console.log(Exc);
				if(tabidClFreeBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClFreeBits.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidClFreeBits.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'claimfreebits.com'){
			tabidClFreeBits.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrClFreeBits].alreadytrue == true){
				Programms[indexPrClFreeBits].startintervalDOGE = Programms[indexPrClFreeBits].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidClFreeBits.length == 0){
				setTimeout(function() {
					if(tabidClFreeBits.length == 0){
						Programms[indexPrClFreeBits].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidClFreeBits, changeInfo, tab){
//	console.log(tab);console.log(tabidClFreeBits);
//});





