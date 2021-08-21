var indexPrSpeedcoin;

var colImgSpeedcoin = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidSpeedcoin = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonSpeedcoin(indexPrfree){
	block = true;
	indexPrSpeedcoin = indexPrfree;
	for (var i = 0; i < tabidSpeedcoin.length; i++) { 
		try{
			chrome.tabs.remove(tabidSpeedcoin[i]);
		}catch(Exc){} 
	}
	Programms[indexPrSpeedcoin].boolStartingDOGE = true;
	
	colImgSpeedcoin = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Speedcoin start");
	injectScriptSpeedcoin('https://speedcoins.xyz/faucet');
	console.log("Speedcoin end");
}

	

function injectScriptSpeedcoin(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidSpeedcoin.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'speedcoins.xyz'){
		console.log('startMes');
		
		if(!tabidSpeedcoin.contains(sender.tab.id))tabidSpeedcoin.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Speedcoin.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrSpeedcoin].startintervalDOGE = Programms[indexPrSpeedcoin].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrSpeedcoin].text_test = text_test_d.textContent;
				
				
				Programms[indexPrSpeedcoin].boolStartingDOGE = false;
				block = false;
				if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSpeedcoin.remove(sender.tab.id);
				}
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Speedcoininput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Speedcoin.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrSpeedcoin].balance = parseFloat(balance);
				}
				
				Programms[indexPrSpeedcoin].boolStartingDOGE = false;
				block = false;
				if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSpeedcoin.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrSpeedcoin].boolStartingDOGE = false;
						block = false;
						if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSpeedcoin.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Speedcoinclaimagain.js'});
						
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
						Programms[indexPrSpeedcoin].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrSpeedcoin].boolStartingDOGE = false;
						Programms[indexPrSpeedcoin].intervalDOGE = 1000;
						block = false;
						if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSpeedcoin.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrSpeedcoin].boolStartingDOGE = false;
							Programms[indexPrSpeedcoin].userBool = false;
							block = false;
							console.log(Programms[indexPrSpeedcoin].boolStartingDOGE);
							console.log(Exc);
							if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidSpeedcoin.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SpeedcoinInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SpeedcoinShort.js'});
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
							Programms[indexPrSpeedcoin].boolStartingDOGE = false;
							Programms[indexPrSpeedcoin].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrSpeedcoin].startintervalDOGE = 0;
							console.log(Programms[indexPrSpeedcoin].intervalDOGE);
							block = false;						
							if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidSpeedcoin.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrSpeedcoin].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrSpeedcoin].boolStartingDOGE);
				console.log(Exc);
				if(tabidSpeedcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSpeedcoin.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidSpeedcoin.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'speedcoins.xyz'){
			tabidSpeedcoin.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidSpeedcoin.length == 0){
				setTimeout(function() {
					if(tabidSpeedcoin.length == 0){
						Programms[indexPrSpeedcoin].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidSpeedcoin, changeInfo, tab){
//	console.log(tab);console.log(tabidSpeedcoin);
//});





