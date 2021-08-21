var indexPrXYZfaucetUSDT;

var colImgXYZfaucetUSDT = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidXYZfaucetUSDT = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonXYZfaucetUSDT(indexPrfree){
	block = true;
	indexPrXYZfaucetUSDT = indexPrfree;
	for (var i = 0; i < tabidXYZfaucetUSDT.length; i++) { 
		try{
			chrome.tabs.remove(tabidXYZfaucetUSDT[i]);
		}catch(Exc){} 
	}
	Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = true;
	
	colImgXYZfaucetUSDT = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("XYZfaucetUSDT start");
	injectScriptXYZfaucetUSDT('https://usdtfaucet.xyz/verify.php');
	console.log("XYZfaucetUSDT end");
}

	

function injectScriptXYZfaucetUSDT(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidXYZfaucetUSDT.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'usdtfaucet.xyz'){
		console.log('startMes');
		
		if(!tabidXYZfaucetUSDT.contains(sender.tab.id))tabidXYZfaucetUSDT.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				var div1 = frag.querySelectorAll('div')[0]
				var div2 = frag.querySelectorAll('div')[1]
				console.log(div1);
				console.log(div2);
				
				var control = div2.getElementsByClassName('form-control')[0];
				
				if(control!=null){
					console.log(control);
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDTinter.js'});
					return;
				}
				var refer = div1.getElementsByClassName('btn btn-success')[1];
				if(refer!=null){
					console.log(refer);
					if (refer.textContent=="Invite"){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDT.js'});
						return;
					}
				}
					
				
				
				
				var bal = div1.getElementsByClassName('col-sm-12 mt-4 mt-lg-0')[0];
				if (bal!=null){
					var balance = bal.getElementsByTagName('h2')[1];
					console.log(balance.textContent);
					Programms[indexPrXYZfaucetUSDT].balance = parseFloat(balance.textContent);
				}
				
				
				var clock = div1.getElementsByClassName('clock flip-clock-wrapper')[0];
				
				if(clock!=null){
					var clockfull = clock.textContent;
					console.log(clock.textContent);
					//Minutes99006677Seconds22334455
					var min = clockfull.substring(9,10) + '' + clockfull.substring(13,14);
					var sec = clockfull.substring(9+15,10+15) + '' + clockfull.substring(13+15, 14+15);
					
					console.log(min);
					console.log(sec);
					
					var second = sec*1 + min*60;
					console.log(second);
					
					Programms[indexPrXYZfaucetUSDT].startintervalDOGE = Programms[indexPrXYZfaucetUSDT].intervalDOGE - second;
					
					Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
					block = false;
					if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXYZfaucetUSDT.remove(sender.tab.id);
					/**/
				}
				
				var success = div1.getElementsByClassName('alert alert-success')[0];
				
				
				if(success!=null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDT.js'});
					return;
				}
				
				
				//кнопка логин
				/*
				
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDTinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDT.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrXYZfaucetUSDT].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrXYZfaucetUSDT].startintervalDOGE = Programms[indexPrXYZfaucetUSDT].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
				block = false;
				if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXYZfaucetUSDT.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
						block = false;
						if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXYZfaucetUSDT.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDTclaimagain.js'});
						
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
						Programms[indexPrXYZfaucetUSDT].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
						Programms[indexPrXYZfaucetUSDT].intervalDOGE = 1000;
						block = false;
						if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXYZfaucetUSDT.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
							Programms[indexPrXYZfaucetUSDT].userBool = false;
							block = false;
							console.log(Programms[indexPrXYZfaucetUSDT].boolStartingDOGE);
							console.log(Exc);
							if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidXYZfaucetUSDT.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDTInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetUSDTShort.js'});
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
							Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
							Programms[indexPrXYZfaucetUSDT].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrXYZfaucetUSDT].startintervalDOGE = 0;
							console.log(Programms[indexPrXYZfaucetUSDT].intervalDOGE);
							block = false;						
							if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidXYZfaucetUSDT.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrXYZfaucetUSDT].boolStartingDOGE);
				console.log(Exc);
				if(tabidXYZfaucetUSDT.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXYZfaucetUSDT.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidXYZfaucetUSDT.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'usdtfaucet.xyz'){
			tabidXYZfaucetUSDT.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidXYZfaucetUSDT.length == 0){
				setTimeout(function() {
					if(tabidXYZfaucetUSDT.length == 0){
						Programms[indexPrXYZfaucetUSDT].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidXYZfaucetUSDT, changeInfo, tab){
//	console.log(tab);console.log(tabidXYZfaucetUSDT);
//});





