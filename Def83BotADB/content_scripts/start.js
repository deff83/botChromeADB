var Programm = function (name, intervalDOGE, startintervalDOGE, boolingTime, boolStartingDOGE, startf, delited, multUSD, boolStart){
	this.name = name;
	this.intervalDOGE = intervalDOGE;
	this.startintervalDOGE = startintervalDOGE;
	this.boolingTime = boolingTime;
	this.boolStartingDOGE = boolStartingDOGE;
	this.start = function(index){
		startf(index);
	}
	this.balance = 0.0;
	this.delited = delited;
	this.multUSD = multUSD;
	this.userBool = true;
	this.boolStart = boolStart;
}

var block = false;

var tabidSave = [];
var massivTabid= [];
var Programms = [];
//-----------------------------------------massiv TAB--------------------------------------------//
massivTabid.push(tabidDOGE);
massivTabid.push(tabidBCH);
massivTabid.push(tabidDASH);	
massivTabid.push(tabidLTC);
massivTabid.push(tabidBTC);
massivTabid.push(tabidfreeLTC);
massivTabid.push(tabidfreeETH);
massivTabid.push(tabidfreeBCH);
massivTabid.push(tabidfreeDOGE);
//massivTabid.push(tabidfreeETHxyz);
//massivTabid.push(tabidfreeDGBxyz);
//massivTabid.push(tabidfreeZECxyz);
massivTabid.push(tabidfreeBTXxyz);
//massivTabid.push(tabidfreeBTCxyz);
massivTabid.push(tabidBestcom);

massivTabid.push(tabidBonusBitcoin);
massivTabid.push(tabidEarnfreeLTC);
massivTabid.push(tabidEarnfreeETH);
massivTabid.push(tabidEarnfreeDOGE);
massivTabid.push(tabidEarnfreeDASH);
massivTabid.push(tabidEarnfreeETC);
massivTabid.push(tabidEarnfreeZEC);
massivTabid.push(tabidEarnfreeETHSky);
massivTabid.push(tabidEarnfreeBCH);
massivTabid.push(tabidLTCfree);
//massivTabid.push(tabidETHfree);
massivTabid.push(tabidDOGEfree);
massivTabid.push(tabidXRPfree);
massivTabid.push(tabidBTCfree);
massivTabid.push(tabidBitFun);
massivTabid.push(tabidDOGEfaucet);
massivTabid.push(tabidDASHfaucet);
massivTabid.push(tabidLTCfaucet);
massivTabid.push(tabidETHfaucet);
massivTabid.push(tabidBLKfaucet);
massivTabid.push(tabidDGBfaucet);
massivTabid.push(tabidPPCfaucet);
massivTabid.push(tabidPOTfaucet);
massivTabid.push(tabidTRXfaucet);
massivTabid.push(tabidXMRfaucet);
massivTabid.push(tabidZECfaucet);
massivTabid.push(tabidHourlyAds);
massivTabid.push(tabidFreeBTCW);
massivTabid.push(tabidBitFaucet);
massivTabid.push(tabidClaimFreeBTC);

//-----------------------------------------Programm start--------------------------------------------//ф
Programms.push(new Programm('moonDOGE', 905, -20+905, 320, false, moonDOGE, 1, 0.00287, true));
Programms.push(new Programm('moonDASH', 905, -40+905, 320, false, moonDASH, 1, 106, true));
Programms.push(new Programm('moonLTC', 905, -60+905, 320, false, moonLTC, 1, 98, true));
Programms.push(new Programm('moonBTC', 905, -80+905, 320, false, moonBTC, 1, 10000, true)) ;
Programms.push(new Programm('moonBCH', 905, -80+905, 320, false, moonBCH, 1, 324, true)) ;
Programms.push(new Programm('BonusBitcoin', 905, -15+905, 320, false, moonBonusBitcoin, 100000000, 0, true));

Programms.push(new Programm('LTCfree', 305, -5+305, 320, false, moonLTCfree, 1, 98));
//Programms.push(new Programm('ETHfree', 305, -5+305, 320, false, moonETHfree, 1, 215));
Programms.push(new Programm('DOGEfree', 305, -5+305, 320, false, moonDOGEfree, 1, 0.00287));
Programms.push(new Programm('XRPfree', 305, -5+305, 320, false, moonXRPfree, 1, 0.305));
Programms.push(new Programm('BTCfree', 305, -5+305, 320, false, moonBTCfree, 1, 10000));

