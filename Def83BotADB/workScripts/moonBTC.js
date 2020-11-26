var indexPrBTC;

var poschet;

var tabidBTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBTC(indexPrBTCog){
	block = true;
	indexPrBTC = indexPrBTCog;
	Programms[indexPrBTC].boolStartingBTC = true;
	for (var i = 0; i < tabidBTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidBTC[i]);
		}catch(Exc){} 
	}
	console.log("moonBTC start");
	poschet = 0;
	injectScriptBTC('http://moonbit.co.in');
	console.log("moonBTC end");
}



function injectScriptBTC(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidBTC.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'moonbit.co.in'){
		//console.log('startMes');
		if(!tabidBTC.contains(sender.tab.id))tabidBTC.push(sender.tab.id);
			try{
				//console.log('Deff83 moonBTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBTCinput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidBTC.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrBTC].boolStartingBTC = false;
					block = false;
					return;
				}
				//Timer
				var timer = frag.getElementById('PageLayout').getElementsByClassName('faucetValue')[0];
				if(timer == null){};
				//console.log('timer'+timer.innerHTML);
				try {
				
					if(! (timer.innerHTML == 'masleey@mail.ru')){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
				}catch(Exc){
					console.log(Exc);
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/noScrit.js'});
					return;
				}
				//выход по баланс
				var balance = frag.getElementById('Navigation').getElementsByTagName('span')[1].getElementsByTagName('a')[0].textContent; 
				if(Programms[indexPrBTC].balance != 0 && Programms[indexPrBTC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrBTC].balance);
					Programms[indexPrBTC].balance = parseFloat(balance);
					Programms[indexPrBTC].boolStartingBTC = false;
					block = false;
					if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBTC.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPrBTC].balance);
				Programms[indexPrBTC].balance = parseFloat(balance);
				console.log(Programms[indexPrBTC].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					poschet = poschet + 1;
					if (poschet<20){
						f_callback('reload'); 
						console.log('reload');
					}else{
						Programms[indexPrBTC].boolStartingBTC = false;
						block = false;
						if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBTC.remove(sender.tab.id);
					}
					
					return;
				}
				
				poschet = 0;
				//доступность кнопки
				console.log(request.html);
				var divClaim = frag.getElementById('Faucet').getElementsByClassName('btn btn-coin btn-lg')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				console.log(styleinputdivClaim == null);
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBTC.js'});
		
				}else{
					
					if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBTC.remove(sender.tab.id);
					Programms[indexPrBTC].boolStartingBTC = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrBTC].boolStartingBTC = false;
				block = false;
				console.log(Programms[indexPrBTC].boolStartingBTC);
				console.log(Exc);
				if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBTC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moonbit.co.in'){
			tabidBTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBTC.length == 0){
				setTimeout(function() {
					if(tabidBTC.length == 0){
						Programms[indexPrBTC].boolStartingBTC = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBTC, changeInfo, tab){
//	console.log(tab);console.log(tabidBTC);
//});





