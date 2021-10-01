var indexPrGeDogeio;

var colImgGeDogeio = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidGeDogeio = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonGeDogeio(indexPrfree){
	block = true;
	indexPrGeDogeio = indexPrfree;
	for (var i = 0; i < tabidGeDogeio.length; i++) { 
		try{
			chrome.tabs.remove(tabidGeDogeio[i]);
		}catch(Exc){} 
	}
	Programms[indexPrGeDogeio].boolStartingDOGE = true;
	
	colImgGeDogeio = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("GeDogeio start");
	injectScriptGeDogeio('https://getdoge.io/faucet.html');
	console.log("GeDogeio end");
}

	

function injectScriptGeDogeio(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidGeDogeio.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
//	console.log(request.src);
	if(request.src == 'getdoge.io'){
		console.log('startMes');
		
		if(!tabidGeDogeio.contains(sender.tab.id))tabidGeDogeio.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idclaimFaucet = frag.getElementById('claimFaucet');
				Programms[indexPrGeDogeio].text_test = '250';
				
				console.log(idclaimFaucet);
				
				var idsidebarblock = frag.getElementById('sidebar-block');
				if (idsidebarblock!=null){
					var coins = idsidebarblock.getElementsByTagName('b')[1];
					console.log(coins);
					if (coins!=null){
						var col_coin = coins.textContent.replace(',','').split(' ')[0];
						Programms[indexPrGeDogeio].balance = parseFloat(col_coin);
					}
				}
				//return;
				
				if (idclaimFaucet!=null){
					var buttonclaimFaucet = idclaimFaucet.getElementsByTagName('a')[0];
					if (buttonclaimFaucet!=null){
						if (buttonclaimFaucet.textContent.split(' ')[1]=='ROLL'){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeio.js'});
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
						Programms[indexPrGeDogeio].startintervalDOGE = Programms[indexPrGeDogeio].intervalDOGE - second;
					}
					
					
					
					Programms[indexPrGeDogeio].boolStartingDOGE = false;
					block = false;
					if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidGeDogeio.remove(sender.tab.id);
					
				}
				/*
				var idloginModal = frag.getElementById('loginModal');
				if (idloginModal!=null){
					return;
				}
				
				
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
						Programms[indexPrGeDogeio].startintervalDOGE = Programms[indexPrGeDogeio].intervalDOGE - second;
						
						Programms[indexPrGeDogeio].boolStartingDOGE = false;
						block = false;
						if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGeDogeio.remove(sender.tab.id);
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeioinput.js'});
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeioinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeio.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrGeDogeio].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrGeDogeio].startintervalDOGE = Programms[indexPrGeDogeio].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrGeDogeio].boolStartingDOGE = false;
				block = false;
				if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGeDogeio.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrGeDogeio].boolStartingDOGE = false;
						block = false;
						if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGeDogeio.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeioclaimagain.js'});
						
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
						Programms[indexPrGeDogeio].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrGeDogeio].boolStartingDOGE = false;
						Programms[indexPrGeDogeio].intervalDOGE = 1000;
						block = false;
						if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGeDogeio.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrGeDogeio].boolStartingDOGE = false;
							Programms[indexPrGeDogeio].userBool = false;
							block = false;
							console.log(Programms[indexPrGeDogeio].boolStartingDOGE);
							console.log(Exc);
							if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidGeDogeio.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeioInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GeDogeioShort.js'});
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
							Programms[indexPrGeDogeio].boolStartingDOGE = false;
							Programms[indexPrGeDogeio].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrGeDogeio].startintervalDOGE = 0;
							console.log(Programms[indexPrGeDogeio].intervalDOGE);
							block = false;						
							if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidGeDogeio.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrGeDogeio].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrGeDogeio].boolStartingDOGE);
				console.log(Exc);
				if(tabidGeDogeio.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGeDogeio.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidGeDogeio.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'getdoge.io'){
			tabidGeDogeio.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidGeDogeio.length == 0){
				setTimeout(function() {
					if(tabidGeDogeio.length == 0){
						Programms[indexPrGeDogeio].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidGeDogeio, changeInfo, tab){
//	console.log(tab);console.log(tabidGeDogeio);
//});





