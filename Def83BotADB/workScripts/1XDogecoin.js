var indexPr1XDogecoin;

var colImg1XDogecoin = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabid1XDogecoin = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moon1XDogecoin(indexPrfree){
	block = true;
	indexPr1XDogecoin = indexPrfree;
	for (var i = 0; i < tabid1XDogecoin.length; i++) { 
		try{
			chrome.tabs.remove(tabid1XDogecoin[i]);
		}catch(Exc){} 
	}
	Programms[indexPr1XDogecoin].boolStartingDOGE = true;
	
	colImg1XDogecoin = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("1XDogecoin start");
	injectScript1XDogecoin('https://1xdogecoin.com/user/claim');
	console.log("1XDogecoin end");
}

	

function injectScript1XDogecoin(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabid1XDogecoin.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src); 
	if(request.src == '1xdogecoin.com'){
		console.log('startMes');
		
		if(!tabid1XDogecoin.contains(sender.tab.id))tabid1XDogecoin.push(sender.tab.id);
		
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


				if (idBody==null){
					return;
				}
				
				
				//claim_btn
				
				var idclaimbutn = frag.getElementById('claim_btn');
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
					if(idclaimbutn.textContent=='Claim'){
					//page-topbar
					
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/1XDogecoin.js'});
						return;
					}
				}
				
				
				var idtimer = frag.getElementById('timer');//10:29
//				var idsecond = frag.getElementById('second');
				
				if(idtimer!= null){
					
					
					
					var minute = idtimer.textContent.split(':')[0];
					var secondsfg = idtimer.textContent.split(':')[1];
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPr1XDogecoin].startintervalDOGE = Programms[indexPr1XDogecoin].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('col-md-3 col-12')[0];
				if (text_test_d!=null){
					Programms[indexPr1XDogecoin].text_test = text_test_d.textContent;
				
				
				Programms[indexPr1XDogecoin].boolStartingDOGE = false;
				block = false;
				if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabid1XDogecoin.remove(sender.tab.id);
				/**/
				}
				
								
				var idtokenBalance = frag.getElementById('withdrawl_amt');
				if(idtokenBalance!=null){
					
					Programms[indexPr1XDogecoin].boolStartingDOGE = false;
					block = false;
					if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabid1XDogecoin.remove(sender.tab.id);
				}
				
				
				//кнопка логин
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/1XDogecoininput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/1XDogecoin.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPr1XDogecoin].balance = parseFloat(balance);
				}
				
				Programms[indexPr1XDogecoin].boolStartingDOGE = false;
				block = false;
				if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabid1XDogecoin.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPr1XDogecoin].boolStartingDOGE = false;
						block = false;
						if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabid1XDogecoin.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/1XDogecoinclaimagain.js'});
						
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
						Programms[indexPr1XDogecoin].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPr1XDogecoin].boolStartingDOGE = false;
						Programms[indexPr1XDogecoin].intervalDOGE = 1000;
						block = false;
						if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabid1XDogecoin.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPr1XDogecoin].boolStartingDOGE = false;
							Programms[indexPr1XDogecoin].userBool = false;
							block = false;
							console.log(Programms[indexPr1XDogecoin].boolStartingDOGE);
							console.log(Exc);
							if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabid1XDogecoin.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/1XDogecoinInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/1XDogecoinShort.js'});
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
							Programms[indexPr1XDogecoin].boolStartingDOGE = false;
							Programms[indexPr1XDogecoin].intervalDOGE = min_lock*60 + 10;
							Programms[indexPr1XDogecoin].startintervalDOGE = 0;
							console.log(Programms[indexPr1XDogecoin].intervalDOGE);
							block = false;						
							if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabid1XDogecoin.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPr1XDogecoin].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPr1XDogecoin].boolStartingDOGE);
				console.log(Exc);
				if(tabid1XDogecoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabid1XDogecoin.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabid1XDogecoin.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != '1xdogecoin.com'){
			tabid1XDogecoin.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPr1XDogecoin].alreadytrue == true){
				Programms[indexPr1XDogecoin].startintervalDOGE = Programms[indexPr1XDogecoin].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabid1XDogecoin.length == 0){
				setTimeout(function() {
					if(tabid1XDogecoin.length == 0){
						Programms[indexPr1XDogecoin].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabid1XDogecoin, changeInfo, tab){
//	console.log(tab);console.log(tabid1XDogecoin);
//});





