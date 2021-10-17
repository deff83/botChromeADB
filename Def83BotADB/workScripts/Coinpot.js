var indexPrCoinpot;

var colImgCoinpot = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCoinpot = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCoinpot(indexPrfree){
	block = true;
	indexPrCoinpot = indexPrfree;
	for (var i = 0; i < tabidCoinpot.length; i++) { 
		try{
			chrome.tabs.remove(tabidCoinpot[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCoinpot].boolStartingDOGE = true;
	
	colImgCoinpot = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Coinpot start");
	injectScriptCoinpot('https://coinpot.in/faucet');
	console.log("Coinpot end");
}

	

function injectScriptCoinpot(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCoinpot.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'coinpot.in'){
		console.log('startMes');
		
		if(!tabidCoinpot.contains(sender.tab.id))tabidCoinpot.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//var idBody = frag.getElementById('layout-wrapper');
				var idBody = frag.querySelectorAll('div')[0];
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinpot.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCoinpot].startintervalDOGE = Programms[indexPrCoinpot].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-lg-6 col-xl-3')[3];
				if (text_test_d!=null){
					Programms[indexPrCoinpot].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCoinpot].boolStartingDOGE = false;
				block = false;
				if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinpot.remove(sender.tab.id);
				}
				
				var idfaucetMessage = frag.getElementById('ref-code');
				console.log(idfaucetMessage);
				/*
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinpotReload.js'});
					//return;
					return;
				/*
				*/
				
				if(idfaucetMessage!=null){
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinpotReload.js'});
					/*Programms[indexPrCoinpot].boolStartingDOGE = false;
					block = false;
					if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCoinpot.remove(sender.tab.id);*/
					return;
				}
				
				
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrCoinpot].boolStartingDOGE = false;
					block = false;
					if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCoinpot.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinpotinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinpot.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCoinpot].balance = parseFloat(balance);
				}
				
				Programms[indexPrCoinpot].boolStartingDOGE = false;
				block = false;
				if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinpot.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCoinpot].boolStartingDOGE = false;
						block = false;
						if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinpot.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinpotclaimagain.js'});
						
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
						Programms[indexPrCoinpot].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCoinpot].boolStartingDOGE = false;
						Programms[indexPrCoinpot].intervalDOGE = 1000;
						block = false;
						if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinpot.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCoinpot].boolStartingDOGE = false;
							Programms[indexPrCoinpot].userBool = false;
							block = false;
							console.log(Programms[indexPrCoinpot].boolStartingDOGE);
							console.log(Exc);
							if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinpot.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinpotInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinpotShort.js'});
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
							Programms[indexPrCoinpot].boolStartingDOGE = false;
							Programms[indexPrCoinpot].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCoinpot].startintervalDOGE = 0;
							console.log(Programms[indexPrCoinpot].intervalDOGE);
							block = false;						
							if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinpot.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCoinpot].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCoinpot].boolStartingDOGE);
				console.log(Exc);
				if(tabidCoinpot.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinpot.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCoinpot.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'coinpot.in'){
			tabidCoinpot.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrCoinpot].alreadytrue == true){
				Programms[indexPrCoinpot].startintervalDOGE = Programms[indexPrCoinpot].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidCoinpot.length == 0){
				setTimeout(function() {
					if(tabidCoinpot.length == 0){
						Programms[indexPrCoinpot].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCoinpot, changeInfo, tab){
//	console.log(tab);console.log(tabidCoinpot);
//});





