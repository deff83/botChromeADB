var indexPrClickCash;

var colImgClickCash = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidClickCash = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonClickCash(indexPrfree){
	block = true;
	indexPrClickCash = indexPrfree;
	for (var i = 0; i < tabidClickCash.length; i++) { 
		try{
			chrome.tabs.remove(tabidClickCash[i]);
		}catch(Exc){} 
	}
	Programms[indexPrClickCash].boolStartingDOGE = true;
	
	colImgClickCash = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ClickCash start");
	injectScriptClickCash('https://clic.cash/faucet');
	console.log("ClickCash end");
}

	

function injectScriptClickCash(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidClickCash.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'clic.cash'){
		console.log('startMes');
		
		if(!tabidClickCash.contains(sender.tab.id))tabidClickCash.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('layout-wrapper');
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCash.js'});
									chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});

					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1+0; 
					
					
					
					
					Programms[indexPrClickCash].startintervalDOGE = Programms[indexPrClickCash].intervalDOGE - second;
				}
				
				var unlock = idBody.getElementsByClassName('btn btn-primary w-md')[0]
				if(unlock!= null && unlock.textContent=='Unlock'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCash.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});

					return;
				}
				
				Programms[indexPrClickCash].boolStartingDOGE = false;
				block = false;
				if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClickCash.remove(sender.tab.id);
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCashinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCash.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrClickCash].balance = parseFloat(balance);
				}
				
				Programms[indexPrClickCash].boolStartingDOGE = false;
				block = false;
				if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClickCash.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrClickCash].boolStartingDOGE = false;
						block = false;
						if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClickCash.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCashclaimagain.js'});
						
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
						Programms[indexPrClickCash].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrClickCash].boolStartingDOGE = false;
						Programms[indexPrClickCash].intervalDOGE = 1000;
						block = false;
						if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClickCash.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrClickCash].boolStartingDOGE = false;
							Programms[indexPrClickCash].userBool = false;
							block = false;
							console.log(Programms[indexPrClickCash].boolStartingDOGE);
							console.log(Exc);
							if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidClickCash.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCashInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClickCashShort.js'});
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
							Programms[indexPrClickCash].boolStartingDOGE = false;
							Programms[indexPrClickCash].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrClickCash].startintervalDOGE = 0;
							console.log(Programms[indexPrClickCash].intervalDOGE);
							block = false;						
							if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidClickCash.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrClickCash].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClickCash].boolStartingDOGE);
				console.log(Exc);
				if(tabidClickCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClickCash.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidClickCash.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'clic.cash'){
			tabidClickCash.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidClickCash.length == 0){
				setTimeout(function() {
					if(tabidClickCash.length == 0){
						Programms[indexPrClickCash].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidClickCash, changeInfo, tab){
//	console.log(tab);console.log(tabidClickCash);
//});





