var indexPrF99faucet;

var colImgF99faucet = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidF99faucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonF99faucet(indexPrfree){
	block = true;
	indexPrF99faucet = indexPrfree;
	for (var i = 0; i < tabidF99faucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidF99faucet[i]);
		}catch(Exc){} 
	}
	Programms[indexPrF99faucet].boolStartingDOGE = true;
	
	colImgF99faucet = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("F99faucet start");
	injectScriptF99faucet('https://99faucet.com/faucet');
	console.log("F99faucet end");
}

	

function injectScriptF99faucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidF99faucet.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == '99faucet.com'){
		console.log('startMes');
		
		if(!tabidF99faucet.contains(sender.tab.id))tabidF99faucet.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/F99faucet.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrF99faucet].startintervalDOGE = Programms[indexPrF99faucet].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-12 col-sm-6 col-lg-3 mb-3')[3];
				if (text_test_d!=null){
					Programms[indexPrF99faucet].text_test = text_test_d.textContent;
				
				
				Programms[indexPrF99faucet].boolStartingDOGE = false;
				block = false;
				if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidF99faucet.remove(sender.tab.id);
				}
				//кнопка логин
							
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrF99faucet].boolStartingDOGE = false;
					block = false;
					if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidF99faucet.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/F99faucetinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/F99faucet.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrF99faucet].balance = parseFloat(balance);
				}
				
				Programms[indexPrF99faucet].boolStartingDOGE = false;
				block = false;
				if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidF99faucet.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrF99faucet].boolStartingDOGE = false;
						block = false;
						if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidF99faucet.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/F99faucetclaimagain.js'});
						
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
						Programms[indexPrF99faucet].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrF99faucet].boolStartingDOGE = false;
						Programms[indexPrF99faucet].intervalDOGE = 1000;
						block = false;
						if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidF99faucet.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrF99faucet].boolStartingDOGE = false;
							Programms[indexPrF99faucet].userBool = false;
							block = false;
							console.log(Programms[indexPrF99faucet].boolStartingDOGE);
							console.log(Exc);
							if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidF99faucet.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/F99faucetInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/F99faucetShort.js'});
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
							Programms[indexPrF99faucet].boolStartingDOGE = false;
							Programms[indexPrF99faucet].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrF99faucet].startintervalDOGE = 0;
							console.log(Programms[indexPrF99faucet].intervalDOGE);
							block = false;						
							if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidF99faucet.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrF99faucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrF99faucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidF99faucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidF99faucet.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidF99faucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != '99faucet.com'){
			tabidF99faucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrF99faucet].alreadytrue == true){
				Programms[indexPrF99faucet].startintervalDOGE = Programms[indexPrF99faucet].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidF99faucet.length == 0){
				setTimeout(function() {
					if(tabidF99faucet.length == 0){
						Programms[indexPrF99faucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidF99faucet, changeInfo, tab){
//	console.log(tab);console.log(tabidF99faucet);
//});





