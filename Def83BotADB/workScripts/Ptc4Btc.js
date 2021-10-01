var indexPrPtc4Btc;

var colImgPtc4Btc = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidPtc4Btc = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonPtc4Btc(indexPrfree){
	block = true;
	indexPrPtc4Btc = indexPrfree;
	for (var i = 0; i < tabidPtc4Btc.length; i++) { 
		try{
			chrome.tabs.remove(tabidPtc4Btc[i]);
		}catch(Exc){} 
	}
	Programms[indexPrPtc4Btc].boolStartingDOGE = true;
	
	colImgPtc4Btc = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Ptc4Btc start");
	injectScriptPtc4Btc('https://ptc4btc.com/faucet');
	console.log("Ptc4Btc end");
}

	

function injectScriptPtc4Btc(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidPtc4Btc.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'ptc4btc.com'){
		console.log('startMes');
		
		if(!tabidPtc4Btc.contains(sender.tab.id))tabidPtc4Btc.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Ptc4Btc.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrPtc4Btc].startintervalDOGE = Programms[indexPrPtc4Btc].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrPtc4Btc].text_test = text_test_d.textContent;
				
				
				Programms[indexPrPtc4Btc].boolStartingDOGE = false;
				block = false;
				if(tabidPtc4Btc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidPtc4Btc.remove(sender.tab.id);
				/*
				*/
				}
				
								
				var idtokenBalance = frag.getElementById('usdBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrPtc4Btc].boolStartingDOGE = false;
					block = false;
					if(tabidPtc4Btc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidPtc4Btc.remove(sender.tab.id);
				}
				
				//кнопка логин
				/*
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrPtc4Btc].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrPtc4Btc].boolStartingDOGE);
				console.log(Exc);
				if(tabidPtc4Btc.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidPtc4Btc.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidPtc4Btc.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'ptc4btc.com'){
			tabidPtc4Btc.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidPtc4Btc.length == 0){
				setTimeout(function() {
					if(tabidPtc4Btc.length == 0){
						Programms[indexPrPtc4Btc].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidPtc4Btc, changeInfo, tab){
//	console.log(tab);console.log(tabidPtc4Btc);
//});





