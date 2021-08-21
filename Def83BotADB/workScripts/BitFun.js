var indexPrBitFun;


var tabidBitFun = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitFun(indexPrBitFunog){
	block = true;
	indexPrBitFun = indexPrBitFunog;
	Programms[indexPrBitFun].boolStartingDOGE = true;
	for (var i = 0; i < tabidBitFun.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitFun[i]);
		}catch(Exc){} 
	}
	console.log("moonBitFun start");
	injectScriptBitFun('http://bitfun.co/games');
	console.log("moonBitFun end");
}



function injectScriptBitFun(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitFun.push(tab.id);
  });
};

//bitfun.co
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'bitfun.co'){
		//console.log('startMes');
		if(!tabidBitFun.contains(sender.tab.id))tabidBitFun.push(sender.tab.id);
			try{
				//console.log('Deff83 moonBitFun', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				/*
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBitFuninput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidBitFun.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidBitFun.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrBitFun].boolStartingDOGE = false;
					block = false;
					return;
				}*/
				//Timer
				/*var timer = frag.getElementById('PageLayout').getElementsByClassName('faucetValue')[0];
				if(timer == null){};
				//console.log('timer'+timer.innerHTML);
				if(! (timer.innerHTML == 'masleey@mail.ru')){
					f_callback('reload'); 
					console.log('reload');
					return;
				}*/
				//выход по баланс
				
				var balance = frag.getElementById('faucet').getElementsByTagName('span')[0].textContent.replace(/\s/g, '');
				//console.log(balance);
				if(balance == ''){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				
				if(Programms[indexPrBitFun].balance != 0 && Programms[indexPrBitFun].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrBitFun].balance);
					Programms[indexPrBitFun].balance = parseFloat(balance);
					Programms[indexPrBitFun].boolStartingDOGE = false;
					block = false;
					if(tabidBitFun.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitFun.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPrBitFun].balance);
				Programms[indexPrBitFun].balance = parseFloat(balance);
				console.log(Programms[indexPrBitFun].balance);
				/*
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					f_callback('reload'); 
					console.log('reload');
					return;
				}*/
				//доступность кнопки
				//console.log(request.html);
				var divClaim = frag.getElementById('faucet').getElementsByClassName('btn btn-primary btn-lg claimButton')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBitFun.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
		
				}else{
					
					if(tabidBitFun.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitFun.remove(sender.tab.id);
					Programms[indexPrBitFun].boolStartingDOGE = false;
					block = false;
				}
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrBitFun].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitFun].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitFun.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitFun.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBitFun.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bitfun.co'){
			tabidBitFun.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBitFun.length == 0){
				setTimeout(function() {
					if(tabidBitFun.length == 0){
						Programms[indexPrBitFun].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitFun, changeInfo, tab){
//	console.log(tab);console.log(tabidBitFun);
//});





