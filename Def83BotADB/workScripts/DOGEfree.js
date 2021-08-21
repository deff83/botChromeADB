var indexPrDOGEfree;


var tabidDOGEfree = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDOGEfree(indexPrfree){
	block = true;
	indexPrDOGEfree = indexPrfree;
	Programms[indexPrDOGEfree].boolStartingDOGE = true;
	for (var i = 0; i < tabidDOGEfree.length; i++) { 
		try{
			chrome.tabs.remove(tabidDOGEfree[i]);
		}catch(Exc){} 
	}
	console.log("DOGEfree start");
	injectScriptDOGEfree('https://dogecoinfree.info');
	console.log("DOGEfree end");
}



function injectScriptDOGEfree(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidDOGEfree.push(tab.id);
	
  });
  
};

//dogecoinfree.info
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'dogecoinfree.info'){
		console.log('startMes');
		if(!tabidDOGEfree.contains(sender.tab.id))tabidDOGEfree.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByClassName('get-title')[0];
				var balancediv = frag.getElementById('balance'); 
				
				if(balancediv == null && nologin != null && nologin.textContent == 'Get your free Dogecoin!'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DOGEfreeinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[0].getElementsByClassName('signup-container-heading')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DOGEfreeinput2.js'});
					return;
				}
				
				
				
				var balance = balancediv.textContent.split(' ')[0]; 
				//выход по балансу
				if(Programms[indexPrDOGEfree].balance != 0 && Programms[indexPrDOGEfree].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDOGEfree].balance);
					Programms[indexPrDOGEfree].balance = parseFloat(balance);
					Programms[indexPrDOGEfree].boolStartingDOGE = false;
					block = false;
					if(tabidDOGEfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDOGEfree.remove(sender.tab.id);
					return;
				}
				Programms[indexPrDOGEfree].balance = parseFloat(balance);
				
				
				
				
				
				var claimdiv = frag.getElementById('get-free'); 
				
				if (claimdiv != null && claimdiv.getAttribute('style')=="cursor: pointer;"){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DOGEfree.js'});
					
				}else{
					if ( claimdiv.getAttribute('style')=='display: none; cursor: pointer;'){
						Programms[indexPrDOGEfree].boolStartingDOGE = false;
						block = false;
						if(tabidDOGEfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDOGEfree.remove(sender.tab.id);
					} else{
						f_callback('reload2'); 
						console.log('reload');
					}
				}
				/*
				
				
				*/
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrDOGEfree].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDOGEfree].boolStartingDOGE);
				console.log(Exc);
				if(tabidDOGEfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDOGEfree.remove(sender.tab.id);
				
			}
			
	}
	if(tabidDOGEfree.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'dogecoinfree.info'){
			tabidDOGEfree.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDOGEfree.length == 0){
				setTimeout(function() {
					if(tabidDOGEfree.length == 0){
						Programms[indexPrDOGEfree].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDOGEfree, changeInfo, tab){
//	console.log(tab);console.log(tabidDOGEfree);
//});





