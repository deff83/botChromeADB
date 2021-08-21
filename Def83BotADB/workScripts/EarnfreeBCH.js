var indexPrEarnfreeBCH;

var boolht6;

var tabidEarnfreeBCH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeBCH(indexPrfree){
	block = true;
	indexPrEarnfreeBCH = indexPrfree;
	Programms[indexPrEarnfreeBCH].boolStartingBCH = true; 
	for (var i = 0; i < tabidEarnfreeBCH.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeBCH[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeBCH start");
	boolht6 = false;
	injectScriptEarnfreeBCH('https://earnfree-bch.xyz/dashboard');
	console.log("EarnfreeBCH end");
}



function injectScriptEarnfreeBCH(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnfreeBCH.push(tab.id);
	
  });
  
};

//https://earnfree-BCH.xyz/BCHboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'earnfree-bch.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeBCH.contains(sender.tab.id))tabidEarnfreeBCH.push(sender.tab.id);
			try{
				//console.log('Deff83 freeBCH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				if(nologin != null){
					var nologintext = nologin.textContent;
					//console.log('Deff83 freeBCH', nologintext);
					if (nologintext == 'Earn Free BCH Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeBCHinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeBCHinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeBCH].balance != 0 && Programms[indexPrEarnfreeBCH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeBCH].balance);
					Programms[indexPrEarnfreeBCH].balance = parseFloat(balance);
					Programms[indexPrEarnfreeBCH].boolStartingBCH = false;
					block = false;
					if(tabidEarnfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeBCH.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeBCH].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeBCH].boolStartingBCH = false;
					block = false;
					if(tabidEarnfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeBCH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeBCH.js'});
				if(boolht6){
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}
				boolht6  = true;
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeBCHinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeBCHinput2.js'});
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
					Programms[indexPrEarnfreeBCH].boolStartingBCH = false;
					block = false;
					if(tabidEarnfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeBCH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeBCH.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeBCH].boolStartingBCH = false;
				block = false;
				console.log(Programms[indexPrEarnfreeBCH].boolStartingBCH);
				console.log(Exc);
				if(tabidEarnfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeBCH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeBCH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfree-bch.xyz'){
			tabidEarnfreeBCH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidEarnfreeBCH.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeBCH.length == 0){
						Programms[indexPrEarnfreeBCH].boolStartingBCH = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeBCH, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeBCH);
//});





