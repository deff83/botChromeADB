var indexPrSatsum;

var colImgSatsum = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidSatsum = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonSatsum(indexPrfree){
	block = true;
	indexPrSatsum = indexPrfree;
	for (var i = 0; i < tabidSatsum.length; i++) { 
		try{
			chrome.tabs.remove(tabidSatsum[i]);
		}catch(Exc){} 
	}
	Programms[indexPrSatsum].boolStartingDOGE = true;
	
	colImgSatsum = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Satsum start");
	injectScriptSatsum('https://satsumafaucet.com/faucet');
	console.log("Satsum end");
}

	

function injectScriptSatsum(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidSatsum.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'satsumafaucet.com'){
		console.log('startMes');
		
		if(!tabidSatsum.contains(sender.tab.id))tabidSatsum.push(sender.tab.id);
		
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Satsum.js'});
					
					antibotlink(idBody, request.src);
					
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrSatsum].startintervalDOGE = Programms[indexPrSatsum].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrSatsum].text_test = text_test_d.textContent;
				
				
				Programms[indexPrSatsum].boolStartingDOGE = false;
				block = false;
				if(tabidSatsum.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSatsum.remove(sender.tab.id);
				}


				
				var idtokenBalance = frag.getElementById('usdBalance');
				if(idtokenBalance!=null){
					
					Programms[indexPrSatsum].boolStartingDOGE = false;
					block = false;
					if(tabidSatsum.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSatsum.remove(sender.tab.id);
				}


					/*			
			*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrSatsum].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrSatsum].boolStartingDOGE);
				console.log(Exc);
				if(tabidSatsum.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSatsum.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidSatsum.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'satsumafaucet.com'){
			tabidSatsum.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrSatsum].alreadytrue == true){
				Programms[indexPrSatsum].startintervalDOGE = Programms[indexPrSatsum].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidSatsum.length == 0){
				setTimeout(function() {
					if(tabidSatsum.length == 0){
						Programms[indexPrSatsum].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidSatsum, changeInfo, tab){
//	console.log(tab);console.log(tabidSatsum);
//});





