var indexPrCrydirect;

var colImgCrydirect = 0;
var colImgCrydirect2 = 0;
var tabidCrydirect = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonCrydirect(indexPrfree){
	block = true;
	indexPrCrydirect = indexPrfree;
	Programms[indexPrCrydirect].boolStartingDOGE = true;
	for (var i = 0; i < tabidCrydirect.length; i++) { 
		try{
			chrome.tabs.remove(tabidCrydirect[i]);
		}catch(Exc){} 
	}
	console.log("Crydirect start");
	injectScriptCrydirect('https://cryptodirectories.com/faucet/BTC');
	injectScriptCrydirect('https://cryptodirectories.com/faucet/ETH');
	injectScriptCrydirect('https://cryptodirectories.com/faucet/DOGE');
	injectScriptCrydirect('https://cryptodirectories.com/faucet/DASH');
	injectScriptCrydirect('https://cryptodirectories.com/faucet/LTC');
	//injectScriptCrydirect('https://cryptodirectories.com/faucet/BCH');
	
	
	colImgCrydirect = 5;
	colImgCrydirect2 = 5;
	console.log("Crydirect end");
}



function injectScriptCrydirect(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidCrydirect.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'cryptodirectories.com'){
		console.log('startMes');
		if(!tabidCrydirect.contains(sender.tab.id))tabidCrydirect.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
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
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Crydirect_adress.js'});
				
				
				
				var m_error = idBody.getElementsByClassName('message message-error')[0];//Your address was disabled
				if(m_error!=null&&m_error.textContent=='Your address was disabled'){
					colImgCrydirect2=colImgCrydirect2-1;
					colImgCrydirect=colImgCrydirect-1;
					
					if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCrydirect.remove(sender.tab.id);
					
					if(colImgCrydirect2<1){
						
					
						Programms[indexPrCrydirect].userBool=false;

						//Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - second;
						Programms[indexPrCrydirect].boolStartingDOGE = false;
						block = false;
					}
					
					if(colImgCrydirect<1){
						
					
						var second = 300; 

						Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - second;
						Programms[indexPrCrydirect].boolStartingDOGE = false;
						block = false;
					}
					
				}
				
				
				
				var timer = idBody.getElementsByClassName('timer')[0];//2:14
				if(timer!= null){
					
					var minute = timer.textContent.split(':')[0];
					var secondsfg = timer.textContent.split(':')[1];
					
					colImgCrydirect=colImgCrydirect-1;
					
					console.log(minute*60+(secondsfg)*1);
					console.log(colImgCrydirect);
					
					
					if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCrydirect.remove(sender.tab.id);
					
					if(colImgCrydirect<1){
						
					
						var second = minute*60+(secondsfg)*1; 

						Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - second;
						Programms[indexPrCrydirect].boolStartingDOGE = false;
						block = false;
					}
					
					
				}
				
				
				/*
				var timer = idBody.getElementsByClassName('timer')[0];//2:14
				
				if(timer!= null){
					
					var minute = timer.textContent.split(':')[0];
					var secondsfg = timer.textContent.split(':')[1];
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - second;
					
					
					Programms[indexPrCrydirect].boolStartingDOGE = false;
					block = false;
					if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCrydirect.remove(sender.tab.id);
					
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Crydirect.js'});
				
				
				
				return;
				
				
				
				
				
				
				
				var succ = div1.getElementsByClassName('alert alert-success')[0];
				if (succ!=null){
					console.log(succ.textContent);
					Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - 60*5+15;
					Programms[indexPrCrydirect].boolStartingDOGE = false;
					block = false;
					if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidCrydirect.remove(sender.tab.id);
					return;
				}
				
				var info = div1.getElementsByClassName('alert alert-info')[1];
				if (info!=null){
					if (info.textContent.split(' ')[1] == "have"){
						var min = info.textContent.split(' ')[4];
						var second = min * 60 + 15;
						console.log(second);
						Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - second;
						
						Programms[indexPrCrydirect].boolStartingDOGE = false;
						block = false;
						if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCrydirect.remove(sender.tab.id);
						return;
					}
				}
				
				
				var alertd = div1.getElementsByClassName('alert alert-danger')[0];
				console.log(div1);
				console.log(alertd);
				if (alertd!=null){
					if (alertd.textContent.split(' ')[1] == "reached"){
						console.log('24h');
						Programms[indexPrCrydirect].userBool = false;
						Programms[indexPrCrydirect].boolStartingDOGE = false;
						block = false;
						if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidCrydirect.remove(sender.tab.id);
						return;
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Crydirect.js'});
				
				
				
				/*
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrCrydirect].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrCrydirect].boolStartingDOGE);
				console.log(Exc);
				if(tabidCrydirect.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidCrydirect.remove(sender.tab.id);
				
			}
			
	}
	if(tabidCrydirect.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'cryptodirectories.com'){
			tabidCrydirect.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrCrydirect].alreadytrue == true){
				Programms[indexPrCrydirect].startintervalDOGE = Programms[indexPrCrydirect].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidCrydirect.length == 0){
				setTimeout(function() {
					if(tabidCrydirect.length == 0){
						Programms[indexPrCrydirect].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidCrydirect, changeInfo, tab){
//	console.log(tab);console.log(tabidCrydirect);
//});





