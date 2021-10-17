var indexPrCryptoFlare;

var colImgCryptoFlare = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCryptoFlare = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCryptoFlare(indexPrfree){
	block = true;
	indexPrCryptoFlare = indexPrfree;
	for (var i = 0; i < tabidCryptoFlare.length; i++) { 
		try{
			chrome.tabs.remove(tabidCryptoFlare[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCryptoFlare].boolStartingDOGE = true;
	
	colImgCryptoFlare = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CryptoFlare start");
	injectScriptCryptoFlare('https://cryptoflare.net/faucet');
	console.log("CryptoFlare end");
}

	

function injectScriptCryptoFlare(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCryptoFlare.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'cryptoflare.net'){
		console.log('startMes');
		
		if(!tabidCryptoFlare.contains(sender.tab.id))tabidCryptoFlare.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var allcontent = frag.querySelectorAll('h2')[0];
				
				//''
				//var text_test_d = frag.querySelectorAll('h2')[2];
				//console.log(allcontent.textContent);
				//return;
				
				var text_test_d = frag.querySelectorAll('h2')[2];
				if (text_test_d!=null){
					Programms[indexPrCryptoFlare].text_test = text_test_d.textContent;
				}
				
				
				console.log(allcontent);
				if (allcontent!=null){
					
					console.log(allcontent.textContent);
					if ((allcontent.textContent)==' '){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlare.js'});
						return;
					}
					
					
					var idminute = allcontent.textContent.split(' ')[1];
					
					var minute = idminute;
					console.log(minute);
					if(minute==null)return;
					var second = minute*60+65; 
					
					console.log(second);
					Programms[indexPrCryptoFlare].startintervalDOGE = Programms[indexPrCryptoFlare].intervalDOGE - second;
					Programms[indexPrCryptoFlare].boolStartingDOGE = false;
					block = false;
					if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCryptoFlare.remove(sender.tab.id);
				}
				
				/*
				
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary waves-effect waves-float waves-light')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlare.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCryptoFlare].startintervalDOGE = Programms[indexPrCryptoFlare].intervalDOGE - second;
				}
				
				var text_test_d = frag.querySelectorAll('h2')[2];
				if (text_test_d!=null){
					Programms[indexPrCryptoFlare].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCryptoFlare].boolStartingDOGE = false;
				block = false;
				if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCryptoFlare.remove(sender.tab.id);
				}
				
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrCnKFaucet].boolStartingDOGE = false;
					block = false;
					if(tabidCnKFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCnKFaucet.remove(sender.tab.id);
				}
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlareinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlare.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCryptoFlare].balance = parseFloat(balance);
				}
				
				Programms[indexPrCryptoFlare].boolStartingDOGE = false;
				block = false;
				if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCryptoFlare.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCryptoFlare].boolStartingDOGE = false;
						block = false;
						if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCryptoFlare.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlareclaimagain.js'});
						
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
						Programms[indexPrCryptoFlare].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCryptoFlare].boolStartingDOGE = false;
						Programms[indexPrCryptoFlare].intervalDOGE = 1000;
						block = false;
						if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCryptoFlare.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCryptoFlare].boolStartingDOGE = false;
							Programms[indexPrCryptoFlare].userBool = false;
							block = false;
							console.log(Programms[indexPrCryptoFlare].boolStartingDOGE);
							console.log(Exc);
							if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCryptoFlare.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlareInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoFlareShort.js'});
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
							Programms[indexPrCryptoFlare].boolStartingDOGE = false;
							Programms[indexPrCryptoFlare].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCryptoFlare].startintervalDOGE = 0;
							console.log(Programms[indexPrCryptoFlare].intervalDOGE);
							block = false;						
							if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCryptoFlare.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCryptoFlare].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCryptoFlare].boolStartingDOGE);
				console.log(Exc);
				if(tabidCryptoFlare.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCryptoFlare.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCryptoFlare.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'cryptoflare.net'){
			tabidCryptoFlare.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrCryptoFlare].alreadytrue == true){
				Programms[indexPrCryptoFlare].startintervalDOGE = Programms[indexPrCryptoFlare].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidCryptoFlare.length == 0){
				setTimeout(function() {
					if(tabidCryptoFlare.length == 0){
						Programms[indexPrCryptoFlare].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCryptoFlare, changeInfo, tab){
//	console.log(tab);console.log(tabidCryptoFlare);
//});





