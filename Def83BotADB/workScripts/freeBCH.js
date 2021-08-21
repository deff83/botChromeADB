var indexPrfreeBCH;


var tabidfreeBCH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeBCH(indexPrfree){
	block = true;
	indexPrfreeBCH = indexPrfree;
	Programms[indexPrfreeBCH].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeBCH.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeBCH[i]);
		}catch(Exc){} 
	}
	console.log("freeBCH start");
	injectScriptfreeBCH('https://www.free-bcash.com/free/');
	console.log("freeBCH end");
}



function injectScriptfreeBCH(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeBCH.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'www.free-bcash.com'){
		console.log('startMes');
		if(!tabidfreeBCH.contains(sender.tab.id))tabidfreeBCH.push(sender.tab.id);
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
				if(Programms[indexPrfreeBCH].balance != 0 && Programms[indexPrfreeBCH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeBCH].balance);
					Programms[indexPrfreeBCH].balance = parseFloat(balance);
					Programms[indexPrfreeBCH].boolStartingDOGE = false;
					block = false;
					if(tabidfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeBCH.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeBCH].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrfreeBCH].boolStartingDOGE = false;
					block = false;
					if(tabidfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeBCH.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBCH.js'});
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrfreeBCH].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeBCH].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeBCH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeBCH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.free-bcash.com'){
			tabidfreeBCH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeBCH.length == 0){
				setTimeout(function() {
					if(tabidfreeBCH.length == 0){
						Programms[indexPrfreeBCH].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeBCH, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeBCH);
//});





