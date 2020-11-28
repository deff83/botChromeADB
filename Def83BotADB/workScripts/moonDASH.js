var indexPrDASH;

var poschetDash;

var tabidDASH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDASH(indexPrDASHog){
	block = true;
	indexPrDASH = indexPrDASHog;
	Programms[indexPrDASH].boolStartingDASH = true;
	for (var i = 0; i < tabidDASH.length; i++) { 
		try{
			chrome.tabs.remove(tabidDASH[i]);
		}catch(Exc){} 
	}
	console.log("moonDASH start");
	poschetDash = 0;
	injectScriptDASH('http://moondash.co.in');
	console.log("moonDASH end");
}



function injectScriptDASH(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidDASH.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'moondash.co.in'){
		//console.log('startMes');
		if(!tabidDASH.contains(sender.tab.id))tabidDASH.push(sender.tab.id);
			try{
				//console.log('Deff83 moonDASH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDASHinput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidDASH.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrDASH].boolStartingDASH = false;
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
				if(Programms[indexPrDASH].balance != 0 && Programms[indexPrDASH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDASH].balance);
					Programms[indexPrDASH].balance = parseFloat(balance);
					Programms[indexPrDASH].boolStartingDASH = false;
					block = false;
					if(tabidDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDASH.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPrDASH].balance);
				Programms[indexPrDASH].balance = parseFloat(balance);
				console.log(Programms[indexPrDASH].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					poschetDash = poschetDash + 1;
					if (poschetDash<20){
						f_callback('reload'); 
						console.log('reload');
					}else{
						Programms[indexPrDASH].boolStartingDASH = false;
						block = false;
						if(tabidDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDASH.remove(sender.tab.id);
					}
					
					return;
				}
				poschetDash = 0;
				//доступность кнопки
				console.log(request.html);
				var divClaim = frag.getElementById('Faucet').getElementsByClassName('btn btn-coin btn-lg')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				console.log(styleinputdivClaim == null);
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDASH.js'});
		
				}else{
					
					if(tabidDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDASH.remove(sender.tab.id);
					Programms[indexPrDASH].boolStartingDASH = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrDASH].boolStartingDASH = false;
				block = false;
				console.log(Programms[indexPrDASH].boolStartingDASH);
				console.log(Exc);
				if(tabidDASH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDASH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidDASH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moondash.co.in'){
			tabidDASH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDASH.length == 0){
				setTimeout(function() {
					if(tabidDASH.length == 0){
						Programms[indexPrDASH].boolStartingDASH = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDASH, changeInfo, tab){
//	console.log(tab);console.log(tabidDASH);
//});





