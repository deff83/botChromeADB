var indexPrEveLTC;


var tabidEveLTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEveLTC(indexPrfree){
	block = true;
	indexPrEveLTC = indexPrfree;
	Programms[indexPrEveLTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidEveLTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidEveLTC[i]);
		}catch(Exc){} 
	}
	console.log("EveLTC start");
	injectScriptEveLTC('https://eveltc.xyz/?a=roll');
	console.log("EveLTC end");
}



function injectScriptEveLTC(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEveLTC.push(tab.id);
	
  });
  
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	if(request.src == 'eveltc.xyz'){
		console.log('startMes');
		if(!tabidEveLTC.contains(sender.tab.id))tabidEveLTC.push(sender.tab.id);
			try{
				//console.log('Deff83 freeETC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				console.log("tyt");
				
				setTimeout(function(){
					
					// id = "rf"
					
					
					//
					var allcontent = frag.querySelectorAll('div')[3];
					var balance = frag.querySelectorAll('div')[14];
					try{
						
						try{
							console.log(balance.getElementsByTagName("a")[1]);
							var sign = balance.getElementsByTagName("a")[1].textContent;
							console.log(sign);
							if (sign=="Sign In"){
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/noScrit.js'});
								return;
							}
						}catch(Exc){console.log(Exc);}
						
						
						
						console.log(balance);
						console.log(balance.textContent);
						Programms[indexPrEveLTC].balance = parseFloat(balance.textContent);
						
					}catch(Exc){console.log(Exc);}
					
					
					var rollbutton = frag.getElementById('rf');
					
					
					if (rollbutton==null){
						
						//проверка на фвход
						
						
						
						// t
						var time = frag.getElementById('t');
						
						if (time!=null){
							try{
								var minute = time.getElementsByTagName("div")[0].textContent;
								var secondsfg = time.getElementsByTagName("div")[1].textContent;
								
								console.log(minute+":"+secondsfg);
								var second = minute*60+(secondsfg)*1-10; 
								
								console.log(second);
								
								if (second < 0) {second = 0};
								if (second == 0) {
									f_callback('reload'); 
									console.log('reload');
									return;
								}
								
								Programms[indexPrEveLTC].boolStartingDOGE = false;
								Programms[indexPrEveLTC].startintervalDOGE = Programms[indexPrEveLTC].intervalDOGE - second;
								block = false;
								if(tabidEveLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
								tabidEveLTC.remove(sender.tab.id);
								return;
								
							}catch(Exc){console.log(Exc);}
						}
						
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/noScrit.js'});
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EveLTCclick.js'});
					
					console.log(rollbutton);
					
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				}, 3000);
				
				/*
				
				var nologin = frag.querySelectorAll('div')[2].getElementsByTagName('h1')[0];
				
				console.log(frag.querySelectorAll('div')[2]);
				console.log(nologin);
				
				if(nologin != null){
					var nologintext = nologin.textContent;
					console.log(nologintext);
					if (nologintext == 'Earn Free ETC Every 60 Minutes'){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput.js'});
						return;
					}
				}
				
				var nologinWrite = frag.querySelectorAll('div')[2].getElementsByTagName('h2')[0];
				if(nologinWrite != null){
					var nologinWritetext = nologinWrite.textContent;
					if (nologinWritetext == 'Login'){
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput2.js'});
						return;
					}
				}
				
				var balance = frag.getElementById('sBal').textContent.split(' ')[0]; 
				
				//выход по балансу
				if(Programms[indexPrEveLTC].balance != 0 && Programms[indexPrEveLTC].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEveLTC].balance);
					Programms[indexPrEveLTC].balance = parseFloat(balance);
					Programms[indexPrEveLTC].boolStartingDOGE = false;
					block = false;
					if(tabidEveLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEveLTC.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEveLTC].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEveLTC].boolStartingDOGE = false;
					block = false;
					if(tabidEveLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEveLTC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETC.js'});
				
				
				/*if(nologin != null && nologin.textContent == 'Free Bitcoin it is real'){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput.js'});
					return;
				}
				/*
				var login = frag.querySelectorAll('div')[3].getElementsByClassName('btn btn-transparent')[0];
				if(login != null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETCinput2.js'});
					return;
				}
				
				
				
				
				
				
				var timer = frag.getElementById('randomcountdown');
				if(timer != null){
					var time = timer.getElementsByTagName('span')[0];
					console.log(time.textContent);
					if(time.textContent == "") {
						f_callback('reload'); 
						return;
					}
					Programms[indexPrEveLTC].boolStartingDOGE = false;
					block = false;
					if(tabidEveLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEveLTC.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETC.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEveLTC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEveLTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidEveLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEveLTC.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEveLTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'eveltc.xyz'){
			
			tabidEveLTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidEveLTC.length == 0){
				setTimeout(function() {
					if(tabidEveLTC.length == 0){
						Programms[indexPrEveLTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEveLTC, changeInfo, tab){
//	console.log(tab);console.log(tabidEveLTC);
//});





