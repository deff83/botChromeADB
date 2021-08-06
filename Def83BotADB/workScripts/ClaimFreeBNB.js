var indexPrClaimFreeBNB;

var colImgClaimFreeBNB = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidClaimFreeBNB = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonClaimFreeBNB(indexPrfree){
	block = true;
	indexPrClaimFreeBNB = indexPrfree;
	for (var i = 0; i < tabidClaimFreeBNB.length; i++) { 
		try{
			chrome.tabs.remove(tabidClaimFreeBNB[i]);
		}catch(Exc){} 
	}
	Programms[indexPrClaimFreeBNB].boolStartingDOGE = true;
	
	colImgClaimFreeBNB = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ClaimFreeBNB start");
	injectScriptClaimFreeBNB('https://claimfreecoins.io/free-binance/');
	console.log("ClaimFreeBNB end");
}

	

function injectScriptClaimFreeBNB(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidClaimFreeBNB.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'claimfreecoins.io'){
		console.log('startMes');
		try{
			let fragdo = document.createRange().createContextualFragment(request.html);
			var idBody = fragdo.getElementById('faucet');
			let nameh = idBody.getElementsByTagName('h1')[0];
			if (nameh.textContent != 'Claim Free BNB') {
				//другие тогда сработают
				return;
			}
			
		}catch(Exc){console.log(Exc);}
		
		
		if(!tabidClaimFreeBNB.contains(sender.tab.id))tabidClaimFreeBNB.push(sender.tab.id);
			try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//кнопка логин
				console.log('tyt');
				
				var idButtonPoleFaucet = frag.getElementById('faucet');
				var idButtonPoleclaim_again = frag.getElementById('claim_again');
				
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
						block = false;
						if(tabidClaimFreeBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClaimFreeBNB.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCclaimagain.js'});
						
					return;
				}
				
				console.log('tyt2');
				if(idButtonPoleFaucet != null){
					
					//проверка саксесса
					
					var succsesButton = idButtonPoleFaucet.getElementsByClassName('alert alert-success')[0];
					var dangerField = idButtonPoleFaucet.getElementsByClassName('alert alert-danger')[0];
					
					if (succsesButton != null){
						console.log(succsesButton.textContent);
						let bal = succsesButton.textContent.split(' ')[0];
						try{
						Programms[indexPrClaimFreeBNB].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
						Programms[indexPrClaimFreeBNB].intervalDOGE = 1000;
						block = false;
						if(tabidClaimFreeBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClaimFreeBNB.remove(sender.tab.id);
						return;
					}
					
					console.log('tyt3');
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
							Programms[indexPrClaimFreeBNB].userBool = false;
							block = false;
							console.log(Programms[indexPrClaimFreeBNB].boolStartingDOGE);
							console.log(Exc);
							if(tabidClaimFreeBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidClaimFreeBNB.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBNBInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCShort.js'});
						return;
					}
					console.log(loginButton);
					
						
					/*var boolopenclaimpanel = false;
					var bodyId = frag.querySelectorAll('div');
					for (var bodyr of bodyId) {
						console.log(bodyr.getAttribute('class'));
					}
					
					*/
					console.log('tyt4');
					
					
						//проверка на антибот
						
						var antibotButton = frag.getElementById('antibot');
						
						if (antibotButton != null){
							console.log('antibot', antibotButton.getAttribute('style'));
							
							var antibotButtonSwitch = antibotButton.getElementsByClassName('modal-content')[0].getElementsByClassName('text-center')[0].textContent;
							console.log(antibotButtonSwitch);
							if(antibotButtonSwitch == "Switch to reCaptcha"){
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBNBSwitch.js'});
								return;
							}
							
							
							
							
							///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							if(antibotButton.getAttribute('style')=="display: none;" || antibotButton.getAttribute('style')==null){
								console.log("boolOneClaim2", boolOneClaim2);
								if(true){
								boolOneClaim2 = false;
								//проверка кнопки continue
								var continueButton = idButtonPoleFaucet.getElementsByTagName('button')[0];
									if (continueButton != null && continueButton.textContent=="Continue"){
										console.log("boolOneClaim2", "nash");
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCContinue.js'});
										//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBNBContinue.js'});
										//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
										//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBNBContinue.js'});
										//нажатие чтоб видимо было
										
									}
								}
								f_callback('reload2'); 
								console.log('reload');
								return;
							}
							///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							
							
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTC.js'});
						}
						console.log('tyt5');
						//"Your account is locked for 1262 minutes."
						if (dangerField!=null && dangerField.textContent.split(' ')[3] == "locked") {
							var min_lock = dangerField.textContent.split(' ')[5];
							Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
							Programms[indexPrClaimFreeBNB].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrClaimFreeBNB].startintervalDOGE = 0;
							console.log(Programms[indexPrClaimFreeBNB].intervalDOGE);
							block = false;						
							if(tabidClaimFreeBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidClaimFreeBNB.remove(sender.tab.id);
						}
						
				}
				return;
				
				
			}catch(Exc){
				Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClaimFreeBNB].boolStartingDOGE);
				console.log(Exc);
				if(tabidClaimFreeBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimFreeBNB.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	if(request.src == 's1.coinmarketwaves.com'){
		console.log('startMes');
		if(!tabidClaimFreeBNB.contains(sender.tab.id))tabidClaimFreeBNB.push(sender.tab.id);
			try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				let frag = document.createRange().createContextualFragment(request.html);
				
				let invisibleCaptchaShortlink = frag.getElementById('invisibleCaptchaShortlink');
				let countdown = frag.getElementById('countdown');
				
				if(countdown == null){
				
				
					if (invisibleCaptchaShortlink!= null && invisibleCaptchaShortlink.textContent == "Click here to continue"){
						/*if(boolOneButOne<3){
							boolOneButOne += 1;*/
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCOneBut.js'});
							//return;
						//}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/coinmarketwavesContinue.js'});
					
					}
				
					return;
				}
				
				var getlink = frag.querySelectorAll('a')[0]; 
				
				/*for(var alink of getlink){
					console.log(alink.textContent);
				}*/
				
				if (getlink.textContent == "Get Link"){
					//console.log("dalshe");
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/coinmarketwavesGetLink.js'});
					
				}else{
					f_callback('reload'); 
					console.log('reload');
				}
				
				
				
				
				
				return;
				
				
				
				
				
				
				}catch(Exc){
				Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClaimFreeBNB].boolStartingDOGE);
				console.log(Exc);
				if(tabidClaimFreeBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimFreeBNB.remove(sender.tab.id);
				
			}
				
	}
	
	
	if(tabidClaimFreeBNB.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'claimfreecoins.io' && request.src != 's1.coinmarketwaves.com'){
			tabidClaimFreeBNB.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidClaimFreeBNB.length == 0){
				setTimeout(function() {
					if(tabidClaimFreeBNB.length == 0){
						Programms[indexPrClaimFreeBNB].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidClaimFreeBNB, changeInfo, tab){
//	console.log(tab);console.log(tabidClaimFreeBNB);
//});





