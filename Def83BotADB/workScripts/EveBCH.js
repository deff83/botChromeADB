var indexPrEveBCH;


var tabidEveBCH = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonEveBCH(indexPrfree){
	block = true;
	indexPrEveBCH = indexPrfree;
	Programms[indexPrEveBCH].boolStartingDOGE = true;
	for (var i = 0; i < tabidEveBCH.length; i++) { 
		try{
			chrome.tabs.remove(tabidEveBCH[i]);
		}catch(Exc){} 
	}
	console.log("EveBCH start");
	injectScriptEveBCH('https://evebch.xyz/?a=roll');
	console.log("EveBCH end");
}



function injectScriptEveBCH(url) {
  chrome.tabs.create({url : url, active:false}, function(tab) {
	tabidEveBCH.push(tab.id);
	
  });
  
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	
	if (boolStarting == false) {return;}
	if(request.src == 'evebch.xyz'){
		console.log('startMes');
		if(!tabidEveBCH.contains(sender.tab.id))tabidEveBCH.push(sender.tab.id);
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
						Programms[indexPrEveBCH].balance = parseFloat(balance.textContent);
						
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
								
								Programms[indexPrEveBCH].boolStartingDOGE = false;
								Programms[indexPrEveBCH].startintervalDOGE = Programms[indexPrEveBCH].intervalDOGE - second;
								block = false;
								if(tabidEveBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
								tabidEveBCH.remove(sender.tab.id);
								return;
								
							}catch(Exc){console.log(Exc);}
						}
						
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/noScrit.js'});
						return;
					}
					
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EveBCHclick.js'});
					
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
				if(Programms[indexPrEveBCH].balance != 0 && Programms[indexPrEveBCH].balance < parseFloat(balance)){
					console.log(parseFloat(balance) - Programms[indexPrEveBCH].balance);
					Programms[indexPrEveBCH].balance = parseFloat(balance);
					Programms[indexPrEveBCH].boolStartingDOGE = false;
					block = false;
					if(tabidEveBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEveBCH.remove(sender.tab.id);
					return;
				}
				Programms[indexPrEveBCH].balance = parseFloat(balance);
				
				
				var timer = frag.getElementById('demo'); 
				if (timer != null){
					console.log(timer.textContent);
					Programms[indexPrEveBCH].boolStartingDOGE = false;
					block = false;
					if(tabidEveBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEveBCH.remove(sender.tab.id);
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
					Programms[indexPrEveBCH].boolStartingDOGE = false;
					block = false;
					if(tabidEveBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidEveBCH.remove(sender.tab.id);
					return;
				}
				
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/EarnfreeETC.js'});
				
				
				
				*/
				
				
				return;
				
				
				
				
				
			}catch(Exc){
				Programms[indexPrEveBCH].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrEveBCH].boolStartingDOGE);
				console.log(Exc);
				if(tabidEveBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidEveBCH.remove(sender.tab.id);
				
			}
			
	}
	if(tabidEveBCH.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'evebch.xyz'){
			tabidEveBCH.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(Programms[indexPrEveBCH].alreadytrue == true){
				Programms[indexPrEveBCH].startintervalDOGE = Programms[indexPrEveBCH].intervalDOGE - second_not_pink_vnut;
			}
			
			if(tabidEveBCH.length == 0){
				setTimeout(function() {
					if(tabidEveBCH.length == 0){
						Programms[indexPrEveBCH].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidEveBCH, changeInfo, tab){
//	console.log(tab);console.log(tabidEveBCH);
//});