Programms.push(new Programm('BitFun', 905, -5+905, 320, false, moonBitFun, 100000000, 0, true));
Programms.push(new Programm('changeBest.com', 3205, -10+3205, 320, false, moonBestcom, 1, 10000, true));



Programms.push(new Programm('freeLTC', 3605, -100+3605, 320, false, moonfreeLTC, 1, 98, true));
Programms.push(new Programm('freeETH', 3605, -120+3605, 320, false, moonfreeETH, 1, 215, true));
Programms.push(new Programm('freeBCH', 3605, -140+3605, 320, false, moonfreeBCH, 1, 324));
Programms.push(new Programm('freeDOGE', 3605, -150+3605, 320, false, moonfreeDOGE, 1, 0.00287));
//Programms.push(new Programm('freeETHxyz', 3605, -300+3605, 320, false, moonfreeETHxyz, 1, 215));
//Programms.push(new Programm('freeDGBxyz', 3605, -320+3605, 320, false, moonfreeDGBxyz, 1, 0.0098));
//Programms.push(new Programm('freeZECxyz', 3605, -340+3605, 320, false, moonfreeZECxyz, 1, 67));
Programms.push(new Programm('freeBTXxyz', 3605, -360+3605, 320, false, moonfreeBTXxyz, 1, 0.00164));
//Programms.push(new Programm('freeBTCxyz', 3605, -380+3605, 320, false, moonfreeBTCxyz, 1, 10000));


Programms.push(new Programm('EarnfreeLTC', 3605, -0+3605, 320, false, moonEarnfreeLTC, 1, 98, true));
Programms.push(new Programm('EarnfreeETH', 3605, -5+3605, 320, false, moonEarnfreeETH, 1, 215, true));
Programms.push(new Programm('EarnfreeDOGE', 3605, -5+3605, 320, false, moonEarnfreeDOGE, 1, 0.00287, true));	
Programms.push(new Programm('EarnfreeDASH', 3605, -5+3605, 320, false, moonEarnfreeDASH, 1, 106, true));

Programms.push(new Programm('EarnfreeETC', 3605, -5+3605, 320, false, moonEarnfreeETC, 1, 6.10));
Programms.push(new Programm('EarnfreeZEC', 3605, -5+3605, 320, false, moonEarnfreeZEC, 1, 57));

Programms.push(new Programm('EarnfreeETHSky', 3605, -5+3605, 320, false, moonEarnfreeETHSky, 1, 215, true));
Programms.push(new Programm('EarnfreeBCH', 3605, -5+3605, 320, false, moonEarnfreeBCH, 1, 324, true));

Programms.push(new Programm('DOGEfaucet', 14405, -5+14405, 320, false, moonDOGEfaucet, 1, 0.00287));	//return timer
Programms.push(new Programm('DASHfaucet', 14405, -5+14405, 320, false, moonDASHfaucet, 1, 106));	//return timer
Programms.push(new Programm('LTCfaucet', 14405, -5+14405, 320, false, moonLTCfaucet, 1, 98));	//return timer
Programms.push(new Programm('ETHfaucet', 14405, -5+14405, 320, false, moonETHfaucet, 1, 215));	//return timer
Programms.push(new Programm('BLKfaucet', 14405, -5+14405, 320, false, moonBLKfaucet, 1, 0.063));	//return timer
Programms.push(new Programm('DGBfaucet', 14405, -5+14405, 320, false, moonDGBfaucet, 1, 0.0098));	//return timer
Programms.push(new Programm('PPCfaucet', 14405, -5+14405, 320, false, moonPPCfaucet, 1, 0.49));	//return timer
Programms.push(new Programm('POTfaucet', 14405, -5+14405, 320, false, moonPOTfaucet, 1, 0.0079));	//return timer
Programms.push(new Programm('TRXfaucet', 14405, -5+14405, 320, false, moonTRXfaucet, 1, 0.02));	//return timer
Programms.push(new Programm('XMRfaucet', 14405, -5+14405, 320, false, moonXMRfaucet, 1, 91));	//return timer
Programms.push(new Programm('ZECfaucet', 14405, -5+14405, 320, false, moonZECfaucet, 1, 57));	//return timer
Programms.push(new Programm('HourlyAds', 3605, -5+3605, 320, false, moonHourlyAds, 1, 10000));	//return timer
Programms.push(new Programm('Freeb.tc', 1805, -5+1805, 320, false, moonFreeBTCW, 1, 10000));	//return timer
Programms.push(new Programm('BitFaucet', 1805, -5+1805, 320, false, moonBitFaucet, 1, 10000));


