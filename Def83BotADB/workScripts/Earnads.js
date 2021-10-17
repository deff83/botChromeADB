var indexPrEarnads;

var colImgEarnads = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidEarnads = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEarnads(indexPrfree){
	block = true;
	indexPrEarnads = indexPrfree;
	for (var i = 0; i < tabidEarnads.length; i++) { 
		try{
			chrome.tabs.remove(tabidEarnads[i]);
		}catch(Exc){} 
	}
	Programms[indexPrEarnads].boolStartingDOGE = true;
	
	colImgEarnads = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Earnads start");
	injectScriptEarnads('https://earnads.top/faucet');
	console.log("Earnads end");
}

	

function injectScriptEarnads(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEarnads.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'earnads.top'){
		console.log('startMes');
		
		if(!tabidEarnads.contains(sender.tab.id))tabidEarnads.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Earnads.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrEarnads].startintervalDOGE = Programms[indexPrEarnads].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrEarnads].text_test = text_test_d.textContent;
				
				
				Programms[indexPrEarnads].boolStartingDOGE = false;
				block = false;
				if(tabidEarnads.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnads.remove(sender.tab.id);
				}
				
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrEarnads].boolStartingDOGE = false;
					block = false;
					if(tabidEarnads.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEarnads.remove(sender.tab.id);
				}
				
				
				
				
				
				//кнопка логин
					/*			
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrEarnads].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEarnads].boolStartingDOGE);
				console.log(Exc);
				if(tabidEarnads.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEarnads.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidEarnads.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'earnads.top'){
			tabidEarnads.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrEarnads].alreadytrue == true){
				Programms[indexPrEarnads].startintervalDOGE = Programms[indexPrEarnads].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidEarnads.length == 0){
				setTimeout(function() {
					if(tabidEarnads.length == 0){
						Programms[indexPrEarnads].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEarnads, changeInfo, tab){
//	console.log(tab);console.log(tabidEarnads);
//});





