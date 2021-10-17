var indexPrEarnfreeETHSky;

var boolht5 = false;

var tabidEarnfreeETHSky = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnfreeETHSky(indexPrfree){
	block = true;
	indexPrEarnfreeETHSky = indexPrfree;
	Programms[indexPrEarnfreeETHSky].boolStartingETHSky = true;
	for (var i = 0; i < tabidEarnfreeETHSky.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnfreeETHSky[i]);
		}catch(Exc){} 
	}
	console.log("EarnfreeETHSky start");
	boolht5 = false;
	injectScriptEarnfreeETHSky('https://sky-eth.com/dashboard');
	console.log("EarnfreeETHSky end");
}



function injectScriptEarnfreeETHSky(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnfreeETHSky.push(tab.id);
	
  });
  
};

//https://sky-eth.com/ETHSkyboard
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'sky-eth.com'){
		console.log('startMes');
		if(!tabidEarnfreeETHSky.contains(sender.tab.id))tabidEarnfreeETHSky.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETHSky', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				if(nologin != null){
					var nologintext = nologin.textContent;
					console.log('Deff83 freeETHSky', nologintext);
					if (nologintext == 'Claim Free Ethereum Every 60 minutes'){
						console.log('Deff83 freeETHSky', nologintext);
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHSkyinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHSkyinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEarnfreeETHSky].balance != 0 && Programms[indexPrEarnfreeETHSky].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEarnfreeETHSky].balance);
					Programms[indexPrEarnfreeETHSky].balance = parseFloat(balance);
					Programms[indexPrEarnfreeETHSky].boolStartingETHSky = false;
					block = false;
					if(tabidEarnfreeETHSky.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETHSky.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEarnfreeETHSky].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEarnfreeETHSky].boolStartingETHSky = false;
					block = false;
					if(tabidEarnfreeETHSky.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETHSky.remove(sender.tab.id);
					return;
				}
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHSky.js'});
				if(boolht5){
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}
				boolht5  = true;
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHSkyinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHSkyinput2.js'});
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
					Programms[indexPrEarnfreeETHSky].boolStartingETHSky = false;
					block = false;
					if(tabidEarnfreeETHSky.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnfreeETHSky.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETHSky.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEarnfreeETHSky].boolStartingETHSky = false;
				block = false;
				console.log(Programms[indexPrEarnfreeETHSky].boolStartingETHSky);
				console.log(Exc);
				if(tabidEarnfreeETHSky.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnfreeETHSky.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEarnfreeETHSky.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'sky-eth.com'){
			tabidEarnfreeETHSky.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrEarnfreeETHSky].alreadytrue == true){
				Programms[indexPrEarnfreeETHSky].startintervalDOGE = Programms[indexPrEarnfreeETHSky].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidEarnfreeETHSky.length == 0){
				setTimeout(function() {
					if(tabidEarnfreeETHSky.length == 0){
						Programms[indexPrEarnfreeETHSky].boolStartingETHSky = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnfreeETHSky, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnfreeETHSky);
//});





