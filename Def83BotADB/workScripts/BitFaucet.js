var indexPrBitFaucet;


var tabidBitFaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitFaucet(indexPrfree){
	block = true;
	indexPrBitFaucet = indexPrfree;
	Programms[indexPrBitFaucet].boolStartingDOGE = true;
	for (var i = 0; i < tabidBitFaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitFaucet[i]);
		}catch(Exc){} 
	}
	firstTemp = true;
	console.log("BitFaucet start");
	injectScriptBitFaucet('https://bitfaucet.app/faucet');
	console.log("BitFaucet end");
	
}



function injectScriptBitFaucet(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidBitFaucet.push(tab.id);
	
  });
  
};

var firstTemp = true;
//https://bitfaucet.app
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'bitfaucet.app'){
		console.log('startMes');
		if(!tabidBitFaucet.contains(sender.tab.id))tabidBitFaucet.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				
				var nologin = frag.getElementById('form-field-wallet_addr');
				console.log(nologin)
				if(nologin != null){
					
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitFaucetinput.js'});
						return;
					
				}
				
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitFaucetinput2.js'});
						return;
					}
				}
				
				var balanceDIV = frag.getElementById('balance');
				if(balanceDIV == null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
*/
				
				
				if (frag.getElementById('header') == null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				var balance = frag.getElementById('header').getElementsByClassName('balance f-w-700 f-s-15')[0].textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrBitFaucet].balance != 0 && Programms[indexPrBitFaucet].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrBitFaucet].balance);
					Programms[indexPrBitFaucet].balance = parseFloat(balance);
					Programms[indexPrBitFaucet].boolStartingDOGE = false;
					block = false;
					if(tabidBitFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitFaucet.remove(sender.tab.id);
					return;
				}
				Programms[indexPrBitFaucet].balance = parseFloat(balance);
				/*
				
				var timer = frag.querySelectorAll('span')[2]; 
				if (timer != null){
					var timertext = timer.textContent.split(' ')[2];
					if (timertext == 'remaining'){
						console.log(timer.textContent);
						var minutest = parseInt(timer.textContent.split(' ')[0]);
						if(timer.textContent.split(' ')[1]=='minutes'){
							
							Programms[indexPrBitFaucet].startintervalDOGE = 14405 -  minutest * 60 - 2;
							console.log(minutest);
						}else{
							Programms[indexPrBitFaucet].startintervalDOGE = 14405 -  2;
						}
						
						Programms[indexPrBitFaucet].boolStartingDOGE = false;
						block = false;
						if(tabidBitFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitFaucet.remove(sender.tab.id);
						return;
					}
				}
				*/
				if (firstTemp){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitFaucet.js'});
					firstTemp = false;
				}
				
				var succses = frag.getElementById('claimMsg');
				if (succses !=null){
					if (succses.textContent == "Error! Your last claim was less then 30 minutes ago."){
						Programms[indexPrBitFaucet].boolStartingDOGE = false;
						block = false;
						if(tabidBitFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitFaucet.remove(sender.tab.id);
						return;
					}
					console.log(succses.textContent);
					if (succses.textContent != ""){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitFaucetRel.js'});
					}
					
				}
				
				var btnClaim = frag.getElementById('btnClaim');
				if (btnClaim.getAttribute("disabled")=="disabled"){
					Programms[indexPrBitFaucet].boolStartingDOGE = false;
					block = false;
					if(tabidBitFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitFaucet.remove(sender.tab.id);
					return;
				}
				f_callback('reload'); 
				console.log('reload');
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrBitFaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitFaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitFaucet.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBitFaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bitfaucet.app'){
			tabidBitFaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBitFaucet.length == 0){
				setTimeout(function() {
					if(tabidBitFaucet.length == 0){
						Programms[indexPrBitFaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitFaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidBitFaucet);
//});





