var indexPrRocketCryp;

var colImgRocketCryp = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidRocketCryp = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonRocketCryp(indexPrfree){
	block = true;
	indexPrRocketCryp = indexPrfree;
	for (var i = 0; i < tabidRocketCryp.length; i++) { 
		try{
			chrome.tabs.remove(tabidRocketCryp[i]);
		}catch(Exc){} 
	}
	Programms[indexPrRocketCryp].boolStartingDOGE = true;
	
	colImgRocketCryp = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("RocketCryp start");
	injectScriptRocketCryp('https://rocketcrypto.io/app/faucet');
	console.log("RocketCryp end");
}

	

function injectScriptRocketCryp(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidRocketCryp.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'rocketcrypto.io'){
		console.log('startMes');
		
		if(!tabidRocketCryp.contains(sender.tab.id))tabidRocketCryp.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('root');
				
				//if (colImgRocketCryp<5){
				//	colImgRocketCryp = colImgRocketCryp + 1;
					// f_callback('reload'); 
					// console.log('reload');
					// return;
				//}
				//colImgRocketCryp = 0;
				
				console.log(idBody);
				if (idBody==null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('MuiButton-label')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCryp.js'});
					
					//return;
				}
				
				
				
				var timerMu = idBody.getElementsByClassName('MuiTypography-root MuiTypography-h5')[0]; 
				
				
				if(timerMu!= null && idclaimbutn==null){
					
					console.log(timerMu);
					if (timerMu.textContent=='Welcome back!'){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					var minute = timerMu.textContent.split(':')[1];
					var secondsfg = timerMu.textContent.split(':')[2];
					
					if (minute==null){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					
					var second = minute*60+(secondsfg)*1; 
					
					
					if(second<10){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCryp.js'});
						
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					second = second -5;
					
					Programms[indexPrRocketCryp].startintervalDOGE = Programms[indexPrRocketCryp].intervalDOGE - second;
					Programms[indexPrRocketCryp].boolStartingDOGE = false;
					block = false;
					if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidRocketCryp.remove(sender.tab.id);
				}
				
				
				f_callback('reload'); 
				console.log('reload');
				return;
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				/*
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrRocketCryp].text_test = text_test_d.textContent;
				
				
				Programms[indexPrRocketCryp].boolStartingDOGE = false;
				block = false;
				if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRocketCryp.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrRocketCryp].boolStartingDOGE = false;
					block = false;
					if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidRocketCryp.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCrypinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCryp.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrRocketCryp].balance = parseFloat(balance);
				}
				
				Programms[indexPrRocketCryp].boolStartingDOGE = false;
				block = false;
				if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRocketCryp.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrRocketCryp].boolStartingDOGE = false;
						block = false;
						if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidRocketCryp.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCrypclaimagain.js'});
						
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
						Programms[indexPrRocketCryp].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrRocketCryp].boolStartingDOGE = false;
						Programms[indexPrRocketCryp].intervalDOGE = 1000;
						block = false;
						if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidRocketCryp.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrRocketCryp].boolStartingDOGE = false;
							Programms[indexPrRocketCryp].userBool = false;
							block = false;
							console.log(Programms[indexPrRocketCryp].boolStartingDOGE);
							console.log(Exc);
							if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidRocketCryp.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCrypInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RocketCrypShort.js'});
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
							Programms[indexPrRocketCryp].boolStartingDOGE = false;
							Programms[indexPrRocketCryp].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrRocketCryp].startintervalDOGE = 0;
							console.log(Programms[indexPrRocketCryp].intervalDOGE);
							block = false;						
							if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidRocketCryp.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrRocketCryp].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrRocketCryp].boolStartingDOGE);
				console.log(Exc);
				if(tabidRocketCryp.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRocketCryp.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidRocketCryp.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'rocketcrypto.io'){
			tabidRocketCryp.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidRocketCryp.length == 0){
				setTimeout(function() {
					if(tabidRocketCryp.length == 0){
						Programms[indexPrRocketCryp].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidRocketCryp, changeInfo, tab){
//	console.log(tab);console.log(tabidRocketCryp);
//});





