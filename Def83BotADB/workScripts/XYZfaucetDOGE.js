var indexPrXYZfaucetDOGE;

var colImgXYZfaucetDOGE = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidXYZfaucetDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonXYZfaucetDOGE(indexPrfree){
	block = true;
	indexPrXYZfaucetDOGE = indexPrfree;
	for (var i = 0; i < tabidXYZfaucetDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidXYZfaucetDOGE[i]);
		}catch(Exc){} 
	}
	Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = true;
	
	colImgXYZfaucetDOGE = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("XYZfaucetDOGE start");
	injectScriptXYZfaucetDOGE('https://dogeion.xyz/verify.php');
	console.log("XYZfaucetDOGE end");
}

	

function injectScriptXYZfaucetDOGE(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidXYZfaucetDOGE.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'dogeion.xyz'){
		console.log('startMes');
		
		if(!tabidXYZfaucetDOGE.contains(sender.tab.id))tabidXYZfaucetDOGE.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGEinter.js'});
					return;
				}
				var refer = div1.getElementsByClassName('btn btn-warning')[1];
				if(refer!=null){
					console.log(refer);
					if (refer.textContent=="Invite"){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGE.js'});
						return;
					}
				}
					
				
				
				var bal = div1.getElementsByClassName('col-sm-12 mt-4 mt-lg-0')[0];
				if (bal!=null){
					var balance = bal.getElementsByTagName('h2')[1];
					console.log(balance.textContent);
					Programms[indexPrXYZfaucetDOGE].balance = parseFloat(balance.textContent);
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
					
					Programms[indexPrXYZfaucetDOGE].startintervalDOGE = Programms[indexPrXYZfaucetDOGE].intervalDOGE - second;
					
					Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidXYZfaucetDOGE.remove(sender.tab.id);
					/**/
				}
				
				var success = div1.getElementsByClassName('alert alert-success')[0];
				
				
				if(success!=null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGE.js'});
					return;
				}
				
				
				//кнопка логин
				/*
				
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGEinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGE.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrXYZfaucetDOGE].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrXYZfaucetDOGE].startintervalDOGE = Programms[indexPrXYZfaucetDOGE].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
				block = false;
				if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXYZfaucetDOGE.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
						block = false;
						if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXYZfaucetDOGE.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGEclaimagain.js'});
						
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
						Programms[indexPrXYZfaucetDOGE].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
						Programms[indexPrXYZfaucetDOGE].intervalDOGE = 1000;
						block = false;
						if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidXYZfaucetDOGE.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
							Programms[indexPrXYZfaucetDOGE].userBool = false;
							block = false;
							console.log(Programms[indexPrXYZfaucetDOGE].boolStartingDOGE);
							console.log(Exc);
							if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidXYZfaucetDOGE.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGEInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/XYZfaucetDOGEShort.js'});
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
							Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
							Programms[indexPrXYZfaucetDOGE].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrXYZfaucetDOGE].startintervalDOGE = 0;
							console.log(Programms[indexPrXYZfaucetDOGE].intervalDOGE);
							block = false;						
							if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidXYZfaucetDOGE.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrXYZfaucetDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidXYZfaucetDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidXYZfaucetDOGE.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidXYZfaucetDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'dogeion.xyz'){
			tabidXYZfaucetDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrXYZfaucetDOGE].alreadytrue == true){
				Programms[indexPrXYZfaucetDOGE].startintervalDOGE = Programms[indexPrXYZfaucetDOGE].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidXYZfaucetDOGE.length == 0){
				setTimeout(function() {
					if(tabidXYZfaucetDOGE.length == 0){
						Programms[indexPrXYZfaucetDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidXYZfaucetDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidXYZfaucetDOGE);
//});





