var indexPrCoinoto;

var colImgCoinoto = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidCoinoto = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCoinoto(indexPrfree){
	block = true;
	indexPrCoinoto = indexPrfree;
	for (var i = 0; i < tabidCoinoto.length; i++) { 
		try{
			chrome.tabs.remove(tabidCoinoto[i]);
		}catch(Exc){} 
	}
	Programms[indexPrCoinoto].boolStartingDOGE = true;
	
	colImgCoinoto = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Coinoto start");
	injectScriptCoinoto('https://coinoto.net/faucet');
	console.log("Coinoto end");
}

	

function injectScriptCoinoto(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCoinoto.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'coinoto.net'){
		console.log('startMes');
		
		if(!tabidCoinoto.contains(sender.tab.id))tabidCoinoto.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Coinoto.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCoinoto].startintervalDOGE = Programms[indexPrCoinoto].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrCoinoto].text_test = text_test_d.textContent;
				
				
				Programms[indexPrCoinoto].boolStartingDOGE = false;
				block = false;
				if(tabidCoinoto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinoto.remove(sender.tab.id);
				}
				
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrCoinoto].boolStartingDOGE = false;
					block = false;
					if(tabidCoinoto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCoinoto.remove(sender.tab.id);
				}
				
				
				
				
				
				//кнопка логин
					/*			
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCoinoto].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCoinoto].boolStartingDOGE);
				console.log(Exc);
				if(tabidCoinoto.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCoinoto.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidCoinoto.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'coinoto.net'){
			tabidCoinoto.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrCoinoto].alreadytrue == true){
				Programms[indexPrCoinoto].startintervalDOGE = Programms[indexPrCoinoto].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidCoinoto.length == 0){
				setTimeout(function() {
					if(tabidCoinoto.length == 0){
						Programms[indexPrCoinoto].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCoinoto, changeInfo, tab){
//	console.log(tab);console.log(tabidCoinoto);
//});





