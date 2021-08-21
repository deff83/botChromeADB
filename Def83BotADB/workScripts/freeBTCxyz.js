var indexPrfreeBTCxyz;


var tabidfreeBTCxyz = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeBTCxyz(indexPrfree){
	block = true;
	indexPrfreeBTCxyz = indexPrfree;
	Programms[indexPrfreeBTCxyz].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeBTCxyz.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeBTCxyz[i]);
		}catch(Exc){} 
	}
	console.log("freeBTCxyz start");
	injectScriptfreeBTCxyz('https://steb.us/u/free');
	console.log("freeBTCxyz end");
}



function injectScriptfreeBTCxyz(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeBTCxyz.push(tab.id);
	
  });
  
};

//steb.us
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'steb.us'){
		console.log('startMes');
		if(!tabidfreeBTCxyz.contains(sender.tab.id))tabidfreeBTCxyz.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[0].getElementsByTagName('a')[0];
				
				if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBTCxyzinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBTCxyzinput2.js'});
					return;
				}
				
				
				
				var balance = frag.getElementById('navbarText').getElementsByClassName('navbar-text')[0].getElementsByTagName('span')[0].textContent; 
				//выход по балансу
				if(Programms[indexPrfreeBTCxyz].balance != 0 && Programms[indexPrfreeBTCxyz].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeBTCxyz].balance);
					Programms[indexPrfreeBTCxyz].balance = parseFloat(balance);
					Programms[indexPrfreeBTCxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeBTCxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeBTCxyz.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeBTCxyz].balance = parseFloat(balance);
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrfreeBTCxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeBTCxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeBTCxyz.remove(sender.tab.id);
					return;
				}
				
				//
					//тут надо кликнуть один раз на кнопку
				//
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBTCxyz.js'});
				
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrfreeBTCxyz].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeBTCxyz].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeBTCxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeBTCxyz.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeBTCxyz.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'steb.us'){
			tabidfreeBTCxyz.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeBTCxyz.length == 0){
				setTimeout(function() {
					if(tabidfreeBTCxyz.length == 0){
						Programms[indexPrfreeBTCxyz].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeBTCxyz, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeBTCxyz);
//});





