var indexPrClaimTRX;

var colImgClaimTRX = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidClaimTRX = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonClaimTRX(indexPrfree){
	block = true;
	indexPrClaimTRX = indexPrfree;
	for (var i = 0; i < tabidClaimTRX.length; i++) { 
		try{
			chrome.tabs.remove(tabidClaimTRX[i]);
		}catch(Exc){} 
	}
	Programms[indexPrClaimTRX].boolStartingDOGE = true;
	
	colImgClaimTRX = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ClaimTRX start");
	injectScriptClaimTRX('https://claimtrx.xyz/faucet');
	console.log("ClaimTRX end");
}

	

function injectScriptClaimTRX(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidClaimTRX.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'claimtrx.xyz'){
		console.log('startMes');
		
		if(!tabidClaimTRX.contains(sender.tab.id))tabidClaimTRX.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimTRX.js'});
					return;
				}
				//return;
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrClaimTRX].startintervalDOGE = Programms[indexPrClaimTRX].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-md-6 col-xl-3 mb-3 mb-xl-3')[3];
				if (text_test_d!=null){
					Programms[indexPrClaimTRX].text_test = text_test_d.textContent;
				
				
				Programms[indexPrClaimTRX].boolStartingDOGE = false;
				block = false;
				if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimTRX.remove(sender.tab.id);
				}
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrClaimTRX].boolStartingDOGE = false;
					block = false;
					if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidClaimTRX.remove(sender.tab.id);
				}
				
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimTRXinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimTRX.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrClaimTRX].balance = parseFloat(balance);
				}
				
				Programms[indexPrClaimTRX].boolStartingDOGE = false;
				block = false;
				if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimTRX.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrClaimTRX].boolStartingDOGE = false;
						block = false;
						if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClaimTRX.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimTRXclaimagain.js'});
						
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
						Programms[indexPrClaimTRX].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrClaimTRX].boolStartingDOGE = false;
						Programms[indexPrClaimTRX].intervalDOGE = 1000;
						block = false;
						if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClaimTRX.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrClaimTRX].boolStartingDOGE = false;
							Programms[indexPrClaimTRX].userBool = false;
							block = false;
							console.log(Programms[indexPrClaimTRX].boolStartingDOGE);
							console.log(Exc);
							if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidClaimTRX.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimTRXInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimTRXShort.js'});
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
							Programms[indexPrClaimTRX].boolStartingDOGE = false;
							Programms[indexPrClaimTRX].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrClaimTRX].startintervalDOGE = 0;
							console.log(Programms[indexPrClaimTRX].intervalDOGE);
							block = false;						
							if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidClaimTRX.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrClaimTRX].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClaimTRX].boolStartingDOGE);
				console.log(Exc);
				if(tabidClaimTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimTRX.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidClaimTRX.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'claimtrx.xyz'){
			tabidClaimTRX.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidClaimTRX.length == 0){
				setTimeout(function() {
					if(tabidClaimTRX.length == 0){
						Programms[indexPrClaimTRX].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidClaimTRX, changeInfo, tab){
//	console.log(tab);console.log(tabidClaimTRX);
//});





