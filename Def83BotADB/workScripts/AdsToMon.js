var indexPrAdsToMon;

var colImgAdsToMon = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidAdsToMon = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonAdsToMon(indexPrfree){
	block = true;
	indexPrAdsToMon = indexPrfree;
	for (var i = 0; i < tabidAdsToMon.length; i++) { 
		try{
			chrome.tabs.remove(tabidAdsToMon[i]);
		}catch(Exc){} 
	}
	Programms[indexPrAdsToMon].boolStartingDOGE = true;
	
	colImgAdsToMon = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("AdsToMon start");
	injectScriptAdsToMon('https://adstomoney.com/faucet');
	console.log("AdsToMon end");
}

	

function injectScriptAdsToMon(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidAdsToMon.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'adstomoney.com'){
		console.log('startMes');
		
		if(!tabidAdsToMon.contains(sender.tab.id))tabidAdsToMon.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/AdsToMon.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrAdsToMon].startintervalDOGE = Programms[indexPrAdsToMon].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrAdsToMon].text_test = text_test_d.textContent;
				
				
				Programms[indexPrAdsToMon].boolStartingDOGE = false;
				block = false;
				if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidAdsToMon.remove(sender.tab.id);
				}
				//кнопка логин
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrAdsToMon].boolStartingDOGE = false;
					block = false;
					if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidAdsToMon.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/AdsToMoninput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/AdsToMon.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrAdsToMon].balance = parseFloat(balance);
				}
				
				Programms[indexPrAdsToMon].boolStartingDOGE = false;
				block = false;
				if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidAdsToMon.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrAdsToMon].boolStartingDOGE = false;
						block = false;
						if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidAdsToMon.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/AdsToMonclaimagain.js'});
						
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
						Programms[indexPrAdsToMon].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrAdsToMon].boolStartingDOGE = false;
						Programms[indexPrAdsToMon].intervalDOGE = 1000;
						block = false;
						if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidAdsToMon.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrAdsToMon].boolStartingDOGE = false;
							Programms[indexPrAdsToMon].userBool = false;
							block = false;
							console.log(Programms[indexPrAdsToMon].boolStartingDOGE);
							console.log(Exc);
							if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidAdsToMon.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/AdsToMonInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/AdsToMonShort.js'});
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
							Programms[indexPrAdsToMon].boolStartingDOGE = false;
							Programms[indexPrAdsToMon].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrAdsToMon].startintervalDOGE = 0;
							console.log(Programms[indexPrAdsToMon].intervalDOGE);
							block = false;						
							if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidAdsToMon.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrAdsToMon].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrAdsToMon].boolStartingDOGE);
				console.log(Exc);
				if(tabidAdsToMon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidAdsToMon.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidAdsToMon.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'adstomoney.com'){
			tabidAdsToMon.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrAdsToMon].alreadytrue == true){
				Programms[indexPrAdsToMon].startintervalDOGE = Programms[indexPrAdsToMon].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidAdsToMon.length == 0){
				setTimeout(function() {
					if(tabidAdsToMon.length == 0){
						Programms[indexPrAdsToMon].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidAdsToMon, changeInfo, tab){
//	console.log(tab);console.log(tabidAdsToMon);
//});





