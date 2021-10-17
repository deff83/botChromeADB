var indexPrFreeLtcsite;

var colImgFreeLtcsite = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidFreeLtcsite = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFreeLtcsite(indexPrfree){
	block = true;
	indexPrFreeLtcsite = indexPrfree;
	for (var i = 0; i < tabidFreeLtcsite.length; i++) { 
		try{
			chrome.tabs.remove(tabidFreeLtcsite[i]);
		}catch(Exc){} 
	}
	Programms[indexPrFreeLtcsite].boolStartingDOGE = true;
	
	colImgFreeLtcsite = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("FreeLtcsite start");
	injectScriptFreeLtcsite('https://free-ltc.site/faucet');
	console.log("FreeLtcsite end");
}

	

function injectScriptFreeLtcsite(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFreeLtcsite.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'free-ltc.site'){
		console.log('startMes');
		
		if(!tabidFreeLtcsite.contains(sender.tab.id))tabidFreeLtcsite.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/FreeLtcsite.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFreeLtcsite].startintervalDOGE = Programms[indexPrFreeLtcsite].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrFreeLtcsite].text_test = text_test_d.textContent;
				
				
				Programms[indexPrFreeLtcsite].boolStartingDOGE = false;
				block = false;
				if(tabidFreeLtcsite.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFreeLtcsite.remove(sender.tab.id);
				}
				
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrFreeLtcsite].boolStartingDOGE = false;
					block = false;
					if(tabidFreeLtcsite.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFreeLtcsite.remove(sender.tab.id);
				}
				
				
				
				
				
				//кнопка логин
					/*			
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFreeLtcsite].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFreeLtcsite].boolStartingDOGE);
				console.log(Exc);
				if(tabidFreeLtcsite.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFreeLtcsite.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidFreeLtcsite.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'free-ltc.site'){
			tabidFreeLtcsite.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrFreeLtcsite].alreadytrue == true){
				Programms[indexPrFreeLtcsite].startintervalDOGE = Programms[indexPrFreeLtcsite].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidFreeLtcsite.length == 0){
				setTimeout(function() {
					if(tabidFreeLtcsite.length == 0){
						Programms[indexPrFreeLtcsite].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFreeLtcsite, changeInfo, tab){
//	console.log(tab);console.log(tabidFreeLtcsite);
//});





