var indexPrBitMoon;

var colImgBitMoon = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBitMoon = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitMoon(indexPrfree){
	block = true;
	indexPrBitMoon = indexPrfree;
	for (var i = 0; i < tabidBitMoon.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitMoon[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBitMoon].boolStartingDOGE = true;
	
	colImgBitMoon = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BitMoon start");
	injectScriptBitMoon('https://earnbitmoon.club');
	console.log("BitMoon end");
}

	

function injectScriptBitMoon(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitMoon.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
//	console.log(request.src);
	if(request.src == 'earnbitmoon.club'){
		console.log('startMes');
		
		if(!tabidBitMoon.contains(sender.tab.id))tabidBitMoon.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[0];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrBitMoon].balance = parseFloat(col_coin);
					}
				}
				
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('button')[0];
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='ROLL'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMoon.js'});
							return;
						}
					}						
				}
				
				var idclaimTime = frag.getElementById('claimTime');
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
						Programms[indexPrBitMoon].startintervalDOGE = Programms[indexPrBitMoon].intervalDOGE - second;
					}
				}
				
				var idloginModal = frag.getElementById('loginModal');
				if (idloginModal!=null){
					return;
				}
				
				
				Programms[indexPrBitMoon].boolStartingDOGE = false;
				block = false;
				if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitMoon.remove(sender.tab.id);
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
						Programms[indexPrBitMoon].startintervalDOGE = Programms[indexPrBitMoon].intervalDOGE - second;
						
						Programms[indexPrBitMoon].boolStartingDOGE = false;
						block = false;
						if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitMoon.remove(sender.tab.id);
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMooninput.js'});
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMooninput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMoon.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrBitMoon].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrBitMoon].startintervalDOGE = Programms[indexPrBitMoon].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrBitMoon].boolStartingDOGE = false;
				block = false;
				if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitMoon.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrBitMoon].boolStartingDOGE = false;
						block = false;
						if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitMoon.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMoonclaimagain.js'});
						
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
						Programms[indexPrBitMoon].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrBitMoon].boolStartingDOGE = false;
						Programms[indexPrBitMoon].intervalDOGE = 1000;
						block = false;
						if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBitMoon.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrBitMoon].boolStartingDOGE = false;
							Programms[indexPrBitMoon].userBool = false;
							block = false;
							console.log(Programms[indexPrBitMoon].boolStartingDOGE);
							console.log(Exc);
							if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitMoon.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMoonInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitMoonShort.js'});
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
							Programms[indexPrBitMoon].boolStartingDOGE = false;
							Programms[indexPrBitMoon].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrBitMoon].startintervalDOGE = 0;
							console.log(Programms[indexPrBitMoon].intervalDOGE);
							block = false;						
							if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBitMoon.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBitMoon].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitMoon].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitMoon.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitMoon.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBitMoon.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnbitmoon.club'){
			tabidBitMoon.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBitMoon.length == 0){
				setTimeout(function() {
					if(tabidBitMoon.length == 0){
						Programms[indexPrBitMoon].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitMoon, changeInfo, tab){
//	console.log(tab);console.log(tabidBitMoon);
//});





