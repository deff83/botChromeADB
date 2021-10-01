var indexPrBitDaily;

var colImgBitDaily = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBitDaily = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitDaily(indexPrfree){
	block = true;
	indexPrBitDaily = indexPrfree;
	for (var i = 0; i < tabidBitDaily.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitDaily[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBitDaily].boolStartingDOGE = true;
	
	colImgBitDaily = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BitDaily start");
	injectScriptBitDaily('https://bitdaily.xyz/faucet');
	console.log("BitDaily end");
}

	

function injectScriptBitDaily(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitDaily.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'bitdaily.xyz'){
		console.log('startMes');
		
		if(!tabidBitDaily.contains(sender.tab.id))tabidBitDaily.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitDaily.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBitDaily].startintervalDOGE = Programms[indexPrBitDaily].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrBitDaily].text_test = text_test_d.textContent;
				
				
				Programms[indexPrBitDaily].boolStartingDOGE = false;
				block = false;
				if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitDaily.remove(sender.tab.id);
				}
				//кнопка логин
							
				var idtokenBalance = frag.getElementById('usdBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrBitDaily].boolStartingDOGE = false;
					block = false;
					if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitDaily.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitDailyinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitDaily.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrBitDaily].balance = parseFloat(balance);
				}
				
				Programms[indexPrBitDaily].boolStartingDOGE = false;
				block = false;
				if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitDaily.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrBitDaily].boolStartingDOGE = false;
						block = false;
						if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitDaily.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitDailyclaimagain.js'});
						
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
						Programms[indexPrBitDaily].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrBitDaily].boolStartingDOGE = false;
						Programms[indexPrBitDaily].intervalDOGE = 1000;
						block = false;
						if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitDaily.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrBitDaily].boolStartingDOGE = false;
							Programms[indexPrBitDaily].userBool = false;
							block = false;
							console.log(Programms[indexPrBitDaily].boolStartingDOGE);
							console.log(Exc);
							if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitDaily.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitDailyInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitDailyShort.js'});
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
							Programms[indexPrBitDaily].boolStartingDOGE = false;
							Programms[indexPrBitDaily].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrBitDaily].startintervalDOGE = 0;
							console.log(Programms[indexPrBitDaily].intervalDOGE);
							block = false;						
							if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitDaily.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBitDaily].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitDaily].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitDaily.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitDaily.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBitDaily.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bitdaily.xyz'){
			tabidBitDaily.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBitDaily.length == 0){
				setTimeout(function() {
					if(tabidBitDaily.length == 0){
						Programms[indexPrBitDaily].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitDaily, changeInfo, tab){
//	console.log(tab);console.log(tabidBitDaily);
//});





