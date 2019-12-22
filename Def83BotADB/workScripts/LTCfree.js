var indexPrLTCfree;


var tabidLTCfree = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonLTCfree(indexPrfree){
	block = true;
	indexPrLTCfree = indexPrfree;
	Programms[indexPrLTCfree].boolStartingDOGE = true;
	for (var i = 0; i < tabidLTCfree.length; i++) { 
		try{
			chrome.tabs.remove(tabidLTCfree[i]);
		}catch(Exc){} 
	}
	console.log("LTCfree start");
	injectScriptLTCfree('https://litecoinfree.info');
	console.log("LTCfree end");
}



function injectScriptLTCfree(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidLTCfree.push(tab.id);
	
  });
  
};

//litecoinfree.info
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'litecoinfree.info'){
		console.log('startMes');
		if(!tabidLTCfree.contains(sender.tab.id))tabidLTCfree.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByClassName('get-title')[0];
				var balancediv = frag.getElementById('balance'); 
				
				if(balancediv == null && nologin != null && nologin.textContent == 'Get your free Litecoin!'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/LTCfreeinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[0].getElementsByClassName('signup-container-heading')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/LTCfreeinput2.js'});
					return;
				}
				
				
				
				var balance = balancediv.textContent.split(' ')[0]; 
				//выход по балансу
				if(Programms[indexPrLTCfree].balance != 0 && Programms[indexPrLTCfree].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrLTCfree].balance);
					Programms[indexPrLTCfree].balance = parseFloat(balance);
					Programms[indexPrLTCfree].boolStartingDOGE = false;
					block = false;
					if(tabidLTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidLTCfree.remove(sender.tab.id);
					return;
				}
				Programms[indexPrLTCfree].balance = parseFloat(balance);
				
				
				
				/*var timer = frag.querySelectorAll('div')[2].getElementsByClassName('time')[0];
				if(timer != null){
					console.log(timer.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrLTCfree].boolStartingDOGE = false;
					block = false;
					if(tabidLTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidLTCfree.remove(sender.tab.id);
					return;
				}
				*/
				//
					//тут надо кликнуть один раз на кнопку
				//
				var claimdiv = frag.getElementById('get-free'); 
				
				if (claimdiv != null && claimdiv.getAttribute('style')=="cursor: pointer;"){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/LTCfree.js'});
					
				}else{
					if ( claimdiv.getAttribute('style')=='display: none; cursor: pointer;'){
						Programms[indexPrLTCfree].boolStartingDOGE = false;
						block = false;
						if(tabidLTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidLTCfree.remove(sender.tab.id);
					} else{
						f_callback('reload2'); 
						console.log('reload');
					}
				}
				/*
				
				
				*/
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrLTCfree].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrLTCfree].boolStartingDOGE);
				console.log(Exc);
				if(tabidLTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidLTCfree.remove(sender.tab.id);
				
			}
			
	}
	if(tabidLTCfree.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'litecoinfree.info'){
			tabidLTCfree.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidLTCfree.length == 0){
				setTimeout(function() {
					if(tabidLTCfree.length == 0){
						Programms[indexPrLTCfree].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidLTCfree, changeInfo, tab){
//	console.log(tab);console.log(tabidLTCfree);
//});





