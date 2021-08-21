var indexPrHourlyAds;


var tabidHourlyAds = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonHourlyAds(indexPrfree){
	block = true;
	indexPrHourlyAds = indexPrfree;
	Programms[indexPrHourlyAds].boolStartingDOGE = true;
	for (var i = 0; i < tabidHourlyAds.length; i++) { 
		try{
			chrome.tabs.remove(tabidHourlyAds[i]);
		}catch(Exc){} 
	}
	console.log("HourlyAds start");
	injectScriptHourlyAds('https://hourly-ads.com/2-free-btc.php');
	console.log("HourlyAds end");
}



function injectScriptHourlyAds(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidHourlyAds.push(tab.id);
	
  });
  
};

//https://hourly-ads.com
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'hourly-ads.com'){
		console.log('startMes');
		if(!tabidHourlyAds.contains(sender.tab.id))tabidHourlyAds.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETH', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				
				var nologin = frag.getElementById('signup_form_div');
				console.log(nologin)
				if(nologin != null){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/HourlyAdsinput.js'});
						return;
				}
				/*
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/HourlyAdsinput2.js'});
						return;
					}
				}
				
				var balanceDIV = frag.getElementById('signup_form_div');
				if(balanceDIV == null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				*/
				
				var balancediv = frag.querySelectorAll('li')[9]; 
				if (balancediv != null){
					var balance = balancediv.textContent;
					console.log('Deff83 freeETH', balance);
					//выход по балансу
					if(Programms[indexPrHourlyAds].balance != 0 && Programms[indexPrHourlyAds].balance < parseFloat(balance)){
						console.log(parseFloat(balance) - Programms[indexPrHourlyAds].balance);
						Programms[indexPrHourlyAds].balance = parseFloat(balance);
						Programms[indexPrHourlyAds].boolStartingDOGE = false;
						block = false;
						if(tabidHourlyAds.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidHourlyAds.remove(sender.tab.id);
						return;
					}
					Programms[indexPrHourlyAds].balance = parseFloat(balance);
				}
				
				
				var timer = frag.getElementById('free_play_form'); 
				if (timer != null){
					var timertext = timer.getElementsByClassName('timer-pause')[0];
					if (timertext!=null && timertext != ''){
						console.log(timertext.textContent);
						var minutest = parseInt(timertext.textContent.split(':')[0]);
						
						Programms[indexPrHourlyAds].startintervalDOGE = 3605 -  minutest * 60 - 2;
						
						Programms[indexPrHourlyAds].boolStartingDOGE = false;
						block = false;
						if(tabidHourlyAds.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidHourlyAds.remove(sender.tab.id);
						return;
					}
				}
				
				
				
				var free_play = frag.getElementById('free_play'); 
				if(free_play != null) {
					success = free_play.getElementsByClassName('message success')[0];
					if (success != null && success.textContent != ""){
						//выход по саксесс
						Programms[indexPrHourlyAds].boolStartingDOGE = false;
						block = false;
						if(tabidHourlyAds.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidHourlyAds.remove(sender.tab.id);
						return;
					}
				}
				
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/HourlyAds.js'});
				
				
				
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrHourlyAds].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrHourlyAds].boolStartingDOGE);
				console.log(Exc);
				if(tabidHourlyAds.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidHourlyAds.remove(sender.tab.id);
				
			}
			
	}
	if(tabidHourlyAds.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'hourly-ads.com'){
			tabidHourlyAds.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidHourlyAds.length == 0){
				setTimeout(function() {
					if(tabidHourlyAds.length == 0){
						Programms[indexPrHourlyAds].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidHourlyAds, changeInfo, tab){
//	console.log(tab);console.log(tabidHourlyAds);
//});





