var indexPrFaucdoge;

var colImgFaucdoge = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidFaucdoge = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFaucdoge(indexPrfree){
	block = true;
	indexPrFaucdoge = indexPrfree;
	for (var i = 0; i < tabidFaucdoge.length; i++) { 
		try{
			chrome.tabs.remove(tabidFaucdoge[i]);
		}catch(Exc){} 
	}
	Programms[indexPrFaucdoge].boolStartingDOGE = true;
	
	colImgFaucdoge = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Faucdoge start");
	injectScriptFaucdoge('https://faucet-dogecoin.com');
	console.log("Faucdoge end");
}

	

function injectScriptFaucdoge(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFaucdoge.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'faucet-dogecoin.com'){
		console.log('startMes');
		
		if(!tabidFaucdoge.contains(sender.tab.id))tabidFaucdoge.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				var idsign = frag.getElementById('form-signup');
				if (idsign!=null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucdogeSign.js'});
					return;
				}
				
				
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
				
				var cloginp = idBody.getElementsByClassName('login')[0];
				
				
				if (cloginp!=null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucdogeToLogin.js'});
					return;
				}

				
				var content_box_sltstmp = idBody.getElementsByClassName('content-box sltstmp')[0];
				
				if (content_box_sltstmp!=null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucdogeToFaucet.js'});
					return;
				}
				
				
				
				var button_claim = idBody.getElementsByClassName('btn btn-success')[0];
				console.log(button_claim);
				
				var danger = idBody.getElementsByClassName('er')[0];
				
				
				
				
				
				if (danger==null){
					console.log('tyt');
					/*var button_claim = idBody.getElementsByClassName('btn btn-success')[0];*/
					console.log(button_claim);
					if(button_claim!=null){
						console.log('tyt2');
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucdoge.js'});
						return;
					}
					
					
					return;
				}
				
				
				console.log(danger.textContent);
				var split_danger = danger.textContent.split(' ');
				
				if(split_danger[0]=='You'){	
					var tim_claim = split_danger[11];
					
					var now = new Date();
					console.log(now);
					var tek_min = now.getMinutes();
					var tek_sec = now.getSeconds();
					var tek_hour = now.getHours();
					
					
					
					var minute = tim_claim.split(':')[1];
					var secondsfg = tim_claim.split(':')[2];
					var hoursdf = tim_claim.split(':')[0];
					
					
					
					var second = (hoursdf-tek_hour)*60*60 + (minute-tek_min)*60+(secondsfg-tek_sec)*1 + 2; 
					Programms[indexPrFaucdoge].startintervalDOGE = Programms[indexPrFaucdoge].intervalDOGE - second;
					Programms[indexPrFaucdoge].boolStartingDOGE = false;
					block = false;
					if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFaucdoge.remove(sender.tab.id);
				}
				
				
				
				
				return;
				/*
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucdoge.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFaucdoge].startintervalDOGE = Programms[indexPrFaucdoge].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrFaucdoge].text_test = text_test_d.textContent;
				
				
				Programms[indexPrFaucdoge].boolStartingDOGE = false;
				block = false;
				if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucdoge.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrFaucdoge].boolStartingDOGE = false;
					block = false;
					if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFaucdoge.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucdogeinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucdoge.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrFaucdoge].balance = parseFloat(balance);
				}
				
				Programms[indexPrFaucdoge].boolStartingDOGE = false;
				block = false;
				if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucdoge.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrFaucdoge].boolStartingDOGE = false;
						block = false;
						if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFaucdoge.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucdogeclaimagain.js'});
						
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
						Programms[indexPrFaucdoge].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrFaucdoge].boolStartingDOGE = false;
						Programms[indexPrFaucdoge].intervalDOGE = 1000;
						block = false;
						if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFaucdoge.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrFaucdoge].boolStartingDOGE = false;
							Programms[indexPrFaucdoge].userBool = false;
							block = false;
							console.log(Programms[indexPrFaucdoge].boolStartingDOGE);
							console.log(Exc);
							if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFaucdoge.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucdogeInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucdogeShort.js'});
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
							Programms[indexPrFaucdoge].boolStartingDOGE = false;
							Programms[indexPrFaucdoge].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrFaucdoge].startintervalDOGE = 0;
							console.log(Programms[indexPrFaucdoge].intervalDOGE);
							block = false;						
							if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFaucdoge.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFaucdoge].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFaucdoge].boolStartingDOGE);
				console.log(Exc);
				if(tabidFaucdoge.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucdoge.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidFaucdoge.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'faucet-dogecoin.com'){
			tabidFaucdoge.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidFaucdoge.length == 0){
				setTimeout(function() {
					if(tabidFaucdoge.length == 0){
						Programms[indexPrFaucdoge].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFaucdoge, changeInfo, tab){
//	console.log(tab);console.log(tabidFaucdoge);
//});





