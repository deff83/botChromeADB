var indexPrDOGEfaucet;


var tabidDOGEfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDOGEfaucet(indexPrfree){
	block = true;
	indexPrDOGEfaucet = indexPrfree;
	Programms[indexPrDOGEfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidDOGEfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidDOGEfaucet[i]);
		}catch(Exc){} 
	}
	console.log("DOGEfaucet start");
	injectScriptDOGEfaucet('https://doge-faucet.com/page/faucet');
	console.log("DOGEfaucet end");
}



function injectScriptDOGEfaucet(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidDOGEfaucet.push(tab.id);
	
  });
  
};

//https://doge-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'doge-faucet.com'){
		console.log('startMes');
		if(!tabidDOGEfaucet.contains(sender.tab.id))tabidDOGEfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DOGEfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DOGEfaucetinput2.js'});
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
				if(Programms[indexPrDOGEfaucet].balance != 0 && Programms[indexPrDOGEfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDOGEfaucet].balance);
					Programms[indexPrDOGEfaucet].balance = parseFloat(balance);
					Programms[indexPrDOGEfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidDOGEfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDOGEfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrDOGEfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrDOGEfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrDOGEfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrDOGEfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidDOGEfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDOGEfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DOGEfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrDOGEfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDOGEfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidDOGEfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDOGEfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidDOGEfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'doge-faucet.com'){
			tabidDOGEfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDOGEfaucet.length == 0){
				setTimeout(function() {
					if(tabidDOGEfaucet.length == 0){
						Programms[indexPrDOGEfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDOGEfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidDOGEfaucet);
//});





