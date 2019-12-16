var indexPrBTC;	//замена+

var tabidBTC = [];	//замена+

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonBTC(indexProg){	//замена+
	block = true;
	indexPrBTC = indexProg;
	Programms[indexPrBTC].boolStartingDOGE = true;
	for (var i = 0; i < tabidBTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidBTC[i]);
		}catch(Exc){} 
	}
	console.log("moonBTC start");
	injectScriptBTC('http://moonbit.co.in');	//замена+
	console.log("moonBTC end");
}



function injectScriptBTC(url) {	//замена+
  chrome.tabs.create({url : url}, function(tab) {
	tabidBTC.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'moonbit.co.in'){	//замена+
		//console.log('startMes');
		if(!tabidBTC.contains(sender.tab.id))tabidBTC.push(sender.tab.id);
		try{
				//console.log('Deff83 moonBTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно codelines[15]; 0 satoshi has been added to your CoinPot account and your total balance is now 129023 satoshi
					console.log((succses.getElementsByTagName('p')[0].textContent).split(" ")[15]);
					Programms[indexPrBTC].balance = parseFloat((succses.getElementsByTagName('p')[0].textContent).split(" ")[15]);
					if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidBTC.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrBTC].boolStartingDOGE = false;
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
				var styleinputdivClaim = divClaim.getElementsByTagName('input')[2].getAttribute('style');
				console.log(styleinputdivClaim);
				if (styleinputdivClaim == 'margin: 5px;'){
					//если кнопка доступна
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonBTC.js'});
		
				}else{
					console.log('button not hidden '+frag.getElementById('Timer').textContent);
					if(tabidBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidBTC.remove(sender.tab.id);
					console.log('hj');
					Programms[indexPrBTC].boolStartingDOGE = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrBTC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrBTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidBCH.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidBCH.remove(sender.tab.id);
				
			}
	}
	if(tabidBTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moonbit.co.in' && request.src!="" && request.src != null){	//замена+
			console.log('change address'+request.src);
			tabidBTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidBTC.length == 0){
				setTimeout(function() {
					if(tabidBTC.length == 0){
						Programms[indexPrBTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidBTC, changeInfo, tab){
//	console.log(tab);console.log(tabidBTC);
//});






