var indexPrMCryptTRX;


var tabidMCryptTRX = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonMCryptTRX(indexPrfree){
	block = true;
	indexPrMCryptTRX = indexPrfree;
	Programms[indexPrMCryptTRX].boolStartingDOGE = true;
	for (var i = 0; i < tabidMCryptTRX.length; i++) { 
		try{
			//chrome.tabs.remove(tabidMCryptTRX[i]);
		}catch(Exc){} 
	}
	console.log("MCryptTRX start");
	injectScriptMCryptTRX('https://multicrypt.online/trx/');
	console.log("MCryptTRX end");
}



function injectScriptMCryptTRX(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidMCryptTRX.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'multicrypt.online'){
		console.log('startMes');
		if(!tabidMCryptTRX.contains(sender.tab.id))tabidMCryptTRX.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				let frag = document.createRange().createContextualFragment(request.html);
				var div1 = frag.querySelectorAll('div')[3];
				
				
				
				var succ = div1.getElementsByClassName('alert alert-success')[0];
				if (succ!=null){
					console.log(succ.textContent);
					Programms[indexPrMCryptTRX].startintervalDOGE = Programms[indexPrMCryptTRX].intervalDOGE - 60*5+15;
					Programms[indexPrMCryptTRX].boolStartingDOGE = false;
					block = false;
					if(tabidMCryptTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidMCryptTRX.remove(sender.tab.id);
					return;
				}
				
				var info = div1.getElementsByClassName('alert alert-info')[1];
				if (info!=null){
					if (info.textContent.split(' ')[1] == "have"){
						var min = info.textContent.split(' ')[4];
						var second = min * 60 + 15;
						console.log(second);
						Programms[indexPrMCryptTRX].startintervalDOGE = Programms[indexPrMCryptTRX].intervalDOGE - second;
						
						Programms[indexPrMCryptTRX].boolStartingDOGE = false;
						block = false;
						if(tabidMCryptTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidMCryptTRX.remove(sender.tab.id);
						return;
					}
				}
				
				
				var alertd = div1.getElementsByClassName('alert alert-danger')[0];
				console.log(div1);
				console.log(alertd);
				if (alertd!=null){
					if (alertd.textContent.split(' ')[1] == "reached"){
						console.log('24h');
						Programms[indexPrMCryptTRX].userBool = false;
						Programms[indexPrMCryptTRX].boolStartingDOGE = false;
						block = false;
						if(tabidMCryptTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidMCryptTRX.remove(sender.tab.id);
						return;
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MCryptTRX.js'});
				
				
				
				/*
				
				var login = frag.getElementById('login'); 
				alert alert-danger
				
				
				console.log(login);
				if(login != null) 
				{
					
					return;
				}
				
				
				
				var balance = frag.getElementById('cryptovalue').textContent; 
				//выход по балансу
				if(Programms[indexPrMCryptTRX].balance != 0 && Programms[indexPrMCryptTRX].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrMCryptTRX].balance);
					Programms[indexPrMCryptTRX].balance = parseFloat(balance);
					Programms[indexPrMCryptTRX].boolStartingDOGE = false;
					block = false;
					if(tabidMCryptTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidMCryptTRX.remove(sender.tab.id);
					return;
				}
				Programms[indexPrMCryptTRX].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrMCryptTRX].boolStartingDOGE = false;
					block = false;
					if(tabidMCryptTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidMCryptTRX.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MCryptTRX.js'});
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrMCryptTRX].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrMCryptTRX].boolStartingDOGE);
				console.log(Exc);
				if(tabidMCryptTRX.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidMCryptTRX.remove(sender.tab.id);
				
			}
			
	}
	if(tabidMCryptTRX.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'multicrypt.online'){
			tabidMCryptTRX.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrMCryptTRX].alreadytrue == true){
				Programms[indexPrMCryptTRX].startintervalDOGE = Programms[indexPrMCryptTRX].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidMCryptTRX.length == 0){
				setTimeout(function() {
					if(tabidMCryptTRX.length == 0){
						Programms[indexPrMCryptTRX].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidMCryptTRX, changeInfo, tab){
//	console.log(tab);console.log(tabidMCryptTRX);
//});





