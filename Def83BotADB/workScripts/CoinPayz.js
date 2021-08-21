var indexPrCoinPayz;

var colImgCoinPayz = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCoinPayz = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCoinPayz(indexPrfree){
	block = true;
	indexPrCoinPayz = indexPrfree;
	for (var i = 0; i < tabidCoinPayz.length; i++) { 
		try{
			chrome.tabs.remove(tabidCoinPayz[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCoinPayz].boolStartingDOGE = true;
	
	colImgCoinPayz = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CoinPayz start");
	injectScriptCoinPayz('https://coinpayz.xyz/faucet');
	console.log("CoinPayz end");
}

	

function injectScriptCoinPayz(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCoinPayz.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'coinpayz.xyz'){
		console.log('startMes');
		
		if(!tabidCoinPayz.contains(sender.tab.id))tabidCoinPayz.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayz.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCoinPayz].startintervalDOGE = Programms[indexPrCoinPayz].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-sm-12 col-lg-6 col-md-6 col-xl-3')[3];
				if (text_test_d!=null){
					Programms[indexPrCoinPayz].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCoinPayz].boolStartingDOGE = false;
				block = false;
				if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinPayz.remove(sender.tab.id);
				}
				
								
				var idtokenBalance = frag.getElementById('ref-link');
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayzinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayz.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCoinPayz].balance = parseFloat(balance);
				}
				
				Programms[indexPrCoinPayz].boolStartingDOGE = false;
				block = false;
				if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinPayz.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCoinPayz].boolStartingDOGE = false;
						block = false;
						if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinPayz.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayzclaimagain.js'});
						
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
						Programms[indexPrCoinPayz].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCoinPayz].boolStartingDOGE = false;
						Programms[indexPrCoinPayz].intervalDOGE = 1000;
						block = false;
						if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinPayz.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCoinPayz].boolStartingDOGE = false;
							Programms[indexPrCoinPayz].userBool = false;
							block = false;
							console.log(Programms[indexPrCoinPayz].boolStartingDOGE);
							console.log(Exc);
							if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinPayz.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayzInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinPayzShort.js'});
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
							Programms[indexPrCoinPayz].boolStartingDOGE = false;
							Programms[indexPrCoinPayz].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCoinPayz].startintervalDOGE = 0;
							console.log(Programms[indexPrCoinPayz].intervalDOGE);
							block = false;						
							if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinPayz.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCoinPayz].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCoinPayz].boolStartingDOGE);
				console.log(Exc);
				if(tabidCoinPayz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinPayz.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCoinPayz.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'coinpayz.xyz'){
			tabidCoinPayz.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCoinPayz.length == 0){
				setTimeout(function() {
					if(tabidCoinPayz.length == 0){
						Programms[indexPrCoinPayz].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCoinPayz, changeInfo, tab){
//	console.log(tab);console.log(tabidCoinPayz);
//});





