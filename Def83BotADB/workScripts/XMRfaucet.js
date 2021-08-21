var indexPrXMRfaucet;


var tabidXMRfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonXMRfaucet(indexPrfree){
	block = true;
	indexPrXMRfaucet = indexPrfree;
	Programms[indexPrXMRfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidXMRfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidXMRfaucet[i]);
		}catch(Exc){} 
	}
	console.log("XMRfaucet start");
	injectScriptXMRfaucet('https://xmr-faucet.com/page/faucet');
	console.log("XMRfaucet end");
}



function injectScriptXMRfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidXMRfaucet.push(tab.id);
	
  });
  
};

//https://xmr-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'xmr-faucet.com'){
		console.log('startMes');
		if(!tabidXMRfaucet.contains(sender.tab.id))tabidXMRfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XMRfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XMRfaucetinput2.js'});
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
				if(Programms[indexPrXMRfaucet].balance != 0 && Programms[indexPrXMRfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrXMRfaucet].balance);
					Programms[indexPrXMRfaucet].balance = parseFloat(balance);
					Programms[indexPrXMRfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidXMRfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXMRfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrXMRfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrXMRfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrXMRfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrXMRfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidXMRfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXMRfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XMRfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrXMRfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrXMRfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidXMRfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXMRfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidXMRfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'xmr-faucet.com'){
			tabidXMRfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidXMRfaucet.length == 0){
				setTimeout(function() {
					if(tabidXMRfaucet.length == 0){
						Programms[indexPrXMRfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidXMRfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidXMRfaucet);
//});





