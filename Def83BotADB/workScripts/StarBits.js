var indexPrStarBits;

var colImgStarBits = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidStarBits = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonStarBits(indexPrfree){
	block = true;
	indexPrStarBits = indexPrfree;
	for (var i = 0; i < tabidStarBits.length; i++) { 
		try{
			chrome.tabs.remove(tabidStarBits[i]);
		}catch(Exc){} 
	}
	Programms[indexPrStarBits].boolStartingDOGE = true;
	
	colImgStarBits = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("StarBits start");
	injectScriptStarBits('https://starbits.io');
	console.log("StarBits end");
}

	

function injectScriptStarBits(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidStarBits.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io  99airdrops.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'starbits.io'){
		console.log('startMes');
		
		if(!tabidStarBits.contains(sender.tab.id))tabidStarBits.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
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
						Programms[indexPrStarBits].startintervalDOGE = Programms[indexPrStarBits].intervalDOGE - second;
						
						Programms[indexPrStarBits].boolStartingDOGE = false;
						block = false;
						if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidStarBits.remove(sender.tab.id);
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/StarBitsinput.js'});
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/StarBitsinput.js'});
						
					return;
				}
				
				var idCountAccount = frag.getElementById('account');
				var idclaimbutn = frag.getElementById('claimbutn');
				
				if(idclaimbutn!= null){
					console.log('tyt 2');
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/StarBits.js'});
					return;
				}
				
				console.log('tyt 3');
				
				
				
				if(idCountAccount== null){
					
					return;
				}
				var balance = idCountAccount.getElementsByTagName('b')[0];
				
				
				console.log(balance);
				if (balance!=null)	{
					Programms[indexPrStarBits].balance = parseFloat(balance.textContent);
				}
				var idcountdown = frag.getElementById('countdown');
				if(idcountdown!= null){
					
					var second = idcountdown.textContent;
					Programms[indexPrStarBits].startintervalDOGE = Programms[indexPrStarBits].intervalDOGE - second;
				}
				
				
				
				Programms[indexPrStarBits].boolStartingDOGE = false;
				block = false;
				if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidStarBits.remove(sender.tab.id);
				
				/*
				if(idButtonPoleclaim_again!= null){
					
					let ghButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (ghButton==null){
						Programms[indexPrStarBits].boolStartingDOGE = false;
						block = false;
						if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidStarBits.remove(sender.tab.id);
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/StarBitsclaimagain.js'});
						
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
						Programms[indexPrStarBits].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrStarBits].boolStartingDOGE = false;
						Programms[indexPrStarBits].intervalDOGE = 1000;
						block = false;
						if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidStarBits.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						console.log('tyt5');
						
						if (dangerField!=null && dangerField.textContent == "You have reached the max claims per day. Please come back tomorow.") {
							console.log('tyt7');
							Programms[indexPrStarBits].boolStartingDOGE = false;
							Programms[indexPrStarBits].userBool = false;
							block = false;
							console.log(Programms[indexPrStarBits].boolStartingDOGE);
							console.log(Exc);
							if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidStarBits.remove(sender.tab.id);
						}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/StarBitsInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/StarBitsShort.js'});
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
							Programms[indexPrStarBits].boolStartingDOGE = false;
							Programms[indexPrStarBits].intervalDOGE = min_lock*60 + 10;
							Programms[indexPrStarBits].startintervalDOGE = 0;
							console.log(Programms[indexPrStarBits].intervalDOGE);
							block = false;						
							if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
							tabidStarBits.remove(sender.tab.id);
						}
						
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrStarBits].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrStarBits].boolStartingDOGE);
				console.log(Exc);
				if(tabidStarBits.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidStarBits.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	/*
	if(request.src == '99airdrops.com'){
		if(!tabidStarBits.contains(sender.tab.id))tabidStarBits.push(sender.tab.id);
		//console.log('tut1');
		try{
			
			if (colImgStarBits == 0) {
				colImgStarBits = colImgStarBits + 1;
				injectScriptStarBits('https://starbits.io');
			}
			return;
		}catch(Exc){console.log(Exc);}
	}
	
	*/
	if(tabidStarBits.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'starbits.io' && request.src != '99airdrops.com'){
			tabidStarBits.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrStarBits].alreadytrue == true){
				Programms[indexPrStarBits].startintervalDOGE = Programms[indexPrStarBits].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidStarBits.length == 0){
				setTimeout(function() {
					if(tabidStarBits.length == 0){
						Programms[indexPrStarBits].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidStarBits, changeInfo, tab){
//	console.log(tab);console.log(tabidStarBits);
//});





