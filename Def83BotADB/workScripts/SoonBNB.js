var indexPrSoonBNB;


var tabidSoonBNB = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonSoonBNB(indexPrfree){
	block = true;
	indexPrSoonBNB = indexPrfree;
	Programms[indexPrSoonBNB].boolStartingDOGE = true;
	for (var i = 0; i < tabidSoonBNB.length; i++) { 
		try{
			chrome.tabs.remove(tabidSoonBNB[i]);
		}catch(Exc){} 
	}
	console.log("SoonBNB start");
	injectScriptSoonBNB('https://soonbinance.co.in/');
	console.log("SoonBNB end");
}



function injectScriptSoonBNB(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidSoonBNB.push(tab.id);
	
  });
  
};

//https://www.free-bcash.com/free/
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	//console.log(request.src);
	if(request.src == 'soonbinance.co.in'){
		console.log('startMes');
		if(!tabidSoonBNB.contains(sender.tab.id))tabidSoonBNB.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				let frag = document.createRange().createContextualFragment(request.html);
				var div1 = frag.querySelectorAll('div')[3];
				
				
				
				var succ = div1.getElementsByClassName('alert alert-success')[1];
				if (succ!=null){
					console.log(succ.textContent);
					Programms[indexPrSoonBNB].boolStartingDOGE = false;
					block = false;
					if(tabidSoonBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSoonBNB.remove(sender.tab.id);
					return;
				}
				
				var info = div1.getElementsByClassName('alert alert-info')[1];
				if (info!=null){
					if (info.textContent.split(' ')[1] == "have"){
						var min = info.textContent.split(' ')[4];
						var second = min * 60 + 65;
						console.log(second);
						Programms[indexPrSoonBNB].startintervalDOGE = Programms[indexPrSoonBNB].intervalDOGE - second;
						
						Programms[indexPrSoonBNB].boolStartingDOGE = false;
						block = false;
						if(tabidSoonBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSoonBNB.remove(sender.tab.id);
						return;
					}
				}
				
				
				var alertd = div1.getElementsByClassName('alert alert-danger')[0];
				console.log(div1);
				console.log(alertd);
				if (alertd!=null){
					if (alertd.textContent.split(' ')[1] == "reached"){
						console.log('24h');
						Programms[indexPrSoonBNB].userBool = false;
						Programms[indexPrSoonBNB].boolStartingDOGE = false;
						block = false;
						if(tabidSoonBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidSoonBNB.remove(sender.tab.id);
						return;
					}
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SoonBNB.js'});
				
				
				
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
				if(Programms[indexPrSoonBNB].balance != 0 && Programms[indexPrSoonBNB].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrSoonBNB].balance);
					Programms[indexPrSoonBNB].balance = parseFloat(balance);
					Programms[indexPrSoonBNB].boolStartingDOGE = false;
					block = false;
					if(tabidSoonBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSoonBNB.remove(sender.tab.id);
					return;
				}
				Programms[indexPrSoonBNB].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrSoonBNB].boolStartingDOGE = false;
					block = false;
					if(tabidSoonBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidSoonBNB.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/SoonBNB.js'});
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrSoonBNB].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrSoonBNB].boolStartingDOGE);
				console.log(Exc);
				if(tabidSoonBNB.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidSoonBNB.remove(sender.tab.id);
				
			}
			
	}
	if(tabidSoonBNB.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'soonbinance.co.in'){
			tabidSoonBNB.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidSoonBNB.length == 0){
				setTimeout(function() {
					if(tabidSoonBNB.length == 0){
						Programms[indexPrSoonBNB].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidSoonBNB, changeInfo, tab){
//	console.log(tab);console.log(tabidSoonBNB);
//});





