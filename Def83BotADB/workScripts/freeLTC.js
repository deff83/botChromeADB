var indexPrfreeLTC;
var col_freeLTC = 0;

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
	col_freeLTC = 0;
	injectScriptfreeLTC('https://www.free-litecoin.com');
	console.log("freeLTC end");
}



function injectScriptfreeLTC(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeLTC.push(tab.id);
	
  });
  
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'www.free-litecoin.com'){
		console.log('startMes');
		if(!tabidfreeLTC.contains(sender.tab.id))tabidfreeLTC.push(sender.tab.id);
			try{
				
				
				col_freeLTC = col_freeLTC + 1;
				
				if (col_freeLTC < 2) {
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeLTCreload.js'});
					return;
				}
				//col_freeLTC = 0;
				
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
					col_freeLTC = 0;
					block = false;
					if(tabidfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeLTC.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeLTC].balance = parseFloat(balance);
				
				
				var stylecaptcha = frag.getElementById('formroll').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock');
					//cislo1 cislo2
					
					var minute = (frag.getElementById('cislo1').textContent)*1; 
					var second = minute*60+(frag.getElementById('cislo2').textContent)*1-10; 
					
					console.log(second);
					
					if (second < 0) {second = 0};
					if (second == 0) {
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					Programms[indexPrfreeLTC].boolStartingDOGE = false;
					col_freeLTC = 0;
					Programms[indexPrfreeLTC].startintervalDOGE = Programms[indexPrfreeLTC].intervalDOGE - second;
					block = false;
					if(tabidfreeLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeLTC.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeLTC.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrfreeLTC].boolStartingDOGE = false;
				col_freeLTC = 0;
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
			if(Programms[indexPrfreeLTC].alreadytrue == true){
				Programms[indexPrfreeLTC].startintervalDOGE = Programms[indexPrfreeLTC].intervalDOGE - second_not_pink_vnut;
			}
			
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





