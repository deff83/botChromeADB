var indexPrfreeDGBxyz;


var tabidfreeDGBxyz = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeDGBxyz(indexPrfree){
	block = true;
	indexPrfreeDGBxyz = indexPrfree;
	Programms[indexPrfreeDGBxyz].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeDGBxyz.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeDGBxyz[i]);
		}catch(Exc){} 
	}
	console.log("freeDGBxyz start");
	injectScriptfreeDGBxyz('https://freedgb.xyz/u/free');
	console.log("freeDGBxyz end");
}



function injectScriptfreeDGBxyz(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeDGBxyz.push(tab.id);
	
  });
  
};

//freedgb.xyz
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'freedgb.xyz'){
		console.log('startMes');
		if(!tabidfreeDGBxyz.contains(sender.tab.id))tabidfreeDGBxyz.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[0].getElementsByTagName('a')[0];
				
				if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeDGBxyzinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeDGBxyzinput2.js'});
					return;
				}
				
				
				
				var balance = frag.getElementById('navbarText').getElementsByClassName('navbar-text')[0].getElementsByTagName('span')[0].textContent; 
				//выход по балансу
				if(Programms[indexPrfreeDGBxyz].balance != 0 && Programms[indexPrfreeDGBxyz].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeDGBxyz].balance);
					Programms[indexPrfreeDGBxyz].balance = parseFloat(balance);
					Programms[indexPrfreeDGBxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeDGBxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeDGBxyz.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeDGBxyz].balance = parseFloat(balance);
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrfreeDGBxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeDGBxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeDGBxyz.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeDGBxyz.js'});
				
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrfreeDGBxyz].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeDGBxyz].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeDGBxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeDGBxyz.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeDGBxyz.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freedgb.xyz'){
			tabidfreeDGBxyz.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeDGBxyz.length == 0){
				setTimeout(function() {
					if(tabidfreeDGBxyz.length == 0){
						Programms[indexPrfreeDGBxyz].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeDGBxyz, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeDGBxyz);
//});