Programms.push(new Programm('ClaimFreeBTC-FaucetHub', 25, -5+25, 360, false, moonClaimFreeBTC, 100000000, 10000));	//MAX CLAIM

massivremove = ["https://www.bitcoincasino.io/?stag=5483_5fbe7780e4c32ec18cfa0e4d", 
				"https://luckyfish.io/?c=getstarted",
				"https://cdn4ads.com/kj.aspx?x=6583778&r=1120218787&d=1606500124&j=1597407272&g=493&p=%21grQoNQIYe21n5iYLJO3aRv3C4bStViA%2BddOuIjEUHDmh2JUIsNO0o1SBI%2F2cbXrWUDwx5xHFMSoLMaMEZneZyVxDYVTfPS7wtdHCutmbgWY%2FMI8NoqDQjqEvaqMpMBCWttpf8pY8yZctAh801nzILLC6pSc5Xr74MB0SzzRo7u3NDzR98u2IQnPiyrKFtuWA5%2BrkdR%2BYwDSFxh0ICwWbVxk040cf6iZvkpeSkF3QpNmYF3H%2F2lnOzGMq1lA3iCoPdn0IzqruGOPt3HMHgpQ3EczKWcojkMoeqZh%2FWj9VK74nN3x%2FjCTa%2FK8KV25xJA6OGjKRgDv7ZwLDWYSxp6G8d2MEtiRqH8S50UJsGHBHUk205Hp%2FdAtWi91MNHodXhRlqXqKDf%2BSKtGtk%2Fo%2FEIvcO92WuOZgoI3REVBpS%2FrDS9TDMpF9d%2BntUCCIkIk%2FQhj41pK2priDlvCtv9KgEBO2E%2BSCOnBNvkki2E7E74%2FroQ0%3D&s=1536,864,1.02,1566.72,881.28,0&v=&m="
				];

massivnoremove = [];

whiteurl = ["earnfree-ltc.xyz", "bitfun.co", "moondoge.co.in", "moondash.co.in", "bonusbitcoin.co", "www.bestchange.com", "moonliteco.in", "earnfree-eth.xyz", "ad-doge.com", "moonbit.co.in", "moonbitcoin.cash", "earnfree-doge.xyz", "earnfree-dash.xyz", "earnfree-bch.xyz", "www.free-litecoin.com", "www.free-ethereum.io", "www.free-dogecoin.com", "www.free-bcash.com", "sky-eth.com"]

massivremovef = [
				"luckyfish.io",
				"bitcoincasino.io",
				"amateurbelles.com",
				"datsgirl.com",
				"rtbme24.com",
				"thebestgame2020.com",
				"llink.site",
				"eu.dspultra.com",
				"tokenize.exchange",
				"log.videocampaign.co",
				"www.twitch.tv",
				"cdn4ads.com",
				"trandingbiz.ru",
				"clickco.net",
				"miningcompany.ltd",
				"pornhubsurvey.com",
				"coothupu.net",
				"www.groupian.io",
				"dnevnienovosti.ru",
				"edurustoday.ru",
				"searchsecurer.com",
				"bet1-x28746.com",
				"bitstarz1.eu",
				"99airdrops.com",
				"rt.bongacams13.com",
				"www.purplemining.ltd",
				"belaya2shu1ba1.com",
				"link.securewebservices.ch", "www.gaming-adult.com",
				"starcontent.monster", "grtposh.com", "www.cuntempire.com", "apps6.cointraffic.io", "mellowads.com", "todaybrings.ru", "unicom24.ru", "rt.pornhubpremium.com", "www.myincomeclub.com", "nexo.io", "m2mdonations2.com", "ruvi.tv", "betfury.io", "www.watermine.io", "bet1-x00495.com", "track.adsplay.in", "eu.4game.com", "disturbedaccruesurfaces.com", "rtyznd.com", "gilc.ru", "ivnx.ru", "btb88.com", "vidox.net", "smartme.cash","prpops.com"
				];

function checkurlTabs(){
	
	var boolpip = true;
	
	chrome.tabs.query( {currentWindow: true }, 
			function(tabs) { 
				for(var i = 0; i < Programms.length; i++){
					//console.log("boolpip", (tabs[i].url).split('/')[2]);
					if (massivremove.indexOf(tabs[i].url)>-1){
						chrome.tabs.remove(tabs[i].id);
					}
					if (massivremovef.indexOf(              (tabs[i].url).split('/')[2]             )>-1){
						chrome.tabs.remove(tabs[i].id);
					}
					
				}
				
			 }
	 );
	
	
	
	return true;
}

