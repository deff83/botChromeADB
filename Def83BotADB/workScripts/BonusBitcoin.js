var indexPrBonusBitcoin;



var tabidBonusBitcoin = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBonusBitcoin(indexPrBonusBitcoinog){
	block = true;
	indexPrBonusBitcoin = indexPrBonusBitcoinog;
	for (var i = 0; i < tabidBonusBitcoin.length; i++) { 
		try{
			chrome.tabs.remove(tabidBonusBitcoin[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBonusBitcoin].boolStartingDOGE = true;
	booleanExecuteScripteBonusBitcoin = false
	console.log("BonusBitcoin start");
	injectScriptBonusBitcoin('http://bonusbitcoin.co/faucet');
	console.log("BonusBitcoin end");
}



function injectScriptBonusBitcoin(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidBonusBitcoin.push(tab.id);
  });
};

//http://bonusbitcoin.co/faucet
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'bonusbitcoin.co'){
		//console.log('startMes');
		if(!tabidBonusBitcoin.contains(sender.tab.id))tabidBonusBitcoin.push(sender.tab.id);
			try{
				//console.log('Deff83 moonBonusBitcoin', request);
				let frag = document.createRange().createContextualFragment(request.html);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var faucetClaimModal = frag.getElementById('FaucetClaimModal'); 
				
				var faucetForm =  frag.getElementById('FaucetForm'); 
				console.log('Deff83 moonBonusBitcoin', faucetForm);
				if (faucetForm != null){
					var textbutton = faucetForm.getElementsByTagName('button')[1].textContent;
					
					if (textbutton.split(' ')[1] == 'again'){
						if(tabidBonusBitcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
						tabidBonusBitcoin.remove(sender.tab.id);
						Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
						block = false;
						return;
					}
				}
				
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BonusBitcoinog.js'});
					booleanExecuteScripteBonusBitcoin = true;
				
				
				if(faucetClaimModal != null){
					var balanceDiv = faucetClaimModal.getElementsByTagName('b')[1];
					if(balanceDiv == null) {
						
						
						
						
						
					}else{
						var balance = balanceDiv.textContent.split(' ')[0];
						console.log(balance);
						Programms[indexPrBonusBitcoin].balance = parseFloat(balance.replace(',', ''));
						if(tabidBonusBitcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
						tabidBonusBitcoin.remove(sender.tab.id);
						Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
						block = false;
						return;
					}
					
				}
				
				f_callback('reload'); 
				console.log('reload');
				return;
				
				//Programms[indexPrBonusBitcoin].balance = parseFloat(balance);
				////Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
				
				//if(tabidBonusBitcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				//tabidBonusBitcoin.remove(sender.tab.id);
					
				
				
				/*
				var authoriz = frag.getElementById('PageContent_AuthorisedButtons');
				if(authoriz != null){
					console.log('authoriz');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBonusBitcoininput.js'});
					return;
				}
				
				
				
				
				
				
				
				
				
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log(succses.getElementsByTagName('b')[0].innerHTML);
					if(tabidBonusBitcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidBonusBitcoin.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
					block = false;
					return;
				}
				//Timer
				var timer = frag.getElementById('PageLayout').getElementsByClassName('faucetValue')[0];
				if(timer == null){};
				//console.log('timer'+timer.innerHTML);
				if(! (timer.innerHTML == 'masleey@mail.ru')){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				//выход по баланс
				
				
				console.log(Programms[indexPrBonusBitcoin].balance);
				Programms[indexPrBonusBitcoin].balance = parseFloat(balance);
				console.log(Programms[indexPrBonusBitcoin].balance);
				
				
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBonusBitcoin.js'});
		
				}else{
					
					if(tabidBonusBitcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBonusBitcoin.remove(sender.tab.id);
					Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
					block = false;
				}*/
			}catch(Exc){
				Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBonusBitcoin].boolStartingDOGE);
				console.log(Exc);
				if(tabidBonusBitcoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBonusBitcoin.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBonusBitcoin.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bonusbitcoin.co'){
			tabidBonusBitcoin.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBonusBitcoin.length == 0){
				setTimeout(function() {
					if(tabidBonusBitcoin.length == 0){
						Programms[indexPrBonusBitcoin].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBonusBitcoin, changeInfo, tab){
//	console.log(tab);console.log(tabidBonusBitcoin);
//});





