var indexPrBankRollC;

var colImgBankRollC = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBankRollC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBankRollC(indexPrfree){
	block = true;
	indexPrBankRollC = indexPrfree;
	for (var i = 0; i < tabidBankRollC.length; i++) { 
		try{
			chrome.tabs.remove(tabidBankRollC[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBankRollC].boolStartingDOGE = true;
	
	colImgBankRollC = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BankRollC start");
	injectScriptBankRollC('https://bankrollclicks.xyz/faucet');
	console.log("BankRollC end");
}

	

function injectScriptBankRollC(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBankRollC.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'bankrollclicks.xyz'){
		console.log('startMes');
		
		if(!tabidBankRollC.contains(sender.tab.id))tabidBankRollC.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BankRollC.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBankRollC].startintervalDOGE = Programms[indexPrBankRollC].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrBankRollC].text_test = text_test_d.textContent;
				
				
				Programms[indexPrBankRollC].boolStartingDOGE = false;
				block = false;
				if(tabidBankRollC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBankRollC.remove(sender.tab.id);
				}
				
				
								
				var idtokenBalance = frag.getElementById('usdBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrBankRollC].boolStartingDOGE = false;
					block = false;
					if(tabidBankRollC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBankRollC.remove(sender.tab.id);
				}
				
				
				
				
				
				//кнопка логин
					/*			
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBankRollC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBankRollC].boolStartingDOGE);
				console.log(Exc);
				if(tabidBankRollC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBankRollC.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBankRollC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bankrollclicks.xyz'){
			tabidBankRollC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBankRollC.length == 0){
				setTimeout(function() {
					if(tabidBankRollC.length == 0){
						Programms[indexPrBankRollC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBankRollC, changeInfo, tab){
//	console.log(tab);console.log(tabidBankRollC);
//});





