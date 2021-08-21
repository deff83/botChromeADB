var indexPrRollBuck;

var colImgRollBuck = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidRollBuck = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonRollBuck(indexPrfree){
	block = true;
	indexPrRollBuck = indexPrfree;
	for (var i = 0; i < tabidRollBuck.length; i++) { 
		try{
			chrome.tabs.remove(tabidRollBuck[i]);
		}catch(Exc){} 
	}
	Programms[indexPrRollBuck].boolStartingDOGE = true;
	
	colImgRollBuck = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("RollBuck start");
	injectScriptRollBuck('https://rollbucks.com/faucet');
	console.log("RollBuck end");
}

	

function injectScriptRollBuck(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidRollBuck.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'rollbucks.com'){
		console.log('startMes');
		
		if(!tabidRollBuck.contains(sender.tab.id))tabidRollBuck.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RollBuck.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					//console.log(second);
					
					var second = minute*60+(secondsfg)*1; 
					console.log(second);
					Programms[indexPrRollBuck].startintervalDOGE = Programms[indexPrRollBuck].intervalDOGE - second;
				}
				//col-xl-4 mb-4
				var text_test_d = idBody.getElementsByClassName('col-xl-4 mb-4')[2];
				if (text_test_d!=null){
					Programms[indexPrRollBuck].text_test = text_test_d.textContent;
				
				
				Programms[indexPrRollBuck].boolStartingDOGE = false;
				block = false;
				if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRollBuck.remove(sender.tab.id);
				}
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RollBuckinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RollBuck.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrRollBuck].balance = parseFloat(balance);
				}
				
				Programms[indexPrRollBuck].boolStartingDOGE = false;
				block = false;
				if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRollBuck.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrRollBuck].boolStartingDOGE = false;
						block = false;
						if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidRollBuck.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RollBuckclaimagain.js'});
						
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
						Programms[indexPrRollBuck].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrRollBuck].boolStartingDOGE = false;
						Programms[indexPrRollBuck].intervalDOGE = 1000;
						block = false;
						if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidRollBuck.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrRollBuck].boolStartingDOGE = false;
							Programms[indexPrRollBuck].userBool = false;
							block = false;
							console.log(Programms[indexPrRollBuck].boolStartingDOGE);
							console.log(Exc);
							if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidRollBuck.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RollBuckInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RollBuckShort.js'});
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
							Programms[indexPrRollBuck].boolStartingDOGE = false;
							Programms[indexPrRollBuck].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrRollBuck].startintervalDOGE = 0;
							console.log(Programms[indexPrRollBuck].intervalDOGE);
							block = false;						
							if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidRollBuck.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrRollBuck].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrRollBuck].boolStartingDOGE);
				console.log(Exc);
				if(tabidRollBuck.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRollBuck.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidRollBuck.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'rollbucks.com'){
			tabidRollBuck.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidRollBuck.length == 0){
				setTimeout(function() {
					if(tabidRollBuck.length == 0){
						Programms[indexPrRollBuck].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidRollBuck, changeInfo, tab){
//	console.log(tab);console.log(tabidRollBuck);
//});





