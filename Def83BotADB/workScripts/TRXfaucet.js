var indexPrTRXfaucet;


var tabidTRXfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonTRXfaucet(indexPrfree){
	block = true;
	indexPrTRXfaucet = indexPrfree;
	Programms[indexPrTRXfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidTRXfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidTRXfaucet[i]);
		}catch(Exc){} 
	}
	console.log("TRXfaucet start");
	injectScriptTRXfaucet('https://tron-faucet.com/page/faucet');
	console.log("TRXfaucet end");
}



function injectScriptTRXfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidTRXfaucet.push(tab.id);
	
  });
  
};

//https://potcoin-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'tron-faucet.com'){
		console.log('startMes');
		if(!tabidTRXfaucet.contains(sender.tab.id))tabidTRXfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/TRXfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/TRXfaucetinput2.js'});
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
				if(Programms[indexPrTRXfaucet].balance != 0 && Programms[indexPrTRXfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrTRXfaucet].balance);
					Programms[indexPrTRXfaucet].balance = parseFloat(balance);
					Programms[indexPrTRXfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidTRXfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidTRXfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrTRXfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrTRXfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrTRXfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrTRXfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidTRXfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidTRXfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/TRXfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrTRXfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrTRXfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidTRXfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidTRXfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidTRXfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'tron-faucet.com'){
			tabidTRXfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidTRXfaucet.length == 0){
				setTimeout(function() {
					if(tabidTRXfaucet.length == 0){
						Programms[indexPrTRXfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidTRXfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidTRXfaucet);
//});





