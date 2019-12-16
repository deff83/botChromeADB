var indexPrDGBfaucet;


var tabidDGBfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDGBfaucet(indexPrfree){
	block = true;
	indexPrDGBfaucet = indexPrfree;
	Programms[indexPrDGBfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidDGBfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidDGBfaucet[i]);
		}catch(Exc){} 
	}
	console.log("DGBfaucet start");
	injectScriptDGBfaucet('https://digibytefaucet.com/page/faucet');
	console.log("DGBfaucet end");
}



function injectScriptDGBfaucet(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidDGBfaucet.push(tab.id);
	
  });
  
};

//https://digibytefaucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'digibytefaucet.com'){
		console.log('startMes');
		if(!tabidDGBfaucet.contains(sender.tab.id))tabidDGBfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DGBfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DGBfaucetinput2.js'});
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
				if(Programms[indexPrDGBfaucet].balance != 0 && Programms[indexPrDGBfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDGBfaucet].balance);
					Programms[indexPrDGBfaucet].balance = parseFloat(balance);
					Programms[indexPrDGBfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidDGBfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDGBfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrDGBfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrDGBfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrDGBfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrDGBfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidDGBfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDGBfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DGBfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrDGBfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDGBfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidDGBfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDGBfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidDGBfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'digibytefaucet.com'){
			tabidDGBfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDGBfaucet.length == 0){
				setTimeout(function() {
					if(tabidDGBfaucet.length == 0){
						Programms[indexPrDGBfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDGBfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidDGBfaucet);
//});





