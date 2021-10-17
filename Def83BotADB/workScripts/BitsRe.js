var indexPrBitsRe;

var colImgBitsRe = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBitsRe = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitsRe(indexPrfree){
	block = true;
	indexPrBitsRe = indexPrfree;
	for (var i = 0; i < tabidBitsRe.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitsRe[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBitsRe].boolStartingDOGE = true;
	
	colImgBitsRe = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BitsRe start");
	injectScriptBitsRe('https://bits.re/faucet');
	console.log("BitsRe end");
}

	

function injectScriptBitsRe(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitsRe.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'bits.re'){
		console.log('startMes');
		
		if(!tabidBitsRe.contains(sender.tab.id))tabidBitsRe.push(sender.tab.id);
		
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

				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-style-light')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
					console.log(idclaimbutn.textContent);
				//page-topbar doneClaim
					if(idclaimbutn.textContent=='NEXT'){
					
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitsRe.js'});
						
						//antibotlink(idBody, request.src);
						
						return;
					}
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBitsRe].startintervalDOGE = Programms[indexPrBitsRe].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('card widget widget-stats')[1];
				if (text_test_d!=null){
					Programms[indexPrBitsRe].text_test = text_test_d.textContent;
				
				
				Programms[indexPrBitsRe].boolStartingDOGE = false;
				block = false;
				if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitsRe.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrBitsRe].boolStartingDOGE = false;
					block = false;
					if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitsRe.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitsReinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitsRe.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrBitsRe].balance = parseFloat(balance);
				}
				
				Programms[indexPrBitsRe].boolStartingDOGE = false;
				block = false;
				if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitsRe.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrBitsRe].boolStartingDOGE = false;
						block = false;
						if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitsRe.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitsReclaimagain.js'});
						
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
						Programms[indexPrBitsRe].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrBitsRe].boolStartingDOGE = false;
						Programms[indexPrBitsRe].intervalDOGE = 1000;
						block = false;
						if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitsRe.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrBitsRe].boolStartingDOGE = false;
							Programms[indexPrBitsRe].userBool = false;
							block = false;
							console.log(Programms[indexPrBitsRe].boolStartingDOGE);
							console.log(Exc);
							if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitsRe.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitsReInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitsReShort.js'});
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
							Programms[indexPrBitsRe].boolStartingDOGE = false;
							Programms[indexPrBitsRe].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrBitsRe].startintervalDOGE = 0;
							console.log(Programms[indexPrBitsRe].intervalDOGE);
							block = false;						
							if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitsRe.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBitsRe].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitsRe].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitsRe.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitsRe.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBitsRe.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bits.re'){
			tabidBitsRe.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrBitsRe].alreadytrue == true){
				Programms[indexPrBitsRe].startintervalDOGE = Programms[indexPrBitsRe].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidBitsRe.length == 0){
				setTimeout(function() {
					if(tabidBitsRe.length == 0){
						Programms[indexPrBitsRe].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitsRe, changeInfo, tab){
//	console.log(tab);console.log(tabidBitsRe);
//});





