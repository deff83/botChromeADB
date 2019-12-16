var indexPrfreeETH;


var tabidfreeETH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeETH(indexPrfree){
	block = true;
	indexPrfreeETH = indexPrfree;
	Programms[indexPrfreeETH].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeETH.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeETH[i]);
		}catch(Exc){} 
	}
	console.log("freeETH start");
	injectScriptfreeETH('https://www.free-ethereum.io');
	console.log("freeETH end");
}



function injectScriptfreeETH(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidfreeETH.push(tab.id);
	
  });
  
};

//https://www.free-ethereum.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'www.free-ethereum.io'){
		console.log('startMes');
		if(!tabidfreeETH.contains(sender.tab.id))tabidfreeETH.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				var login = frag.getElementById('login'); 
				console.log(login);
				if(login != null) 
				{
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
					return;
				}
				
				
				
				var balance = frag.getElementById('cryptovalue').textContent; 
				//выход по балансу
				if(Programms[indexPrfreeETH].balance != 0 && Programms[indexPrfreeETH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeETH].balance);
					Programms[indexPrfreeETH].balance = parseFloat(balance);
					Programms[indexPrfreeETH].boolStartingDOGE = false;
					block = false;
					if(tabidfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeETH.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeETH].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrfreeETH].boolStartingDOGE = false;
					block = false;
					if(tabidfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeETH.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeETH.js'});
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrfreeETH].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeETH].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeETH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeETH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeETH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.free-ethereum.io'){
			tabidfreeETH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeETH.length == 0){
				setTimeout(function() {
					if(tabidfreeETH.length == 0){
						Programms[indexPrfreeETH].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeETH, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeETH);
//});





