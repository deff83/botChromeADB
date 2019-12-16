var indexPrfreeDOGE;


var tabidfreeDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeDOGE(indexPrfree){
	block = true;
	indexPrfreeDOGE = indexPrfree;
	Programms[indexPrfreeDOGE].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeDOGE[i]);
		}catch(Exc){} 
	}
	console.log("freeDOGE start");
	injectScriptfreeDOGE('https://www.free-dogecoin.com/free/');
	console.log("freeDOGE end");
}



function injectScriptfreeDOGE(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidfreeDOGE.push(tab.id);
	
  });
  
};

//https://www.free-dogecoin.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'www.free-dogecoin.com'){
		console.log('startMes');
		if(!tabidfreeDOGE.contains(sender.tab.id))tabidfreeDOGE.push(sender.tab.id);
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
				if(Programms[indexPrfreeDOGE].balance != 0 && Programms[indexPrfreeDOGE].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeDOGE].balance);
					Programms[indexPrfreeDOGE].balance = parseFloat(balance);
					Programms[indexPrfreeDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeDOGE.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeDOGE].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrfreeDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeDOGE.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeDOGE.js'});
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrfreeDOGE].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeDOGE.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.free-dogecoin.com'){
			tabidfreeDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeDOGE.length == 0){
				setTimeout(function() {
					if(tabidfreeDOGE.length == 0){
						Programms[indexPrfreeDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeDOGE);
//});





