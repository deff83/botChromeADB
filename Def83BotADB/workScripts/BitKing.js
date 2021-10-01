var indexPrBitKing;

var colImgBitKing = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidBitKing = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBitKing(indexPrfree){
	block = true;
	indexPrBitKing = indexPrfree;
	for (var i = 0; i < tabidBitKing.length; i++) { 
		try{
			chrome.tabs.remove(tabidBitKing[i]);
		}catch(Exc){} 
	}
	Programms[indexPrBitKing].boolStartingDOGE = true;
	
	colImgBitKing = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("BitKing start");
	injectScriptBitKing('https://litking.biz/faucet');
	console.log("BitKing end");
}

	

function injectScriptBitKing(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBitKing.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'litking.biz'){
		console.log('startMes');
		
		if(!tabidBitKing.contains(sender.tab.id))tabidBitKing.push(sender.tab.id);
		
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
				
				var iduser_balance_bar = frag.getElementById('user_balance_bar');
				
				if(iduser_balance_bar!=null){
					Programms[indexPrBitKing].balance = parseFloat(iduser_balance_bar.textContent);
				}
				
				
				
				var idroll = idBody.getElementsByClassName('btn btn-info')[0];
				if(idroll!=null){
					console.log(idroll.value);
					if (idroll.value=='ROLL'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitKing.js'});
						return;
					}
				}
				
				
				var clock = idBody.getElementsByClassName('clock flip-clock-wrapper')[0];
				if(clock!=null){
					console.log(clock.textContent);
					
					var min1 = clock.getElementsByClassName('inn')[3].textContent;
					var min2 = clock.getElementsByClassName('inn')[7].textContent;
					
					
					console.log(min1);
					console.log(min2);
					
					var sec1 = clock.getElementsByClassName('inn')[11].textContent;
					var sec2 = clock.getElementsByClassName('inn')[15].textContent;
					
					
					console.log(sec1);
					console.log(sec2);
					
					var minute = parseInt(min1)*10+parseInt(min2);
					var secondsfg = parseInt(sec1)*10+parseInt(sec2);
					
					console.log(minute);
					console.log(secondsfg);
					
					
					var second = minute*60+(secondsfg)*1; 
					console.log(second);
					
					
					Programms[indexPrBitKing].startintervalDOGE = Programms[indexPrBitKing].intervalDOGE - second;
					
					Programms[indexPrBitKing].boolStartingDOGE = false;
					block = false;
					if(tabidBitKing.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBitKing.remove(sender.tab.id);
				}
				
				
				
				return;
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BitKing.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBitKing].startintervalDOGE = Programms[indexPrBitKing].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrBitKing].text_test = text_test_d.textContent;
				
				
				Programms[indexPrBitKing].boolStartingDOGE = false;
				block = false;
				if(tabidBitKing.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitKing.remove(sender.tab.id);
				}
				//кнопка логин
				
				
				
				
				
				
				
				
				
				
				
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrBitKing].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBitKing].boolStartingDOGE);
				console.log(Exc);
				if(tabidBitKing.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBitKing.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidBitKing.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'litking.biz'){
			tabidBitKing.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBitKing.length == 0){
				setTimeout(function() {
					if(tabidBitKing.length == 0){
						Programms[indexPrBitKing].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBitKing, changeInfo, tab){
//	console.log(tab);console.log(tabidBitKing);
//});





