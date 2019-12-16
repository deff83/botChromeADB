var indexPrEarnfreeLTC;


var tabidEarnfreeLTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeLTC(indexPrfree){
	block = true;
	indexPrEarnfreeLTC = indexPrfree;
	Programms[indexPrEarnfreeLTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidEarnfreeLTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeLTC[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeLTC start");
	injectScriptEarnfreeLTC('https://earnfree-ltc.xyz/dashboard');
	console.log("EarnfreeLTC end");
}



function injectScriptEarnfreeLTC(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidEarnfreeLTC.push(tab.id);
	
  });
  
};

//https://earnfree-ltc.xyz/dashboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'earnfree-ltc.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeLTC.contains(sender.tab.id))tabidEarnfreeLTC.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				if(nologin != null){
					var nologintext = nologin.textContent;
					if (nologintext == 'Earn Free LTC Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeLTCinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeLTCinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeLTC].balance != 0 && Programms[indexPrEarnfreeLTC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeLTC].balance);
					Programms[indexPrEarnfreeLTC].balance = parseFloat(balance);
					Programms[indexPrEarnfreeLTC].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeLTC.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeLTC].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeLTC].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeLTC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeLTC.js'});
				
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeLTCinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeLTCinput2.js'});
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
					Programms[indexPrEarnfreeLTC].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeLTC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeLTC.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeLTC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEarnfreeLTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidEarnfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeLTC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeLTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfree-ltc.xyz'){
			tabidEarnfreeLTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidEarnfreeLTC.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeLTC.length == 0){
						Programms[indexPrEarnfreeLTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeLTC, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeLTC);
//});





