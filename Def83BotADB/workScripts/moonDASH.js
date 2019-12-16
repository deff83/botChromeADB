var indexPrDash;	//новый индекс

var tabidDash = [];	//новый массив

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDash(indexPrDashog){
	block = true;
	indexPrDash = indexPrDashog;
	Programms[indexPrDash].boolStartingDOGE = true;
	for (var i = 0; i < tabidDash.length; i++) { 
		try{
			chrome.tabs.remove(tabidDash[i]);
		}catch(Exc){} 
	}
	console.log("moonDash start");
	injectScriptDash('http:///moondash.co.in');
	console.log("moonDash end");
}



function injectScriptDash(url) {	//новая функция
  chrome.tabs.create({url : url}, function(tab) {
	tabidDash.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'moondash.co.in'){	//новый адрес
		//console.log('startMes');
		if(!tabidDash.contains(sender.tab.id))tabidDash.push(sender.tab.id);
			try{
				//console.log('Deff83 moonDash', request);
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
					if(tabidDash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidDash.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrDash].boolStartingDOGE = false;
					block = false;
					return;
				}
				//Timer
				var timer = frag.getElementById('PageLayout').getElementsByClassName('faucetValue')[0];
				//console.log('timer'+timer.innerHTML);
				if(! (timer.innerHTML == 'masleey@mail.ru')){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				//выход по баланс
				var balance = frag.getElementById('Navigation').getElementsByTagName('span')[1].getElementsByTagName('a')[0].textContent; 
				if(Programms[indexPrDash].balance != 0 && Programms[indexPrDash].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrDash].balance);
					Programms[indexPrDash].balance = parseFloat(balance);
					Programms[indexPrDash].boolStartingDOGE = false;
					block = false;
					if(tabidDash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDash.remove(sender.tab.id);
					return;
				}
				Programms[indexPrDash].balance = parseFloat(balance);
				console.log(Programms[indexPrDash].balance);
				
				
				//проверка ненулевого клейма
				var claimnow = frag.getElementById('Faucet').getElementsByTagName('span')[0].textContent;
				console.log(claimnow);
				if(claimnow == "0.00000000"){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
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
					
					if(tabidDash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDash.remove(sender.tab.id);
					Programms[indexPrDash].boolStartingDOGE = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrDash].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrDash].boolStartingDOGE);
				console.log(Exc);
				if(tabidDash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDash.remove(sender.tab.id);
				
			}
	}
	if(tabidDash.contains(sender.tab.id)){	//если во вкладке другой адрес 
		if(request.src != 'moondash.co.in'){ //новый адрес
			tabidDash.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDash.length == 0){
				setTimeout(function() {
					if(tabidDash.length == 0){
						Programms[indexPrDash].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDash, changeInfo, tab){
//	console.log(tab);console.log(tabidDash);
//});





