var indexPrEarnfreeETH;

var boolht2 = false;

var tabidEarnfreeETH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeETH(indexPrfree){
	block = true;
	indexPrEarnfreeETH = indexPrfree;
	Programms[indexPrEarnfreeETH].boolStartingDOGE = true;
	for (var i = 0; i < tabidEarnfreeETH.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeETH[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeETH start");
	boolht2 = false;
	injectScriptEarnfreeETH('https://earnfree-eth.xyz/dashboard');
	console.log("EarnfreeETH end");
}



function injectScriptEarnfreeETH(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnfreeETH.push(tab.id);
	
  });
  
};

//https://earnfree-ETH.xyz/dashboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'earnfree-eth.xyz'){
		console.log('startMes');
		if(!tabidEarnfreeETH.contains(sender.tab.id))tabidEarnfreeETH.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				if(nologin != null){
					var nologintext = nologin.textContent;
					if (nologintext == 'Earn Free ETH Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeETH].balance != 0 && Programms[indexPrEarnfreeETH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeETH].balance);
					Programms[indexPrEarnfreeETH].balance = parseFloat(balance);
					Programms[indexPrEarnfreeETH].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETH.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeETH].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeETH].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETH.js'});
				if(boolht2){
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}
				boolht2  = true;
				
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHinput2.js'});
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
					Programms[indexPrEarnfreeETH].boolStartingDOGE = false;
					block = false;
					if(tabidEarnfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETH.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeETH].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEarnfreeETH].boolStartingDOGE);
				console.log(Exc);
				if(tabidEarnfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeETH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeETH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnfree-eth.xyz'){
			tabidEarnfreeETH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrEarnfreeETH].alreadytrue == true){
				Programms[indexPrEarnfreeETH].startintervalDOGE = Programms[indexPrEarnfreeETH].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidEarnfreeETH.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeETH.length == 0){
						Programms[indexPrEarnfreeETH].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeETH, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeETH);
//});





