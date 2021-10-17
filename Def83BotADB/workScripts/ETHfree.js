var indexPrETHfree;


var tabidETHfree = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonETHfree(indexPrfree){
	block = true;
	indexPrETHfree = indexPrfree;
	Programms[indexPrETHfree].boolStartingDOGE = true;
	for (var i = 0; i < tabidETHfree.length; i++) { 
		try{
			chrome.tabs.remove(tabidETHfree[i]);
		}catch(Exc){} 
	}
	console.log("ETHfree start");
	injectScriptETHfree('https://ethereumfree.info');
	console.log("ETHfree end");
}



function injectScriptETHfree(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidETHfree.push(tab.id);
	
  });
  
};

//ethereumfree.info
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'ethereumfree.info'){
		console.log('startMes');
		if(!tabidETHfree.contains(sender.tab.id))tabidETHfree.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByClassName('get-title')[0];
				var balancediv = frag.getElementById('balance'); 
				
				if(balancediv == null && nologin != null && nologin.textContent == 'Get your free Ethereum!'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ETHfreeinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[0].getElementsByClassName('signup-container-heading')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ETHfreeinput2.js'});
					return;
				}
				
				
				
				var balance = balancediv.textContent.split(' ')[0]; 
				//выход по балансу
				if(Programms[indexPrETHfree].balance != 0 && Programms[indexPrETHfree].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrETHfree].balance);
					Programms[indexPrETHfree].balance = parseFloat(balance);
					Programms[indexPrETHfree].boolStartingDOGE = false;
					block = false;
					if(tabidETHfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidETHfree.remove(sender.tab.id);
					return;
				}
				Programms[indexPrETHfree].balance = parseFloat(balance);
				
				
				
				
				
				var claimdiv = frag.getElementById('get-free'); 
				
				if (claimdiv != null && claimdiv.getAttribute('style')=="cursor: pointer;"){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ETHfree.js'});
					
				}else{
					if ( claimdiv.getAttribute('style')=='display: none; cursor: pointer;'){
						Programms[indexPrETHfree].boolStartingDOGE = false;
						block = false;
						if(tabidETHfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidETHfree.remove(sender.tab.id);
					} else{
						f_callback('reload2'); 
						console.log('reload');
					}
				}
				/*
				
				
				*/
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrETHfree].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrETHfree].boolStartingDOGE);
				console.log(Exc);
				if(tabidETHfree.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidETHfree.remove(sender.tab.id);
				
			}
			
	}
	if(tabidETHfree.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'ethereumfree.info'){
			tabidETHfree.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrETHfree].alreadytrue == true){
				Programms[indexPrETHfree].startintervalDOGE = Programms[indexPrETHfree].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidETHfree.length == 0){
				setTimeout(function() {
					if(tabidETHfree.length == 0){
						Programms[indexPrETHfree].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidETHfree, changeInfo, tab){
//	console.log(tab);console.log(tabidETHfree);
//});





