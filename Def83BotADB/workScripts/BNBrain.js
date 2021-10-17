var indexPrBNBrain;

var colImgBNBrain = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBNBrain = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBNBrain(indexPrfree){
	block = true;
	indexPrBNBrain = indexPrfree;
	for (var i = 0; i < tabidBNBrain.length; i++) { 
		try{
			chrome.tabs.remove(tabidBNBrain[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBNBrain].boolStartingDOGE = true;
	
	colImgBNBrain = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BNBrain start");
	injectScriptBNBrain('https://bnbrain.club');
	console.log("BNBrain end");
}

	

function injectScriptBNBrain(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBNBrain.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'bnbrain.club'){
		console.log('startMes');
		
		if(!tabidBNBrain.contains(sender.tab.id))tabidBNBrain.push(sender.tab.id);
		
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
				
				var secc = idBody.getElementsByClassName('alert alert-success')[0];
				console.log(secc);
				if(secc!=null){
					if(secc.textContent.split(' ')[2]=='has'){
						console.log(secc.textContent);
						
						var second = 1*60; 
						Programms[indexPrBNBrain].startintervalDOGE = Programms[indexPrBNBrain].intervalDOGE - second;
						
						Programms[indexPrBNBrain].boolStartingDOGE = false;
						block = false;
						if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBNBrain.remove(sender.tab.id);
					}
				}
				var dang = idBody.getElementsByClassName('alert alert-danger')[0];
				console.log(dang);
				if(dang!=null){
					if(dang.textContent.split(' ')[1]=='must'){
						console.log(dang.textContent);
						
						var min = dang.textContent.split(' ')[4];
						var mintext = dang.textContent.split(' ')[5];
						
						console.log(mintext);
						
					if (mintext=='minutes'){
						
						var second = parseFloat(min)*60+65; 
						
						console.log(second);
						
						Programms[indexPrBNBrain].startintervalDOGE = Programms[indexPrBNBrain].intervalDOGE - second;
					}else{
						var second = 65; 
						
						console.log(second);
						
						Programms[indexPrBNBrain].startintervalDOGE = Programms[indexPrBNBrain].intervalDOGE - second;
						
					}
						Programms[indexPrBNBrain].boolStartingDOGE = false;
						block = false;
						if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBNBrain.remove(sender.tab.id);
						
					}
				}
				
				
				
				
				
				var idclaimbutn = frag.getElementById('claim-button');
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BNBrain.js'});
					return;
				}
				
				
				
				
				
return;
/*
				var col_coin = idBody.getElementsByClassName('card-header')[0];
				if(col_coin!=null){
					Programms[indexPrBNBrain].balance = parseFloat(col_coin.textContent);
				}
				
				var col_cl = frag.getElementById('claim-button');
				if(col_cl!=null){
					//var ost = parseFloat(col_cl.textContent);
					Programms[indexPrBNBrain].text_test = col_cl.textContent;
					
					
					if (col_cl.textContent==0){
						Programms[indexPrBNBrain].boolStartingDOGE = false;
						block = false;
						if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBNBrain.remove(sender.tab.id);
					}
				}
				
				
				
				
				
				return;
				/*
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBNBrain].startintervalDOGE = Programms[indexPrBNBrain].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrBNBrain].text_test = text_test_d.textContent;
				
				
				Programms[indexPrBNBrain].boolStartingDOGE = false;
				block = false;
				if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBNBrain.remove(sender.tab.id);
				}
				//кнопка логин
					/*			
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrBNBrain].boolStartingDOGE = false;
					block = false;
					if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBNBrain.remove(sender.tab.id);
				}
				
				/*
				var idBody = frag.getElementById('home');
				var idlogin = frag.getElementById('login');
				
				if(idlogin!= null){
					console.log('tyt 1');
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BNBraininput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BNBrain.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				var balance = idCountAccount.getElementsByTagName('b')[0].textContent;
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrBNBrain].balance = parseFloat(balance);
				}
				
				Programms[indexPrBNBrain].boolStartingDOGE = false;
				block = false;
				if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBNBrain.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrBNBrain].boolStartingDOGE = false;
						block = false;
						if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBNBrain.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BNBrainclaimagain.js'});
						
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
						Programms[indexPrBNBrain].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrBNBrain].boolStartingDOGE = false;
						Programms[indexPrBNBrain].intervalDOGE = 1000;
						block = false;
						if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBNBrain.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrBNBrain].boolStartingDOGE = false;
							Programms[indexPrBNBrain].userBool = false;
							block = false;
							console.log(Programms[indexPrBNBrain].boolStartingDOGE);
							console.log(Exc);
							if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBNBrain.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BNBrainInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BNBrainShort.js'});
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
							Programms[indexPrBNBrain].boolStartingDOGE = false;
							Programms[indexPrBNBrain].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrBNBrain].startintervalDOGE = 0;
							console.log(Programms[indexPrBNBrain].intervalDOGE);
							block = false;						
							if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidBNBrain.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBNBrain].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBNBrain].boolStartingDOGE);
				console.log(Exc);
				if(tabidBNBrain.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBNBrain.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBNBrain.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bnbrain.club'){
			tabidBNBrain.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrBNBrain].alreadytrue == true){
				Programms[indexPrBNBrain].startintervalDOGE = Programms[indexPrBNBrain].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidBNBrain.length == 0){
				setTimeout(function() {
					if(tabidBNBrain.length == 0){
						Programms[indexPrBNBrain].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBNBrain, changeInfo, tab){
//	console.log(tab);console.log(tabidBNBrain);
//});