function getCountTabs(){
	chrome.tabs.query( {currentWindow: true }, 
			function(tabs) { 
				//console.log("tabCount", tabs.length);
				if (tabs.length == 1){
					block = false;
					for(var i = 0; i < Programms.length; i++){
						if (Programms[i].name == "ClaimFreeBTC-FaucetHub"){
							Programms[i].boolStartingDOGE = false;
						}
					}
				}
			 }
	 );
	return 0;
}


var op = 0;
var unBlockTimer = 0;
var boolTimerUnBlock = false;
var boolStarting = false;

// начать повторы с интервалом 2 сек
var timerId = setInterval(function() {
	checkurlTabs();
	getCountTabs();
	if (boolStarting){	//старт кнопкой
		op++;
		if(boolTimerUnBlock){ unBlockTimer ++;}
		for(var i = 0; i < Programms.length; i++){
			if(!Programms[i].boolStartingDOGE)	{Programms[i].startintervalDOGE++;}else{
			if(boolTimerUnBlock){
				
				if(unBlockTimer > Programms[i].boolingTime){
						Programms[i].boolStartingDOGE = false;
						block = false;
						unBlockTimer = 0;
						boolTimerUnBlock = false;
					}
			};}
			
			if((Programms[i].startintervalDOGE / Programms[i].intervalDOGE) > 1 && !block && Programms[i].userBool) {
				Programms[i].start(i); Programms[i].startintervalDOGE = 0;
				unBlockTimer = 0;			
				boolTimerUnBlock = true;
				
			}
		}
	}
}, 1000);

//Programms.push(new Programm('changeBest.ru', 86405, -10+86405, 360, false, moonBestru, 1, 0));
//слушатель событий
/*chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	console.log('Deff83 mess ', request);
	f_callback(op+''); //обратное сообщение
});*/
//var randomName = require("./abracadabra.js");
//doSomethingAsync(moonDoge);

//var timerId2 = setTimeout(function() {
//	moonDoge();
//}, 2000);

chrome.tabs.create({url : 'options.html'}, function(tab) {
	tabidSave.push(tab.id);
  });

//общий слушатель
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	setTimeout(function(){
		try{
			if(!tabidSave.contains(sender.tab.id)){
				var removetab = true;
				massivTabid.forEach(function(item, i, arr) {
					if(item.contains(sender.tab.id)){
						removetab = false;
					}
				});
				//console.log(massivTabid);
				if(removetab) chrome.tabs.remove(sender.tab.id);
			}
		}catch(Exc){}
	}, 1000);
	if(request=='Deff83-test'){
		f_callback(Programms);
	};
	if(request=='Deff83-infortest'){
		f_callback(massivnoremove);
	};
	if(request=='Deff83-block'){
		f_callback(block);
	};
	if(request=='getBoolStartingTrue'){
		f_callback(boolStarting);
	};
	if(request=='saveTab'){
		tabidSave.push(sender.tab.id);
	};
	if(request=='setBoolStartingTrue'){
		boolStarting = true;
	};
	if(request=='setBoolAllFalse'){
		for(var i = 0; i < Programms.length; i++){
			Programms[i].boolStart = false; 
		}
	};
	if(request=='clearinfo'){
		massivnoremove = [];
	};
	
	
	
	if (request.message == 'preload') {
		if (massivremovef.indexOf(request.src)>-1){
			chrome.tabs.remove(sender.tab.id);
		}else{
			if (massivnoremove.indexOf(request.src)==-1){
				if (whiteurl.indexOf(request.src)==-1){
					massivnoremove.push(request.src);
				}
			}
			console.log('Deff83 start preload ', request.src);
		}
		
	}
	
	for(var i = 0; i < Programms.length; i++){
		if(request=='startClick '+i){
			Programms[i].start(i); Programms[i].startintervalDOGE = 0;
			unBlockTimer = 0;			
			boolTimerUnBlock = true;
		};
		if(request=='checkBox '+i){
			Programms[i].userBool = !Programms[i].userBool; 
		};
		if(request=='checkBoxSTrue'+i){
			Programms[i].userBool = true; 
		};
		if(request=='checkBoxSFalse'+i){
			Programms[i].userBool = false; 
		};
		
	}
	
});


Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
			
            return true;
        }
    }
	
    return false;
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
	
    return this;
};































