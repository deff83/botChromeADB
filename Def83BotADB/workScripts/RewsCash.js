var indexPrRewsCash;

var colImgRewsCash = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidRewsCash = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonRewsCash(indexPrfree){
	block = true;
	indexPrRewsCash = indexPrfree;
	for (var i = 0; i < tabidRewsCash.length; i++) { 
		try{
			chrome.tabs.remove(tabidRewsCash[i]);
		}catch(Exc){} 
	}
	Programms[indexPrRewsCash].boolStartingDOGE = true;
	
	colImgRewsCash = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("RewsCash start");
	injectScriptRewsCash('https://rewardscash.xyz/faucet');
	console.log("RewsCash end");
}

	

function injectScriptRewsCash(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidRewsCash.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src); 
	if(request.src == 'rewardscash.xyz'){
		console.log('startMes');
		
		if(!tabidRewsCash.contains(sender.tab.id))tabidRewsCash.push(sender.tab.id);
		
		try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//var idBody = frag.getElementById('layout-wrapper');
				var idBody = frag.querySelectorAll('div')[0];
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn theme-bg-red text-white')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/RewsCash.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrRewsCash].startintervalDOGE = Programms[indexPrRewsCash].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('dashboard_stats_wrap_content')[2];
				if (text_test_d!=null){
					Programms[indexPrRewsCash].text_test = text_test_d.textContent;
				
				
				Programms[indexPrRewsCash].boolStartingDOGE = false;
				block = false;
				if(tabidRewsCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRewsCash.remove(sender.tab.id);
				
				}
				
								
				var idtokenBalance = frag.getElementById('tokenBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrRewsCash].boolStartingDOGE = false;
					block = false;
					if(tabidRewsCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidRewsCash.remove(sender.tab.id);
				}
				
				
				//кнопка логин
				
				/*
				
				}*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrRewsCash].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrRewsCash].boolStartingDOGE);
				console.log(Exc);
				if(tabidRewsCash.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidRewsCash.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidRewsCash.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'rewardscash.xyz'){
			tabidRewsCash.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidRewsCash.length == 0){
				setTimeout(function() {
					if(tabidRewsCash.length == 0){
						Programms[indexPrRewsCash].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidRewsCash, changeInfo, tab){
//	console.log(tab);console.log(tabidRewsCash);
//});





