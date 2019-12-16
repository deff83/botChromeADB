var indexPrClaimFreeBTC;

var colImgClaimFreeBTC = 0;
var boolOneClaim = true;
var boolOneClaim2 = true;

var boolOneButOne = 0;

var tabidClaimFreeBTC = [];

var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

async  function moonClaimFreeBTC(indexPrfree){
	block = true;
	indexPrClaimFreeBTC = indexPrfree;
	for (var i = 0; i < tabidClaimFreeBTC.length; i++) { 
		try{
			chrome.tabs.remove(tabidClaimFreeBTC[i]);
		}catch(Exc){} 
	}
	Programms[indexPrClaimFreeBTC].boolStartingDOGE = true;
	
	colImgClaimFreeBTC = 0;
	boolOneClaim = true;
	boolOneClaim2 = true;
	boolOneButOne = 0;
	console.log("ClaimFreeBTC start");
	injectScriptClaimFreeBTC('https://claimfreecoins.io/bitcoin-faucet/');
	console.log("ClaimFreeBTC end");
}

	

function injectScriptClaimFreeBTC(url) {
  chrome.tabs.create({url : url}, function(tab) {
	tabidClaimFreeBTC.push(tab.id);
	
  });
  
};

//https://claimfreecoins.io
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log(request.src);
	if(request.src == 'claimfreecoins.io'){
		console.log('startMes');
		if(!tabidClaimFreeBTC.contains(sender.tab.id))tabidClaimFreeBTC.push(sender.tab.id);
			try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				//console.log('Deff83 freeLTC', request);
				let frag = document.createRange().createContextualFragment(request.html);
				
				//кнопка логин
				
				
				var idButtonPoleFaucet = frag.getElementById('faucet');
				var idButtonPoleclaim_again = frag.getElementById('claim_again');
				
				if(idButtonPoleclaim_again!= null){
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCclaimagain.js'});
						
					return;
				}
				
				
				if(idButtonPoleFaucet != null){
					
					//проверка саксесса
					
					var succsesButton = idButtonPoleFaucet.getElementsByClassName('alert alert-success')[0];
					
					if (succsesButton != null){
						console.log(succsesButton.textContent);
						let bal = succsesButton.textContent.split(' ')[0];
						try{
						Programms[indexPrClaimFreeBTC].balance += parseFloat(bal);
						
						}catch(Exc){}
						Programms[indexPrClaimFreeBTC].boolStartingDOGE = false;
						block = false;
						if(tabidClaimFreeBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClaimFreeBTC.remove(sender.tab.id);
						return;
					}
					
					
					//проверка логин кнопки
					var loginButton = idButtonPoleFaucet.getElementsByTagName('input')[2];
					if (loginButton != null && loginButton.getAttribute('value')=="Login"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCInput.js'});
						return;
					}
					var shortLinkButton = idButtonPoleFaucet.getElementsByClassName('btn btn-block btn-primary text-uppercase')[0];
					if (shortLinkButton != null && shortLinkButton.textContent == "Verify ShortLink"){
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCShort.js'});
						return;
					}
					console.log(loginButton);
					
						
					/*var boolopenclaimpanel = false;
					var bodyId = frag.querySelectorAll('div');
					for (var bodyr of bodyId) {
						console.log(bodyr.getAttribute('class'));
					}
					
					*/
					
					
					
						//проверка на антибот
						
						var antibotButton = frag.getElementById('antibot');
						
						if (antibotButton != null){
							console.log('antibot', antibotButton.getAttribute('style'));
							
							var antibotButtonSwitch = antibotButton.getElementsByClassName('modal-content')[0].getElementsByClassName('text-center')[0].textContent;
							console.log(antibotButtonSwitch);
							if(antibotButtonSwitch == "Switch to reCaptcha"){
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCSwitch.js'});
								return;
							}
							
							
							
							
							///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							if(antibotButton.getAttribute('style')=="display: none;" || antibotButton.getAttribute('style')==null){
								console.log("boolOneClaim2", boolOneClaim2);
								if(true){
								boolOneClaim2 = false;
								//проверка кнопки continue
								var continueButton = idButtonPoleFaucet.getElementsByTagName('button')[0];
									if (continueButton != null && continueButton.textContent=="Continue"){
										console.log("boolOneClaim2", "nash");
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
										chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCContinue.js'});
										//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCContinue.js'});
										//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
										//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCContinue.js'});
										//нажатие чтоб видимо было
										
									}
								}
								f_callback('reload2'); 
								console.log('reload');
								return;
							}
							///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							
							
							
							
							
							
								//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
								//chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCImagesSaver.js'});
								//див картинок 
								var imagesList = idButtonPoleFaucet.getElementsByClassName('antibotlinks');
								var divimagesSrav = idButtonPoleFaucet.getElementsByClassName('modal-title alert alert-warning')[0];
								//if (divimagesSrav != null){
									var imagesSrav = divimagesSrav.getElementsByTagName('img')[0];
									console.log(imagesSrav);
									var imgurl = imagesSrav.src;
									chrome.downloads.download({
													url:imgurl,
													filename: "PYT-claimfreecoins/sr.png",
													conflictAction: "overwrite"
												},function(downloadId){
													console.log("download begin, the downId is:" + downloadId);
													return;
												});
								//}else{
									//f_callback('reload'); 
									//console.log('reload');
								//	return;
								//}
								
								colImgClaimFreeBTC = 0
								if(imagesList != null){
									let i = 0;
									if (colImgClaimFreeBTC < 4){
									for (var imageC of imagesList) {
										
											var downloadImg = true;
											var imgTagSrc = null;
												try{
													imgTagSrc = imageC.getElementsByTagName('img')[0].src;
													downloadImg = false;
												}
												catch(Exc){
													//f_callback('reload'); 
													//console.log('reload');
													//return;
												}
											var imgurl = imgTagSrc;
											if (imgurl != null){
												chrome.downloads.download({
													url:imgurl,
													filename: "PYT-claimfreecoins/"+i+".jpg",
													conflictAction: "overwrite"
												},function(downloadId){
													
													console.log("download begin, the downId is:" + downloadId);
												});
											
											console.log('antibotlinks', imgTagSrc);
											colImgClaimFreeBTC ++;
											i++;
											}
										}
									}
									console.log('hhhhhhhh');
									chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
									chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTC.js'});
									
									
									
								}
								else{
									console.log('xxxxx');
								}
								
							}else{
								if(frag.getElementById('raspPyt')!=null){
									console.log("tttttttttttttttttttuuuuuuuuut");
									
									//чтение файла
									/*
									var script = document.createElement('script');
									script.src = "test.js";
									document.getElementsByTagName('head')[0].appendChild(script);
									
									console.log(testcap);
									
									var antibotlinksid = frag.getElementById('antibotlinks')
									
									if(antibotlinksid!=null && antibotlinksid.getAttribute('value')==""){
										if (boolOneClaim){
											boolOneClaim = false;
											chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
											chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCpress1.js'});
											chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCpress2.js'});
											chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCpress4.js'});
											chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCpress3.js'});
										}
									}else{
										console.log("antibotlinksid", antibotlinksid);
									}*/
									return;
								}else{
									
								}
								console.log("xx");
							}
							
						
							//var continueButton = idButtonPoleFaucet.getElementsByTagName('button')[0];
							//if (continueButton != null && continueButton.textContent=="Continue"){
								
								//нажатие чтоб видимо было
								
								//return;
							//}*/
							
							
					}
					//f_callback('reload'); 
					//console.log('reload');
						
						
				
				
				
				
				
				//var center = frag.querySelectorAll('center')[0]; 
				//console.log(center.getElementsByClassName('navlog')[0]);
				/*var idButton = frag.getElementById('bonus_button');
				
				if(idButton != null){
					var disable = idButton.getAttribute('value').split(' ')[0];
					if (disable == 'Time'){
						Programms[indexPrClaimFreeBTC].boolStartingDOGE = false;
						block = false;
						if(tabidClaimFreeBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
						tabidClaimFreeBTC.remove(sender.tab.id);
						return;
					}
					
				}
				
				
				
				
				
				var tabTime = frag.getElementById('bonus_status');
				if ( tabTime != null){
					console.log(tabTime.textContent);
				}
				/*if (tabSuccse != null){
					var balance = tabSuccse.getElementsByTagName('b')[0].getAttribute('title').split(' ')[0];
					Programms[indexPrClaimFreeBTC].balance = parseFloat(balance);
					Programms[indexPrClaimFreeBTC].boolStartingDOGE = false;
					block = false;
					if(tabidClaimFreeBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
					tabidClaimFreeBTC.remove(sender.tab.id);
					return;
				}*/
				
				/*
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTC.js'});
				f_callback('reload'); 
				console.log('reload');*/
				return;
				
				
			}catch(Exc){
				Programms[indexPrClaimFreeBTC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClaimFreeBTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidClaimFreeBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimFreeBTC.remove(sender.tab.id);
				
			}
			
	}
	
	
	
	if(request.src == 's1.coinmarketwaves.com'){
		console.log('startMes');
		if(!tabidClaimFreeBTC.contains(sender.tab.id))tabidClaimFreeBTC.push(sender.tab.id);
			try{
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
				chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/pokaz.js'});
				
				let frag = document.createRange().createContextualFragment(request.html);
				
				let invisibleCaptchaShortlink = frag.getElementById('invisibleCaptchaShortlink');
				let countdown = frag.getElementById('countdown');
				
				if(countdown == null){
				
				
					if (invisibleCaptchaShortlink!= null && invisibleCaptchaShortlink.textContent == "Click here to continue"){
						/*if(boolOneButOne<3){
							boolOneButOne += 1;*/
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
							chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/ClaimFreeBTCOneBut.js'});
							//return;
						//}
						
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
						chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/coinmarketwavesContinue.js'});
					
					}
				
					return;
				}
				
				var getlink = frag.querySelectorAll('a')[0]; 
				
				/*for(var alink of getlink){
					console.log(alink.textContent);
				}*/
				
				if (getlink.textContent == "Get Link"){
					//console.log("dalshe");
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/function.js'});
					chrome.tabs.executeScript(sender.tab.id, {runAt:'document_end', file: 'content_scripts/UserScript/coinmarketwavesGetLink.js'});
					
				}else{
					f_callback('reload'); 
					console.log('reload');
				}
				
				
				
				
				
				return;
				
				
				
				
				
				
				}catch(Exc){
				Programms[indexPrClaimFreeBTC].boolStartingDOGE = false;
				block = false;
				console.log(Programms[indexPrClaimFreeBTC].boolStartingDOGE);
				console.log(Exc);
				if(tabidClaimFreeBTC.contains(sender.tab.id)&&!tabidSave.contains(sender.tab.id)) chrome.tabs.remove(sender.tab.id);
				tabidClaimFreeBTC.remove(sender.tab.id);
				
			}
				
	}
	
	
	if(tabidClaimFreeBTC.contains(sender.tab.id)){	//если во вкладке другой адрес
		if(request.src != 'claimfreecoins.io' && request.src != 's1.coinmarketwaves.com'){
			tabidClaimFreeBTC.remove(sender.tab.id);
			chrome.tabs.remove(sender.tab.id);
			if(tabidClaimFreeBTC.length == 0){
				setTimeout(function() {
					if(tabidClaimFreeBTC.length == 0){
						Programms[indexPrClaimFreeBTC].boolStartingDOGE = false;
						block = false;
					}
				}, 5000);
			}
		}
	}
});
//chrome.tabs.onUpdated.addListener(function(tabidClaimFreeBTC, changeInfo, tab){
//	console.log(tab);console.log(tabidClaimFreeBTC);
//});





