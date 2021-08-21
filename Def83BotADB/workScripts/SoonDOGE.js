var indexPrSoonDOGE;


var tabidSoonDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonSoonDOGE(indexPrfree){
	block = true;
	indexPrSoonDOGE = indexPrfree;
	Programms[indexPrSoonDOGE].boolStartingDOGE = true;
	for (var i = 0; i < tabidSoonDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidSoonDOGE[i]);
		}catch(Exc){} 
	}
	console.log("SoonDOGE start");
	injectScriptSoonDOGE('https://soondoge.co.in/');
	console.log("SoonDOGE end");
}



function injectScriptSoonDOGE(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidSoonDOGE.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
//	console.log(request.src);
	if(request.src == 'soondoge.co.in'){
		console.log('startMes');
		if(!tabidSoonDOGE.contains(sender.tab.id))tabidSoonDOGE.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				let frag = document.createRange().createContextualFragment(request.html);
				var div1 = frag.querySelectorAll('div')[3];
				
				
				
				var succ = div1.getElementsByClassName('alert alert-success')[0];
				if (succ!=null){
					console.log(succ.textContent);
					Programms[indexPrSoonDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidSoonDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSoonDOGE.remove(sender.tab.id);
					return;
				}
				
				var info = div1.getElementsByClassName('alert alert-info')[1];
				if (info!=null){
					if (info.textContent.split(' ')[1] == "have"){
						var min = info.textContent.split(' ')[4];
						var second = min * 60 + 65;
						console.log(second);
						Programms[indexPrSoonDOGE].startintervalDOGE = Programms[indexPrSoonDOGE].intervalDOGE - second;
						
						Programms[indexPrSoonDOGE].boolStartingDOGE = false;
						block = false;
						if(tabidSoonDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSoonDOGE.remove(sender.tab.id);
						return;
					}
				}
				
				
				var alertd = div1.getElementsByClassName('alert alert-danger')[0];
				console.log(div1);
				console.log(alertd);
				if (alertd!=null){
					if (alertd.textContent.split(' ')[1] == "reached"){
						console.log('24h');
						Programms[indexPrSoonDOGE].userBool = false;
						Programms[indexPrSoonDOGE].boolStartingDOGE = false;
						block = false;
						if(tabidSoonDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSoonDOGE.remove(sender.tab.id);
						return;
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SoonDOGE.js'});
				
				
				/*
				
				var login = frag.getElementById('login'); 
				alert alert-danger
				
				
				console.log(login);
				if(login != null) 
				{
					
					return;
				}
				
				
				
				var balance = frag.getElementById('cryptovalue').textContent; 
				//выход по балансу
				if(Programms[indexPrSoonDOGE].balance != 0 && Programms[indexPrSoonDOGE].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrSoonDOGE].balance);
					Programms[indexPrSoonDOGE].balance = parseFloat(balance);
					Programms[indexPrSoonDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidSoonDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSoonDOGE.remove(sender.tab.id);
					return;
				}
				Programms[indexPrSoonDOGE].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrSoonDOGE].boolStartingDOGE = false;
					block = false;
					if(tabidSoonDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSoonDOGE.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SoonDOGE.js'});
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrSoonDOGE].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrSoonDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidSoonDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSoonDOGE.remove(sender.tab.id);
				
			}
			
	}
	if(tabidSoonDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'soondoge.co.in'){
			tabidSoonDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidSoonDOGE.length == 0){
				setTimeout(function() {
					if(tabidSoonDOGE.length == 0){
						Programms[indexPrSoonDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidSoonDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidSoonDOGE);
//});





