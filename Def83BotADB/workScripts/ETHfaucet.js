var indexPrETHfaucet;


var tabidETHfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonETHfaucet(indexPrfree){
	block = true;
	indexPrETHfaucet = indexPrfree;
	Programms[indexPrETHfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidETHfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidETHfaucet[i]);
		}catch(Exc){} 
	}
	console.log("ETHfaucet start");
	injectScriptETHfaucet('https://ethereum-faucet.org/page/faucet');
	console.log("ETHfaucet end");
}



function injectScriptETHfaucet(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidETHfaucet.push(tab.id);
	
  });
  
};

//https://ethereum-faucet.org
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'ethereum-faucet.org'){
		console.log('startMes');
		if(!tabidETHfaucet.contains(sender.tab.id))tabidETHfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ETHfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ETHfaucetinput2.js'});
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
				if(Programms[indexPrETHfaucet].balance != 0 && Programms[indexPrETHfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrETHfaucet].balance);
					Programms[indexPrETHfaucet].balance = parseFloat(balance);
					Programms[indexPrETHfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidETHfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidETHfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrETHfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrETHfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrETHfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrETHfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidETHfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidETHfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ETHfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrETHfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrETHfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidETHfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidETHfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidETHfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'ethereum-faucet.org'){
			tabidETHfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidETHfaucet.length == 0){
				setTimeout(function() {
					if(tabidETHfaucet.length == 0){
						Programms[indexPrETHfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidETHfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidETHfaucet);
//});





