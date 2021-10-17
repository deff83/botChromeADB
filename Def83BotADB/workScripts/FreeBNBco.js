var indexPrFreeBNBco;

var colImgFreeBNBco = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidFreeBNBco = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFreeBNBco(indexPrfree){
	block = true;
	indexPrFreeBNBco = indexPrfree;
	for (var i = 0; i < tabidFreeBNBco.length; i++) { 
		try{
			chrome.tabs.remove(tabidFreeBNBco[i]);
		}catch(Exc){} 
	}
	Programms[indexPrFreeBNBco].boolStartingDOGE = true;
	
	colImgFreeBNBco = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("FreeBNBco start");
	injectScriptFreeBNBco('https://freebinance.co.in/backoffice/faucet');
	console.log("FreeBNBco end");
}

	

function injectScriptFreeBNBco(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFreeBNBco.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'freebinance.co.in'){
		console.log('startMes');
		
		if(!tabidFreeBNBco.contains(sender.tab.id))tabidFreeBNBco.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//---------------------------block Deff83---------------------------------------//
				var fragment = document.createDocumentFragment();
				var div_1 = document.createElement('div');
				div_1.id='deff83';
				fragment.appendChild(div_1);
				fragment.getElementById('deff83').appendChild(frag);
				console.log('Deff83', fragment);
				frag = fragment;
				//-----------------------------------------------------------------------------//

				var idBody = frag.getElementById('deff83');
				if (idBody==null){
				return;
				}


				var col_coin = idBody.getElementsByClassName('card-header')[0];
				if(col_coin!=null){
					Programms[indexPrFreeBNBco].balance = parseFloat(col_coin.textContent);
				}
				
				var col_cl = idBody.getElementsByClassName('card-header')[1];
				if(col_cl!=null){
					//var ost = parseFloat(col_cl.textContent);
					Programms[indexPrFreeBNBco].text_test = col_cl.textContent;
					
					
					if (col_cl.textContent==0){
						Programms[indexPrFreeBNBco].boolStartingDOGE = false;
						block = false;
						if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFreeBNBco.remove(sender.tab.id);
					}
				}
				
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBNBco.js'});
					return;
				}
				
				var idtimer = frag.getElementById('timer');
				
				if(idtimer!= null){
					console.log(idtimer.textContent);
					if(idtimer.textContent=='00:00'){
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					//09:10
					
					var minute = idtimer.textContent.split(':')[0];
					var secondsfg = idtimer.textContent.split(':')[1];
					
					
					
					var second = parseInt(minute)*60+parseInt(secondsfg)*1; 
					Programms[indexPrFreeBNBco].startintervalDOGE = Programms[indexPrFreeBNBco].intervalDOGE - second;
					Programms[indexPrFreeBNBco].boolStartingDOGE = false;
					block = false;
					if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFreeBNBco.remove(sender.tab.id);
				}
				
				
				return;
				/*
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFreeBNBco].startintervalDOGE = Programms[indexPrFreeBNBco].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrFreeBNBco].text_test = text_test_d.textContent;
				
				
				Programms[indexPrFreeBNBco].boolStartingDOGE = false;
				block = false;
				if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFreeBNBco.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrFreeBNBco].boolStartingDOGE = false;
					block = false;
					if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFreeBNBco.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBNBcoinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBNBco.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrFreeBNBco].balance = parseFloat(balance);
				}
				
				Programms[indexPrFreeBNBco].boolStartingDOGE = false;
				block = false;
				if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFreeBNBco.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrFreeBNBco].boolStartingDOGE = false;
						block = false;
						if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFreeBNBco.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBNBcoclaimagain.js'});
						
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
						Programms[indexPrFreeBNBco].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrFreeBNBco].boolStartingDOGE = false;
						Programms[indexPrFreeBNBco].intervalDOGE = 1000;
						block = false;
						if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFreeBNBco.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrFreeBNBco].boolStartingDOGE = false;
							Programms[indexPrFreeBNBco].userBool = false;
							block = false;
							console.log(Programms[indexPrFreeBNBco].boolStartingDOGE);
							console.log(Exc);
							if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFreeBNBco.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBNBcoInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeBNBcoShort.js'});
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
							Programms[indexPrFreeBNBco].boolStartingDOGE = false;
							Programms[indexPrFreeBNBco].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrFreeBNBco].startintervalDOGE = 0;
							console.log(Programms[indexPrFreeBNBco].intervalDOGE);
							block = false;						
							if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidFreeBNBco.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFreeBNBco].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFreeBNBco].boolStartingDOGE);
				console.log(Exc);
				if(tabidFreeBNBco.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFreeBNBco.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidFreeBNBco.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freebinance.co.in'){
			tabidFreeBNBco.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrFreeBNBco].alreadytrue == true){
				Programms[indexPrFreeBNBco].startintervalDOGE = Programms[indexPrFreeBNBco].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidFreeBNBco.length == 0){
				setTimeout(function() {
					if(tabidFreeBNBco.length == 0){
						Programms[indexPrFreeBNBco].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFreeBNBco, changeInfo, tab){
//	console.log(tab);console.log(tabidFreeBNBco);
//});





