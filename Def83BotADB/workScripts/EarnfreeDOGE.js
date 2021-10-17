var indexPrEarnfreeDOGE;

var boolht3 = false;

var tabidEarnfreeDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeDOGE(indexPrfree){
	block = true;
	indexPrEarnfreeDOGE = indexPrfree;
	Programms[indexPrEarnfreeDOGE].boolStartingDOGE = true;
	for (var i = 0; i < tabidEarnfreeDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeDOGE[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeDOGE start");
	boolht3 = false;
	injectScriptEarnfreeDOGE('https://earnfree-doge.xyz/dashboard');
	console.log("EarnfreeDOGE end");
}



function injectScriptEarnfreeDOGE(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnfreeDOGE.push(tab.id);
	
  });
  
};

//https://earnfree-DOGE.xyz/dashboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'earnfree-doge.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeDOGE.contains(sender.tab.id))tabidEarnfreeDOGE.push(sender.tab.id);
			try{
				//console.log('Deff83 freeDOGE', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				if(nologin != null){
					var nologintext = nologin.textContent;
					if (nologintext == 'Earn Free DOGE Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDOGEinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDOGEinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeDOGE].balance != 0 && Programms[indexPrEarnfreeDOGE].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeDOGE].balance);
					Programms[indexPrEarnfreeDOGE].balance = parseFloat(balance);
					Programms[indexPrEarnfreeDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeDOGE.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeDOGE].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeDOGE.remove(sender.tab.id);
					return;
				}
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDOGE.js'});
				if(boolht3){
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}
				boolht3  = true;
				
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDOGEinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDOGEinput2.js'});
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
					Programms[indexPrEarnfreeDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeDOGE.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeDOGE.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeDOGE].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEarnfreeDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidEarnfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeDOGE.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfree-doge.xyz'){
			tabidEarnfreeDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrEarnfreeDOGE].alreadytrue == true){
				Programms[indexPrEarnfreeDOGE].startintervalDOGE = Programms[indexPrEarnfreeDOGE].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidEarnfreeDOGE.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeDOGE.length == 0){
						Programms[indexPrEarnfreeDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeDOGE);
//});





