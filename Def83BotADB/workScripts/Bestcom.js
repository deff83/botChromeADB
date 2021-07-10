var indexPrBestcom;

var boolsoundCB;

var tabidBestcom = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBestcom(indexPrfree){
	block = true;
	indexPrBestcom = indexPrfree;
	for (var i = 0; i < tabidBestcom.length; i++) { 
		try{
			chrome.tabs.remove(tabidBestcom[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBestcom].boolStartingDOGE = true;
	console.log("Bestcom start");
	boolsoundCB = true;
	injectScriptBestcom('https://www.bestchange.com');
	console.log("Bestcom end");
}



function injectScriptBestcom(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidBestcom.push(tab.id);
	
  });
  
};

//https://www.bestchange.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'www.bestchange.com'){
		console.log('startMes');
		if(!tabidBestcom.contains(sender.tab.id))tabidBestcom.push(sender.tab.id);
			try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				//var center = frag.querySelectorAll('center')[0]; 
				//console.log(center.getElementsByClassName('navlog')[0]);
				var idButton = frag.getElementById('bonus_button');
				
				if(idButton != null){
					var disable = idButton.getAttribute('value').split(' ')[0];
					if (disable == 'Time'){
						Programms[indexPrBestcom].boolStartingDOGE = false;
						block = false;
						if(tabidBestcom.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBestcom.remove(sender.tab.id);
						return;
					}
					
				}
				
				
				
				
				
				var tabSuccse = frag.getElementById('faucet_unpaid_balance');
				if (tabSuccse != null){
					var balance = tabSuccse.getElementsByTagName('b')[0].getAttribute('title').split(' ')[0];
					Programms[indexPrBestcom].balance = parseFloat(balance);
					Programms[indexPrBestcom].boolStartingDOGE = false;
					block = false;
					if(tabidBestcom.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBestcom.remove(sender.tab.id);
					return;
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Bestcom.js'});
				if (boolsoundCB) {
					boolsoundCB = false;
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}
				
				//f_callback('reload'); 
				//console.log('reload');
				return;
				
				
			}catch(Exc){
				Programms[indexPrBestcom].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBestcom].boolStartingDOGE);
				console.log(Exc);
				if(tabidBestcom.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBestcom.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBestcom.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.bestchange.com'){
			tabidBestcom.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBestcom.length == 0){
				setTimeout(function() {
					if(tabidBestcom.length == 0){
						Programms[indexPrBestcom].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBestcom, changeInfo, tab){
//	console.log(tab);console.log(tabidBestcom);
//});





