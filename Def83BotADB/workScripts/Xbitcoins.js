var indexPrXbitcoins;

var colImgXbitcoins = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidXbitcoins = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonXbitcoins(indexPrfree){
	block = true;
	indexPrXbitcoins = indexPrfree;
	for (var i = 0; i < tabidXbitcoins.length; i++) { 
		try{
			chrome.tabs.remove(tabidXbitcoins[i]);
		}catch(Exc){} 
	}
	Programms[indexPrXbitcoins].boolStartingDOGE = true;
	
	colImgXbitcoins = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Xbitcoins start");
	injectScriptXbitcoins('https://www.1xbitcoins.com/faucet');
	console.log("Xbitcoins end");
}

	

function injectScriptXbitcoins(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidXbitcoins.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'www.1xbitcoins.com'){
		console.log('startMes 1x');
		
		if(!tabidXbitcoins.contains(sender.tab.id))tabidXbitcoins.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				console.log('tyt');
				var idBody = frag.getElementById('layout-wrapper');
				
				if (idBody==null){
					return;
				}
				
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Xbitcoins.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrXbitcoins].startintervalDOGE = Programms[indexPrXbitcoins].intervalDOGE - second;
				}
				
				//////////////////////////////////////////----------------------------////////////////////////
				var idusdBalance = frag.getElementById('usdBalance');
				if(idusdBalance!=null){
					Programms[indexPrXbitcoins].boolStartingDOGE = false;
					block = false;
					if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXbitcoins.remove(sender.tab.id);
				}
				/////////////////////---------------------/////////////////
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrXbitcoins].text_test = text_test_d.textContent;
					
					Programms[indexPrXbitcoins].boolStartingDOGE = false;
					block = false;
					if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXbitcoins.remove(sender.tab.id);
					
				}
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrXbitcoins].boolStartingDOGE = false;
					block = false;
					if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXbitcoins.remove(sender.tab.id);
				}
				
				
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Xbitcoinsinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Xbitcoins.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrXbitcoins].balance = parseFloat(balance);
				}
				
				Programms[indexPrXbitcoins].boolStartingDOGE = false;
				block = false;
				if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXbitcoins.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrXbitcoins].boolStartingDOGE = false;
						block = false;
						if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXbitcoins.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Xbitcoinsclaimagain.js'});
						
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
						Programms[indexPrXbitcoins].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrXbitcoins].boolStartingDOGE = false;
						Programms[indexPrXbitcoins].intervalDOGE = 1000;
						block = false;
						if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXbitcoins.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrXbitcoins].boolStartingDOGE = false;
							Programms[indexPrXbitcoins].userBool = false;
							block = false;
							console.log(Programms[indexPrXbitcoins].boolStartingDOGE);
							console.log(Exc);
							if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidXbitcoins.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XbitcoinsInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XbitcoinsShort.js'});
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
							Programms[indexPrXbitcoins].boolStartingDOGE = false;
							Programms[indexPrXbitcoins].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrXbitcoins].startintervalDOGE = 0;
							console.log(Programms[indexPrXbitcoins].intervalDOGE);
							block = false;						
							if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidXbitcoins.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrXbitcoins].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrXbitcoins].boolStartingDOGE);
				console.log(Exc);
				if(tabidXbitcoins.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXbitcoins.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidXbitcoins.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'www.1xbitcoins.com'){
			tabidXbitcoins.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidXbitcoins.length == 0){
				setTimeout(function() {
					if(tabidXbitcoins.length == 0){
						Programms[indexPrXbitcoins].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidXbitcoins, changeInfo, tab){
//	console.log(tab);console.log(tabidXbitcoins);
//});





