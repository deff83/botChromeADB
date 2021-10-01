var indexPrCrypJunkie;

var colImgCrypJunkie = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCrypJunkie = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCrypJunkie(indexPrfree){
	block = true;
	indexPrCrypJunkie = indexPrfree;
	for (var i = 0; i < tabidCrypJunkie.length; i++) { 
		try{
			chrome.tabs.remove(tabidCrypJunkie[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCrypJunkie].boolStartingDOGE = true;
	
	colImgCrypJunkie = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("CrypJunkie start");
	injectScriptCrypJunkie('https://cryptojunkie.net/faucet');
	console.log("CrypJunkie end");
}

	

function injectScriptCrypJunkie(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCrypJunkie.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'cryptojunkie.net'){
		console.log('startMes');
		
		if(!tabidCrypJunkie.contains(sender.tab.id))tabidCrypJunkie.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-light btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/CrypJunkie.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCrypJunkie].startintervalDOGE = Programms[indexPrCrypJunkie].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrCrypJunkie].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCrypJunkie].boolStartingDOGE = false;
				block = false;
				if(tabidCrypJunkie.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCrypJunkie.remove(sender.tab.id);
				/*
				*/
				}
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrCrypJunkie].boolStartingDOGE = false;
					block = false;
					if(tabidCrypJunkie.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCrypJunkie.remove(sender.tab.id);
				}
				
				//кнопка логин
				/*
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCrypJunkie].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCrypJunkie].boolStartingDOGE);
				console.log(Exc);
				if(tabidCrypJunkie.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCrypJunkie.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCrypJunkie.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'cryptojunkie.net'){
			tabidCrypJunkie.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidCrypJunkie.length == 0){
				setTimeout(function() {
					if(tabidCrypJunkie.length == 0){
						Programms[indexPrCrypJunkie].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCrypJunkie, changeInfo, tab){
//	console.log(tab);console.log(tabidCrypJunkie);
//});





