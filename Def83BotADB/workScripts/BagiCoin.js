var indexPrBagiCoin;

var colImgBagiCoin = 0;
var colImgBagiCoin2 = 0;
var tabidBagiCoin = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBagiCoin(indexPrfree){
	block = true;
	indexPrBagiCoin = indexPrfree;
	Programms[indexPrBagiCoin].boolStartingDOGE = true;
	for (var i = 0; i < tabidBagiCoin.length; i++) { 
		try{
			chrome.tabs.remove(tabidBagiCoin[i]);
		}catch(Exc){} 
	}
	console.log("BagiCoin start");
	injectScriptBagiCoin('https://bagi.co.in/binance/');
	//injectScriptBagiCoin('https://cryptodirectories.com/faucet/BCH');
	
	
	colImgBagiCoin = 12;
	colImgBagiCoin2 = 12;
	console.log("BagiCoin end");
}



function injectScriptBagiCoin(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidBagiCoin.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'bagi.co.in'){
		console.log('startMes');
		if(!tabidBagiCoin.contains(sender.tab.id))tabidBagiCoin.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
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


				
				var idsubmit = frag.getElementById('submit');
				
				
				
				var idsucces =  idBody.getElementsByClassName('alert alert-success')[1];
				var idwarning =  idBody.getElementsByClassName('alert alert-warning')[0];
				
				
				
				
				
				/*if(idsucces!=null){
					console.log(idsucces.textContent);
					colImgBagiCoin=colImgBagiCoin-1;
					if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBagiCoin.remove(sender.tab.id);
					if(colImgBagiCoin<1){
						var second = 100*60; 
						Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
					}
					
					
				}
				
				if(idwarning!=null){
					console.log(idwarning.textContent);
					if(idwarning.textContent.split(' ')[2]=='already'){
						
						colImgBagiCoin=colImgBagiCoin-1;
						if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBagiCoin.remove(sender.tab.id);
						if(colImgBagiCoin<1){
							var second = 100*60; 
							Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
							Programms[indexPrBagiCoin].boolStartingDOGE = false;
							block = false;
						}
							
						
					}
				}
				*/
				
				
				var idmodal =  idBody.getElementsByClassName('modal-backdrop show')[0];
				
				if(idsubmit!=null){
					
					
					if(idsubmit.textContent=='GET STARTED!'){
						
						
						
						
						if(idmodal==null){
						
						
						
						
						
						//chrome.tabs.executeScript(sender.tab.id, {code:'clickButton("Id", "submit", -1);'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BagiCoin_adress.js'});
						
						
						
						}
					}
					
					
					console.log(idsubmit.textContent);
					
					
					
					
					
				}
				/*
				var idsubmitclaim =  idBody.getElementsByClassName('btn btn-primary btn-block col-lg-3')[0];
				if(idsubmitclaim!=null){
					
					
					if(idmodal==null){
					if(idsubmitclaim.textContent.split(' ')[0]=='Claim'){
						chrome.tabs.executeScript(sender.tab.id, {code:'clickButton("ClassName", "btn btn-primary btn-block col-lg-3", 0);'});
					}
					}
				}
				*/
				
				
				
				
				
				
				
				
				/*
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				
				var idBody = frag.getElementById('main');
								
				if (idBody==null){
					return;
				}
				
				
				var title_name = idBody.getElementsByClassName('entry-title')[0];//Crypto Directories BCH Faucet
				if(title_name!=null){
					var crypto_name = title_name.textContent.split(' ')[2];
					console.log(crypto_name);
				}
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BagiCoin_adress.js'});
				
				
				
				var m_error = idBody.getElementsByClassName('message message-error')[0];//Your address was disabled
				if(m_error!=null&&m_error.textContent=='Your address was disabled'){
					colImgBagiCoin2=colImgBagiCoin2-1;
					colImgBagiCoin=colImgBagiCoin-1;
					
					if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBagiCoin.remove(sender.tab.id);
					
					if(colImgBagiCoin2<1){
						
					
						Programms[indexPrBagiCoin].userBool=false;

						//Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
					}
					
					if(colImgBagiCoin<1){
						
					
						var second = 300; 

						Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
					}
					
				}
				
				
				
				var timer = idBody.getElementsByClassName('timer')[0];//2:14
				if(timer!= null){
					
					var minute = timer.textContent.split(':')[0];
					var secondsfg = timer.textContent.split(':')[1];
					
					colImgBagiCoin=colImgBagiCoin-1;
					
					console.log(minute*60+(secondsfg)*1);
					console.log(colImgBagiCoin);
					
					
					if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBagiCoin.remove(sender.tab.id);
					
					if(colImgBagiCoin<1){
						
					
						var second = minute*60+(secondsfg)*1; 

						Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
					}
					
					
				}
				
				
				/*
				var timer = idBody.getElementsByClassName('timer')[0];//2:14
				
				if(timer!= null){
					
					var minute = timer.textContent.split(':')[0];
					var secondsfg = timer.textContent.split(':')[1];
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
					
					
					Programms[indexPrBagiCoin].boolStartingDOGE = false;
					block = false;
					if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBagiCoin.remove(sender.tab.id);
					
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BagiCoin.js'});
				
				
				
				return;
				
				
				
				
				
				
				
				var succ = div1.getElementsByClassName('alert alert-success')[0];
				if (succ!=null){
					console.log(succ.textContent);
					Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - 60*5+15;
					Programms[indexPrBagiCoin].boolStartingDOGE = false;
					block = false;
					if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBagiCoin.remove(sender.tab.id);
					return;
				}
				
				var info = div1.getElementsByClassName('alert alert-info')[1];
				if (info!=null){
					if (info.textContent.split(' ')[1] == "have"){
						var min = info.textContent.split(' ')[4];
						var second = min * 60 + 15;
						console.log(second);
						Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second;
						
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
						if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBagiCoin.remove(sender.tab.id);
						return;
					}
				}
				
				
				var alertd = div1.getElementsByClassName('alert alert-danger')[0];
				console.log(div1);
				console.log(alertd);
				if (alertd!=null){
					if (alertd.textContent.split(' ')[1] == "reached"){
						console.log('24h');
						Programms[indexPrBagiCoin].userBool = false;
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
						if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidBagiCoin.remove(sender.tab.id);
						return;
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/BagiCoin.js'});
				
				
				
				/*
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrBagiCoin].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBagiCoin].boolStartingDOGE);
				console.log(Exc);
				if(tabidBagiCoin.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBagiCoin.remove(sender.tab.id);
				
			}
			
	}
	if(tabidBagiCoin.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'bagi.co.in'){
			tabidBagiCoin.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrBagiCoin].alreadytrue == true){
				Programms[indexPrBagiCoin].startintervalDOGE = Programms[indexPrBagiCoin].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidBagiCoin.length == 0){
				setTimeout(function() {
					if(tabidBagiCoin.length == 0){
						Programms[indexPrBagiCoin].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBagiCoin, changeInfo, tab){
//	console.log(tab);console.log(tabidBagiCoin);
//});





