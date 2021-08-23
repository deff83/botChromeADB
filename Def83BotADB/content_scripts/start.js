var Programm = function (name, intervalDOGE, startintervalDOGE, boolingTime, boolStartingDOGE, startf, delited, multUSD, boolStart, skipblock, alreadytrue, number){
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
	
	this.skipblock = skipblock;
	this.text_test = '';
	this.alreadytrue = alreadytrue;
	this.number = number;
	
}

var block = false;
var boolactivechangeHigh = true;
var boolactivechange = false;
var boolcloseTabs = true;

var save_id_tab = -1;

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
massivTabid.push(tabidClaimFreeETH);
massivTabid.push(tabidClaimFreeDOGE);
massivTabid.push(tabidClaimFreeLTC);
massivTabid.push(tabidClaimFreeBCH);
massivTabid.push(tabidClaimFreeDASH);
massivTabid.push(tabidClaimFreeBNB);
massivTabid.push(tabidClaimFreeFAY);
massivTabid.push(tabidClaimFreeZCASH);
massivTabid.push(tabidClaimFreeTRX);
massivTabid.push(tabidClaimFreeDGB);
massivTabid.push(tabidClaimFreeUSDT);


massivTabid.push(tabidEveXMR);
massivTabid.push(tabidEveDOGGE);
massivTabid.push(tabidEveLTC);
massivTabid.push(tabidEveBCH);
massivTabid.push(tabidEveTRX);
massivTabid.push(tabidEveXRP);

massivTabid.push(tabidCryptoUSDT);
massivTabid.push(tabidBigBTC);
massivTabid.push(tabidFC);
massivTabid.push(tabidBitsfree);
massivTabid.push(tabidMonucet);
massivTabid.push(tabidXbitcoins);

massivTabid.push(tabidOurBitco);
massivTabid.push(tabidOurBitco30);
massivTabid.push(tabidOurBitco15);
massivTabid.push(tabidOurBitco5);

massivTabid.push(tabidStarBits);
massivTabid.push(tabidACPfaucet);
massivTabid.push(tabidClickCash);

massivTabid.push(tabidBitMoon);
massivTabid.push(tabidMulticoin);
massivTabid.push(tabidCryptoWin);
massivTabid.push(tabidCoinFree);
massivTabid.push(tabidBigZone);
massivTabid.push(tabidNeoBits);
massivTabid.push(tabidSimpleBits);
massivTabid.push(tabidGoldenPrice);
massivTabid.push(tabidBlackPrice);
massivTabid.push(tabidDogeMate);
massivTabid.push(tabidXYZfaucetUSDT);
massivTabid.push(tabidXYZfaucetDOGE);
massivTabid.push(tabidCoinadster);
massivTabid.push(tabidSoonBNB);
massivTabid.push(tabidSoonDOGE);
massivTabid.push(tabidMCryptTRX);

massivTabid.push(tabidRollBuck);
massivTabid.push(tabidVie);
massivTabid.push(tabidDaily);

massivTabid.push(tabidSpeedcoin);
massivTabid.push(tabidS888atosh);
massivTabid.push(tabidCnKFaucet);
massivTabid.push(tabidFClub);
massivTabid.push(tabidFCrypto);
massivTabid.push(tabidLitiF);
massivTabid.push(tabidGwaher);
massivTabid.push(tabidCoinfly);

massivTabid.push(tabidFeyFaucet);
massivTabid.push(tabidEMHub);

massivTabid.push(tabidCoinPayz);
massivTabid.push(tabidCoinPayUf);

massivTabid.push(tabidCryptoFlare);



//-----------------------------------------Programm start--------------------------------------------//ф


//Programms.push(new Programm('LTCfree', 305, -5+305, 320, false, moonLTCfree, 1, 98));
//Programms.push(new Programm('ETHfree', 305, -5+305, 320, false, moonETHfree, 1, 215));
// Programms.push(new Programm('DOGEfree', 305, -5+305, 320, false, moonDOGEfree, 1, 0.00287));
//Programms.push(new Programm('XRPfree', 305, -5+305, 320, false, moonXRPfree, 1, 0.305));
//Programms.push(new Programm('BTCfree', 305, -5+305, 320, false, moonBTCfree, 1, 10000));
//																						   		 \/on.in \/пропуст блока\/всегда не розовый
Programms.push(new Programm('changeBest.com', 3675, -10+3675, 320, false, moonBestcom, 1, 10000, true, false, false, 0));



Programms.push(new Programm('freeLTC', 4205, -100+4205, 320, false, moonfreeLTC, 1, 98, true, false, false, 0));
Programms.push(new Programm('freeETH', 4205, -120+4205, 320, false, moonfreeETH, 1, 215, true, false, false, 0));


