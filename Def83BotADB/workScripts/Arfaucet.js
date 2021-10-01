var indexPrArfaucet;

var colImgArfaucet = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidArfaucet = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonArfaucet(indexPrfree){
	block = true;
	indexPrArfaucet = indexPrfree;
	for (var i = 0; i < tabidArfaucet.length; i++) { 
		try{
			chrome.tabs.remove(tabidArfaucet[i]);
		}catch(Exc){} 
	}
	Programms[indexPrArfaucet].boolStartingDOGE = true;
	
	colImgArfaucet = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("Arfaucet start");
	injectScriptArfaucet('https://eth.arfaucet.eu/get/');
	console.log("Arfaucet end");
}

	

function injectScriptArfaucet(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidArfaucet.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'eth.arfaucet.eu'){
		console.log('startMes');
		
		if(!tabidArfaucet.contains(sender.tab.id))tabidArfaucet.push(sender.tab.id);
		
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
				
				var idclaimbutn = idBody.getElementsByTagName('button')[0];
				console.log(idclaimbutn);
				if (idclaimbutn!=null){
					var text_uytuhj = idclaimbutn.textContent.replace(/\n/gi, '');;
					console.log(text_uytuhj);
					console.log('tyt1');
					if (text_uytuhj=='Start Claiming'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ArfaucetInput.js'});
						return;
					}
					
					if (text_uytuhj=='Loading...'){
						
						var idclaimbutn2 = idBody.getElementsByTagName('button')[1];
						if (idclaimbutn2!=null){
							text_uytuhj = idclaimbutn2.textContent.replace(/\n/gi, '');;
							
							if (text_uytuhj=='Continue'){
								console.log('tyt3');
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ArfaucetContinue.js'});
								return;
							}
						}
						
						
						f_callback('reload'); 
						console.log('reload');
						return;
					}
					
					
					
					

					
				}
				
				
				var idinfo = idBody.getElementsByClassName('alert alert-info')[0];//You have to wait 4 minutes
				
				if(idinfo!=null){
					console.log(idinfo.textContent);
					var minute = idinfo.textContent.split(' ')[4];
					
					if (minute!='Anti-Bot'){
					
						
						var second = parseInt(minute)*60; 
						Programms[indexPrArfaucet].startintervalDOGE = Programms[indexPrArfaucet].intervalDOGE - second;
						
						
						Programms[indexPrArfaucet].boolStartingDOGE = false;
						block = false;
						if(tabidArfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidArfaucet.remove(sender.tab.id);
					}
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Arfaucet.js'});
				return;
				
				
				//address
				
				
				/*
				var idBody = frag.getElementById('layout-wrapper');
				
				
				if (idBody==null){
					return;
				}
				
				var idclaimbutn = idBody.getElementsByClassName('btn btn-primary btn-lg claim-button')[0];
				console.log(idclaimbutn);
				if(idclaimbutn!= null){
				
				//page-topbar
				
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Arfaucet.js'});
					return;
				}
				
				
				var idminute = frag.getElementById('minute');
				var idsecond = frag.getElementById('second');
				
				if(idminute!= null && idsecond!=null){
					
					var minute = idminute.textContent;
					var secondsfg = idsecond.textContent;
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrArfaucet].startintervalDOGE = Programms[indexPrArfaucet].intervalDOGE - second;
				}
				
				var text_test_d = idBody.getElementsByClassName('lh-1 mb-1 font-weight-bold')[3];
				if (text_test_d!=null){
					Programms[indexPrArfaucet].text_test = text_test_d.textContent;
				
				
				Programms[indexPrArfaucet].boolStartingDOGE = false;
				block = false;
				if(tabidArfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidArfaucet.remove(sender.tab.id);
				}
				/*
				*/
				
				
				return;
				
				
			}catch(Exc){
				Programms[indexPrArfaucet].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrArfaucet].boolStartingDOGE);
				console.log(Exc);
				if(tabidArfaucet.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidArfaucet.remove(sender.tab.id);
				
			}
			
	
	
	
	
	}
	
	
	
	
	if(tabidArfaucet.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'eth.arfaucet.eu'){
			tabidArfaucet.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidArfaucet.length == 0){
				setTimeout(function() {
					if(tabidArfaucet.length == 0){
						Programms[indexPrArfaucet].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidArfaucet, changeInfo, tab){
//	console.log(tab);console.log(tabidArfaucet);
//});





