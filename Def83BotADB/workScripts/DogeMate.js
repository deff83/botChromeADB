var indexPrDogeMate;

var colImgDogeMate = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidDogeMate = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDogeMate(indexPrfree){
	block = true;
	indexPrDogeMate = indexPrfree;
	for (var i = 0; i < tabidDogeMate.length; i++) { 
		try{
			chrome.tabs.remove(tabidDogeMate[i]);
		}catch(Exc){} 
	}
	Programms[indexPrDogeMate].boolStartingDOGE = true;
	
	colImgDogeMate = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("DogeMate start");
	injectScriptDogeMate('https://dogemate.com/games/roll');
	console.log("DogeMate end");
}

	

function injectScriptDogeMate(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidDogeMate.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'dogemate.com'){
		console.log('startMes');
		
		if(!tabidDogeMate.contains(sender.tab.id))tabidDogeMate.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				/*
				var idBody = frag.getElementById('scroll-top');
				console.log(idBody);
				if(idBody== null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				
				var balance = idBody.getElementsByClassName('small align-self-center')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					//Programms[indexPrDogeMate].balance = parseFloat(balance);
				}
				*/
				
				var idsecond = frag.getElementById('sec');
				console.log(idsecond);
				if(idsecond!= null){
					var minute = idsecond.textContent.split('m ')[0];
					
					var secondsfg = idsecond.textContent.split('m ')[1];
					
					if (secondsfg==null) {
						secondsfg = minute;
						minute = 0;
					}
					
					var secondsfg = secondsfg.split('s')[0];
					
					var second = minute*60+(secondsfg)*1; 
					console.log(second);
					Programms[indexPrDogeMate].startintervalDOGE = Programms[indexPrDogeMate].intervalDOGE - second;
					
					Programms[indexPrDogeMate].boolStartingDOGE = false;
					block = false;
					if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDogeMate.remove(sender.tab.id);
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMate.js'});
				return;
				
				
				//45m 04s 
				/*
				var idBody = frag.getElementById('layout-wrapper');
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMate.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrDogeMate].startintervalDOGE = Programms[indexPrDogeMate].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrDogeMate].text_test = text_test_d.textContent;
				}
				
				Programms[indexPrDogeMate].boolStartingDOGE = false;
				block = false;
				if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDogeMate.remove(sender.tab.id);
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMateinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMate.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrDogeMate].balance = parseFloat(balance);
				}
				
				Programms[indexPrDogeMate].boolStartingDOGE = false;
				block = false;
				if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDogeMate.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrDogeMate].boolStartingDOGE = false;
						block = false;
						if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDogeMate.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMateclaimagain.js'});
						
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
						Programms[indexPrDogeMate].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrDogeMate].boolStartingDOGE = false;
						Programms[indexPrDogeMate].intervalDOGE = 1000;
						block = false;
						if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDogeMate.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrDogeMate].boolStartingDOGE = false;
							Programms[indexPrDogeMate].userBool = false;
							block = false;
							console.log(Programms[indexPrDogeMate].boolStartingDOGE);
							console.log(Exc);
							if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidDogeMate.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMateInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/DogeMateShort.js'});
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
							Programms[indexPrDogeMate].boolStartingDOGE = false;
							Programms[indexPrDogeMate].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrDogeMate].startintervalDOGE = 0;
							console.log(Programms[indexPrDogeMate].intervalDOGE);
							block = false;						
							if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidDogeMate.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrDogeMate].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDogeMate].boolStartingDOGE);
				console.log(Exc);
				if(tabidDogeMate.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDogeMate.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidDogeMate.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'dogemate.com'){
			tabidDogeMate.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDogeMate.length == 0){
				setTimeout(function() {
					if(tabidDogeMate.length == 0){
						Programms[indexPrDogeMate].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDogeMate, changeInfo, tab){
//	console.log(tab);console.log(tabidDogeMate);
//});





