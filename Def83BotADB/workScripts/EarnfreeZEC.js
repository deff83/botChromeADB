var indexPrEarnfreeZEC;


var tabidEarnfreeZEC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeZEC(indexPrfree){
	block = true;
	indexPrEarnfreeZEC = indexPrfree;
	Programms[indexPrEarnfreeZEC].boolStartingZEC = true;
	for (var i = 0; i < tabidEarnfreeZEC.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeZEC[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeZEC start");
	injectScriptEarnfreeZEC('https://earnfree.xyz/dashboard');
	console.log("EarnfreeZEC end");
}



function injectScriptEarnfreeZEC(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidEarnfreeZEC.push(tab.id);
	
  });
  
};

//https://earnfree.xyz/ZECboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'earnfree.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeZEC.contains(sender.tab.id))tabidEarnfreeZEC.push(sender.tab.id);
			try{
				//console.log('Deff83 freeZEC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				if(nologin != null){
					var nologintext = nologin.textContent;
					console.log( nologintext);
					if (nologintext == 'Earn Free ZEC Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeZECinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeZECinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeZEC].balance != 0 && Programms[indexPrEarnfreeZEC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeZEC].balance);
					Programms[indexPrEarnfreeZEC].balance = parseFloat(balance);
					Programms[indexPrEarnfreeZEC].boolStartingZEC = false;
					block = false;
					if(tabidEarnfreeZEC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeZEC.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeZEC].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeZEC].boolStartingZEC = false;
					block = false;
					if(tabidEarnfreeZEC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeZEC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeZEC.js'});
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeZECinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeZECinput2.js'});
					return;
				}
				
				
				
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrEarnfreeZEC].boolStartingZEC = false;
					block = false;
					if(tabidEarnfreeZEC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeZEC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeZEC.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeZEC].boolStartingZEC = false;
				block = false;
				console.log(Programms[indexPrEarnfreeZEC].boolStartingZEC);
				console.log(Exc);
				if(tabidEarnfreeZEC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeZEC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeZEC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfree.xyz'){
			tabidEarnfreeZEC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidEarnfreeZEC.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeZEC.length == 0){
						Programms[indexPrEarnfreeZEC].boolStartingZEC = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeZEC, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeZEC);
//});





