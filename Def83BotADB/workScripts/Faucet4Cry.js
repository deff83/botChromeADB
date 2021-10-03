var indexPrFaucet4Cry;


var tabidFaucet4Cry = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonFaucet4Cry(indexPrfree){
	block = true;
	indexPrFaucet4Cry = indexPrfree;
	Programms[indexPrFaucet4Cry].boolStartingDOGE = true;
	for (var i = 0; i < tabidFaucet4Cry.length; i++) { 
		try{
			//chrome.tabs.remove(tabidFaucet4Cry[i]);
		}catch(Exc){} 
	}
	console.log("Faucet4Cry start");
	injectScriptFaucet4Cry('http://faucet4crypto.ru/free-ltc/');
	console.log("Faucet4Cry end");
}



function injectScriptFaucet4Cry(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidFaucet4Cry.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'faucet4crypto.ru'){
		console.log('startMes');
		if(!tabidFaucet4Cry.contains(sender.tab.id))tabidFaucet4Cry.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				let frag = document.createRange().createContextualFragment(request.html);
				
				var idBody = frag.getElementById('content');
								
				if (idBody==null){
					return;
				}
				
				var timer = idBody.getElementsByClassName('timer')[0];//2:14
				
				if(timer!= null){
					
					var minute = timer.textContent.split(':')[0];
					var secondsfg = timer.textContent.split(':')[1];
					
					
					var second = minute*60+(secondsfg)*1; 
					Programms[indexPrFaucet4Cry].startintervalDOGE = Programms[indexPrFaucet4Cry].intervalDOGE - second;
					
					
					Programms[indexPrFaucet4Cry].boolStartingDOGE = false;
					block = false;
					if(tabidFaucet4Cry.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFaucet4Cry.remove(sender.tab.id);
					
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucet4Cry.js'});
				
				
				
				return;
				
				
				
				
				
				
				
				var succ = div1.getElementsByClassName('alert alert-success')[0];
				if (succ!=null){
					console.log(succ.textContent);
					Programms[indexPrFaucet4Cry].startintervalDOGE = Programms[indexPrFaucet4Cry].intervalDOGE - 60*5+15;
					Programms[indexPrFaucet4Cry].boolStartingDOGE = false;
					block = false;
					if(tabidFaucet4Cry.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidFaucet4Cry.remove(sender.tab.id);
					return;
				}
				
				var info = div1.getElementsByClassName('alert alert-info')[1];
				if (info!=null){
					if (info.textContent.split(' ')[1] == "have"){
						var min = info.textContent.split(' ')[4];
						var second = min * 60 + 15;
						console.log(second);
						Programms[indexPrFaucet4Cry].startintervalDOGE = Programms[indexPrFaucet4Cry].intervalDOGE - second;
						
						Programms[indexPrFaucet4Cry].boolStartingDOGE = false;
						block = false;
						if(tabidFaucet4Cry.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFaucet4Cry.remove(sender.tab.id);
						return;
					}
				}
				
				
				var alertd = div1.getElementsByClassName('alert alert-danger')[0];
				console.log(div1);
				console.log(alertd);
				if (alertd!=null){
					if (alertd.textContent.split(' ')[1] == "reached"){
						console.log('24h');
						Programms[indexPrFaucet4Cry].userBool = false;
						Programms[indexPrFaucet4Cry].boolStartingDOGE = false;
						block = false;
						if(tabidFaucet4Cry.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidFaucet4Cry.remove(sender.tab.id);
						return;
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Faucet4Cry.js'});
				
				
				
				/*
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrFaucet4Cry].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrFaucet4Cry].boolStartingDOGE);
				console.log(Exc);
				if(tabidFaucet4Cry.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidFaucet4Cry.remove(sender.tab.id);
				
			}
			
	}
	if(tabidFaucet4Cry.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'faucet4crypto.ru'){
			tabidFaucet4Cry.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidFaucet4Cry.length == 0){
				setTimeout(function() {
					if(tabidFaucet4Cry.length == 0){
						Programms[indexPrFaucet4Cry].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidFaucet4Cry, changeInfo, tab){
//	console.log(tab);console.log(tabidFaucet4Cry);
//});





