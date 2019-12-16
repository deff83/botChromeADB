var indexPrFreeBTCW;


var tabidFreeBTCW = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFreeBTCW(indexPrfree){
	block = true;
	indexPrFreeBTCW = indexPrfree;
	Programms[indexPrFreeBTCW].boolStartingDOGE = true;
	for (var i = 0; i < tabidFreeBTCW.length; i++) { 
		try{
			chrome.tabs.remove(tabidFreeBTCW[i]);
		}catch(Exc){} 
	}
	console.log("FreeBTCW start");
	injectScriptFreeBTCW('https://freeb.tc/faucet');
	console.log("FreeBTCW end");
}



function injectScriptFreeBTCW(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidFreeBTCW.push(tab.id);
	
  });
  
};

//https://freeb.tc
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'freeb.tc'){
		console.log('startMes');
		if(!tabidFreeBTCW.contains(sender.tab.id))tabidFreeBTCW.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				
				var nologin = frag.querySelectorAll('div')[4].getElementsByClassName('nav-link')[1];
				//console.log(frag.querySelectorAll('div')[4])
				if(nologin != null){
					var nologintext = nologin.textContent;
					if (nologintext == 'Login'){
						
						var nologin = frag.querySelectorAll('div')[5].getElementsByClassName('btn btn-primary')[0];
						if(nologin != null){
							console.log(nologin.textContent);
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBTCWinput.js'});
							return;
						}
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBTCWinput2.js'});
					}
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBTCWinput2.js'});
						return;
					}
				}
				*/
				var balanceDIV = frag.getElementById('btc-balance');
				if(balanceDIV == null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}

				console.log(balanceDIV);
				var balance = balanceDIV.textContent; 
				
				//выход по балансу
				if(Programms[indexPrFreeBTCW].balance != 0 && Programms[indexPrFreeBTCW].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrFreeBTCW].balance);
					Programms[indexPrFreeBTCW].balance = parseFloat(balance);
					Programms[indexPrFreeBTCW].boolStartingDOGE = false;
					block = false;
					if(tabidFreeBTCW.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFreeBTCW.remove(sender.tab.id);
					return;
				}
				Programms[indexPrFreeBTCW].balance = parseFloat(balance);
				
				
				var timer = frag.querySelectorAll('title')[0]; 
				
				if (timer != null){
					var timertext = timer.textContent;
					if (timertext != ''){
						console.log(timertext);
						f_callback('reload'); 
						console.log('reload');
						
						if(timer.textContent.split(' ')[2]=='faucet'){
							var minutest = parseInt(timer.textContent.split(' ')[0].split(':')[0]);
							Programms[indexPrFreeBTCW].startintervalDOGE = 1805 -  minutest * 60 - 2;
							console.log(minutest);
						
						
						Programms[indexPrFreeBTCW].boolStartingDOGE = false;
						block = false;
						if(tabidFreeBTCW.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFreeBTCW.remove(sender.tab.id);
						return;
						}
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBTCW.js'});
				
				f_callback('reload'); 
				console.log('reload');
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrFreeBTCW].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFreeBTCW].boolStartingDOGE);
				console.log(Exc);
				if(tabidFreeBTCW.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFreeBTCW.remove(sender.tab.id);
				
			}
			
	}
	if(tabidFreeBTCW.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freeb.tc'){
			tabidFreeBTCW.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidFreeBTCW.length == 0){
				setTimeout(function() {
					if(tabidFreeBTCW.length == 0){
						Programms[indexPrFreeBTCW].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFreeBTCW, changeInfo, tab){
//	console.log(tab);console.log(tabidFreeBTCW);
//});





