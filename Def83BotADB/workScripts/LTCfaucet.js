var indexPrLTCfaucet;


var tabidLTCfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonLTCfaucet(indexPrfree){
	block = true;
	indexPrLTCfaucet = indexPrfree;
	Programms[indexPrLTCfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidLTCfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidLTCfaucet[i]);
		}catch(Exc){} 
	}
	console.log("LTCfaucet start");
	injectScriptLTCfaucet('https://litecoin-faucet.com/page/faucet');
	console.log("LTCfaucet end");
}



function injectScriptLTCfaucet(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidLTCfaucet.push(tab.id);
	
  });
  
};

//https://litecoin-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'litecoin-faucet.com'){
		console.log('startMes');
		if(!tabidLTCfaucet.contains(sender.tab.id))tabidLTCfaucet.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				
				var nologin = frag.querySelectorAll('div')[5].getElementsByTagName('h1')[0];
				console.log(nologin)
				if(nologin != null){
					var nologintext = nologin.textContent;
					if (nologintext == 'Login'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/LTCfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/LTCfaucetinput2.js'});
						return;
					}
				}
				*/
				var balanceDIV = frag.getElementById('balance');
				if(balanceDIV == null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}

				
				var balance = frag.getElementById('balance').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrLTCfaucet].balance != 0 && Programms[indexPrLTCfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrLTCfaucet].balance);
					Programms[indexPrLTCfaucet].balance = parseFloat(balance);
					Programms[indexPrLTCfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidLTCfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidLTCfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrLTCfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrLTCfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrLTCfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrLTCfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidLTCfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidLTCfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/LTCfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrLTCfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrLTCfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidLTCfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidLTCfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidLTCfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'litecoin-faucet.com'){
			tabidLTCfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidLTCfaucet.length == 0){
				setTimeout(function() {
					if(tabidLTCfaucet.length == 0){
						Programms[indexPrLTCfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidLTCfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidLTCfaucet);
//});





