var indexPrOurBitco5;

var colImgOurBitco5 = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidOurBitco5 = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonOurBitco5(indexPrfree){
	block = true;
	indexPrOurBitco5 = indexPrfree;
	for (var i = 0; i < tabidOurBitco5.length; i++) { 
		try{
			chrome.tabs.remove(tabidOurBitco5[i]);
		}catch(Exc){} 
	}
	Programms[indexPrOurBitco5].boolStartingDOGE = true;
	
	colImgOurBitco5 = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("OurBitco5 start");
	injectScriptOurBitco5('https://ourbitco.in/dashboard/faucet/?time=5');
	console.log("OurBitco5 end");
}

	

function injectScriptOurBitco5(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidOurBitco5.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'ourbitco.in'){
		console.log('startMes');
		
		if(!tabidOurBitco5.contains(sender.tab.id))tabidOurBitco5.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//кнопка логин
				
				
				var idBody = frag.getElementById('supporters');
				//var idlogin = frag.getElementById('login');
				
				
				var idTimes = frag.getElementById('opcao_faucet');
				if (idTimes!=null){
					console.log(idTimes.value);
					if (idTimes.value!=5){
						
						try{
							tabidOurBitco5.remove(sender.tab.id);
						}catch(Exc){}
						return;
					}
				}
				
				
				
				var iddays = frag.getElementById('days');
				var idhours = frag.getElementById('hours');
				var idminutes = frag.getElementById('minutes');
				var idseconds = frag.getElementById('seconds');
				var idbalance = frag.getElementById('saldo-header');
				console.log(idbalance);
				if (idbalance!=null)	{
					console.log(idbalance.textContent.split(' ')[0]);
					Programms[indexPrOurBitco5].balance = parseFloat(idbalance.textContent.split(' ')[0]);
				}
				
				
				if(iddays!= null && idhours!= null && idminutes!= null && idseconds!= null){
					
					iddays = iddays.textContent.split('-')[1];
					idhours = idhours.textContent.split('-')[1];
					idminutes = idminutes.textContent.split('-')[1];
					idseconds = idseconds.textContent.split('-')[1];
					
					if (iddays==null) iddays = 0;
					if (idhours==null) idhours = 0;
					if (idminutes==null) idminutes = 0;
					if (idseconds==null) idseconds = 0;
					
					if (iddays!=0) iddays = iddays;
					if (idhours!=0) idhours = 24-idhours;
					if (idminutes!=0) idminutes = 60-idminutes;
					if (idseconds!=0) idseconds = 60-idseconds;
					
					
					if (iddays==0 && idhours==0 && idminutes==0 && idseconds==0){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/OurBitco.js'});
						
						console.log('tyt 3');
						return;
					}
					
					
					var days = iddays;
					var hours = idhours;
					var minutes = idminutes;
					var seconds = idseconds;
					
					
					console.log('tyt 4');
					console.log(days);
					console.log(hours);
					console.log(minutes);
					console.log(seconds);
					
					var second = seconds + minutes*60 + hours*60*60 + days*24*60*60 + 1;
					Programms[indexPrOurBitco5].startintervalDOGE = Programms[indexPrOurBitco5].intervalDOGE - second;
					console.log(second);
					
					Programms[indexPrOurBitco5].boolStartingDOGE = false;
					block = false;
					if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidOurBitco5.remove(sender.tab.id);
					
						
					return;
				}
			//	var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				
				
				
				/*
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/OurBitco5.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrOurBitco5].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrOurBitco5].startintervalDOGE = Programms[indexPrOurBitco5].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrOurBitco5].boolStartingDOGE = false;
				block = false;
				if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidOurBitco5.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrOurBitco5].boolStartingDOGE = false;
						block = false;
						if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidOurBitco5.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/OurBitco5claimagain.js'});
						
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
						Programms[indexPrOurBitco5].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrOurBitco5].boolStartingDOGE = false;
						Programms[indexPrOurBitco5].intervalDOGE = 1000;
						block = false;
						if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidOurBitco5.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrOurBitco5].boolStartingDOGE = false;
							Programms[indexPrOurBitco5].userBool = false;
							block = false;
							console.log(Programms[indexPrOurBitco5].boolStartingDOGE);
							console.log(Exc);
							if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidOurBitco5.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/OurBitco5Input.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/OurBitco5Short.js'});
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
							Programms[indexPrOurBitco5].boolStartingDOGE = false;
							Programms[indexPrOurBitco5].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrOurBitco5].startintervalDOGE = 0;
							console.log(Programms[indexPrOurBitco5].intervalDOGE);
							block = false;						
							if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidOurBitco5.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrOurBitco5].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrOurBitco5].boolStartingDOGE);
				console.log(Exc);
				if(tabidOurBitco5.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidOurBitco5.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidOurBitco5.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'ourbitco.in'){
			tabidOurBitco5.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidOurBitco5.length == 0){
				setTimeout(function() {
					if(tabidOurBitco5.length == 0){
						Programms[indexPrOurBitco5].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidOurBitco5, changeInfo, tab){
//	console.log(tab);console.log(tabidOurBitco5);
//});





