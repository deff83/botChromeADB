var indexPrCryptoWin;

var colImgCryptoWin = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCryptoWin = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCryptoWin(indexPrfree){
	block = true;
	indexPrCryptoWin = indexPrfree;
	for (var i = 0; i < tabidCryptoWin.length; i++) { 
		try{
			chrome.tabs.remove(tabidCryptoWin[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCryptoWin].boolStartingDOGE = true;
	
	colImgCryptoWin = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CryptoWin start");
	injectScriptCryptoWin('https://cryptowin.io/faucet.php');
	console.log("CryptoWin end");
}

	

function injectScriptCryptoWin(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidCryptoWin.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'cryptowin.io'){
		console.log('startMes');
		
		if(!tabidCryptoWin.contains(sender.tab.id))tabidCryptoWin.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				var idusername = frag.getElementById('username');
				if(idusername!= null){
					return;
				}
				
				var idclock = frag.getElementById('clock');	//00:14:16
				
				if(idclock!= null){
					var idclock_s = idclock.textContent;
					var seconds = idclock_s.split(':')[2];
					var minutes = idclock_s.split(':')[1];
					var hours = idclock_s.split(':')[0];
					
					
					var second = seconds*1+minutes*60 + hours*60*60 + 5;
					console.log(second);
					Programms[indexPrCryptoWin].startintervalDOGE = Programms[indexPrCryptoWin].intervalDOGE - second;
					
					Programms[indexPrCryptoWin].boolStartingDOGE = false;
					block = false;
					if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCryptoWin.remove(sender.tab.id);
					return;
					/*
					*/
					
					
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWin.js'});
				
				/*
				var idbox4 = frag.getElementById('box4');
				if(idbox4!= null){
					console.log(idbox4.textContent);
					
					var you_have = idbox4.textContent;
					console.log(you_have.split(' ')[1]);
					
					
					if (you_have.split(' ')[1] == 'You') {
						
						
						var second = you_have.split(' ')[5];
						
						if (second==null) {
							second = 1;
						}
						
						second = second * 60;
						console.log(second);
						Programms[indexPrCryptoWin].startintervalDOGE = Programms[indexPrCryptoWin].intervalDOGE - second;
						
						Programms[indexPrCryptoWin].boolStartingDOGE = false;
						block = false;
						if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCryptoWin.remove(sender.tab.id);
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWininput.js'});
				/*
				f_callback('reload'); 
				console.log('reload');
				return;
				
				
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWininput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWin.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCryptoWin].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrCryptoWin].startintervalDOGE = Programms[indexPrCryptoWin].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrCryptoWin].boolStartingDOGE = false;
				block = false;
				if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCryptoWin.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCryptoWin].boolStartingDOGE = false;
						block = false;
						if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCryptoWin.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWinclaimagain.js'});
						
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
						Programms[indexPrCryptoWin].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCryptoWin].boolStartingDOGE = false;
						Programms[indexPrCryptoWin].intervalDOGE = 1000;
						block = false;
						if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCryptoWin.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCryptoWin].boolStartingDOGE = false;
							Programms[indexPrCryptoWin].userBool = false;
							block = false;
							console.log(Programms[indexPrCryptoWin].boolStartingDOGE);
							console.log(Exc);
							if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCryptoWin.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWinInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CryptoWinShort.js'});
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
							Programms[indexPrCryptoWin].boolStartingDOGE = false;
							Programms[indexPrCryptoWin].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCryptoWin].startintervalDOGE = 0;
							console.log(Programms[indexPrCryptoWin].intervalDOGE);
							block = false;						
							if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCryptoWin.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCryptoWin].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCryptoWin].boolStartingDOGE);
				console.log(Exc);
				if(tabidCryptoWin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCryptoWin.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	if(tabidCryptoWin.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'cryptowin.io'){
			tabidCryptoWin.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCryptoWin.length == 0){
				setTimeout(function() {
					if(tabidCryptoWin.length == 0){
						Programms[indexPrCryptoWin].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCryptoWin, changeInfo, tab){
//	console.log(tab);console.log(tabidCryptoWin);
//});





