var indexPrMultoiCrypt;

var colImgMultoiCrypt = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidMultoiCrypt = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonMultoiCrypt(indexPrfree){
	block = true;
	indexPrMultoiCrypt = indexPrfree;
	for (var i = 0; i < tabidMultoiCrypt.length; i++) { 
		try{
			chrome.tabs.remove(tabidMultoiCrypt[i]);
		}catch(Exc){} 
	}
	Programms[indexPrMultoiCrypt].boolStartingDOGE = true;
	
	colImgMultoiCrypt = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("MultoiCrypt start");
	injectScriptMultoiCrypt('https://multicrypt.online/trx/');
	console.log("MultoiCrypt end");
}

	

function injectScriptMultoiCrypt(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidMultoiCrypt.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'multicrypt.online'){
		console.log('startMes');
		
		if(!tabidMultoiCrypt.contains(sender.tab.id))tabidMultoiCrypt.push(sender.tab.id);
		
		try{
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('layout-wrapper');
				
				//vj2x1VRVx9
				
				
				return;
				
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MultoiCrypt.js'});
					
					antibotlink(idBody, request.src);
					
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrMultoiCrypt].startintervalDOGE = Programms[indexPrMultoiCrypt].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrMultoiCrypt].text_test = text_test_d.textContent;
				
				
				Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
				block = false;
				if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidMultoiCrypt.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
					block = false;
					if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidMultoiCrypt.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MultoiCryptinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MultoiCrypt.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrMultoiCrypt].balance = parseFloat(balance);
				}
				
				Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
				block = false;
				if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidMultoiCrypt.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
						block = false;
						if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidMultoiCrypt.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MultoiCryptclaimagain.js'});
						
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
						Programms[indexPrMultoiCrypt].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
						Programms[indexPrMultoiCrypt].intervalDOGE = 1000;
						block = false;
						if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidMultoiCrypt.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
							Programms[indexPrMultoiCrypt].userBool = false;
							block = false;
							console.log(Programms[indexPrMultoiCrypt].boolStartingDOGE);
							console.log(Exc);
							if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidMultoiCrypt.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MultoiCryptInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MultoiCryptShort.js'});
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
							Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
							Programms[indexPrMultoiCrypt].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrMultoiCrypt].startintervalDOGE = 0;
							console.log(Programms[indexPrMultoiCrypt].intervalDOGE);
							block = false;						
							if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidMultoiCrypt.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrMultoiCrypt].boolStartingDOGE);
				console.log(Exc);
				if(tabidMultoiCrypt.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidMultoiCrypt.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidMultoiCrypt.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'multicrypt.online'){
			tabidMultoiCrypt.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidMultoiCrypt.length == 0){
				setTimeout(function() {
					if(tabidMultoiCrypt.length == 0){
						Programms[indexPrMultoiCrypt].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidMultoiCrypt, changeInfo, tab){
//	console.log(tab);console.log(tabidMultoiCrypt);
//});





