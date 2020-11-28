var indexPrEarnfreeDASH;


var tabidEarnfreeDASH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeDASH(indexPrfree){
	block = true;
	indexPrEarnfreeDASH = indexPrfree;
	Programms[indexPrEarnfreeDASH].boolStartingDASH = true; 
	for (var i = 0; i < tabidEarnfreeDASH.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeDASH[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeDASH start");
	injectScriptEarnfreeDASH('https://earnfree-dash.xyz/dashboard');
	console.log("EarnfreeDASH end");
}



function injectScriptEarnfreeDASH(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidEarnfreeDASH.push(tab.id);
	
  });
  
};

//https://earnfree-DASH.xyz/dashboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'earnfree-dash.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeDASH.contains(sender.tab.id))tabidEarnfreeDASH.push(sender.tab.id);
			try{
				//console.log('Deff83 freeDASH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				
				//console.log(frag.querySelectorAll('div')[2]);
				//console.log(nologin);
				if(nologin != null){
					var nologintext = nologin.textContent;
					console.log('Deff83 freeDASH', nologintext);
					if (nologintext == 'Earn Free DASH Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDASHinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDASHinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeDASH].balance != 0 && Programms[indexPrEarnfreeDASH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeDASH].balance);
					Programms[indexPrEarnfreeDASH].balance = parseFloat(balance);
					Programms[indexPrEarnfreeDASH].boolStartingDASH = false;
					block = false;
					if(tabidEarnfreeDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeDASH.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeDASH].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeDASH].boolStartingDASH = false;
					block = false;
					if(tabidEarnfreeDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeDASH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDASH.js'});
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDASHinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDASHinput2.js'});
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
					Programms[indexPrEarnfreeDASH].boolStartingDASH = false;
					block = false;
					if(tabidEarnfreeDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeDASH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDASH.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeDASH].boolStartingDASH = false;
				block = false;
				console.log(Programms[indexPrEarnfreeDASH].boolStartingDASH);
				console.log(Exc);
				if(tabidEarnfreeDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeDASH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeDASH.contains(sender.tab.id)){	//если во вкладке другой адрес
		console.log('close ', request.src);
		if(request.src != 'earnfree-dash.xyz'){
			tabidEarnfreeDASH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidEarnfreeDASH.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeDASH.length == 0){
						Programms[indexPrEarnfreeDASH].boolStartingDASH = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeDASH, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeDASH);
//});