Programms.push(new Programm('BigBTC', 600, -5+600, 320, false, moonBigBTC, 100000000, 10000, true, true, false, 0));
Programms.push(new Programm('CryptoWin', 915, -5+915, 320, false, moonCryptoWin, 100000000, 10000, true, true, true, 0));	
Programms.push(new Programm('BigZone', 1815, -5+1815, 320, false, moonBigZone, 1, 0.00002, true, true, false, 0));
Programms.push(new Programm('FC', 1805, -5+1805, 320, false, moonFC, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('EMHub', 1805, -5+1805, 320, false, moonEMHub, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('CryptoFlare', 1805, -5+1805, 320, false, moonCryptoFlare, 100000000, 10000, true, false, false, 0));


Programms.push(new Programm('Coinfly', 1805, -5+1805, 320, false, moonCoinfly, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('CoinPayz', 1805, -5+1805, 320, false, moonCoinPayz, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('CoinPayUf', 1805, -5+1805, 320, false, moonCoinPayUf, 100000000, 10000, true, false, false, 0));



Programms.push(new Programm('Speedcoin', 1805, -5+1805, 320, false, moonSpeedcoin, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('S888atosh', 1805, -5+1805, 320, false, moonS888atosh, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('CnKFaucet', 1805, -5+1805, 320, false, moonCnKFaucet, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('FClub', 1805, -5+1805, 320, false, moonFClub, 100000000, 10000, true, false, false, 0));

Programms.push(new Programm('RollBuck', 315, -5+315, 320, false, moonRollBuck, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('Vie', 315, -5+315, 320, false, moonVie, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('Daily', 315, -5+315, 320, false, moonDaily, 100000000, 10000, true, false, false, 0));

Programms.push(new Programm('Bitsfree', 915, -5+915, 320, false, moonBitsfree, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('Monucet', 315, -5+315, 320, false, moonMonucet, 100000000, 10000, true, false, false, 0));


Programms.push(new Programm('Xbitcoins', 315, -5+315, 320, false, moonXbitcoins, 100000000, 0, true, false, false, 0));
Programms.push(new Programm('NeoBits', 315, -5+315, 320, false, moonNeoBits, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('CoinFree', 1215, -5+1215, 320, false, moonCoinFree, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('Multicoin', 705, -5+705, 320, false, moonMulticoin, 100000000, 10000, true, false, false, 0));


Programms.push(new Programm('Gwaher', 905, -5+905, 320, false, moonGwaher, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('FCrypto', 1805, -5+1805, 320, false, moonFCrypto, 100000000, 10000, true, false, false, 0));
Programms.push(new Programm('OurBitco', 3615, -5+3615, 320, false, moonOurBitco, 1, 10000, false, false, false, 1));	//60
Programms.push(new Programm('OurBitco30', 1815, -5+1815, 320, false, moonOurBitco30, 1, 0, false, false, false, 1));	//30
Programms.push(new Programm('OurBitco15', 915, -5+915, 320, false, moonOurBitco15, 1, 0, false, false, false, 1));	//30
Programms.push(new Programm('OurBitco5', 315, -5+315, 320, false, moonOurBitco5, 1, 0, false, false, false, 0));	//30

Programms.push(new Programm('StarBits', 315, -5+315, 320, false, moonStarBits, 1, 0, false, false, false, 0));	
Programms.push(new Programm('ACPfaucet', 1815, -5+1815, 320, false, moonACPfaucet, 1, 0, true, false, false, 0));	
Programms.push(new Programm('ClickCash', 1815, -5+1815, 320, false, moonClickCash, 1, 0, false, false, false, 0));	
Programms.push(new Programm('BitMoon', 375, -5+375, 320, false, moonBitMoon, 1, 0.0001, true, true, false, 0));		
Programms.push(new Programm('Coinadster', 615, -5+615, 320, false, moonCoinadster, 1, 0, true, true, false, 0));	

Programms.push(new Programm('SimpleBits', 1815, -5+1815, 320, false, moonSimpleBits, 1, 0.0001, true, false, false, 0));	
Programms.push(new Programm('GoldenPrice', 1815, -5+1815, 320, false, moonGoldenPrice, 1, 0, true, false, false, 0));	
Programms.push(new Programm('BlackPrice', 3615, -5+3615, 320, false, moonBlackPrice, 1, 0, true, false, false, 0));	
Programms.push(new Programm('DogeMate', 3615, -5+3615, 320, false, moonDogeMate, 1, 0, true, false, false, 0));
	
Programms.push(new Programm('XYZfaucetUSDT', 615, -5+615, 320, false, moonXYZfaucetUSDT, 1, 1, false, false, false, 0));	
Programms.push(new Programm('XYZfaucetDOGE', 615, -5+615, 320, false, moonXYZfaucetDOGE, 1, 1, false, false, false, 0));	

Programms.push(new Programm('SoonBNB', 365, -5+365, 320, false, moonSoonBNB, 1, 1, false, false, false, 0));	
Programms.push(new Programm('SoonDOGE', 365, -5+365, 320, false, moonSoonDOGE, 1, 1, false, false, false, 0));	
Programms.push(new Programm('SoonMCryptTRX', 365, -5+365, 320, false, moonMCryptTRX, 1, 1, false, false, false, 0));	

Programms.push(new Programm('FeyFaucet', 1805, -5+1805, 320, false, moonFeyFaucet, 1, 1, false, false, false, 0));	


//Programms.push(new Programm('freeBCH', 3605, -140+3605, 320, false, moonfreeBCH, 1, 324, false, 0));
//Programms.push(new Programm('freeDOGE', 3605, -150+3605, 320, false, moonfreeDOGE, 1, 0.00287, false, 0));
//Programms.push(new Programm('freeETHxyz', 3605, -300+3605, 320, false, moonfreeETHxyz, 1, 215, false, 0));
//Programms.push(new Programm('freeDGBxyz', 3605, -320+3605, 320, false, moonfreeDGBxyz, 1, 0.0098, false, 0));
//Programms.push(new Programm('freeZECxyz', 3605, -340+3605, 320, false, moonfreeZECxyz, 1, 67, false, 0));
//Programms.push(new Programm('freeBTXxyz', 3605, -360+3605, 320, false, moonfreeBTXxyz, 1, 0.00164, false, 0));
//Programms.push(new Programm('freeBTCxyz', 3605, -380+3605, 320, false, moonfreeBTCxyz, 1, 10000, false, 0));


// Programms.push(new Programm('DOGEfaucet', 14405, -5+14405, 320, false, moonDOGEfaucet, 1, 0.00287, false, 0));	//return timer
// Programms.push(new Programm('DASHfaucet', 14405, -5+14405, 320, false, moonDASHfaucet, 1, 106, false, 0));	//return timer
// Programms.push(new Programm('LTCfaucet', 14405, -5+14405, 320, false, moonLTCfaucet, 1, 98, false, 0));	//return timer
// Programms.push(new Programm('ETHfaucet', 14405, -5+14405, 320, false, moonETHfaucet, 1, 215, false, 0));	//return timer
// Programms.push(new Programm('BLKfaucet', 14405, -5+14405, 320, false, moonBLKfaucet, 1, 0.063, false, 0));	//return timer
// Programms.push(new Programm('DGBfaucet', 14405, -5+14405, 320, false, moonDGBfaucet, 1, 0.0098, false, 0));	//return timer
// Programms.push(new Programm('PPCfaucet', 14405, -5+14405, 320, false, moonPPCfaucet, 1, 0.49, false, 0));	//return timer
// Programms.push(new Programm('POTfaucet', 14405, -5+14405, 320, false, moonPOTfaucet, 1, 0.0079, false, 0));	//return timer
// Programms.push(new Programm('TRXfaucet', 14405, -5+14405, 320, false, moonTRXfaucet, 1, 0.02, false, 0));	//return timer
// Programms.push(new Programm('XMRfaucet', 14405, -5+14405, 320, false, moonXMRfaucet, 1, 91, false, 0));	//return timer
// Programms.push(new Programm('ZECfaucet', 14405, -5+14405, 320, false, moonZECfaucet, 1, 57, false, 0));	//return timer
// Programms.push(new Programm('HourlyAds', 3605, -5+3605, 320, false, moonHourlyAds, 1, 10000, false, 0));	//return timer
// Programms.push(new Programm('Freeb.tc', 1805, -5+1805, 320, false, moonFreeBTCW, 1, 10000, false, 0));	//return timer
// Programms.push(new Programm('BitFaucet', 1805, -5+1805, 320, false, moonBitFaucet, 1, 10000, false, 0));


Programms.push(new Programm('ClaimFreeBTC-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeBTC, 100000000, 10000, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeETH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeETH, 100000000, 215, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeDOGE-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeDOGE, 100000000, 0.00287, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeLTC-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeLTC, 100000000, 98, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeBCH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeBCH, 100000000, 324, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeDASH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeDASH, 100000000, 106, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeBNB-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeBNB, 100000000, 106, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeFAY-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeFAY, 100000000, 0.01, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeZCASH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeZCASH, 100000000, 106, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeTRX-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeTRX, 100000000, 0.02, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeDGB-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeDGB, 100000000, 0, false, false, false, 1));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeUSDT-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeUSDT, 100000000, 1, false, false, false, 1));	//MAX CLAIM


Programms.push(new Programm('LitiF', 1805, -5+1805, 320, false, moonLitiF, 100000000, 10000, false, false, false, 0));


Programms.push(new Programm('EveXMR', 3605, -5+3605, 320, false, moonEveXMR, 1, 91, false, false, false, 0));
Programms.push(new Programm('EveDOGGE', 3605, -5+3605, 320, false, moonEveDOGGE, 1, 0.00287, false, false, false, 0));
Programms.push(new Programm('EveLTC', 3605, -5+3605, 320, false, moonEveLTC, 1, 98, false, false, false, 0));
Programms.push(new Programm('EveBCH', 3605, -5+3605, 320, false, moonEveBCH, 1, 324, false, false, false, 0));
Programms.push(new Programm('EveTRX', 3605, -5+3605, 320, false, moonEveTRX, 1, 0.02, false, false, false, 0));
Programms.push(new Programm('EveXRP', 3605, -5+3605, 320, false, moonEveXRP, 1, 0.305, false, false, false, 0));

Programms.push(new Programm('CryptoUSDT', 3605, -5+3605, 320, false, moonCryptoUSDT, 1, 1, false, false, false, 0));


Programms.push(new Programm('moonDOGE', 1805, -20+1805, 320, false, moonDOGE, 1, 0.00287, false, false, false, 0));
Programms.push(new Programm('moonDASH', 1805, -40+1805, 320, false, moonDASH, 1, 106, false, false, false, 0));
Programms.push(new Programm('moonLTC', 1805, -60+1805, 320, false, moonLTC, 1, 98, false, false, false, 0));
Programms.push(new Programm('moonBTC', 1805, -80+1805, 320, false, moonBTC, 1, 10000, false, false)) ;
Programms.push(new Programm('moonBCH', 1805, -80+1805, 320, false, moonBCH, 1, 324, false, false)) ;
Programms.push(new Programm('BonusBitcoin', 905, -15+905, 320, false, moonBonusBitcoin, 100000000, 0, false, false, false, 0));

Programms.push(new Programm('BitFun', 3675, -5+3675, 320, false, moonBitFun, 100000000, 0, false, false, false, 0));


Programms.push(new Programm('EarnfreeLTC', 3605, -0+3605, 320, false, moonEarnfreeLTC, 1, 98, false, false, false, 0));
Programms.push(new Programm('EarnfreeETH', 3605, -5+3605, 320, false, moonEarnfreeETH, 1, 215, false, false, false, 0));
Programms.push(new Programm('EarnfreeDOGE', 3605, -5+3605, 320, false, moonEarnfreeDOGE, 1, 0.00287, false, false, false, 0));	
Programms.push(new Programm('EarnfreeDASH', 3605, -5+3605, 320, false, moonEarnfreeDASH, 1, 106, false, false, false, 0));

//Programms.push(new Programm('EarnfreeETC', 3605, -5+3605, 320, false, moonEarnfreeETC, 1, 6.10, false, 0));
//Programms.push(new Programm('EarnfreeZEC', 3605, -5+3605, 320, false, moonEarnfreeZEC, 1, 57, false, 0));

Programms.push(new Programm('EarnfreeETHSky', 3605, -5+3605, 320, false, moonEarnfreeETHSky, 1, 215, false, false, false, 0));
Programms.push(new Programm('EarnfreeBCH', 3605, -5+3605, 320, false, moonEarnfreeBCH, 1, 324, false, false, false, 0));

massivremove = ["https://www.bitcoincasino.io/?stag=5483_5fbe7780e4c32ec18cfa0e4d", 
				"https://luckyfish.io/?c=getstarted","https://binance-charity.co/", "https://www.newsofcd.com/", "https://tfbitcoin.com/", "https://luckyfish.io/?c=getstarted","https://www.bitcoincasino.io/?stag=5483_5fe65eab9f965850e0d12a6b", "https://refpakrtsb.top/L?tag=d_755089m_18639c_c04dbfb7&r=user%2Fregistration.php&pb=2fd0f6616e444e95be6305e0fb3ea477&click_id=01b3973b-3bdd-11eb-b24e-cd2a8c8feb24", "https://f9s6x9j7.stackpathcdn.com/adserv.html?idzone=3483349&sub=6380706","https://onmarshtompor.com/4/3601339/?var=4430419&ab2r=0","https://luckyforbet.com/h/q5muJXfdFx3iFADl6vlH2POZH3e4XR89wg0G5fdi4nB9qekmjgtufD8RHnXDue9KiCVlF3enwYhWIWAtgpvWNa9EXdG8nk8vShX4BxcO9ZNV5qOrq7_wJ8eSzIlEP8fSq9vK_sURPoF5keFjZyYrF6y7Pv3Sg9KVUgNwqQAWfMSDOz3krtoXu_yzw3I3qnQGiqx6NX2D_7rcRqHyqnTCgy7jY4rdzHQlxMzwmkKgwfZzRltA.NZdczObXCzax2eGDpqwy4Li3ZPcQ1hi.bKBAIoeS49b26BTWdF9oqnZke257Kwjmob5vi.PuGusCTZ36IwE2RGOpody1wMhnHMIQ2DTQ.u68owoZ9CFMMJfmkUqq.qq","https://1xbet-813240.top/ru/?tag=s_42282m_355c_%5b%5dMS%5b%5dnull%5b%5dnull%5b%5dgeneral%5b%5digeth25cf6b1458_d27775_l16402_clickunder&pb=4af4bf2b69b04f5484545de344ba50ee&click_id=734699b0-fb5d-11eb-af6d-0b43ce5f0895",

				"https://refpakrtsb.top/L?tag=d_755089m_18639c_c04dbfb7&r=user%2Fregistration.php&pb=2fd0f6616e444e95be6305e0fb3ea477&click_id=98875421-3ca8-11eb-801e-47e1a95ab5ff"	,"https://www.onehash.com/?utm_source=coinzilla&utm_medium=popunder&campaign=22161010a6a58b14955&zone=579405a891cdea0555&uhash=MFg3K3ZJUVIrdGFtYThkd1gzS3ZvaUpCQldBVjJYZ1FkRWplaloyMDRnVVNzS0duVHIxRkVJdWYxYnpmNkVGS3VDV3FsNS9JRWluMmJNZXFVdm0zdWc5M01WTExkM3FhTHJHSlJDSUMzZjFtdjd4bUJ1Sm02aldlMXpydlZJU2xRQldNSWJnV2twRDlSeTVBUHZXVzQ3QzZIRUR4US90STJmekw2Mmk3L3lmdEpTZ0hSRFhqQU9hMW52V09qbXFvSUs4NDNzRG1FcDBiT2RWczlBb1d0Q2thUTdtVlJnUVhvamlTdmYzMVBvR3JwTFFuYzZxQmRsOHFXN2p6d1pSKytwMzl5NUF1VWlFSEtDY21MVjkzalpUSDNyN2ZUdlBkM1gxcVdJRE9pTGVQbTZJbjdGY0JoSEd1QzBGNDJYZ0kvYXZuV2tsVW1LSXNubzY3SFdZcTRZVUVZSnBRbHNNTUlIZ0d3cTJmcDYwVnVPZDhONVhRZFVFdnBNM3BQL1kxTGJBWDRjc1ErdGFTL05rRVRZcCttUXZSc2dPaDVPc2g2eDVDZCtNVU5aazNKcWdLTmVHVWFtM2RrTG9zemhIS1pFdEc2YWc5VWdPaHVDRzlOdit3NU1FK1dpeU11WnoyTEVPTlZjeFBFSGJ0VEtjbG5tMExHbWs5QWo4eHQxbjlnbE5oUHBONzlmR1hNaEtrcy8xWGFaNDhUeGFESHgrN2hKTHV4elhJN1h1UnN1ZGtIdmdzY0t3MUhsL3FFZ25udm5RMWM1UFBLdDRvcUJlc0EyRE1iRnYwS2xVb3NSUGtIWkQ5Wlp4T01UQVhHU0dXd3YyZWFTY204SzRzN1oxRURqdUdjNXgzZTJ6TlRsekZ6dkxYTDd1Q29TZXR6d1VUWGp1N1I5MUF1ek1CSzB2VVBIS2MzV1FpWGs5TitKMks0ZjIxaXZyQytPQ0ZKUCs4Q2RudXF0dENsZDhEMFZXdkoyc0FyUWVhZXFoQmxIemdra2UxYWt2Ym9zaHI0NENINzBwVnN5QmNsN3FzWEtTNjcwV3BKL3pNSXBtYWg3U25iNWFlSFl2d0hOSWJRQW9UWmlWM3BiN2hORE4ySERxN1V0VzJmVm40cmtONDZQNE5SdE0yb212TmhVVEp1S2JRb2xycDhqanJqUFk0bVNXRG5TZ09mUmhBZEVRZGE2a3loS09tUlJmS3MwVmE3SWxhZ0V4cUFBPT0&utm_content=bigbtc.win&utm_term=%7Bterm%7D&ap=a1b11b784125432e8bc1cd","https://1bestm0d31.com/hwraI6548ebc281e397416427f6d5195c0dc235ec323c?q=Your%20File%20Is%20Ready%20To%20Download&s3=5166282654964252343&s1=933927","https://luckyforbet.com/h/HFkj2WWGhZss4N_vRddt0OeEwXblLkaHaTbbZoloS2zDKtfFFQsYas9wIwlHE7zw8eKoZrwB7GmEma0lykj4y0ZDGMKFqLHyNxc5Wpr8.oO7rl6VqOBWBrTHADauadRvxA4IevUcwPpsoJhQP_eErmBIwkTU0nvOa9kl3PTib.SAbR7umQ320iH7Z0YTlUswAezEqe8t4EW36OYfOvvJcldY8UFjfraHb9yg4y8XpUCcGi9.ZZDYCIZOvWaFmlJfT_FJb7O8NsIccUxQ4Ve.BiuhYOvpT08loYcXQxQJtP1nyjP2yMIiuOuRPOnEWB4lzYI.lgq3tzvJ_qGgcKL2HoX3itXgc3hnMdUElOmty0Yqq.qq",

				"https://kts.visitstats.com/in/935/?katds_ep=jgAebSg1IfFEKBop1QFRX-SeToWo05lvjIXO8nk3DycJx1hEm1qJ7vrxJD-dXDq0dzgnFEeapI8bS2UKdHt_osj3l447ZyVt5HgGtqc6zcBovDysSzX2WCBrqazwwyYE1zAbeMzSd1fr_ijlXGnjFiQ60bX8aKyrVifx1zvxd00oWNyCd_T8CFZqG4RHerg7nwi2nBj_gUuGd_qYklwCQWvl1gZIBxX-yqnYrEMRaRS03VNtCEU6LwV6uBaEYECbQiPy4aFrdzlYv1lGl_4wfY0qdEfE7ZuTU79OFZGOjqjazVu9UpOuEPJmHhvFzDvnHV-rO_mB1CGlu78kBjTonU_zsN8_yNi2lz6L_Mr_sIeUq-78t-iEFGdRMXbGF9WBJ3lXIIe7coQKXtE3AjELVvdJqfPeHr4IAA3phhgBx3LLVSou42xZ2Y7nNQ7uM-U3EqDe_kV-CYBD4sd-55g-QMg2Hk4eqjeO1pqzO88U3N8a15zTJggRrppbt85iRcM54M0kJD1XKCcKLs-30gw-LcM0VILOXZgkTSn3nBX_WuuSv1ZcwO-iwA-fW3Mg1FNQZWlzzMBmiLqC8jKh_9UHfXRd-BR6CxmKZGTV0C4DNS4cxq2aAicqohY8l-tQaH-XaRxnAq3l36HfxLO3u-QZNFiyTd_AV1s4o-5byFVeZ_qPTphqZeIvYQCxXNyY4Isb9FRkOBOAx8dkftpP-BlYM8Bh3jv9ENLlCLwebqPlswH7PAdJRTtmo8aFaJ1h0XcX8E_nrKdNnSKj6_j53hZA2pFAredeAuvdf7J6DZ17XATtiFRPImGPzoGCIHT8jW9_EhDBSmx4pak_88_u88OI5wm2pjUvadwK1ow7SAbjNSIWkmsJj9i7uZMZ6sXuPd9B0kBa4SfMFZREd9UrSlt4IE0JyBK3537Zqcw9o9pmaHDH2qzu-RshiRxUHzdOW4FVYDhC0vmvdhIuY9-D7m6AHp7mBbbIgOFs0LdBr2UAeziTZWNicRYbYeoZ-xEbyW5IpgvNqEBep9vQmoKxl4fo61KD2qanHap0L34co3dJuX-so6s4eBoT54cJ7HLJcJf747DuGCTyYY2Bm316TgiLQOHAw2PXJf2O8lhctu16pmxZDs5o3u4Kki4Ze0oxOJ29BmIg01WElan2mM5xP4j695EIiNIHZP2kM-YG0H2NjuWtsw7QN83a6OkbSxDk5jMXVxgJCwJm17yleCbDANMpUD6a4N5j6En5qeopFGUceuD-ltMz4YaNHfXhGu5gsRxtu51k-47xsN_ktM_taFkLiEPDBSRP22NE0vQmJwbNK4t8m4_nzq2S1K9RVgIvcsKVLOmywSICGNaqSOmfeBNr98ihHCuymDXwz4XegJHv5DNCf1tEdh46stI5ESJQhNjC48xsEzG_diaILHLUW70nQd5d5-rtRQl33ibnvwmP4Q_JgdrUZ-QUJnBXRlSi3sVutFcht8tDJFKiUoB1RlwmAKgAF0Zx-l8nmEikQoGpg6ExFVH7y_dXk77YR_pd3oEeeR1IJ6UBhQd0ytgW8pjmv5EsWRU9s5asyQtGmwr7bkok4kIue695Dd07gxPyo0-fjwW8g1KdNWO69NoOIs-G_CYrHILLE_BQAgXTYQeV1dp56n0Nur2ZgfOqGJoCSJprRuhtBWxyOoOTWekYyf6eY5zykmey_qZgj8Er8zyVD63ifrvyVNHYsd2Z4GBpOSH06xRC5b1yWefdsbe-H1eFXIJrWNsXg4lGCA3S20d23njrf9erwknBfo-kermftOqciMtu3HlwQgVN7cJu88XBD_t71tojDNxym0-KiY7Yce2PWNftGz1gsD8L8v2O1OVHOdaCi25kv89ejdifkC0xaTq2mr3A_1eMxta66uxu8M2p3Po7VFTj7tYgUda1xTmZfisEsQ2SOUXmWHZrWVTJDX2x5rRcWoRHhtVoER4F18ANqjV7PdLeJ7R_RlqFoYU2v5bDKYI7Wn2ea_ACTdooDlQxk9ObFoeH5agq7BkvdHZbbLh3i5_u59zw_7UDXqFopXrkqgYS5v0ObXNHymHn3uBaTsbGEmk2OkWhkVwlJ5jaZ68dKXWLAFFCBYzPUFU4rv_aQW7wCL4zd90Te9IG3o5mlx4RkE1tMdZMT9sm9p8BC_DvB93fC704iXSDZozda1EDSnt5MjKI6dg0hZ7pu0QV2tjMhOyvNRZ9_a3IABBkDduKS6qktltlR_u-d9M5JcDafqX6v66nzMNnoiJ2gbx6soiMQrZp71B3wxMg-ebjIGNze17gaoesYAMftGwpFuH0QMmbHpvi1RrZtyPrdbcallftH3gLYUzOdAfQMR-xx7znyAwzSO1BF2TQFWm_fKqEI8TzcrT53KpSnRJ3lIacuT3w-SZ0Gss7TPK8y-UK5_b4OGYzFuX6q0KetS0fKxjKTIDwK0kq0Jc5taFv_ed5OX0wiAHWruFODMi9hhIJ9rl6w-2MvovTdL91Wp4Iu4o21BnwH3gX9y0-PuAgGN9cuon2gyK6Uj-g58mP2jmZo4zh7VbvzKIUVKO81jb6E1xnmcG5FioIEWVAGESqgPwdE0hNK8C0kvWwFRuumUKvOkeQEnS8puZDt2f1o1CLVDak0M9n1FEHBF9R5XAwGrnq_tQtMWEo3OZLMVzMLNDzuX7_MabtOCgrgHdD_vnokYDY7GRbb08832W99ACaJ_6OHZs9b9JptyRC-43dCFPuvR7HzfOpdJS81iEd4Zu2DHIBC0pqIzOq9PkkW9yk6Ba_03_y2Qlhreui1ilIUKfdRjNZcJUuC7JiSxetOPPl2cRkYwJyBExKwd-yW-1z4M_KEZ8X_5vi8CXEwBwRt58Eqjxrj-MrnJzSPg_OeaW8UyNAQWq8xuAcV-NMg2bmOLwtIBBlwWakT1rgLaocDqlhTOYxIJO7yN2tR2BXyTfHk76ZHTk3CNaHDtrpNd3BA5rr2dP8ONZsr55QWCDQ8xSCvBcNPNRBG_X3qfrYHoivGjKhMp3tBY3_YtnjwPpv1T8WifJn3lnk_gnVwyuVcVRgasZ2rBFMi4JLA4fBI6ouGOB8SKuHdYSRJegzyGG3baHNGFO92H4-m4bQzu3aD-gBQRBCo7PARemljxuKWgl8ywQA8ajofyvONGqJ2n7PYAquOqpJC-sGr7AeIfStO0p9qgdzDU66GIbAQoQ8rykwh4I5VB4Zb-kKGSEvWxOery5SpBYjBxVpI2Do34A_uYmORQM8HOH_7pfbivtbTmWY3MjqZoNjM-YA4SpFRPUX5thtvihMMAISTqQJne3waugCC6G3vTI1qpL8WK5hceMayrrOHLB_i0DxKk788V77RTmOipOZQU6H2o1qEJFKW4RAK7GKyuWR7EqLJNUCsIlAcUXjXChSkZZSk02cX5InXqbeJY_fj2sQ7FZ2QAlcc-VCOdSCqpQGNqtb4W4Z9J1Emtkck6uPVxiw-433Tr6dE6o1PYQlW_bUXdTVfvbM0Z8gVkPPyBjRkZ_eDI3dsnsvziaRWNx_Ph4w0B6PUMa9zujLnwYS8no7lrLIQOBnvNh2J-YsB0fQSiqzpfgrll9zuyyO9NYCX-Uil7jpidjPapQeiSi0tS-lqMdbsLHcc1ccrvrKF0eUFVqmuH3sFmgrs5RJe97QM7v3kMH5vX_Vp5eU7PXdVuMyMZCpN07mOHay2D92koaJMcI-iR7x0th8WMxy5iYivkEA0pX1teKZ208WXd0ydZmwNuKcjf4-LFyDfrOXPKvYcNUyh2yc_aH2Prq1jvbC75nKREnfh2ZOFlXSiq86rgVmNQ5UXk1zKb_p9btOd0NvZIheBhDnMLsWrbJj5D5Cwf8GG2W6peui7TE5vxjgYSHU2LlYLtOiFOHDVCDhUB1TM5mvxgdlXc0zwyVD67BJ74nzu_aSF1jxOYpP5mR-O8vB50Y1XUZ1g_Q16qb0FzxF_NWJxx_DTVtHw8ZXpCoSRK1ujQKkyl9BMt-0UF3Qwc2gyxzG7O-M0h5NzHe9q17KIM_XNi7E711nZyo6m5c1AXH8qt00ZQB6IC88BpnyfrGZZ7BbMVUJFVluboBRBQ20qer3qDirEmZQDYGWKLD-OIvDhRnyyVIJf57UuMO3ltyWimQh6GhTKBRxYjRLk-SYHoWPvsKvLGJFY54uyFEzqht4NaHq6B_90FCfaMNuQPbMoPRZSft-peFqSxrJsI_Gj7dqHZIz4fzMDpnV5wX88YwLYCsq5XEpv4Jh26_ZClIheKNC9WMqKB9LN2P7YUFRzSkh544bAM2AVfk2BH8Mbyyzx00KHns40aiWb4vWvOclfBtVJOX3EmeD9Pj0LN0SPlErGv42hIy0KQxDNOT0ZBOEzv4jawpkg-zudCvLlEVt1FuWP2VRG95DK0yt04jvYwfmbG6JLIePPVuurc6sh9u-hGtNHW7pBqKTkxwcIilOH5th-dZ0MLpXCm5trRgRt3DBOhOq72tp3-9LmuNNXfUj6ZLlOGmlEkXElwEzIJYPZ888WAaALer0Xz2BoWWIGPlrTH-eKyQchGWIRRkS9QIkR12cBUo60_3KmNqKrxAVPxdBOx0gDd-z0TPex1EznK2xn7ipbBOg4LMr--5UsPr6JFVD75A_QwynJuseuUWF2wWwoCehhUifc1zUvygPJr0buDP3p32F-zjpi-S7k1ex-1giiCKtvs-SLeD_n0OAAD9UWKSqjWIw9K_2ieTykFoXErXoyjCBur-h8gyDGjz2ktNoxfcn9Q97g1YiYyQ06sranghXMz-Fw1hVteZ92zkVw5u0l3OK2W9h5WSk8huW9uyPLIP60PUc8uB4t6ZJy6FX4dMhYVYGU3S4aHZIBrxEX_CqNp4xdVGPTUzWCcb1mBtsW5emb95sCFWBhu916Ti4ClNxmDHdcjPJ4zw0h_MavcwEjqC57JjO9x8soxEi4921kaWq6ex9sy7Bx6osX72QAnJV9E6l-xE6jvXCOxvFiFr-a8Ld3TRVN6GJNA0T6rMxLJQv4dzpvYjMC6vhyzueCXE7y9oiZjtr5eh2ZilVvGTbaMx55XgzEphqXmzdWlWr6f9k92cOhtJs7ww0qcB5JfnqiXS3tXrjapXlHh1H-NNLg6-PksG6vhEnMuO6R_kdqmNG4XQL6Eo9CUZYVq6SBcYkaNrl-KToD2AWgNxdLDVaMC_U4yAi8oOVjoh2oI5zsOPZ_AKo8Ht4ZThregeSQUmmyq1DWHuzO1BL4byk7d73EGbcvO9j9b-f1vs1PbjhesjycCvKGHxyqirG9vXHs2WooytFH5sUyXfhJy13DIS97J_AQlXYKtPJQ8J0N4NkwNnv9tmtCNIWbKUrrI6l_aVITSnveEcy6EjTH1l6JOgvqR05k4xkjrkA-w","https://bc.game/i-3uooqy8g-n/","https://1xstavka.ru/?tag=s_1114701m_1341c_[]MS[]null[]brand2[]general[]16319266_d26145_l53197_clickunder","https://www.bet365.com/olp/open-account?affiliate=365_01062843", "https://websoft365.com/ws365.php", "https://websoft365.com/ws365.php", "http://confrontationdrunk.com/tm3rrtqm5?jkgcvk=48&refer=https%3A%2F%2Ffirefaucet.win%2Ffaucet%2F&kw=%5B%22acp%22%2C%22faucet%22%2C%22-%22%2C%22fire%22%2C%22faucet%22%5D&key=cacbce7132a03311bd8899835e5f2a24&scrWidth=1536&scrHeight=864&tz=3&v=21.5.v.1&res=12.31&dev=r&adb=n&adb=n", "https://request-global.czilladx.com/serve/view.php?w=POPUNDER&h=&z=9065fc8de9f16520834&c=607611a828d866e1887&n=fde989885756186823008041a4b3886880448f5d700ed9632c695101cc0e50d5&integrity=eyJrZXkiOiJjZTBkOTRkMjBlYjMwNDA4MWI0YmIwN2VhOTg4ZDBiNTU0MmJjM2UyYWQ2Yjc1YjM0ZTUzOTk5ZTZlZWY2NTBlIiwidGltZXN0YW1wIjoxNjI5MjE4MjAxLjc4MTk0NSwiaWRlbnRpZmllciI6ImRjMGI3ZDc5YmJlMGM4MTI0OTM1NzM0MjM1ZTUyNzBmMTkyNmI2NmIzMzM3ZDU3ZTk0OWMxNGRhYjI5MTQ0ZWIifQ","https://request-global.czilladx.com/serve/view.php?w=POPUNDER&h=&z=9065fc8de9f16520834&c=607611a828d866e1887&n=f4ca5315f21cf2af8324274f597a1e8e0ec0ba6c398d948a9e9ed5b344328874&integrity=eyJrZXkiOiI4ZTMwNjYyYmMyZGI3MWE2MmI2MzQ1MTE0MWZmZGE0ODU5MDgxZGE2Y2M4MTA3NmE3N2RkOTZjNjUzMjQ0NWY5IiwidGltZXN0YW1wIjoxNjI5MjE4OTI3LjA1MTA4NCwiaWRlbnRpZmllciI6ImJiMjY1N2I4M2VjMDdhNDI5YzQyM2MyMjg2YTc3OTUwZTEzNTM2ZTIyYzUwNTkyMTIwZTBiNWRlYWU3OWRjMWYifQ",
				"https://cdn4ads.com/kj.aspx?x=6583778&r=1120218787&d=1606500124&j=1597407272&g=493&p=%21grQoNQIYe21n5iYLJO3aRv3C4bStViA%2BddOuIjEUHDmh2JUIsNO0o1SBI%2F2cbXrWUDwx5xHFMSoLMaMEZneZyVxDYVTfPS7wtdHCutmbgWY%2FMI8NoqDQjqEvaqMpMBCWttpf8pY8yZctAh801nzILLC6pSc5Xr74MB0SzzRo7u3NDzR98u2IQnPiyrKFtuWA5%2BrkdR%2BYwDSFxh0ICwWbVxk040cf6iZvkpeSkF3QpNmYF3H%2F2lnOzGMq1lA3iCoPdn0IzqruGOPt3HMHgpQ3EczKWcojkMoeqZh%2FWj9VK74nN3x%2FjCTa%2FK8KV25xJA6OGjKRgDv7ZwLDWYSxp6G8d2MEtiRqH8S50UJsGHBHUk205Hp%2FdAtWi91MNHodXhRlqXqKDf%2BSKtGtk%2Fo%2FEIvcO92WuOZgoI3REVBpS%2FrDS9TDMpF9d%2BntUCCIkIk%2FQhj41pK2priDlvCtv9KgEBO2E%2BSCOnBNvkki2E7E74%2FroQ0%3D&s=1536,864,1.02,1566.72,881.28,0&v=&m=","https://www.realgfporn.com/videos/mom-shows-her-daughter-how-to-fuck-10048.html?utm_source=adxserve&sub=96454&tags=96454&ad_sub=96454&subid=96454"
				];

massivnoremove = [];

whiteurl = ["earnfree-ltc.xyz", "bitfun.co", "moondoge.co.in", "moondash.co.in", "bonusbitcoin.co", "www.bestchange.com", "moonliteco.in", "earnfree-eth.xyz", "ad-doge.com", "moonbit.co.in", "moonbitcoin.cash", "earnfree-doge.xyz", "earnfree-dash.xyz", "earnfree-bch.xyz", "www.free-litecoin.com", "www.free-ethereum.io", "www.free-dogecoin.com", "www.free-bcash.com", "sky-eth.com", "evexmr.xyz", "evedoge.xyz", "eveltc.xyz", "evebch.xyz", "evetrx.xyz", "evexrp.xyz", "earnbitmoon.club", "coinadster.com", "bigbtc.win", "cryptowin.io", "bigzone.xyz", "faucetcrypto.net", "faucetcrypto.com", "speedcoins.xyz", "888satoshis.com", "cnkfaucet.hostb.pl", "faucetclub.net", "litefaucet.in", "rollbucks.com", "viefaucet.com", "dailyclaim.xyz", "bitsfree.net", "monucet.com", "www.1xbitcoins.com", "neobits.net", "coinfree.info", "www.bestchange.net", "multicoins.net", "firefaucet.win", "simplebits.io", "goldenprice.in", "blackprice.in", "dogemate.com", "ourbitco.in", "usdtfaucet.xyz", "dogeion.xyz", "soonbinance.co.in", "claimfreecoins.io", "soondoge.co.in", "multicrypt.online"]

massivremovef = [
				"luckyfish.io",
				"bitcoincasino.io",
				"amateurbelles.com",
				"datsgirl.com","www.google.com", 
				"rtbme24.com",
				"thebestgame2020.com",
				"llink.site", 
				"eu.dspultra.com",
				"tokenize.exchange","www.bet365.com",
				"log.videocampaign.co","luckyforbet.com","dogemining.biz",
				"www.twitch.tv",
				"cdn4ads.com", "coinverti.com", "s.viicopy.com", "doge-mining.win", "www.metayota.com", "programmeframeworkpractically.com", "alugha.com", "smotrio.ru", "paychat.fuse-cloud.com", "rustream.tv", "join.worldoftanks.ru",  "click-this-special.video", "btwsm.click-this-special.video", "to7nt.click-this-special.video", "steamcommunity.com", "c809z1372.r-cdn.com", "go.pussycreampie.net", "w3.css-validator.org", "6gans.click-this-special.video", "visualwinners.com", "z5fi5.click-this-special.video", "cpaoffers.network", "bxmcb.click-this-special.video", "rt.girls.xyz", "za7fg.click-this-special.video", "98fq8.click-this-special.video", "9oi1c.click-this-special.video", "sgpjb.click-this-special.video", "r.baresi.xyz", "www.mesomedic.es", "people24.info", "casino-4322.ru", "ko.ru", "sendyou123.com", "f.frequentvisitor.com", "live.pushub.net", "f.trafficjunction.com", "newsbest.net", "toptravl.com", "1xbet-740151.top", "paidonlinesites.com", "apps-lon2.cointraffic.io", "capital-future.live", "redirect2719.com", "www.alternativecpmgate.com", "retail-therapy.club", "antig-hra.com", "exnsa.click-this-special.video", "moneyoppor.com", "www.computta.com", "1xstavka.ru", "holofiber.xyz", "www.realtor.com", "l-o-v-e.ru", "buy.jax.network", "fsalfrwdr.com", "porngo.tube", "superblackfriday.deals", "websoft365.com", "coinzilla.com",  "bitcoinad.io", "paychat.fuse-cloud.com", "www.nova-prime.com", "websoft365.com", "cryptexo.xyz","trknex.com", "1xbet-695718.top", "outloginequity.com", 
				"trandingbiz.ru",
				"clickco.net",
				"miningcompany.ltd",
				"pornhubsurvey.com",
				"coothupu.net", "salmon.games", "wilfulpessimistic.com", "x-1xbet-11831.world", "streamtv.by", "trovabious.pro", "alfik-fik.com", "app.simplefx.com", "minersgarden.com", "x-1xbet-53596.world", "bestanimegame.com", "storecompletely-thenewestfile.best", "districtbaloneywhiskers.com", "happy-porn.com", "app.simplefx.com", "bestanimegame.com", "tilltucked.com", "x-1xbet-53596.world", "s.viifan.com", "tentmess.com", "streamtv.by", "x-1xbet-16640.world", 	"www.groupian.io","litecoinads.com", "x-1xbet-02480.world", "deepdice.bet", "worldoftanks.ru", "streambucks.io", "scryptcube.com", "www.highrevenuecpm.com", "x-1xbet-67578.world", "btc-sites.com", "apptastic-mobi.g2afse.com", "www.ostlon.com", "installhighly-therenewedfile.best", "s.viifax.com", "x-1xbet-94086.world", "topepisode.com", "cartoonsinfo.com", "axtrader.com", "travelsecurityline.eu", "pokeramazing.com", "cryptonex.xyz", "cryptofans.ru", "www.funnelleadsystem.com", "x-1xbet-78144.world", "startvideo.life", "s.viitok.com", "www.adanaatikhaber.com", "ru.warface.com", "www.tubezaur.com", "itrk.itrkinc.com", "www.my1tube.com", "p.1ts06.top", "www.monkamovies.com", "derevya2sh8ka09.com", "www.porngur.com", "www.ipuss.tv", "arrano.network", "www.youhodler.com", "cosmeticsgenerosity.com", "creative.alxbgo.com", "nyniglinu.pro", "bullx.io", "date-till-late.us","www.myemailtracking.com" , "bet1-x92354.com", "midpopedge.com", "www.vipvixen.ru", "splittingpick.com", "bet1-x81025.com", "a.leon.ru", "atani.com", "offer.alibaba.com", "exo.xvideass.top", "musict.ir", "www.musict.ir", "cardinalimprovementscartrige.com", "bet1-x58326.com", "bet1-x62670.com", "bet1-x95895.com", "cas-fast-39.com", "x1.x-casiinox-game.com", "warning.rt.ru", "dnevnienovosti.ru", "www.myemailtracking.com", "bet1-x92354.com", "midpopedge.com", "www.vipvixen.ru", "splittingpick.com", "bet1-x81025.com", "a.leon.ru", "edurustoday.ru","mbest.aliexpress.ru", "bet1-x72792.com", "startvideo.fun", "fadsimz.com", "accounts.binancezh.pro", "anyporn.org", "cos.flacon-magazine.com", "searchsecurer.com","bet1-x10847.com", "9k8f9.bemobtrcks.com", "ali2express.com", "kts.visitstats.com", "getdoge.io", "teamsperilous.com", "41upk.bemobtrk.com", "41upk.bemobpath.com", "www.leomax.ru", "gooblesdd.com", "lofepsypti.pro", "dschat.club", "www.crucerosmediterraneo.travel", "login.bitlocity.io", "bet1-x28746.com", "lp.crypt.casino", "bet1-x20027.com", "liteworld.live", "g5xq2z.mighttrack.com", "apps.apple.com", "leonodikeu9sj10.com", "bitgenerator.online", "www.baby.ru", "globalcrypto.exchange", "purplemining.ltd", "bitstarz1.eu","push.aarth.net", "landing.hentaiheroes.com", "www.adslyoigo.net", "news.gnezdo.ru", "stakecube.net", "www.mgid.com", "bet1-x22216.com", "99airdrops.com","accounts.binance.com", "rt.bongacams13.com","srsly.ru", "www.vokrug.tv", "bet1-x62651.com", "www.catala-reinon.es", "www.xm.com", "beklefkiom.com", "euphe-gun.com", "crawlarchive1120.com", "theonlygames.com", "spbinvestment.ru", "bit-sitess.com", "crsed.net", "bet1-x31759.com", "www.purplemining.ltd","artisany.net", "bet1-x78464.com", "cryptotabbrowser.com", "newsurveyrus.typeform.com", "cryptoware.biz", "rsafrwd.com", "adverdirect.com", "fb.ru", "www.youtube.com", "kto-chto-gde.ru", "hyip.money", "p.1ts18.top", "code4us.com", "prizebox.org", "inbound.trilema.com", "epicmotoring.com","pegloang.com", "www.aaxpro.com", "belaya2shu1ba1.com", "rabota-doma.org", "cryptocoinsad.com","bet1-x24022.com", "mediasama.com", "see.xxx", "www.toprevenuecpmnetwork.com", "adbtc.io", "twndo77864.com", "ru.4game.com", "united-family.org", "cretgate.com", "cointools.info", "catermich.pro", "r.rips.icu", "pinednews.ru", "tq.adventurefeeds.com", "bet1-x99511.com", "link.securewebservices.ch", "www.gaming-adult.com","best.aliexpress.ru", "hq-sex-tube.com", "ru.leon9c7as1no.com", "www.bestrevenuenetwork.com", "www.pornofrant.com", "ws.exchange", "best2020-games-web1.com", "starcontent.monster", "grtposh.com", "www.cuntempire.com", "apps6.cointraffic.io", "mellowads.com", "todaybrings.ru", "unicom24.ru", "rt.pornhubpremium.com", "www.myincomeclub.com", "nexo.io", "m2mdonations2.com", "ruvi.tv", "betfury.io", "www.watermine.io", "bet1-x00495.com", "track.adsplay.in", "eu.4game.com", "disturbedaccruesurfaces.com", "rtyznd.com", "gilc.ru", "ivnx.ru", "btb88.com", "vidox.net", "smartme.cash","cuntwars.com", "installlatest-theintenselyfile.best", "yougotacheck.com", "x-1xbet-74927.world", "lywyjashu.pro", "stythewagro.pro", "kotikinar2ko8tiki09.com", "pushwelcome.com", "www.elegantthemes.com", "prpops.com", "x-1xbet-28171.world", "rzypgzojdan.com", "rt.bongacams20.com", "best.aliexpress.com", "s.viitrn.com", "aetejxolo.com", "dollarsurvey.org", "promo.stormgain.com", "asxemfnwbrmpdp.com", "zwnxzckwihg.com", "freebitco.in", "nopapmyzyjiqnc.com", "zdcuivnen.com", "adsbitcoin.io"
				];

function set_save_tab(){
	if (save_id_tab!=-1){
		chrome.tabs.query( { }, 
				function(tabs) { 
					var bool_pyt = true;
					for(var i = 0; i < tabs.length; i++){
						
						
						if (tabs[i].id==save_id_tab){
							bool_pyt = false;
							chrome.tabs.update(save_id_tab , {selected: true});
						}
						
					}
					if (bool_pyt){
						save_id_tab = -1;
						console.log(save_id_tab);
					}
					
					
				}
		 );
	}
	return true;
}

function checkurlTabsLow(){
	
	
	
	chrome.tabs.query( { }, 
			function(tabs) { 
				//for(var i = 0; i < Programms.length; i++){
					
				var active_page_id = -1;
				var url_active = null;
				var compl = '';
				var complete_page_id = -1;
					
				for(var i = 0; i < tabs.length; i++){
					
					//console.log('htest  '+tabs[i].status);
					//console.log('htest  '+(tabs[i].url).split('/')[2]);
					
					
						//complete
					//options.html (tabs[i].url).split('/')[3]
					
					//console.log("boolpip", (tabs[i].url).split('/')[2]);
				
					
					
					if (tabs[i].active==true) {
						active_page_id = tabs[i].id;
						url_active = (tabs[i].url).split('/')[3];
						compl = tabs[i].status;
					}
					
					if (tabs[i].active==false && tabs[i].status == 'complete' && (tabs[i].url).split('/')[3]!='options.html') complete_page_id = tabs[i].id;
					
				}
				
				
				
				
				if (active_page_id!=-1 && url_active!='options.html' && compl!='complete' && complete_page_id!=-1 && boolactivechange){
					chrome.tabs.update(complete_page_id , {selected: true});
				}
				
				if (active_page_id!=-1 && url_active=='options.html' && complete_page_id!=-1){
					chrome.tabs.update(complete_page_id , {selected: true});
				}
				
				
			 }
	 );
	
	
	
	return true;
}


function checkurlTabs(){
	
	var boolpip = true;
	
	chrome.tabs.query( { }, 
			function(tabs) { 
				//for(var i = 0; i < Programms.length; i++){
					
				var active_page_id = -1;
				var url_active = null;
				var compl = '';
				var complete_page_id = -1;
					
				for(var i = 0; i < tabs.length; i++){
					
					
					
						//complete
					//options.html (tabs[i].url).split('/')[3]
					
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
						if (Programms[i].name == "ClaimFreeBTC-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeETH-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeDOGE-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeLTC-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeBCH-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeDASH-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeTRX-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeDGB-FaucetPay"){
							Programms[i].boolStartingDOGE = false;
						}
						if (Programms[i].name == "ClaimFreeUSDT-FaucetPay"){
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
var timerIdLow = null;
var timerId = null;

function addtimerforcheckurl(){
	
	if (timerIdLow!=null){
		clearTimeout(timerIdLow);
	}
	if (boolactivechangeHigh) {
		if (boolactivechange){

			timerIdLow = setInterval(function() {
							checkurlTabsLow();
						}, 2000);

		}else{
			timerIdLow = setInterval(function() {
							checkurlTabsLow();
						}, 20000);
		}
	}
}
addtimerforcheckurl();


function startfunction(){
	
	if (timerId!=null){
		clearTimeout(timerId);
	}
	if (boolStarting==false) return;
	// начать повторы с интервалом 2 сек
	timerId = setInterval(function() {
		
		
		
		if (boolStarting){	//старт кнопкой
			getCountTabs();
			if (boolcloseTabs) {checkurlTabs();};
			set_save_tab();
			op++;
			if(boolTimerUnBlock){ unBlockTimer ++;}
			for(var i = 0; i < Programms.length; i++){
				
				if (Programms[i].alreadytrue == true && Programms[i].boolStartingDOGE == true){
					Programms[i].boolStartingDOGE = false;
					Programms[i].startintervalDOGE = Programms[i].intervalDOGE - 120;
				}
				
				if(!Programms[i].boolStartingDOGE)	{Programms[i].startintervalDOGE++;}else{
				if(boolTimerUnBlock){
					
					if(unBlockTimer > Programms[i].boolingTime){
							Programms[i].boolStartingDOGE = false;
							block = false;
							unBlockTimer = 0;
							boolTimerUnBlock = false;
						}
				};}
				
				if ((Programms[i].startintervalDOGE / Programms[i].intervalDOGE) > 1 && Programms[i].skipblock && Programms[i].userBool){
					Programms[i].start(i); Programms[i].startintervalDOGE = 0;
				}
				
				
				if((Programms[i].startintervalDOGE / Programms[i].intervalDOGE) > 1 && !block && Programms[i].userBool && Programms[i].skipblock==false) {
					Programms[i].start(i); Programms[i].startintervalDOGE = 0;
					unBlockTimer = 0;			
					boolTimerUnBlock = true;
					
				}
			}
		}
	}, 1000);

}


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
	if (boolcloseTabs){
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
	}
	
	
	if(request=='setboolactivechangeHightrue'){
		boolactivechangeHigh = true;
		addtimerforcheckurl();
	};
	if(request=='setboolactivechangeHighfalse'){
		boolactivechangeHigh = false;
		addtimerforcheckurl();
	};
	if(request=='getboolactivechangeHigh'){
		f_callback(boolactivechangeHigh);
	};
	if(request=='setboolactivechangetrue'){
		boolactivechange = true;
		addtimerforcheckurl();
	};
	if(request=='setboolactivechangefalse'){
		boolactivechange = false;
		addtimerforcheckurl();
	};
	if(request=='getboolactivechange'){
		f_callback(boolactivechange);
	};
	
	if(request=='setboolcloseTabstrue'){
		boolcloseTabs = true;
		//addtimerforcheckurl();
	};
	if(request=='setboolcloseTabsfalse'){
		boolcloseTabs = false;
		//addtimerforcheckurl();
	};
	if(request=='getboolcloseTabs'){
		f_callback(boolcloseTabs);
	};
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
	if(request=='setBoolStartingtrue'){
		boolStarting = true;
		startfunction();
	};
	if(request=='setBoolStartingfalse'){
		boolStarting = false;
		startfunction();
	};
	if(request=='setBoolAllFalse'){
		for(var i = 0; i < Programms.length; i++){
			Programms[i].boolStart = false; 
		}
	};
	
	if(request=='setclearButt1'){
		for(var i = 0; i < Programms.length; i++){
			if (Programms[i].number==1){
				Programms[i].boolStart = true; 
			}else{
				Programms[i].boolStart = false; 
			}
		}
	};
	
	
	
	if(request=='clearinfo'){
		massivnoremove = [];
	};
	
	
	
	if (request.message == 'preload') {
		if (boolcloseTabs) {
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



chrome.commands.onCommand.addListener( function(command) {
    if(command === "save_page"){
		console.log('tyt_test_GH');
		chrome.tabs.query( { }, 
			function(tabs) { 
				for(var i = 0; i < tabs.length; i++){
					if(tabs[i].active){
						if (save_id_tab==tabs[i].id){
							save_id_tab = -1;
						}else{
							save_id_tab = tabs[i].id;
						}
						console.log(save_id_tab);
						
					}
				}
			});
	
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































