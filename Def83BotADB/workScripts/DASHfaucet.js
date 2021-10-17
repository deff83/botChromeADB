var indexPrDASHfaucet;


var tabidDASHfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDASHfaucet(indexPrfree){
	block = true;
	indexPrDASHfaucet = indexPrfree;
	Programms[indexPrDASHfaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidDASHfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidDASHfaucet[i]);
		}catch(Exc){} 
	}
	console.log("DASHfaucet start");
	injectScriptDASHfaucet('https://dash-faucet.com/page/faucet');
	console.log("DASHfaucet end");
}



function injectScriptDASHfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidDASHfaucet.push(tab.id);
	
  });
  
};

//https://dash-faucet.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'dash-faucet.com'){
		console.log('startMes');
		if(!tabidDASHfaucet.contains(sender.tab.id))tabidDASHfaucet.push(sender.tab.id);
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
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DASHfaucetinput.js'});
						return;
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DASHfaucetinput2.js'});
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
				if(Programms[indexPrDASHfaucet].balance != 0 && Programms[indexPrDASHfaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDASHfaucet].balance);
					Programms[indexPrDASHfaucet].balance = parseFloat(balance);
					Programms[indexPrDASHfaucet].boolStartingDOGE = false;
					block = false;
					if(tabidDASHfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDASHfaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrDASHfaucet].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrDASHfaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrDASHfaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrDASHfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidDASHfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDASHfaucet.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DASHfaucet.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrDASHfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDASHfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidDASHfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDASHfaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidDASHfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'dash-faucet.com'){
			tabidDASHfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrDASHfaucet].alreadytrue == true){
				Programms[indexPrDASHfaucet].startintervalDOGE = Programms[indexPrDASHfaucet].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidDASHfaucet.length == 0){
				setTimeout(function() {
					if(tabidDASHfaucet.length == 0){
						Programms[indexPrDASHfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDASHfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidDASHfaucet);
//});





