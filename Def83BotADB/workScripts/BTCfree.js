var indexPrBTCfree;


var tabidBTCfree = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBTCfree(indexPrfree){
	block = true;
	indexPrBTCfree = indexPrfree;
	Programms[indexPrBTCfree].boolStartingDOGE = true;
	for (var i = 0; i < tabidBTCfree.length; i++) { 
		try{
			chrome.tabs.remove(tabidBTCfree[i]);
		}catch(Exc){} 
	}
	console.log("BTCfree start");
	injectScriptBTCfree('https://tfbitcoin.com');
	console.log("BTCfree end");
}



function injectScriptBTCfree(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBTCfree.push(tab.id);
	
  });
  
};

//tfbitcoin.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'tfbitcoin.com'){
		console.log('startMes');
		if(!tabidBTCfree.contains(sender.tab.id))tabidBTCfree.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByClassName('get-title')[0];
				var balancediv = frag.getElementById('balance'); 
				
				if(balancediv == null && nologin != null && nologin.textContent == 'Get your free Bitcoin!'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BTCfreeinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[0].getElementsByClassName('signup-container-heading')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BTCfreeinput2.js'});
					return;
				}
				
				
				
				var balance = balancediv.textContent.split(' ')[0]; 
				//выход по балансу
				if(Programms[indexPrBTCfree].balance != 0 && Programms[indexPrBTCfree].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrBTCfree].balance);
					Programms[indexPrBTCfree].balance = parseFloat(balance);
					Programms[indexPrBTCfree].boolStartingDOGE = false;
					block = false;
					if(tabidBTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBTCfree.remove(sender.tab.id);
					return;
				}
				Programms[indexPrBTCfree].balance = parseFloat(balance);
				
				
				
				
				
				var claimdiv = frag.getElementById('get-free'); 
				
				if (claimdiv != null && claimdiv.getAttribute('style')=="cursor: pointer;"){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BTCfree.js'});
					
				}else{
					if ( claimdiv.getAttribute('style')=='display: none; cursor: pointer;'){
						Programms[indexPrBTCfree].boolStartingDOGE = false;
						block = false;
						if(tabidBTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBTCfree.remove(sender.tab.id);
					} else{
						f_callback('reload2'); 
						console.log('reload');
					}
				}
				/*
				
				
				*/
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrBTCfree].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBTCfree].boolStartingDOGE);
				console.log(Exc);
				if(tabidBTCfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBTCfree.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBTCfree.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'tfbitcoin.com'){
			tabidBTCfree.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBTCfree.length == 0){
				setTimeout(function() {
					if(tabidBTCfree.length == 0){
						Programms[indexPrBTCfree].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBTCfree, changeInfo, tab){
//	console.log(tab);console.log(tabidBTCfree);
//});





