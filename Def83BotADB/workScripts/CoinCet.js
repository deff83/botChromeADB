var indexPrCoinCet;

var colImgCoinCet = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCoinCet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCoinCet(indexPrfree){
	block = true;
	indexPrCoinCet = indexPrfree;
	for (var i = 0; i < tabidCoinCet.length; i++) { 
		try{
			chrome.tabs.remove(tabidCoinCet[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCoinCet].boolStartingDOGE = true;
	
	colImgCoinCet = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CoinCet start");
	injectScriptCoinCet('https://coincet.com/faucet');
	console.log("CoinCet end");
}

	

function injectScriptCoinCet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCoinCet.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src); 
	if(request.src == 'coincet.com'){
		console.log('startMes');
		
		if(!tabidCoinCet.contains(sender.tab.id))tabidCoinCet.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinCet.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCoinCet].startintervalDOGE = Programms[indexPrCoinCet].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-lg-6 col-xl-3')[3];
				if (text_test_d!=null){
					Programms[indexPrCoinCet].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCoinCet].boolStartingDOGE = false;
				block = false;
				if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinCet.remove(sender.tab.id);
				}
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrCoinCet].boolStartingDOGE = false;
					block = false;
					if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCoinCet.remove(sender.tab.id);
				}
				
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinCetinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinCet.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCoinCet].balance = parseFloat(balance);
				}
				
				Programms[indexPrCoinCet].boolStartingDOGE = false;
				block = false;
				if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinCet.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCoinCet].boolStartingDOGE = false;
						block = false;
						if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinCet.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinCetclaimagain.js'});
						
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
						Programms[indexPrCoinCet].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCoinCet].boolStartingDOGE = false;
						Programms[indexPrCoinCet].intervalDOGE = 1000;
						block = false;
						if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinCet.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCoinCet].boolStartingDOGE = false;
							Programms[indexPrCoinCet].userBool = false;
							block = false;
							console.log(Programms[indexPrCoinCet].boolStartingDOGE);
							console.log(Exc);
							if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinCet.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinCetInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinCetShort.js'});
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
							Programms[indexPrCoinCet].boolStartingDOGE = false;
							Programms[indexPrCoinCet].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCoinCet].startintervalDOGE = 0;
							console.log(Programms[indexPrCoinCet].intervalDOGE);
							block = false;						
							if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinCet.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCoinCet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCoinCet].boolStartingDOGE);
				console.log(Exc);
				if(tabidCoinCet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinCet.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCoinCet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'coincet.com'){
			tabidCoinCet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCoinCet.length == 0){
				setTimeout(function() {
					if(tabidCoinCet.length == 0){
						Programms[indexPrCoinCet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCoinCet, changeInfo, tab){
//	console.log(tab);console.log(tabidCoinCet);
//});





