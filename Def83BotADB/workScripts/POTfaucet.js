var indexPrPOTfaucet;


var tabidPOTfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonPOTfaucet(indexPrfree){
	block = true;
	indexPrPOTfaucet = indexPrfree;
	Programms[indexPrPOTfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidPOTfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidPOTfaucet[i]);
		}catch(Exc){} 
	}
	console.log("POTfaucet start");
	injectScriptPOTfaucet('https://potcoin-faucet.com/page/faucet');
	console.log("POTfaucet end");
}



function injectScriptPOTfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidPOTfaucet.push(tab.id);
	
  });
  
};

//https://potcoin-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'potcoin-faucet.com'){
		console.log('startMes');
		if(!tabidPOTfaucet.contains(sender.tab.id))tabidPOTfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/POTfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/POTfaucetinput2.js'});
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
				if(Programms[indexPrPOTfaucet].balance != 0 && Programms[indexPrPOTfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrPOTfaucet].balance);
					Programms[indexPrPOTfaucet].balance = parseFloat(balance);
					Programms[indexPrPOTfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidPOTfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidPOTfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrPOTfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrPOTfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrPOTfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrPOTfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidPOTfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidPOTfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/POTfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrPOTfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrPOTfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidPOTfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidPOTfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidPOTfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'potcoin-faucet.com'){
			tabidPOTfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidPOTfaucet.length == 0){
				setTimeout(function() {
					if(tabidPOTfaucet.length == 0){
						Programms[indexPrPOTfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidPOTfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidPOTfaucet);
//});





