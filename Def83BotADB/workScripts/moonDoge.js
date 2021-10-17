var indexPrDOGE;

var poschetDOGE;

var tabidDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDOGE(indexPrDOGEog){
	block = true;
	indexPrDOGE = indexPrDOGEog;
	Programms[indexPrDOGE].boolStartingDOGE = true;
	for (var i = 0; i < tabidDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidDOGE[i]);
		}catch(Exc){} 
	}
	console.log("moonDOGE start");
	poschetDOGE = 0;
	injectScriptDOGE('http://moondoge.co.in');
	console.log("moonDOGE end");
}



function injectScriptDOGE(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidDOGE.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	
	if (request.message == 'content') {
		
		//console.log('Deff83 content');
	}else{
		if (request.message == 'preload') {
			//console.log('Deff83 preload');
		}
		return;
	}
	
	if(request.src == 'moondoge.co.in'){
		console.log('startMes');
		if(!tabidDOGE.contains(sender.tab.id))tabidDOGE.push(sender.tab.id);
			try{
				//console.log('Deff83 moonDOGE', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDOGEinput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidDOGE.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrDOGE].boolStartingDOGE = false;
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
				if(Programms[indexPrDOGE].balance != 0 && Programms[indexPrDOGE].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDOGE].balance);
					Programms[indexPrDOGE].balance = parseFloat(balance);
					Programms[indexPrDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDOGE.remove(sender.tab.id);
					return;
				}
				
				console.log(Programms[indexPrDOGE].balance);
				Programms[indexPrDOGE].balance = parseFloat(balance);
				console.log(Programms[indexPrDOGE].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					poschetDOGE = poschetDOGE + 1;
					if (poschetDOGE<20){
						f_callback('reload'); 
						console.log('reload');
					}else{
						Programms[indexPrDOGE].boolStartingDOGE = false;
						block = false;
						if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidDOGE.remove(sender.tab.id);
					}
					
					return;
				}
				poschetDOGE = 0;
				//доступность кнопки
				console.log(request.html);
				var divClaim = frag.getElementById('Faucet').getElementsByClassName('btn btn-coin btn-lg')[0];
				var styleinputdivClaim = divClaim.getElementsByTagName('span')[0].getAttribute('style');
				console.log(styleinputdivClaim == null);
				if (styleinputdivClaim == null){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDOGE.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/sound.js'});
				}else{
					
					if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDOGE.remove(sender.tab.id);
					Programms[indexPrDOGE].boolStartingDOGE = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrDOGE].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDOGE.remove(sender.tab.id);
				
			}
			
	}
	if(tabidDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moondoge.co.in'){
			tabidDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrDOGE].alreadytrue == true){
				Programms[indexPrDOGE].startintervalDOGE = Programms[indexPrDOGE].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidDOGE.length == 0){
				setTimeout(function() {
					if(tabidDOGE.length == 0){
						Programms[indexPrDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidDOGE);
//});





