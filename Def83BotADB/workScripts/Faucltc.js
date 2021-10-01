var indexPrFaucltc;

var colImgFaucltc = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidFaucltc = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFaucltc(indexPrfree){
	block = true;
	indexPrFaucltc = indexPrfree;
	for (var i = 0; i < tabidFaucltc.length; i++) { 
		try{
			chrome.tabs.remove(tabidFaucltc[i]);
		}catch(Exc){} 
	}
	Programms[indexPrFaucltc].boolStartingDOGE = true;
	
	colImgFaucltc = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Faucltc start");
	injectScriptFaucltc('https://faucet-ltc.com/faucet');
	console.log("Faucltc end");
}

	

function injectScriptFaucltc(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFaucltc.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'faucet-ltc.com'){
		console.log('startMes');
		
		if(!tabidFaucltc.contains(sender.tab.id))tabidFaucltc.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.querySelectorAll('div')[59+3];
				console.log(idBody);
				
				if (idBody==null){
					return;
				}
				var button_claim = idBody.getElementsByClassName('btn btn-success')[0];
				console.log(button_claim);
				
				var danger = idBody.getElementsByClassName('er')[0];
				
				
				for (var i_op = 58; i_op < 65; i_op++) { 
					
					//-----------------------------------------------------//				
					if (danger==null){					
						idBody = frag.querySelectorAll('div')[i_op];
						
						if (idBody!=null){
							danger = idBody.getElementsByClassName('er')[0];
						}
						
						
					}
					if (button_claim==null){					
						button_claim = idBody.getElementsByClassName('btn btn-success')[0];
						console.log(button_claim);
					}
					
					console.log(idBody);	
					
				}
				
				
				
				if (danger==null){
					console.log('tyt');
					/*var button_claim = idBody.getElementsByClassName('btn btn-success')[0];*/
					console.log(button_claim);
					if(button_claim!=null){
						console.log('tyt2');
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucltc.js'});
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
					Programms[indexPrFaucltc].startintervalDOGE = Programms[indexPrFaucltc].intervalDOGE - second;
					Programms[indexPrFaucltc].boolStartingDOGE = false;
					block = false;
					if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFaucltc.remove(sender.tab.id);
				}
				
				
				
				
				return;
				/*
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucltc.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFaucltc].startintervalDOGE = Programms[indexPrFaucltc].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrFaucltc].text_test = text_test_d.textContent;
				
				
				Programms[indexPrFaucltc].boolStartingDOGE = false;
				block = false;
				if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucltc.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrFaucltc].boolStartingDOGE = false;
					block = false;
					if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFaucltc.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucltcinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucltc.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrFaucltc].balance = parseFloat(balance);
				}
				
				Programms[indexPrFaucltc].boolStartingDOGE = false;
				block = false;
				if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucltc.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrFaucltc].boolStartingDOGE = false;
						block = false;
						if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFaucltc.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucltcclaimagain.js'});
						
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
						Programms[indexPrFaucltc].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrFaucltc].boolStartingDOGE = false;
						Programms[indexPrFaucltc].intervalDOGE = 1000;
						block = false;
						if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFaucltc.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrFaucltc].boolStartingDOGE = false;
							Programms[indexPrFaucltc].userBool = false;
							block = false;
							console.log(Programms[indexPrFaucltc].boolStartingDOGE);
							console.log(Exc);
							if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFaucltc.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucltcInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FaucltcShort.js'});
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
							Programms[indexPrFaucltc].boolStartingDOGE = false;
							Programms[indexPrFaucltc].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrFaucltc].startintervalDOGE = 0;
							console.log(Programms[indexPrFaucltc].intervalDOGE);
							block = false;						
							if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFaucltc.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFaucltc].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFaucltc].boolStartingDOGE);
				console.log(Exc);
				if(tabidFaucltc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucltc.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidFaucltc.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'faucet-ltc.com'){
			tabidFaucltc.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidFaucltc.length == 0){
				setTimeout(function() {
					if(tabidFaucltc.length == 0){
						Programms[indexPrFaucltc].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFaucltc, changeInfo, tab){
//	console.log(tab);console.log(tabidFaucltc);
//});





