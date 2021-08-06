var indexPrCryptoUSDT;


var tabidCryptoUSDT = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCryptoUSDT(indexPrfree){
	block = true;
	indexPrCryptoUSDT = indexPrfree;
	Programms[indexPrCryptoUSDT].boolStartingDOGE = true;
	for (var i = 0; i < tabidCryptoUSDT.length; i++) { 
		try{
			chrome.tabs.remove(tabidCryptoUSDT[i]);
		}catch(Exc){} 
	}
	console.log("CryptoUSDT start");
	injectScriptCryptoUSDT('https://freetether.com/free');
	console.log("CryptoUSDT end");
}



function injectScriptCryptoUSDT(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidCryptoUSDT.push(tab.id);
	
  });
  
};

//ethereumfree.info
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'freetether.com'){
		console.log('startMes');
		if(!tabidCryptoUSDT.contains(sender.tab.id))tabidCryptoUSDT.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var main = frag.querySelectorAll('main')[0].getElementsByClassName('container')[0];
				
				var header = frag.querySelectorAll('header')[0].getElementsByClassName('container')[0];
				
				if (header==null){
					header = frag.querySelectorAll('header')[0].getElementsByClassName('container-fluid')[0];
				}
				
				var email_f = main.getElementsByClassName('form-control email')[0];
				
				var password_f = main.getElementsByClassName('form-control password')[0];
				
				console.log(header);
				
				console.log(main);
				
				
				if(email_f != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoUSDTinput.js'});
					return;
				}
				
				
				var balancediv = header.getElementsByClassName('navbar-coins bg-1')[0].getElementsByTagName('a')[0]; 
				
				if(balancediv != null /* && balancediv.textContent.split(' ')[1] == 'USDT'*/){
					var balance = balancediv.textContent.split(' ')[0];
					Programms[indexPrCryptoUSDT].balance = parseFloat(balance);
				}
				
				var buttomclaim = main.getElementsByClassName('main-button-2 roll-button bg-2')[0];
				
				
				if (buttomclaim!=null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoUSDT.js'});
				}
				
				
				var clock = main.getElementsByClassName('timeout-container')[0];
				console.log(clock);
				
				if (clock != null){
					var minutes = clock.getElementsByClassName('digits')[0].textContent;
					var seconds = clock.getElementsByClassName('digits')[1].textContent;
					
					
					console.log(minutes);
					console.log(seconds);
					if (minutes==''){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					var second = seconds * 1 + minutes *60 + 10;
					console.log(second);
					
					Programms[indexPrCryptoUSDT].boolStartingDOGE = false;
					col_freeETH = 0;
					Programms[indexPrCryptoUSDT].startintervalDOGE = Programms[indexPrCryptoUSDT].intervalDOGE - second;
					block = false;
					if(tabidCryptoUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCryptoUSDT.remove(sender.tab.id);
					return;
					
				}
				
				
				
				
				
				
				
				
				
				
				
				/*
				var login = frag.querySelectorAll('div')[0].getElementsByClassName('signup-container-heading')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoUSDTinput2.js'});
					return;
				}
				
				
				
				var balance = balancediv.textContent.split(' ')[0]; 
				//выход по балансу
				if(Programms[indexPrCryptoUSDT].balance != 0 && Programms[indexPrCryptoUSDT].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrCryptoUSDT].balance);
					Programms[indexPrCryptoUSDT].balance = parseFloat(balance);
					Programms[indexPrCryptoUSDT].boolStartingDOGE = false;
					block = false;
					if(tabidCryptoUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCryptoUSDT.remove(sender.tab.id);
					return;
				}
				Programms[indexPrCryptoUSDT].balance = parseFloat(balance);
				
				
				
				
				
				var claimdiv = frag.getElementById('get-free'); 
				
				if (claimdiv != null && claimdiv.getAttribute('style')=="cursor: pointer;"){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoUSDT.js'});
					
				}else{
					if ( claimdiv.getAttribute('style')=='display: none; cursor: pointer;'){
						Programms[indexPrCryptoUSDT].boolStartingDOGE = false;
						block = false;
						if(tabidCryptoUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCryptoUSDT.remove(sender.tab.id);
					} else{
						f_callback('reload2'); 
						console.log('reload');
					}
				}
				/*
				
				
				*/
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrCryptoUSDT].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCryptoUSDT].boolStartingDOGE);
				console.log(Exc);
				if(tabidCryptoUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCryptoUSDT.remove(sender.tab.id);
				
			}
			
	}
	if(tabidCryptoUSDT.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freetether.com'){
			tabidCryptoUSDT.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCryptoUSDT.length == 0){
				setTimeout(function() {
					if(tabidCryptoUSDT.length == 0){
						Programms[indexPrCryptoUSDT].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCryptoUSDT, changeInfo, tab){
//	console.log(tab);console.log(tabidCryptoUSDT);
//});





