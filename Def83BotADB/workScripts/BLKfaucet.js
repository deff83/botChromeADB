var indexPrBLKfaucet;


var tabidBLKfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBLKfaucet(indexPrfree){
	block = true;
	indexPrBLKfaucet = indexPrfree;
	Programms[indexPrBLKfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidBLKfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidBLKfaucet[i]);
		}catch(Exc){} 
	}
	console.log("BLKfaucet start");
	injectScriptBLKfaucet('https://blackcoinfaucet.com/page/faucet');
	console.log("BLKfaucet end");
}



function injectScriptBLKfaucet(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidBLKfaucet.push(tab.id);
	
  });
  
};

//https://blackcoinfaucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'blackcoinfaucet.com'){
		console.log('startMes');
		if(!tabidBLKfaucet.contains(sender.tab.id))tabidBLKfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BLKfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BLKfaucetinput2.js'});
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
				if(Programms[indexPrBLKfaucet].balance != 0 && Programms[indexPrBLKfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrBLKfaucet].balance);
					Programms[indexPrBLKfaucet].balance = parseFloat(balance);
					Programms[indexPrBLKfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidBLKfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBLKfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrBLKfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrBLKfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrBLKfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrBLKfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidBLKfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBLKfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BLKfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrBLKfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBLKfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidBLKfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBLKfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBLKfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'blackcoinfaucet.com'){
			tabidBLKfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBLKfaucet.length == 0){
				setTimeout(function() {
					if(tabidBLKfaucet.length == 0){
						Programms[indexPrBLKfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBLKfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidBLKfaucet);
//});





