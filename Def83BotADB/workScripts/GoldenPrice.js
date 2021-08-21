var indexPrGoldenPrice;

var colImgGoldenPrice = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidGoldenPrice = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonGoldenPrice(indexPrfree){
	block = true;
	indexPrGoldenPrice = indexPrfree;
	for (var i = 0; i < tabidGoldenPrice.length; i++) { 
		try{
			chrome.tabs.remove(tabidGoldenPrice[i]);
		}catch(Exc){} 
	}
	Programms[indexPrGoldenPrice].boolStartingDOGE = true;
	
	colImgGoldenPrice = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("GoldenPrice start");
	injectScriptGoldenPrice('https://goldenprice.in/');
	console.log("GoldenPrice end");
}

	

function injectScriptGoldenPrice(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidGoldenPrice.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'goldenprice.in'){
		console.log('startMes');
		
		if(!tabidGoldenPrice.contains(sender.tab.id))tabidGoldenPrice.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				 //setTimeout(function() {
				
				
				var idBody = frag.getElementById('center');
				console.log(idBody);
				if(idBody== null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				console.log('tyt');
				
				
				
				
				
				var balance = frag.getElementById('balance');
				console.log(balance);
				if (balance!=null)	{
					
					
					console.log(balance);
					
					Programms[indexPrGoldenPrice].balance = parseFloat(balance.textContent);
				}
				
				
				
				var countDown = frag.getElementById('countDown');
				console.log(countDown);
				if (countDown!=null)	{
					
					var minute = countDown.textContent.split(' : ')[0];
					var secondsfg = countDown.textContent.split(' : ')[1];
					
					var second = minute*60+(secondsfg)*1; 
					
					console.log(second);
					
					if (second!=1800 && second!=0) {
					
						
						Programms[indexPrGoldenPrice].startintervalDOGE = Programms[indexPrGoldenPrice].intervalDOGE - second;
						Programms[indexPrGoldenPrice].boolStartingDOGE = false;
						block = false;
						if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGoldenPrice.remove(sender.tab.id);
					}
					
					
				}
				
				
				var beforeClick = frag.getElementById('beforeClick');
				if (beforeClick!=null)	{
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPrice.js'});
					return;
				}
				
				Programms[indexPrGoldenPrice].boolStartingDOGE = false;
				block = false;
				if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGoldenPrice.remove(sender.tab.id);
				/*
				//font-landing text-4xl font-bold
				var idminute = idBody.getElementsByClassName('font-landing text-4xl font-bold')[0];
				console.log(idminute);
				if(idminute!= null){
					console.log(idminute.textContent);
					
					var minute = idminute.textContent.split(':')[0];
					var secondsfg = idminute.textContent.split(':')[1];
					
					var second = minute*60+(secondsfg)*1; 
					console.log(second);
					Programms[indexPrGoldenPrice].startintervalDOGE = Programms[indexPrGoldenPrice].intervalDOGE - second;
					
					
					Programms[indexPrGoldenPrice].boolStartingDOGE = false;
					block = false;
					if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidGoldenPrice.remove(sender.tab.id);
					/**/
				/*
				
				}
				
				
				
				var idclaim = idBody.getElementsByClassName('flex py-2 flex-col items-center justify-center')[0];
				console.log(idclaim);
				if(idclaim!= null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPrice.js'});
					
					return;
				}
				/*
				Programms[indexPrGoldenPrice].boolStartingDOGE = false;
				block = false;
				if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGoldenPrice.remove(sender.tab.id);
				//}, 10000);
				/*
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPrice.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrGoldenPrice].startintervalDOGE = Programms[indexPrGoldenPrice].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrGoldenPrice].text_test = text_test_d.textContent;
				}
				
				Programms[indexPrGoldenPrice].boolStartingDOGE = false;
				block = false;
				if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGoldenPrice.remove(sender.tab.id);
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPriceinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPrice.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrGoldenPrice].balance = parseFloat(balance);
				}
				
				Programms[indexPrGoldenPrice].boolStartingDOGE = false;
				block = false;
				if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGoldenPrice.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrGoldenPrice].boolStartingDOGE = false;
						block = false;
						if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGoldenPrice.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPriceclaimagain.js'});
						
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
						Programms[indexPrGoldenPrice].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrGoldenPrice].boolStartingDOGE = false;
						Programms[indexPrGoldenPrice].intervalDOGE = 1000;
						block = false;
						if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGoldenPrice.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrGoldenPrice].boolStartingDOGE = false;
							Programms[indexPrGoldenPrice].userBool = false;
							block = false;
							console.log(Programms[indexPrGoldenPrice].boolStartingDOGE);
							console.log(Exc);
							if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidGoldenPrice.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPriceInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GoldenPriceShort.js'});
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
							Programms[indexPrGoldenPrice].boolStartingDOGE = false;
							Programms[indexPrGoldenPrice].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrGoldenPrice].startintervalDOGE = 0;
							console.log(Programms[indexPrGoldenPrice].intervalDOGE);
							block = false;						
							if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidGoldenPrice.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrGoldenPrice].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrGoldenPrice].boolStartingDOGE);
				console.log(Exc);
				if(tabidGoldenPrice.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGoldenPrice.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidGoldenPrice.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'goldenprice.in'){
			tabidGoldenPrice.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidGoldenPrice.length == 0){
				setTimeout(function() {
					if(tabidGoldenPrice.length == 0){
						Programms[indexPrGoldenPrice].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidGoldenPrice, changeInfo, tab){
//	console.log(tab);console.log(tabidGoldenPrice);
//});





