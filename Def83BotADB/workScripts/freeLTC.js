var indexPrfreeLTC;


var tabidfreeLTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeLTC(indexPrfreeLTCog){
	block = true;
	indexPrfreeLTC = indexPrfreeLTCog;
	Programms[indexPrfreeLTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeLTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeLTC[i]);
		}catch(Exc){} 
	}
	console.log("freeLTC start");
	injectScriptfreeLTC('https://www.free-litecoin.com');
	console.log("freeLTC end");
}



function injectScriptfreeLTC(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidfreeLTC.push(tab.id);
	
  });
  
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'www.free-litecoin.com'){
		console.log('startMes');
		if(!tabidfreeLTC.contains(sender.tab.id))tabidfreeLTC.push(sender.tab.id);
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
				
				
				
				var balance = frag.getElementById('money').textContent; 
				//выход по балансу
				if(Programms[indexPrfreeLTC].balance != 0 && Programms[indexPrfreeLTC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeLTC].balance);
					Programms[indexPrfreeLTC].balance = parseFloat(balance);
					Programms[indexPrfreeLTC].boolStartingDOGE = false;
					block = false;
					if(tabidfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeLTC.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeLTC].balance = parseFloat(balance);
				
				
				var stylecaptcha = frag.getElementById('formroll').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrfreeLTC].boolStartingDOGE = false;
					block = false;
					if(tabidfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeLTC.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeLTC.js'});
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrfreeLTC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeLTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeLTC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeLTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.free-litecoin.com'){
			tabidfreeLTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeLTC.length == 0){
				setTimeout(function() {
					if(tabidfreeLTC.length == 0){
						Programms[indexPrfreeLTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeLTC, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeLTC);
//});





