var indexPrCoinadster;

var colImgCoinadster = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCoinadster = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCoinadster(indexPrfree){
	block = true;
	indexPrCoinadster = indexPrfree;
	for (var i = 0; i < tabidCoinadster.length; i++) { 
		try{
			chrome.tabs.remove(tabidCoinadster[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCoinadster].boolStartingDOGE = true;
	
	colImgCoinadster = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Coinadster start");
	injectScriptCoinadster('https://coinadster.com/faucet.html');
	console.log("Coinadster end");
}

	

function injectScriptCoinadster(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCoinadster.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'coinadster.com'){
		console.log('startMes');
		
		if(!tabidCoinadster.contains(sender.tab.id))tabidCoinadster.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claymFaucet');
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrCoinadster].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					if (buttonclaimFaucet!=null){
						console.log(buttonclaimFaucet.textContent.split(' ')[1]);
						if (buttonclaimFaucet.textContent.split(' ')[1]=='ROLL'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinadster.js'});
							return;
						}
					}						
				}
				
				var idclaimTime = frag.getElementById('tai2mer');
					console.log(idclaimTime);
				//01 minutes and 58 seconds
				if (idclaimTime!=null){
					var idclaimTimeText = idclaimTime.textContent;
					var minutes = idclaimTimeText.split(' ')[0];
					var minutes_word = idclaimTimeText.split(' ')[1];
					var seconds = idclaimTimeText.split(' ')[3];
					if (minutes_word=='seconds'){
						seconds = minutes;
						minutes = 0;
					}
					
					
					console.log(idclaimTimeText);
					
					if (seconds==null){
						seconds = 0;
					}
					
					if (minutes!=null && seconds!=null){
						var second = minutes * 60 + seconds*1 + 65;
						console.log(second);
						Programms[indexPrCoinadster].startintervalDOGE = Programms[indexPrCoinadster].intervalDOGE - second;
					}
				}
				
				var idloginModal = frag.getElementById('registrationModal');
				if (idloginModal!=null){
					return;
				}
				
				
				Programms[indexPrCoinadster].boolStartingDOGE = false;
				block = false;
				if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinadster.remove(sender.tab.id);
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
						Programms[indexPrCoinadster].startintervalDOGE = Programms[indexPrCoinadster].intervalDOGE - second;
						
						Programms[indexPrCoinadster].boolStartingDOGE = false;
						block = false;
						if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinadster.remove(sender.tab.id);
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinadsterinput.js'});
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinadsterinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinadster.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrCoinadster].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrCoinadster].startintervalDOGE = Programms[indexPrCoinadster].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrCoinadster].boolStartingDOGE = false;
				block = false;
				if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinadster.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrCoinadster].boolStartingDOGE = false;
						block = false;
						if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinadster.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinadsterclaimagain.js'});
						
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
						Programms[indexPrCoinadster].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrCoinadster].boolStartingDOGE = false;
						Programms[indexPrCoinadster].intervalDOGE = 1000;
						block = false;
						if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCoinadster.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrCoinadster].boolStartingDOGE = false;
							Programms[indexPrCoinadster].userBool = false;
							block = false;
							console.log(Programms[indexPrCoinadster].boolStartingDOGE);
							console.log(Exc);
							if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinadster.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinadsterInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CoinadsterShort.js'});
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
							Programms[indexPrCoinadster].boolStartingDOGE = false;
							Programms[indexPrCoinadster].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrCoinadster].startintervalDOGE = 0;
							console.log(Programms[indexPrCoinadster].intervalDOGE);
							block = false;						
							if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidCoinadster.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCoinadster].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCoinadster].boolStartingDOGE);
				console.log(Exc);
				if(tabidCoinadster.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinadster.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCoinadster.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'coinadster.com'){
			tabidCoinadster.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCoinadster.length == 0){
				setTimeout(function() {
					if(tabidCoinadster.length == 0){
						Programms[indexPrCoinadster].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCoinadster, changeInfo, tab){
//	console.log(tab);console.log(tabidCoinadster);
//});





