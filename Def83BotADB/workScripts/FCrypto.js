var indexPrFCrypto;

var colImgFCrypto = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidFCrypto = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFCrypto(indexPrfree){
	block = true;
	indexPrFCrypto = indexPrfree;
	for (var i = 0; i < tabidFCrypto.length; i++) { 
		try{
			chrome.tabs.remove(tabidFCrypto[i]);
		}catch(Exc){} 
	}
	Programms[indexPrFCrypto].boolStartingDOGE = true;
	
	colImgFCrypto = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("FCrypto start");
	injectScriptFCrypto('https://faucetcrypto.com/dashboard');
	console.log("FCrypto end");
}

	

function injectScriptFCrypto(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFCrypto.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'faucetcrypto.com'){
		console.log('startMes');
		
		if(!tabidFCrypto.contains(sender.tab.id))tabidFCrypto.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.querySelectorAll('div')[0];
				
				/*
				
				var idclaimbutn = idBody.getElementsByClassName('grid grid-rows-2 sm:grid-rows-1 grid-flow-col gap-4 justify-items-center px-8')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					
				}*/
				
				var timer = idBody.getElementsByClassName('notranslate text-4xl mb-1 font-bold')[0];
				console.log(timer);
				
				if (timer!=null){
					
					if (timer.textContent=='Ready To Claim!'){
						
						
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCryptoGetRew.js'});
					//	https://faucetcrypto.com/task/faucet-claim
						
						return;
					}
					
					if (timer.textContent == '??:??:??'){
						
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					var minute = timer.textContent.split(':')[1];
					var secondsfg = timer.textContent.split(':')[2];
					
					
					var second = minute*60+(secondsfg)*1; 
					console.log(second);
					Programms[indexPrFCrypto].startintervalDOGE = Programms[indexPrFCrypto].intervalDOGE - second;
					
					Programms[indexPrFCrypto].boolStartingDOGE = false;
					block = false;
					if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFCrypto.remove(sender.tab.id);
					
					/**/
				}
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCrypto.js'});
				return;
				
				/*
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFCrypto].startintervalDOGE = Programms[indexPrFCrypto].intervalDOGE - second;
				}
				*/
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrFCrypto].text_test = text_test_d.textContent;
				
				
				Programms[indexPrFCrypto].boolStartingDOGE = false;
				block = false;
				if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFCrypto.remove(sender.tab.id);
				}
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCryptoinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCrypto.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrFCrypto].balance = parseFloat(balance);
				}
				
				Programms[indexPrFCrypto].boolStartingDOGE = false;
				block = false;
				if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFCrypto.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrFCrypto].boolStartingDOGE = false;
						block = false;
						if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFCrypto.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCryptoclaimagain.js'});
						
					return;
				}
				
				
				if(idButtonPoleFaucet != null){
					
					//проверка саксесса
					
					var succsesButton = idButtonPoleFaucet.getElementsByClassName('alert alert-success')[0];
					var dangerField = idButtonPoleFaucet.getElementsByClassName('alert alert-danger')[0];
					
					if (succsesButton != null){
						console.log(succsesButton.textContent);
						let bal = succsesButton.textContent.split(' ')[0];
						try{
						Programms[indexPrFCrypto].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrFCrypto].boolStartingDOGE = false;
						Programms[indexPrFCrypto].intervalDOGE = 1000;
						block = false;
						if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFCrypto.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrFCrypto].boolStartingDOGE = false;
							Programms[indexPrFCrypto].userBool = false;
							block = false;
							console.log(Programms[indexPrFCrypto].boolStartingDOGE);
							console.log(Exc);
							if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFCrypto.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCryptoInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FCryptoShort.js'});
						return;
					}
					console.log(loginButton);
					
						
					/*var boolopenclaimpanel = false;
					var bodyId = frag.querySelectorAll('div');
					for (var bodyr of bodyId) {
						console.log(bodyr.getAttribute('class'));
					}
					
					
					
					
						console.log('tyt5');
						//"Your account is locked for 1262 minutes."
						if (dangerField!=null && dangerField.textContent.split(' ')[3] == "locked") {
							var min_lock = dangerField.textContent.split(' ')[5];
							Programms[indexPrFCrypto].boolStartingDOGE = false;
							Programms[indexPrFCrypto].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrFCrypto].startintervalDOGE = 0;
							console.log(Programms[indexPrFCrypto].intervalDOGE);
							block = false;						
							if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFCrypto.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFCrypto].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFCrypto].boolStartingDOGE);
				console.log(Exc);
				if(tabidFCrypto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFCrypto.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidFCrypto.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'faucetcrypto.com'){
			tabidFCrypto.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrFCrypto].alreadytrue == true){
				Programms[indexPrFCrypto].startintervalDOGE = Programms[indexPrFCrypto].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidFCrypto.length == 0){
				setTimeout(function() {
					if(tabidFCrypto.length == 0){
						Programms[indexPrFCrypto].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFCrypto, changeInfo, tab){
//	console.log(tab);console.log(tabidFCrypto);
//});





