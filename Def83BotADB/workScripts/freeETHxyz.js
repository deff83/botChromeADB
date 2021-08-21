var indexPrfreeETHxyz;


var tabidfreeETHxyz = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeETHxyz(indexPrfree){
	block = true;
	indexPrfreeETHxyz = indexPrfree;
	Programms[indexPrfreeETHxyz].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeETHxyz.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeETHxyz[i]);
		}catch(Exc){} 
	}
	console.log("freeETHxyz start");
	injectScriptfreeETHxyz('https://freeeth.xyz/u/free');
	console.log("freeETHxyz end");
}



function injectScriptfreeETHxyz(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeETHxyz.push(tab.id);
	
  });
  
};

//hfreeeth.xyz
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'freeeth.xyz'){
		console.log('startMes');
		if(!tabidfreeETHxyz.contains(sender.tab.id))tabidfreeETHxyz.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[0].getElementsByTagName('a')[0];
				
				if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeETHxyzinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeETHxyzinput2.js'});
					return;
				}
				
				
				
				var balance = frag.getElementById('navbarText').getElementsByClassName('navbar-text')[0].getElementsByTagName('span')[0].textContent; 
				//выход по балансу
				if(Programms[indexPrfreeETHxyz].balance != 0 && Programms[indexPrfreeETHxyz].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeETHxyz].balance);
					Programms[indexPrfreeETHxyz].balance = parseFloat(balance);
					Programms[indexPrfreeETHxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeETHxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeETHxyz.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeETHxyz].balance = parseFloat(balance);
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrfreeETHxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeETHxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeETHxyz.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeETHxyz.js'});
				
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrfreeETHxyz].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeETHxyz].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeETHxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeETHxyz.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeETHxyz.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freeeth.xyz'){
			tabidfreeETHxyz.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidfreeETHxyz.length == 0){
				setTimeout(function() {
					if(tabidfreeETHxyz.length == 0){
						Programms[indexPrfreeETHxyz].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeETHxyz, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeETHxyz);
//});





