var indexPrCoinPayUf;

var colImgCoinPayUf = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCoinPayUf = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCoinPayUf(indexPrfree){
	block = true;
	indexPrCoinPayUf = indexPrfree;
	for (var i = 0; i < tabidCoinPayUf.length; i++) { 
		try{
			chrome.tabs.remove(tabidCoinPayUf[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCoinPayUf].boolStartingDOGE = true;
	
	colImgCoinPayUf = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CoinPayUf start");
	injectScriptCoinPayUf('https://coinpayufree.com/faucet');
	console.log("CoinPayUf end");
}

	

function injectScriptCoinPayUf(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCoinPayUf.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'coinpayufree.com'){
		console.log('startMes');
		
		if(!tabidCoinPayUf.contains(sender.tab.id))tabidCoinPayUf.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayUf.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCoinPayUf].startintervalDOGE = Programms[indexPrCoinPayUf].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-md-6 col-xl-3 mb-3 mb-xl-3')[3];
				if (text_test_d!=null){
					Programms[indexPrCoinPayUf].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCoinPayUf].boolStartingDOGE = false;
				block = false;
				if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinPayUf.remove(sender.tab.id);
				}
				
								
				var idtokenBalance = frag.getElementById('usdBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrCnKFaucet].boolStartingDOGE = false;
					block = false;
					if(tabidCnKFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCnKFaucet.remove(sender.tab.id);
				}
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayUfinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayUf.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCoinPayUf].balance = parseFloat(balance);
				}
				
				Programms[indexPrCoinPayUf].boolStartingDOGE = false;
				block = false;
				if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinPayUf.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCoinPayUf].boolStartingDOGE = false;
						block = false;
						if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinPayUf.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayUfclaimagain.js'});
						
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
						Programms[indexPrCoinPayUf].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCoinPayUf].boolStartingDOGE = false;
						Programms[indexPrCoinPayUf].intervalDOGE = 1000;
						block = false;
						if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinPayUf.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCoinPayUf].boolStartingDOGE = false;
							Programms[indexPrCoinPayUf].userBool = false;
							block = false;
							console.log(Programms[indexPrCoinPayUf].boolStartingDOGE);
							console.log(Exc);
							if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinPayUf.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayUfInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayUfShort.js'});
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
							Programms[indexPrCoinPayUf].boolStartingDOGE = false;
							Programms[indexPrCoinPayUf].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCoinPayUf].startintervalDOGE = 0;
							console.log(Programms[indexPrCoinPayUf].intervalDOGE);
							block = false;						
							if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinPayUf.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCoinPayUf].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCoinPayUf].boolStartingDOGE);
				console.log(Exc);
				if(tabidCoinPayUf.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinPayUf.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCoinPayUf.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'coinpayufree.com'){
			tabidCoinPayUf.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCoinPayUf.length == 0){
				setTimeout(function() {
					if(tabidCoinPayUf.length == 0){
						Programms[indexPrCoinPayUf].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCoinPayUf, changeInfo, tab){
//	console.log(tab);console.log(tabidCoinPayUf);
//});





