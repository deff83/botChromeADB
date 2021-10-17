var indexPrBitzFaucet;

var colImgBitzFaucet = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBitzFaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitzFaucet(indexPrfree){
	block = true;
	indexPrBitzFaucet = indexPrfree;
	for (var i = 0; i < tabidBitzFaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitzFaucet[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBitzFaucet].boolStartingDOGE = true;
	
	colImgBitzFaucet = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BitzFaucet start");
	injectScriptBitzFaucet('https://bitzfaucet.com/account/rollgame');
	console.log("BitzFaucet end");
}

	

function injectScriptBitzFaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitzFaucet.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'bitzfaucet.com'){
		console.log('startMes');
		
		if(!tabidBitzFaucet.contains(sender.tab.id))tabidBitzFaucet.push(sender.tab.id);
		
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
				
				
				var col_coin = idBody.getElementsByClassName('dropdown-item')[10];
				console.log(col_coin);
				if(col_coin!=null){
					Programms[indexPrBitzFaucet].balance = parseFloat(col_coin.textContent.split(' ')[0]);
				}
				
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-dark btn-bordered')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitzFaucet.js'});
					
					
					
					return;
				}
				
				var idtimer_div = idBody.getElementsByClassName('col-md-12 m-b-20')[0];
				if(idtimer_div!=null){
					
					var idtimer = idtimer_div.getElementsByTagName('b')[0];
					console.log(idtimer);
					if(idtimer!=null && idtimer.textContent.split(' ')[2]=='left'){
						
						
						var minute = idtimer.textContent.split(' ')[0];
						var second = minute+5; 
						if(idtimer.textContent.split(' ')[1]=='minutes'){
							second = minute*60+5; 
						}
					
						
						Programms[indexPrBitzFaucet].startintervalDOGE = Programms[indexPrBitzFaucet].intervalDOGE - second;
						
						Programms[indexPrBitzFaucet].boolStartingDOGE = false;
						block = false;
						if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitzFaucet.remove(sender.tab.id);
					}
					
					
				}
				
				
				
				
				/*
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBitzFaucet].startintervalDOGE = Programms[indexPrBitzFaucet].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrBitzFaucet].text_test = text_test_d.textContent;
				
				
				Programms[indexPrBitzFaucet].boolStartingDOGE = false;
				block = false;
				if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitzFaucet.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrBitzFaucet].boolStartingDOGE = false;
					block = false;
					if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitzFaucet.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitzFaucetinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitzFaucet.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrBitzFaucet].balance = parseFloat(balance);
				}
				
				Programms[indexPrBitzFaucet].boolStartingDOGE = false;
				block = false;
				if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitzFaucet.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrBitzFaucet].boolStartingDOGE = false;
						block = false;
						if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitzFaucet.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitzFaucetclaimagain.js'});
						
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
						Programms[indexPrBitzFaucet].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrBitzFaucet].boolStartingDOGE = false;
						Programms[indexPrBitzFaucet].intervalDOGE = 1000;
						block = false;
						if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitzFaucet.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrBitzFaucet].boolStartingDOGE = false;
							Programms[indexPrBitzFaucet].userBool = false;
							block = false;
							console.log(Programms[indexPrBitzFaucet].boolStartingDOGE);
							console.log(Exc);
							if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitzFaucet.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitzFaucetInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitzFaucetShort.js'});
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
							Programms[indexPrBitzFaucet].boolStartingDOGE = false;
							Programms[indexPrBitzFaucet].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrBitzFaucet].startintervalDOGE = 0;
							console.log(Programms[indexPrBitzFaucet].intervalDOGE);
							block = false;						
							if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitzFaucet.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBitzFaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitzFaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitzFaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitzFaucet.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBitzFaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bitzfaucet.com'){
			tabidBitzFaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrBitzFaucet].alreadytrue == true){
				Programms[indexPrBitzFaucet].startintervalDOGE = Programms[indexPrBitzFaucet].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidBitzFaucet.length == 0){
				setTimeout(function() {
					if(tabidBitzFaucet.length == 0){
						Programms[indexPrBitzFaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitzFaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidBitzFaucet);
//});





