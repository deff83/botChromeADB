var indexPrNitroFa;

var colImgNitroFa = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidNitroFa = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonNitroFa(indexPrfree){
	block = true;
	indexPrNitroFa = indexPrfree;
	for (var i = 0; i < tabidNitroFa.length; i++) { 
		try{
			chrome.tabs.remove(tabidNitroFa[i]);
		}catch(Exc){} 
	}
	Programms[indexPrNitroFa].boolStartingDOGE = true;
	
	colImgNitroFa = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("NitroFa start");
	injectScriptNitroFa('https://nitrofaucet.nity.fr/client/faucet.php');
	console.log("NitroFa end");
}

	

function injectScriptNitroFa(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidNitroFa.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'nitrofaucet.nity.fr'){
		console.log('startMes');
		
		if(!tabidNitroFa.contains(sender.tab.id))tabidNitroFa.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				//---------------------------block Deff83---------------------------------------//
				var fragment = document.createDocumentFragment();
				var div_1 = document.createElement('div');
				div_1.id='deff83';
				fragment.appendChild(div_1);
				fragment.getElementById('deff83').appendChild(frag);
				console.log('Deff83', fragment);
				frag = fragment;
				//-----------------------------------------------------------------------------//
				
				var idBody = frag.getElementById('deff83');
				if (idBody==null){
					return;
				}
				
				var balance = frag.getElementById('btcBalance');
				//var idBody = frag.querySelectorAll('div')[0];
				
				
				
				if (balance==null){
					
					return;
				}
				try{
				Programms[indexPrNitroFa].balance = parseFloat(balance.textContent.split('BTC')[0]);
				}catch(Exc){console.log(Exc);}
				
				
								
				
				var idclaimbutn = frag.getElementById('claimButton');
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFa.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('counter');
				//var idsecond = frag.getElementById('second');
				console.log(idminute.textContent);
				if (idminute.textContent.split(' ')[1]==''){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				
				
				
				if(idminute!= null){
					
					var minute = idminute.textContent.split(' ')[1];
					var secondsfg = idminute.textContent.split(' ')[2];
					console.log(minute);
					console.log(secondsfg);
					if (secondsfg!=null) {
						minute = minute.split('m')[0];
						secondsfg = secondsfg.split('s')[0];
						
						
						var second = minute*60+(secondsfg)*1; 
						
						
						
						console.log(second);
						Programms[indexPrNitroFa].startintervalDOGE = Programms[indexPrNitroFa].intervalDOGE - second;
						
						
						
						
						
						
						
						
						
					}else{
					}
					
					
					
				}
				Programms[indexPrNitroFa].boolStartingDOGE = false;
				block = false;
				if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidNitroFa.remove(sender.tab.id);
				return;
				
				/*
				var text_test_d = idBody.getElementsByClassName('col-lg-6 col-xl-3')[3];
				if (text_test_d!=null){
					Programms[indexPrNitroFa].text_test = text_test_d.textContent;
				
				
				Programms[indexPrNitroFa].boolStartingDOGE = false;
				block = false;
				if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidNitroFa.remove(sender.tab.id);
				}
				
				var idfaucetMessage = frag.getElementById('ref-code');
				console.log(idfaucetMessage);
				/*
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFaReload.js'});
					//return;
					return;
				/*
				*/
				/*
				if(idfaucetMessage==null){
					Programms[indexPrNitroFa].boolStartingDOGE = false;
					block = false;
					if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidNitroFa.remove(sender.tab.id);
					return;
				}
				
				
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrNitroFa].boolStartingDOGE = false;
					block = false;
					if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidNitroFa.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFainput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFa.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrNitroFa].balance = parseFloat(balance);
				}
				
				Programms[indexPrNitroFa].boolStartingDOGE = false;
				block = false;
				if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidNitroFa.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrNitroFa].boolStartingDOGE = false;
						block = false;
						if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidNitroFa.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFaclaimagain.js'});
						
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
						Programms[indexPrNitroFa].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrNitroFa].boolStartingDOGE = false;
						Programms[indexPrNitroFa].intervalDOGE = 1000;
						block = false;
						if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidNitroFa.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrNitroFa].boolStartingDOGE = false;
							Programms[indexPrNitroFa].userBool = false;
							block = false;
							console.log(Programms[indexPrNitroFa].boolStartingDOGE);
							console.log(Exc);
							if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidNitroFa.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFaInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/NitroFaShort.js'});
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
							Programms[indexPrNitroFa].boolStartingDOGE = false;
							Programms[indexPrNitroFa].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrNitroFa].startintervalDOGE = 0;
							console.log(Programms[indexPrNitroFa].intervalDOGE);
							block = false;						
							if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidNitroFa.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrNitroFa].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrNitroFa].boolStartingDOGE);
				console.log(Exc);
				if(tabidNitroFa.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidNitroFa.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidNitroFa.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'nitrofaucet.nity.fr'){
			tabidNitroFa.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidNitroFa.length == 0){
				setTimeout(function() {
					if(tabidNitroFa.length == 0){
						Programms[indexPrNitroFa].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidNitroFa, changeInfo, tab){
//	console.log(tab);console.log(tabidNitroFa);
//});





