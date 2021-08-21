var indexPrMario;


var tabidMario = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonMario(indexPrfree){
	block = true;
	indexPrMario = indexPrfree;
	Programms[indexPrMario].boolStartingDOGE = true;
	for (var i = 0; i < tabidMario.length; i++) { 
		try{
			chrome.tabs.remove(tabidMario[i]);
		}catch(Exc){} 
	}
	console.log("Mario start");
	injectScriptMario('https://mariobtc.com/index.php?view=account&ac=faucet');
	console.log("Mario end");
}



function injectScriptMario(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidMario.push(tab.id);
	
  });
  
};

//hhttps://mariobtc.com/index.php
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'mariobtc.com' || request.src == '1ink.cc'){
		console.log('startMes');
		if(!tabidMario.contains(sender.tab.id))tabidMario.push(sender.tab.id);
			try{
				
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				var center = frag.querySelectorAll('center')[0]; 
				//console.log(center.getElementsByClassName('navlog')[0]);
				
				if (center != null){
					
					var dashbordPanel = center.getElementsByTagName('h1')[0];
					if(dashbordPanel != null){
						if(dashbordPanel.textContent == 'Cloud Mining'){
							var balancefont = center.getElementsByTagName('font')[13].textContent;
							console.log(balancefont);
							/*if(Programms[indexPrMario].balance != 0 && Programms[indexPrMario].balance < parseFloat(balancefont)){
								console.log(parseFloat(balancefont) - Programms[indexPrMario].balance);
								Programms[indexPrMario].balance = parseFloat(balancefont);
								Programms[indexPrMario].boolStartingDOGE = false;
								block = false;
								if(tabidMario.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
								tabidMario.remove(sender.tab.id);
								return;
							}*/
							var greenbut = center.getElementsByClassName('button medium green')[2];
							if(greenbut != null){
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MarioClaim.js'});
							}else{
								Programms[indexPrMario].balance = parseFloat(balancefont);
								Programms[indexPrMario].boolStartingDOGE = false;
								block = false;
								if(tabidMario.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
								tabidMario.remove(sender.tab.id);
							}
							return;
						}
					}
					
					var log_in = center.getElementsByClassName('sitecon')[0];
					console.log(log_in);
					if (log_in != null && (log_in.getElementsByClassName('pagetitle')[0]) != null) {
							var log_inpage = log_in.getElementsByClassName('pagetitle')[0];
							if(log_inpage.textContent == 'Bitcoin Faucet'){
								
								var down = frag.getElementById('download');
								if (down != null){
									chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
									chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MarioClaimBut.js'});
									console.log('tyt');
									return;
								}
								console.log('tytnet');
							}
							else {
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Marioinput.js'});
								return;
							}
							
					}
					
					
					var bCenter = center.getElementsByTagName('b')[0];
					if (bCenter != null) {
						if (bCenter.textContent=='Calculator'){
							var claimGreen = center.getElementsByClassName('button medium green')[2];
							if(claimGreen != null) {
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MarioClaim.js'});
								return;
							}
							
							
							
							return;
						}
					}
					var success =  center.getElementsByClassName('contentBox')[0];
					if (success != null){
						var successfont = success.getElementsByTagName('font')[0];
						if(successfont != null){
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MarioinputDashBoard.js'});
							return;
						}
					}
				}
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//показать робота для нажатия
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/MarioButtPyth.js'});
				
				/*
				
				
				var balance = frag.getElementById('cryptovalue').textContent; 
				//выход по балансу
				if(Programms[indexPrMario].balance != 0 && Programms[indexPrMario].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrMario].balance);
					Programms[indexPrMario].balance = parseFloat(balance);
					Programms[indexPrMario].boolStartingDOGE = false;
					block = false;
					if(tabidMario.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidMario.remove(sender.tab.id);
					return;
				}
				Programms[indexPrMario].balance = parseFloat(balance);
				
				var stylecaptcha = frag.getElementById('rollform').getAttribute('style');
				console.log(stylecaptcha);
				
				
				
				
				
				if(stylecaptcha == 'display: none;'){
					var clock = frag.getElementById('clock').textContent;
					console.log(clock);
					Programms[indexPrMario].boolStartingDOGE = false;
					block = false;
					if(tabidMario.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidMario.remove(sender.tab.id);
					return;
				}
				
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/Mario.js'});
				*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrMario].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrMario].boolStartingDOGE);
				console.log(Exc);
				if(tabidMario.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidMario.remove(sender.tab.id);
				
			}
			
	}
	if(tabidMario.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'mariobtc.com' && request.src != '1ink.cc'){
			tabidMario.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidMario.length == 0){
				setTimeout(function() {
					if(tabidMario.length == 0){
						Programms[indexPrMario].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidMario, changeInfo, tab){
//	console.log(tab);console.log(tabidMario);
//});





