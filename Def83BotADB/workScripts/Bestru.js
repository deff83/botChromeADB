var indexPrBestru;


var tabidBestru = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBestru(indexPrfree){
	block = true;
	indexPrBestru = indexPrfree;
	for (var i = 0; i < tabidBestru.length; i++) { 
		try{
			chrome.tabs.remove(tabidBestru[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBestru].boolStartingDOGE = true;
	console.log("Bestru start");
	injectScriptBestru('https://www.bestchange.ru');
	console.log("Bestru end");
}



function injectScriptBestru(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBestru.push(tab.id);
	
  });
  
};

//https://www.bestchange.ru
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'www.bestchange.ru'){
		console.log('startMes');
		if(!tabidBestru.contains(sender.tab.id))tabidBestru.push(sender.tab.id);
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
						Programms[indexPrBestru].boolStartingDOGE = false;
						block = false;
						if(tabidBestru.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBestru.remove(sender.tab.id);
						return;
					}
					
				}
				
				
				
				
				
				var tabTime = frag.getElementById('bonus_status');
				if ( tabTime != null){
					console.log(tabTime.textContent);
				}
				/*if (tabSuccse != null){
					var balance = tabSuccse.getElementsByTagName('b')[0].getAttribute('title').split(' ')[0];
					Programms[indexPrBestru].balance = parseFloat(balance);
					Programms[indexPrBestru].boolStartingDOGE = false;
					block = false;
					if(tabidBestru.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBestru.remove(sender.tab.id);
					return;
				}*/
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Bestru.js'});
				f_callback('reload'); 
				console.log('reload');
				return;
				
				
			}catch(Exc){
				Programms[indexPrBestru].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBestru].boolStartingDOGE);
				console.log(Exc);
				if(tabidBestru.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBestru.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBestru.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.bestchange.ru'){
			tabidBestru.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBestru.length == 0){
				setTimeout(function() {
					if(tabidBestru.length == 0){
						Programms[indexPrBestru].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBestru, changeInfo, tab){
//	console.log(tab);console.log(tabidBestru);
//});





