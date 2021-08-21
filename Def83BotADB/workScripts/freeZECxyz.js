var indexPrfreeZECxyz;


var tabidfreeZECxyz = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeZECxyz(indexPrfree){
	block = true;
	indexPrfreeZECxyz = indexPrfree;
	Programms[indexPrfreeZECxyz].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeZECxyz.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeZECxyz[i]);
		}catch(Exc){} 
	}
	console.log("freeZECxyz start");
	injectScriptfreeZECxyz('https://freezec.xyz/u/free');
	console.log("freeZECxyz end");
}



function injectScriptfreeZECxyz(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeZECxyz.push(tab.id);
	
  });
  
};

//freezec.xyz
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'freezec.xyz'){
		console.log('startMes');
		if(!tabidfreeZECxyz.contains(sender.tab.id))tabidfreeZECxyz.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[0].getElementsByTagName('a')[0];
				
				if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeZECxyzinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeZECxyzinput2.js'});
					return;
				}
				
				
				
				var balance = frag.getElementById('navbarText').getElementsByClassName('navbar-text')[0].getElementsByTagName('span')[0].textContent; 
				//выход по балансу
				if(Programms[indexPrfreeZECxyz].balance != 0 && Programms[indexPrfreeZECxyz].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeZECxyz].balance);
					Programms[indexPrfreeZECxyz].balance = parseFloat(balance);
					Programms[indexPrfreeZECxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeZECxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeZECxyz.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeZECxyz].balance = parseFloat(balance);
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrfreeZECxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeZECxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeZECxyz.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeZECxyz.js'});
				
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrfreeZECxyz].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeZECxyz].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeZECxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeZECxyz.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeZECxyz.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freezec.xyz'){
			tabidfreeZECxyz.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeZECxyz.length == 0){
				setTimeout(function() {
					if(tabidfreeZECxyz.length == 0){
						Programms[indexPrfreeZECxyz].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeZECxyz, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeZECxyz);
//});





