var indexPrLTC;	//замена

var tabidLTC = [];	//замена

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonLTC(indexProg){	//замена
	block = true;
	indexPrLTC = indexProg;
	Programms[indexPrLTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidLTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidLTC[i]);
		}catch(Exc){} 
	}
	console.log("moonLTC start");
	injectScriptLTC('http://moonliteco.in');	//замена
	console.log("moonLTC end");
}



function injectScriptLTC(url) {	//замена
  chrome.tabs.create({url : url}, function(tab) {
	tabidLTC.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'moonliteco.in'){	//замена
		//console.log('startMes');
		if(!tabidLTC.contains(sender.tab.id))tabidLTC.push(sender.tab.id);
		try{
				//console.log('Deff83 moonLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log((succses.getElementsByTagName('p')[0].textContent).split(" ")[15]);
					Programms[indexPrLTC].balance = parseFloat((succses.getElementsByTagName('p')[0].textContent).split(" ")[15]);
					if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidLTC.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrLTC].boolStartingDOGE = false;
					block = false;
					return;
				}
				//Timer
				var timer = frag.getElementById('Timer').innerHTML;
				if(timer == '' || timer == null){
					f_callback('reload'); 
					console.log('reload');
					return;
				}
				//доступность кнопки
				var divClaim = frag.getElementById('BodyPlaceholder_ClaimPanel');
				var styleinputdivClaim = divClaim.getElementsByTagName('input')[1].getAttribute('style');
				console.log(styleinputdivClaim);
				if (styleinputdivClaim == 'margin: 5px;'){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonLTC.js'});
		
				}else{
					console.log('button not hidden '+frag.getElementById('Timer').textContent);
					if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidLTC.remove(sender.tab.id);
					console.log('hj');
					Programms[indexPrLTC].boolStartingDOGE = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrLTC].boolStartingDOGE = false;
				block = false;
				console.log(rogramms[indexPrLTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidLTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) {chrome.tabs.remove(sender.tab.id);
				tabidLTC.remove(sender.tab.id);}
				
			}
	}
	if(tabidLTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moonliteco.in' && request.src!="" && request.src != null){	//замена
			console.log('change address'+request.src);
			tabidLTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidLTC.length == 0){
				setTimeout(function() {
					if(tabidLTC.length == 0){
						Programms[indexPrLTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidLTC, changeInfo, tab){
//	console.log(tab);console.log(tabidLTC);
//});






