var indexPrDOGE;

var tabidDOGE = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonDoge(indexProg){
	block = true;
	indexPrDOGE = indexProg;
	Programms[indexPrDOGE].boolStartingDOGE = true;
	for (var i = 0; i < tabidDOGE.length; i++) { 
		try{
			chrome.tabs.remove(tabidDOGE[i]);
		}catch(Exc){} 
	}
	console.log("moonDoge start");
	injectScript('http://moondoge.co.in');
	console.log("moonDoge end");
}



function injectScript(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidDOGE.push(tab.id);
  });
};


chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//console.log(request.src);
	if(request.src == 'moondoge.co.in'){
		//console.log('startMes');
		if(!tabidDOGE.contains(sender.tab.id))tabidDOGE.push(sender.tab.id);
		try{
				//console.log('Deff83 moonDoge', request);
				let frag = document.createRange().createContextualFragment(request.html);
				var succses = frag.getElementById('BodyPlaceholder_SuccessfulClaimPanel');
				if(succses!=null){
					//если успешно
					console.log((succses.getElementsByTagName('p')[0].textContent).split(" ")[15]);
					Programms[indexPrDOGE].balance = parseFloat((succses.getElementsByTagName('p')[0].textContent).split(" ")[15]);
					if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id))  chrome.tabs.remove(sender.tab.id);
					tabidDOGE.remove(sender.tab.id);
					console.log('succses');
					Programms[indexPrDOGE].boolStartingDOGE = false;
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
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/moonDoge.js'});
		
				}else{
					console.log('button not hidden '+frag.getElementById('Timer').textContent);
					if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidDOGE.remove(sender.tab.id);
					console.log('hj');
					Programms[indexPrDOGE].boolStartingDOGE = false;
					block = false;
				}
			}catch(Exc){
				Programms[indexPrDOGE].boolStartingDOGE = false;
				block = false;
				console.log(rogramms[indexPrDOGE].boolStartingDOGE);
				console.log(Exc);
				if(tabidDOGE.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidDOGE.remove(sender.tab.id);
				
			}
	}
	if(tabidDOGE.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'moondoge.co.in' && request.src!="" && request.src != null){
			console.log('change address'+request.src);
			tabidDOGE.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidDOGE.length == 0){
				setTimeout(function() {
					if(tabidDOGE.length == 0){
						Programms[indexPrDOGE].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidDOGE, changeInfo, tab){
//	console.log(tab);console.log(tabidDOGE);
//});






