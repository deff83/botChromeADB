var indexPrfreeBTXxyz;


var tabidfreeBTXxyz = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonfreeBTXxyz(indexPrfree){
	block = true;
	indexPrfreeBTXxyz = indexPrfree;
	Programms[indexPrfreeBTXxyz].boolStartingDOGE = true;
	for (var i = 0; i < tabidfreeBTXxyz.length; i++) { 
		try{
			chrome.tabs.remove(tabidfreeBTXxyz[i]);
		}catch(Exc){} 
	}
	console.log("freeBTXxyz start");
	injectScriptfreeBTXxyz('https://freebtx.com/u/free');
	console.log("freeBTXxyz end");
}



function injectScriptfreeBTXxyz(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidfreeBTXxyz.push(tab.id);
	
  });
  
};

//freebtx.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'freebtx.com'){
		console.log('startMes');
		if(!tabidfreeBTXxyz.contains(sender.tab.id))tabidfreeBTXxyz.push(sender.tab.id);
			try{
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				var nologin = frag.querySelectorAll('div')[0].getElementsByTagName('a')[0];
				
				if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBTXxyzinput.js'});
					return;
				}
				
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBTXxyzinput2.js'});
					return;
				}
				
				
				
				var balance = frag.getElementById('navbarText').getElementsByClassName('navbar-text')[0].getElementsByTagName('span')[0].textContent; 
				//выход по балансу
				if(Programms[indexPrfreeBTXxyz].balance != 0 && Programms[indexPrfreeBTXxyz].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrfreeBTXxyz].balance);
					Programms[indexPrfreeBTXxyz].balance = parseFloat(balance);
					Programms[indexPrfreeBTXxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeBTXxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeBTXxyz.remove(sender.tab.id);
					return;
				}
				Programms[indexPrfreeBTXxyz].balance = parseFloat(balance);
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrfreeBTXxyz].boolStartingDOGE = false;
					block = false;
					if(tabidfreeBTXxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidfreeBTXxyz.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/freeBTXxyz.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrfreeBTXxyz].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrfreeBTXxyz].boolStartingDOGE);
				console.log(Exc);
				if(tabidfreeBTXxyz.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidfreeBTXxyz.remove(sender.tab.id);
				
			}
			
	}
	if(tabidfreeBTXxyz.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'freebtx.com'){
			tabidfreeBTXxyz.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrfreeBTXxyz].alreadytrue == true){
				Programms[indexPrfreeBTXxyz].startintervalDOGE = Programms[indexPrfreeBTXxyz].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidfreeBTXxyz.length == 0){
				setTimeout(function() {
					if(tabidfreeBTXxyz.length == 0){
						Programms[indexPrfreeBTXxyz].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidfreeBTXxyz, changeInfo, tab){
//	console.log(tab);console.log(tabidfreeBTXxyz);
//});





