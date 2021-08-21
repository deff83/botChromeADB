var indexPrLTC;

var poschetLTC;

var tabidLTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonLTC(indexPrLTCog){
	block = true;
	indexPrLTC = indexPrLTCog;
	Programms[indexPrLTC].boolStartingLTC = true;
	for (var i = 0; i < tabidLTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidLTC[i]);
		}catch(Exc){} 
	}
	console.log("moonLTC start");
	poschetLTC = 0;
	injectScriptLTC('http://moonliteco.in');
	console.log("moonLTC end");
}



function injectScriptLTC(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidLTC.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'moonliteco.in'){
		//console.log('startMes');
		if(!tabidLTC.contains(sender.tab.id))tabidLTC.push(sender.tab.id);
			try{
				//console.log('Deff83 moonLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonLTCinput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidLTC.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrLTC].boolStartingLTC = false;
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
				if(Programms[indexPrLTC].balance != 0 && Programms[indexPrLTC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrLTC].balance);
					Programms[indexPrLTC].balance = parseFloat(balance);
					Programms[indexPrLTC].boolStartingLTC = false;
					block = false;
					if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidLTC.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPrLTC].balance);
				Programms[indexPrLTC].balance = parseFloat(balance);
				console.log(Programms[indexPrLTC].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					poschetLTC = poschetLTC + 1;
					if (poschetLTC<20){
						f_callback('reload'); 
						console.log('reload');
					}else{
						Programms[indexPrLTC].boolStartingLTC = false;
						block = false;
						if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidLTC.remove(sender.tab.id);
					}
					
					return;
				}
				poschetLTC = 0;
				//доступность кнопки
				console.log(request.html);
				var divClaim = frag.getElementById('Faucet').getElementsByClassName('btn btn-coin btn-lg')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				console.log(styleinputdivClaim == null);
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonLTC.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
		
				}else{
					
					if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidLTC.remove(sender.tab.id);
					Programms[indexPrLTC].boolStartingLTC = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrLTC].boolStartingLTC = false;
				block = false;
				console.log(Programms[indexPrLTC].boolStartingLTC);
				console.log(Exc);
				if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidLTC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidLTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moonliteco.in'){
			tabidLTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidLTC.length == 0){
				setTimeout(function() {
					if(tabidLTC.length == 0){
						Programms[indexPrLTC].boolStartingLTC = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidLTC, changeInfo, tab){
//	console.log(tab);console.log(tabidLTC);
//});





