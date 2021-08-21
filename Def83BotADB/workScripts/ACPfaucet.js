var indexPrACPfaucet;

var colImgACPfaucet = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidACPfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonACPfaucet(indexPrfree){
	block = true;
	indexPrACPfaucet = indexPrfree;
	for (var i = 0; i < tabidACPfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidACPfaucet[i]);
		}catch(Exc){} 
	}
	Programms[indexPrACPfaucet].boolStartingDOGE = true;
	
	colImgACPfaucet = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ACPfaucet start");
	injectScriptACPfaucet('https://firefaucet.win/faucet');
	console.log("ACPfaucet end");
}

	

function injectScriptACPfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidACPfaucet.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'firefaucet.win'){
		console.log('startMes');
		
		if(!tabidACPfaucet.contains(sender.tab.id))tabidACPfaucet.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//кнопка логин
				
				
				var idclaimbutn = frag.getElementById('get_reward_button');
				if(idclaimbutn!= null){
					//console.log('tyt 2');
					console.log(idclaimbutn.textContent);
					if (idclaimbutn.textContent=='Go Home'){
						console.log('Go Home');
						
						
						Programms[indexPrACPfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidACPfaucet.remove(sender.tab.id);
						return;
						/*
						
						*/
					}
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ACPfaucet.js'});
					return;
				}
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ACPfaucetinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ACPfaucet.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrACPfaucet].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrACPfaucet].startintervalDOGE = Programms[indexPrACPfaucet].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrACPfaucet].boolStartingDOGE = false;
				block = false;
				if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidACPfaucet.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrACPfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidACPfaucet.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ACPfaucetclaimagain.js'});
						
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
						Programms[indexPrACPfaucet].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrACPfaucet].boolStartingDOGE = false;
						Programms[indexPrACPfaucet].intervalDOGE = 1000;
						block = false;
						if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidACPfaucet.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrACPfaucet].boolStartingDOGE = false;
							Programms[indexPrACPfaucet].userBool = false;
							block = false;
							console.log(Programms[indexPrACPfaucet].boolStartingDOGE);
							console.log(Exc);
							if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidACPfaucet.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ACPfaucetInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ACPfaucetShort.js'});
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
							Programms[indexPrACPfaucet].boolStartingDOGE = false;
							Programms[indexPrACPfaucet].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrACPfaucet].startintervalDOGE = 0;
							console.log(Programms[indexPrACPfaucet].intervalDOGE);
							block = false;						
							if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidACPfaucet.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrACPfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrACPfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidACPfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidACPfaucet.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidACPfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'firefaucet.win'){
			tabidACPfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidACPfaucet.length == 0){
				setTimeout(function() {
					if(tabidACPfaucet.length == 0){
						Programms[indexPrACPfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidACPfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidACPfaucet);
//});





