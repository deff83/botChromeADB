var indexPrPPCfaucet;


var tabidPPCfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonPPCfaucet(indexPrfree){
	block = true;
	indexPrPPCfaucet = indexPrfree;
	Programms[indexPrPPCfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidPPCfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidPPCfaucet[i]);
		}catch(Exc){} 
	}
	console.log("PPCfaucet start");
	injectScriptPPCfaucet('https://ppc-faucet.com/page/faucet');
	console.log("PPCfaucet end");
}



function injectScriptPPCfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidPPCfaucet.push(tab.id);
	
  });
  
};

//https://ppc-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'ppc-faucet.com'){
		console.log('startMes');
		if(!tabidPPCfaucet.contains(sender.tab.id))tabidPPCfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/PPCfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/PPCfaucetinput2.js'});
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
				if(Programms[indexPrPPCfaucet].balance != 0 && Programms[indexPrPPCfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrPPCfaucet].balance);
					Programms[indexPrPPCfaucet].balance = parseFloat(balance);
					Programms[indexPrPPCfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidPPCfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidPPCfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrPPCfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrPPCfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrPPCfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrPPCfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidPPCfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidPPCfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/PPCfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrPPCfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrPPCfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidPPCfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidPPCfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidPPCfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'ppc-faucet.com'){
			tabidPPCfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidPPCfaucet.length == 0){
				setTimeout(function() {
					if(tabidPPCfaucet.length == 0){
						Programms[indexPrPPCfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidPPCfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidPPCfaucet);
//});





