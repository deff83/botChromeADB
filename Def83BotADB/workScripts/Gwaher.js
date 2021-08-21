var indexPrGwaher;

var colImgGwaher = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidGwaher = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonGwaher(indexPrfree){
	block = true;
	indexPrGwaher = indexPrfree;
	for (var i = 0; i < tabidGwaher.length; i++) { 
		try{
			chrome.tabs.remove(tabidGwaher[i]);
		}catch(Exc){} 
	}
	Programms[indexPrGwaher].boolStartingDOGE = true;
	
	colImgGwaher = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Gwaher start");
	injectScriptGwaher('https://gwaher.com/faucet');
	console.log("Gwaher end");
}

	

function injectScriptGwaher(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidGwaher.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'gwaher.com'){
		console.log('startMes');
		
		if(!tabidGwaher.contains(sender.tab.id))tabidGwaher.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-warning btn-lg btn-block claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Gwaher.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrGwaher].startintervalDOGE = Programms[indexPrGwaher].intervalDOGE - second;
					
					Programms[indexPrGwaher].boolStartingDOGE = false;
					block = false;
					if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidGwaher.remove(sender.tab.id);
					
					
				}
				
				
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrGwaher].boolStartingDOGE = false;
					block = false;
					if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidGwaher.remove(sender.tab.id);
				}
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Gwaherinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Gwaher.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrGwaher].balance = parseFloat(balance);
				}
				
				Programms[indexPrGwaher].boolStartingDOGE = false;
				block = false;
				if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGwaher.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrGwaher].boolStartingDOGE = false;
						block = false;
						if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGwaher.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Gwaherclaimagain.js'});
						
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
						Programms[indexPrGwaher].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrGwaher].boolStartingDOGE = false;
						Programms[indexPrGwaher].intervalDOGE = 1000;
						block = false;
						if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidGwaher.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrGwaher].boolStartingDOGE = false;
							Programms[indexPrGwaher].userBool = false;
							block = false;
							console.log(Programms[indexPrGwaher].boolStartingDOGE);
							console.log(Exc);
							if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidGwaher.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GwaherInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/GwaherShort.js'});
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
							Programms[indexPrGwaher].boolStartingDOGE = false;
							Programms[indexPrGwaher].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrGwaher].startintervalDOGE = 0;
							console.log(Programms[indexPrGwaher].intervalDOGE);
							block = false;						
							if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidGwaher.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrGwaher].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrGwaher].boolStartingDOGE);
				console.log(Exc);
				if(tabidGwaher.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidGwaher.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidGwaher.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'gwaher.com'){
			tabidGwaher.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidGwaher.length == 0){
				setTimeout(function() {
					if(tabidGwaher.length == 0){
						Programms[indexPrGwaher].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidGwaher, changeInfo, tab){
//	console.log(tab);console.log(tabidGwaher);
//});





