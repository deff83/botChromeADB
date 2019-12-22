var indexPrXRPfree;


var tabidXRPfree = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonXRPfree(indexPrfree){
	block = true;
	indexPrXRPfree = indexPrfree;
	Programms[indexPrXRPfree].boolStartingDOGE = true;
	for (var i = 0; i < tabidXRPfree.length; i++) { 
		try{
			chrome.tabs.remove(tabidXRPfree[i]);
		}catch(Exc){} 
	}
	console.log("XRPfree start");
	injectScriptXRPfree('https://ripplefree.info');
	console.log("XRPfree end");
}



function injectScriptXRPfree(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidXRPfree.push(tab.id);
	
  });
  
};

//ripplefree.info
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'ripplefree.info'){
		console.log('startMes');
		if(!tabidXRPfree.contains(sender.tab.id))tabidXRPfree.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByClassName('get-title')[0];
				var balancediv = frag.getElementById('balance'); 
				
				if(balancediv == null && nologin != null && nologin.textContent == 'Get your free Ripple!'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XRPfreeinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[0].getElementsByClassName('signup-container-heading')[0];
				if(login != null){
					
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XRPfreeinput2.js'});
					return;
				}
				
				
				
				var balance = balancediv.textContent.split(' ')[0]; 
				//выход по балансу
				if(Programms[indexPrXRPfree].balance != 0 && Programms[indexPrXRPfree].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrXRPfree].balance);
					Programms[indexPrXRPfree].balance = parseFloat(balance);
					Programms[indexPrXRPfree].boolStartingDOGE = false;
					block = false;
					if(tabidXRPfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXRPfree.remove(sender.tab.id);
					return;
				}
				Programms[indexPrXRPfree].balance = parseFloat(balance);
				
				
				
				var claimdiv = frag.getElementById('get-free'); 
				
				if (claimdiv != null && claimdiv.getAttribute('style')=="cursor: pointer;"){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XRPfree.js'});
					
				}else{
					
					
					if ( claimdiv.getAttribute('style')=='display: none; cursor: pointer;'){
						Programms[indexPrXRPfree].boolStartingDOGE = false;
						block = false;
						if(tabidXRPfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXRPfree.remove(sender.tab.id);
					} else{
						f_callback('reload2'); 
						console.log('reload');
					}
				}
				/*
				
				
				*/
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrXRPfree].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrXRPfree].boolStartingDOGE);
				console.log(Exc);
				if(tabidXRPfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXRPfree.remove(sender.tab.id);
				
			}
			
	}
	if(tabidXRPfree.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'ripplefree.info'){
			tabidXRPfree.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidXRPfree.length == 0){
				setTimeout(function() {
					if(tabidXRPfree.length == 0){
						Programms[indexPrXRPfree].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidXRPfree, changeInfo, tab){
//	console.log(tab);console.log(tabidXRPfree);
//});





