var indexPrSimpleBits;

var colImgSimpleBits = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidSimpleBits = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonSimpleBits(indexPrfree){
	block = true;
	indexPrSimpleBits = indexPrfree;
	for (var i = 0; i < tabidSimpleBits.length; i++) { 
		try{
			chrome.tabs.remove(tabidSimpleBits[i]);
		}catch(Exc){} 
	}
	Programms[indexPrSimpleBits].boolStartingDOGE = true;
	
	colImgSimpleBits = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("SimpleBits start");
	injectScriptSimpleBits('https://simplebits.io/faucet');
	console.log("SimpleBits end");
}

	

function injectScriptSimpleBits(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidSimpleBits.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'simplebits.io'){
		console.log('startMes');
		
		if(!tabidSimpleBits.contains(sender.tab.id))tabidSimpleBits.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				 //setTimeout(function() {
				
				
				var idBody = frag.getElementById('__layout');
				console.log(idBody);
				if(idBody== null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				
				
				
				var balance = idBody.getElementsByClassName('relative mx-4 lg:mx-0')[0];
				
				console.log(balance);
				if (balance!=null)	{
					
					balance = balance.getElementsByTagName('div')[3];
					console.log(balance);
					
					Programms[indexPrSimpleBits].balance = parseFloat(balance.textContent);
				}
				
				//font-landing text-4xl font-bold
				var idminute = idBody.getElementsByClassName('font-landing text-4xl font-bold')[0];
				console.log(idminute);
				if(idminute!= null){
					console.log(idminute.textContent);
					
					var minute = idminute.textContent.split(':')[0];
					var secondsfg = idminute.textContent.split(':')[1];
					
					var second = minute*60+(secondsfg)*1; 
					console.log(second);
					Programms[indexPrSimpleBits].startintervalDOGE = Programms[indexPrSimpleBits].intervalDOGE - second;
					
					
					Programms[indexPrSimpleBits].boolStartingDOGE = false;
					block = false;
					if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSimpleBits.remove(sender.tab.id);
					/**/
				}
				
				
				
				var idclaim = idBody.getElementsByClassName('flex py-2 flex-col items-center justify-center')[0];
				console.log(idclaim);
				if(idclaim!= null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBits.js'});
					
					return;
				}
				
				f_callback('reload'); 
					console.log('reload');
					return;
				/*
				Programms[indexPrSimpleBits].boolStartingDOGE = false;
				block = false;
				if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSimpleBits.remove(sender.tab.id);
				//}, 10000);
				/*
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBits.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrSimpleBits].startintervalDOGE = Programms[indexPrSimpleBits].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrSimpleBits].text_test = text_test_d.textContent;
				}
				
				Programms[indexPrSimpleBits].boolStartingDOGE = false;
				block = false;
				if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSimpleBits.remove(sender.tab.id);
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBitsinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBits.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrSimpleBits].balance = parseFloat(balance);
				}
				
				Programms[indexPrSimpleBits].boolStartingDOGE = false;
				block = false;
				if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSimpleBits.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrSimpleBits].boolStartingDOGE = false;
						block = false;
						if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSimpleBits.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBitsclaimagain.js'});
						
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
						Programms[indexPrSimpleBits].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrSimpleBits].boolStartingDOGE = false;
						Programms[indexPrSimpleBits].intervalDOGE = 1000;
						block = false;
						if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSimpleBits.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrSimpleBits].boolStartingDOGE = false;
							Programms[indexPrSimpleBits].userBool = false;
							block = false;
							console.log(Programms[indexPrSimpleBits].boolStartingDOGE);
							console.log(Exc);
							if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidSimpleBits.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBitsInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SimpleBitsShort.js'});
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
							Programms[indexPrSimpleBits].boolStartingDOGE = false;
							Programms[indexPrSimpleBits].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrSimpleBits].startintervalDOGE = 0;
							console.log(Programms[indexPrSimpleBits].intervalDOGE);
							block = false;						
							if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidSimpleBits.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrSimpleBits].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrSimpleBits].boolStartingDOGE);
				console.log(Exc);
				if(tabidSimpleBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSimpleBits.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidSimpleBits.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'simplebits.io'){
			tabidSimpleBits.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidSimpleBits.length == 0){
				setTimeout(function() {
					if(tabidSimpleBits.length == 0){
						Programms[indexPrSimpleBits].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidSimpleBits, changeInfo, tab){
//	console.log(tab);console.log(tabidSimpleBits);
//});





