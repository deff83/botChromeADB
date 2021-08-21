var indexPrZECfaucet;


var tabidZECfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonZECfaucet(indexPrfree){
	block = true;
	indexPrZECfaucet = indexPrfree;
	Programms[indexPrZECfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidZECfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidZECfaucet[i]);
		}catch(Exc){} 
	}
	console.log("ZECfaucet start");
	injectScriptZECfaucet('https://zec-faucet.com/page/faucet');
	console.log("ZECfaucet end");
}



function injectScriptZECfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidZECfaucet.push(tab.id);
	
  });
  
};

//https:/zec-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'zec-faucet.com'){
		console.log('startMes');
		if(!tabidZECfaucet.contains(sender.tab.id))tabidZECfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ZECfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ZECfaucetinput2.js'});
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
				if(Programms[indexPrZECfaucet].balance != 0 && Programms[indexPrZECfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrZECfaucet].balance);
					Programms[indexPrZECfaucet].balance = parseFloat(balance);
					Programms[indexPrZECfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidZECfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidZECfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrZECfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrZECfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrZECfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrZECfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidZECfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidZECfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ZECfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrZECfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrZECfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidZECfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidZECfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidZECfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'zec-faucet.com'){
			tabidZECfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidZECfaucet.length == 0){
				setTimeout(function() {
					if(tabidZECfaucet.length == 0){
						Programms[indexPrZECfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidZECfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidZECfaucet);
//});





