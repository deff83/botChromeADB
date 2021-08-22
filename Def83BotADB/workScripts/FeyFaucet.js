var indexPrFeyFaucet;

var colImgFeyFaucet = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidFeyFaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFeyFaucet(indexPrfree){
	block = true;
	indexPrFeyFaucet = indexPrfree;
	for (var i = 0; i < tabidFeyFaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidFeyFaucet[i]);
		}catch(Exc){} 
	}
	Programms[indexPrFeyFaucet].boolStartingDOGE = true;
	
	colImgFeyFaucet = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("FeyFaucet start");
	injectScriptFeyFaucet('https://feyorra.top/faucet');
	console.log("FeyFaucet end");
}

	

function injectScriptFeyFaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFeyFaucet.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'feyorra.top'){
		console.log('startMes');
		
		if(!tabidFeyFaucet.contains(sender.tab.id))tabidFeyFaucet.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
								
				var idmenu = frag.getElementById('menu');
				
				if(idmenu==null){
					return;
				}
				
				var idselectCaptcha = frag.getElementById('selectCaptcha');
				
				if (idselectCaptcha!=null){
					colImgFeyFaucet = colImgFeyFaucet + 1;
					var colImgFeyFaucetTrext = Math.floor(colImgFeyFaucet/2) - 1;
					var colImgFeyFaucetTrextFey = colImgFeyFaucetTrext * 0.0075;
					
					if (colImgFeyFaucet%2==0){
					
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', code:'drawDIVUser("0", `count reload: '+colImgFeyFaucetTrext+'('+colImgFeyFaucetTrextFey+'FEY min 0.3FEY)    <a href="https://feyorra.top/dashboard">withrout</a>`);'});
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucet.js'});
					}
					return;
				}
				
				var idrefercode = frag.getElementById('refer-code');
				if (idrefercode!=null){
					colImgFeyFaucet = 0;
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucetWithrout.js'});
					return;
				}
				
				
				
				colImgFeyFaucet = 0;
				
				Programms[indexPrFeyFaucet].boolStartingDOGE = false;
				block = false;
				if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFeyFaucet.remove(sender.tab.id);
				
				/*
				
				
				
				/*
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucet.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFeyFaucet].startintervalDOGE = Programms[indexPrFeyFaucet].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrFeyFaucet].text_test = text_test_d.textContent;
				
				
				Programms[indexPrFeyFaucet].boolStartingDOGE = false;
				block = false;
				if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFeyFaucet.remove(sender.tab.id);
				}
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucetinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucet.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrFeyFaucet].balance = parseFloat(balance);
				}
				
				Programms[indexPrFeyFaucet].boolStartingDOGE = false;
				block = false;
				if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFeyFaucet.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrFeyFaucet].boolStartingDOGE = false;
						block = false;
						if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFeyFaucet.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucetclaimagain.js'});
						
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
						Programms[indexPrFeyFaucet].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrFeyFaucet].boolStartingDOGE = false;
						Programms[indexPrFeyFaucet].intervalDOGE = 1000;
						block = false;
						if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFeyFaucet.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrFeyFaucet].boolStartingDOGE = false;
							Programms[indexPrFeyFaucet].userBool = false;
							block = false;
							console.log(Programms[indexPrFeyFaucet].boolStartingDOGE);
							console.log(Exc);
							if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFeyFaucet.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucetInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FeyFaucetShort.js'});
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
							Programms[indexPrFeyFaucet].boolStartingDOGE = false;
							Programms[indexPrFeyFaucet].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrFeyFaucet].startintervalDOGE = 0;
							console.log(Programms[indexPrFeyFaucet].intervalDOGE);
							block = false;						
							if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFeyFaucet.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFeyFaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFeyFaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidFeyFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFeyFaucet.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidFeyFaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'feyorra.top'){
			tabidFeyFaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidFeyFaucet.length == 0){
				setTimeout(function() {
					if(tabidFeyFaucet.length == 0){
						Programms[indexPrFeyFaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFeyFaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidFeyFaucet);
//});





