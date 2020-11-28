var indexPrBCH;

var poschetBCH;
var poschetBCHf;

var tabidBCH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBCH(indexPrBCHog){
	block = true;
	indexPrBCH = indexPrBCHog;
	Programms[indexPrBCH].boolStartingBCH = true;
	for (var i = 0; i < tabidBCH.length; i++) { 
		try{
			chrome.tabs.remove(tabidBCH[i]);
		}catch(Exc){} 
	}
	console.log("moonBCH start");
	poschetBCH = 0;
	poschetBCHf = 0;
	injectScriptBCH('http://moonbitcoin.cash');
	console.log("moonBCH end");
}



function injectScriptBCH(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidBCH.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'moonbitcoin.cash'){
		//console.log('startMes');
		if(!tabidBCH.contains(sender.tab.id))tabidBCH.push(sender.tab.id);
			try{
				//console.log('Deff83 moonBCH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBCHinput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidBCH.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrBCH].boolStartingBCH = false;
					block = false;
					return;
				}
				//Timer
				var timer = frag.getElementById('PageLayout').getElementsByClassName('faucetValue')[0];
				if(timer == null){};
				//console.log('timer'+timer.innerHTML);
				try {
				
					if(! (timer.innerHTML == 'masleey@mail.ru')){
						poschetBCH = poschetBCH + 1;
						if (poschetBCH<20){
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
				}catch(Exc){
					console.log(Exc);
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/noScrit.js'});
					return;
				}
				//выход по баланс
				var balance = frag.getElementById('Navigation').getElementsByTagName('span')[1].getElementsByTagName('a')[0].textContent; 
				if(Programms[indexPrBCH].balance != 0 && Programms[indexPrBCH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrBCH].balance);
					Programms[indexPrBCH].balance = parseFloat(balance);
					Programms[indexPrBCH].boolStartingBCH = false;
					block = false;
					if(tabidBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBCH.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPrBCH].balance);
				Programms[indexPrBCH].balance = parseFloat(balance);
				console.log(Programms[indexPrBCH].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					poschetBCHf = poschetBCHf + 1;
					if (poschetBCHf<20){
						f_callback('reload'); 
						console.log('reload');
					}else{
						Programms[indexPrBCH].boolStartingBCH = false;
						block = false;
						if(tabidBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBCH.remove(sender.tab.id);
					}
					
					return;
				}
				poschetBCHf = 0;
				//доступность кнопки
				console.log(request.html);
				var divClaim = frag.getElementById('Faucet').getElementsByClassName('btn btn-coin btn-lg')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				console.log(styleinputdivClaim == null);
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBCH.js'});
		
				}else{
					
					if(tabidBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBCH.remove(sender.tab.id);
					Programms[indexPrBCH].boolStartingBCH = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrBCH].boolStartingBCH = false;
				block = false;
				console.log(Programms[indexPrBCH].boolStartingBCH);
				console.log(Exc);
				if(tabidBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBCH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBCH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moonbitcoin.cash'){
			tabidBCH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBCH.length == 0){
				setTimeout(function() {
					if(tabidBCH.length == 0){
						Programms[indexPrBCH].boolStartingBCH = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBCH, changeInfo, tab){
//	console.log(tab);console.log(tabidBCH);
//});





