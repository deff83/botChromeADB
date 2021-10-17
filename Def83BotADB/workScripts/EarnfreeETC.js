var indexPrEarnfreeETC;


var tabidEarnfreeETC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeETC(indexPrfree){
	block = true;
	indexPrEarnfreeETC = indexPrfree;
	Programms[indexPrEarnfreeETC].boolStartingDOGE = true;
	for (var i = 0; i < tabidEarnfreeETC.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeETC[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeETC start");
	injectScriptEarnfreeETC('https://earnfree-etc.xyz/dashboard');
	console.log("EarnfreeETC end");
}



function injectScriptEarnfreeETC(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnfreeETC.push(tab.id);
	
  });
  
};

//https://earnfree-ETC.xyz/dashboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'earnfree-etc.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeETC.contains(sender.tab.id))tabidEarnfreeETC.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				
				console.log(frag.querySelectorAll('div')[2]);
				console.log(nologin);
				
				if(nologin != null){
					var nologintext = nologin.textContent;
					console.log(nologintext);
					if (nologintext == 'Earn Free ETC Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeETC].balance != 0 && Programms[indexPrEarnfreeETC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeETC].balance);
					Programms[indexPrEarnfreeETC].balance = parseFloat(balance);
					Programms[indexPrEarnfreeETC].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeETC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETC.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeETC].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeETC].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeETC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETC.js'});
				
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput2.js'});
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
					Programms[indexPrEarnfreeETC].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeETC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETC.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeETC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEarnfreeETC].boolStartingDOGE);
				console.log(Exc);
				if(tabidEarnfreeETC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeETC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeETC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfree-etc.xyz'){
			tabidEarnfreeETC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrEarnfreeETC].alreadytrue == true){
				Programms[indexPrEarnfreeETC].startintervalDOGE = Programms[indexPrEarnfreeETC].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidEarnfreeETC.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeETC.length == 0){
						Programms[indexPrEarnfreeETC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeETC, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeETC);
//});





