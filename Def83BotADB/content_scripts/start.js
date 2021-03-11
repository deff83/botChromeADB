var Programm = function (name, intervalDOGE, startintervalDOGE, boolingTime, boolStartingDOGE, startf, delited, multUSD, boolStart, skipblock){
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
massivTabid.push(tabidClaimFreeETH);
massivTabid.push(tabidClaimFreeDOGE);
massivTabid.push(tabidClaimFreeLTC);
massivTabid.push(tabidClaimFreeBCH);
massivTabid.push(tabidClaimFreeDASH);
massivTabid.push(tabidClaimFreeTRX);
massivTabid.push(tabidClaimFreeDGB);
massivTabid.push(tabidClaimFreeUSDT);


massivTabid.push(tabidEveXMR);
massivTabid.push(tabidEveDOGGE);
massivTabid.push(tabidEveLTC);
massivTabid.push(tabidEveBCH);
massivTabid.push(tabidEveTRX);
massivTabid.push(tabidEveXRP);

//-----------------------------------------Programm start--------------------------------------------//ф


//Programms.push(new Programm('LTCfree', 305, -5+305, 320, false, moonLTCfree, 1, 98));
//Programms.push(new Programm('ETHfree', 305, -5+305, 320, false, moonETHfree, 1, 215));
// Programms.push(new Programm('DOGEfree', 305, -5+305, 320, false, moonDOGEfree, 1, 0.00287));
//Programms.push(new Programm('XRPfree', 305, -5+305, 320, false, moonXRPfree, 1, 0.305));
//Programms.push(new Programm('BTCfree', 305, -5+305, 320, false, moonBTCfree, 1, 10000));

Programms.push(new Programm('changeBest.com', 3275, -10+3275, 320, false, moonBestcom, 1, 10000, true, false));



Programms.push(new Programm('freeLTC', 3605, -100+3605, 320, false, moonfreeLTC, 1, 98, true, false));
Programms.push(new Programm('freeETH', 3605, -120+3605, 320, false, moonfreeETH, 1, 215, true, false));
//Programms.push(new Programm('freeBCH', 3605, -140+3605, 320, false, moonfreeBCH, 1, 324));
//Programms.push(new Programm('freeDOGE', 3605, -150+3605, 320, false, moonfreeDOGE, 1, 0.00287));
//Programms.push(new Programm('freeETHxyz', 3605, -300+3605, 320, false, moonfreeETHxyz, 1, 215));
//Programms.push(new Programm('freeDGBxyz', 3605, -320+3605, 320, false, moonfreeDGBxyz, 1, 0.0098));
//Programms.push(new Programm('freeZECxyz', 3605, -340+3605, 320, false, moonfreeZECxyz, 1, 67));
//Programms.push(new Programm('freeBTXxyz', 3605, -360+3605, 320, false, moonfreeBTXxyz, 1, 0.00164));
//Programms.push(new Programm('freeBTCxyz', 3605, -380+3605, 320, false, moonfreeBTCxyz, 1, 10000));


Programms.push(new Programm('EarnfreeLTC', 3605, -0+3605, 320, false, moonEarnfreeLTC, 1, 98, true, false));
Programms.push(new Programm('EarnfreeETH', 3605, -5+3605, 320, false, moonEarnfreeETH, 1, 215, true, false));
Programms.push(new Programm('EarnfreeDOGE', 3605, -5+3605, 320, false, moonEarnfreeDOGE, 1, 0.00287, true, false));	
Programms.push(new Programm('EarnfreeDASH', 3605, -5+3605, 320, false, moonEarnfreeDASH, 1, 106, true, false));

//Programms.push(new Programm('EarnfreeETC', 3605, -5+3605, 320, false, moonEarnfreeETC, 1, 6.10));
//Programms.push(new Programm('EarnfreeZEC', 3605, -5+3605, 320, false, moonEarnfreeZEC, 1, 57));

Programms.push(new Programm('EarnfreeETHSky', 3605, -5+3605, 320, false, moonEarnfreeETHSky, 1, 215, true, false));
Programms.push(new Programm('EarnfreeBCH', 3605, -5+3605, 320, false, moonEarnfreeBCH, 1, 324, true, false));

// Programms.push(new Programm('DOGEfaucet', 14405, -5+14405, 320, false, moonDOGEfaucet, 1, 0.00287));	//return timer
// Programms.push(new Programm('DASHfaucet', 14405, -5+14405, 320, false, moonDASHfaucet, 1, 106));	//return timer
// Programms.push(new Programm('LTCfaucet', 14405, -5+14405, 320, false, moonLTCfaucet, 1, 98));	//return timer
// Programms.push(new Programm('ETHfaucet', 14405, -5+14405, 320, false, moonETHfaucet, 1, 215));	//return timer
// Programms.push(new Programm('BLKfaucet', 14405, -5+14405, 320, false, moonBLKfaucet, 1, 0.063));	//return timer
// Programms.push(new Programm('DGBfaucet', 14405, -5+14405, 320, false, moonDGBfaucet, 1, 0.0098));	//return timer
// Programms.push(new Programm('PPCfaucet', 14405, -5+14405, 320, false, moonPPCfaucet, 1, 0.49));	//return timer
// Programms.push(new Programm('POTfaucet', 14405, -5+14405, 320, false, moonPOTfaucet, 1, 0.0079));	//return timer
// Programms.push(new Programm('TRXfaucet', 14405, -5+14405, 320, false, moonTRXfaucet, 1, 0.02));	//return timer
// Programms.push(new Programm('XMRfaucet', 14405, -5+14405, 320, false, moonXMRfaucet, 1, 91));	//return timer
// Programms.push(new Programm('ZECfaucet', 14405, -5+14405, 320, false, moonZECfaucet, 1, 57));	//return timer
// Programms.push(new Programm('HourlyAds', 3605, -5+3605, 320, false, moonHourlyAds, 1, 10000));	//return timer
// Programms.push(new Programm('Freeb.tc', 1805, -5+1805, 320, false, moonFreeBTCW, 1, 10000));	//return timer
// Programms.push(new Programm('BitFaucet', 1805, -5+1805, 320, false, moonBitFaucet, 1, 10000));


Programms.push(new Programm('ClaimFreeBTC-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeBTC, 100000000, 10000, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeETH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeETH, 100000000, 215, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeDOGE-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeDOGE, 100000000, 0.00287, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeLTC-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeLTC, 100000000, 98, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeBCH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeBCH, 100000000, 324, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeDASH-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeDASH, 100000000, 106, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeTRX-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeTRX, 100000000, 0.02, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeDGB-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeDGB, 100000000, 0, true, false));	//MAX CLAIM
Programms.push(new Programm('ClaimFreeUSDT-FaucetPay', 1000, -5+1000, 360, false, moonClaimFreeUSDT, 100000000, 1, true, false));	//MAX CLAIM



Programms.push(new Programm('EveXMR', 3605, -5+3605, 320, false, moonEveXMR, 1, 91, true, false));
Programms.push(new Programm('EveDOGGE', 3605, -5+3605, 320, false, moonEveDOGGE, 1, 0.00287, true, false));
Programms.push(new Programm('EveLTC', 3605, -5+3605, 320, false, moonEveLTC, 1, 98, true, false));
Programms.push(new Programm('EveBCH', 3605, -5+3605, 320, false, moonEveBCH, 1, 324, true, false));
Programms.push(new Programm('EveTRX', 3605, -5+3605, 320, false, moonEveTRX, 1, 0.02, true, false));
Programms.push(new Programm('EveXRP', 3605, -5+3605, 320, false, moonEveXRP, 1, 0.305, true, false));


Programms.push(new Programm('moonDOGE', 1805, -20+1805, 320, false, moonDOGE, 1, 0.00287, false, false));
Programms.push(new Programm('moonDASH', 1805, -40+1805, 320, false, moonDASH, 1, 106, false, false));
Programms.push(new Programm('moonLTC', 1805, -60+1805, 320, false, moonLTC, 1, 98, false, false));
Programms.push(new Programm('moonBTC', 1805, -80+1805, 320, false, moonBTC, 1, 10000, false, false)) ;
Programms.push(new Programm('moonBCH', 1805, -80+1805, 320, false, moonBCH, 1, 324, false, false)) ;
Programms.push(new Programm('BonusBitcoin', 905, -15+905, 320, false, moonBonusBitcoin, 100000000, 0, false, false));
Programms.push(new Programm('BitFun', 3675, -5+3675, 320, false, moonBitFun, 100000000, 0, false, false));


massivremove = ["https://www.bitcoincasino.io/?stag=5483_5fbe7780e4c32ec18cfa0e4d", 
				"https://luckyfish.io/?c=getstarted","https://binance-charity.co/", "https://www.newsofcd.com/", "https://tfbitcoin.com/", "https://luckyfish.io/?c=getstarted","https://www.bitcoincasino.io/?stag=5483_5fe65eab9f965850e0d12a6b", "https://refpakrtsb.top/L?tag=d_755089m_18639c_c04dbfb7&r=user%2Fregistration.php&pb=2fd0f6616e444e95be6305e0fb3ea477&click_id=01b3973b-3bdd-11eb-b24e-cd2a8c8feb24", "https://f9s6x9j7.stackpathcdn.com/adserv.html?idzone=3483349&sub=6380706",

				"https://refpakrtsb.top/L?tag=d_755089m_18639c_c04dbfb7&r=user%2Fregistration.php&pb=2fd0f6616e444e95be6305e0fb3ea477&click_id=98875421-3ca8-11eb-801e-47e1a95ab5ff"	,

				"https://kts.visitstats.com/in/935/?katds_ep=jgAebSg1IfFEKBop1QFRX-SeToWo05lvjIXO8nk3DycJx1hEm1qJ7vrxJD-dXDq0dzgnFEeapI8bS2UKdHt_osj3l447ZyVt5HgGtqc6zcBovDysSzX2WCBrqazwwyYE1zAbeMzSd1fr_ijlXGnjFiQ60bX8aKyrVifx1zvxd00oWNyCd_T8CFZqG4RHerg7nwi2nBj_gUuGd_qYklwCQWvl1gZIBxX-yqnYrEMRaRS03VNtCEU6LwV6uBaEYECbQiPy4aFrdzlYv1lGl_4wfY0qdEfE7ZuTU79OFZGOjqjazVu9UpOuEPJmHhvFzDvnHV-rO_mB1CGlu78kBjTonU_zsN8_yNi2lz6L_Mr_sIeUq-78t-iEFGdRMXbGF9WBJ3lXIIe7coQKXtE3AjELVvdJqfPeHr4IAA3phhgBx3LLVSou42xZ2Y7nNQ7uM-U3EqDe_kV-CYBD4sd-55g-QMg2Hk4eqjeO1pqzO88U3N8a15zTJggRrppbt85iRcM54M0kJD1XKCcKLs-30gw-LcM0VILOXZgkTSn3nBX_WuuSv1ZcwO-iwA-fW3Mg1FNQZWlzzMBmiLqC8jKh_9UHfXRd-BR6CxmKZGTV0C4DNS4cxq2aAicqohY8l-tQaH-XaRxnAq3l36HfxLO3u-QZNFiyTd_AV1s4o-5byFVeZ_qPTphqZeIvYQCxXNyY4Isb9FRkOBOAx8dkftpP-BlYM8Bh3jv9ENLlCLwebqPlswH7PAdJRTtmo8aFaJ1h0XcX8E_nrKdNnSKj6_j53hZA2pFAredeAuvdf7J6DZ17XATtiFRPImGPzoGCIHT8jW9_EhDBSmx4pak_88_u88OI5wm2pjUvadwK1ow7SAbjNSIWkmsJj9i7uZMZ6sXuPd9B0kBa4SfMFZREd9UrSlt4IE0JyBK3537Zqcw9o9pmaHDH2qzu-RshiRxUHzdOW4FVYDhC0vmvdhIuY9-D7m6AHp7mBbbIgOFs0LdBr2UAeziTZWNicRYbYeoZ-xEbyW5IpgvNqEBep9vQmoKxl4fo61KD2qanHap0L34co3dJuX-so6s4eBoT54cJ7HLJcJf747DuGCTyYY2Bm316TgiLQOHAw2PXJf2O8lhctu16pmxZDs5o3u4Kki4Ze0oxOJ29BmIg01WElan2mM5xP4j695EIiNIHZP2kM-YG0H2NjuWtsw7QN83a6OkbSxDk5jMXVxgJCwJm17yleCbDANMpUD6a4N5j6En5qeopFGUceuD-ltMz4YaNHfXhGu5gsRxtu51k-47xsN_ktM_taFkLiEPDBSRP22NE0vQmJwbNK4t8m4_nzq2S1K9RVgIvcsKVLOmywSICGNaqSOmfeBNr98ihHCuymDXwz4XegJHv5DNCf1tEdh46stI5ESJQhNjC48xsEzG_diaILHLUW70nQd5d5-rtRQl33ibnvwmP4Q_JgdrUZ-QUJnBXRlSi3sVutFcht8tDJFKiUoB1RlwmAKgAF0Zx-l8nmEikQoGpg6ExFVH7y_dXk77YR_pd3oEeeR1IJ6UBhQd0ytgW8pjmv5EsWRU9s5asyQtGmwr7bkok4kIue695Dd07gxPyo0-fjwW8g1KdNWO69NoOIs-G_CYrHILLE_BQAgXTYQeV1dp56n0Nur2ZgfOqGJoCSJprRuhtBWxyOoOTWekYyf6eY5zykmey_qZgj8Er8zyVD63ifrvyVNHYsd2Z4GBpOSH06xRC5b1yWefdsbe-H1eFXIJrWNsXg4lGCA3S20d23njrf9erwknBfo-kermftOqciMtu3HlwQgVN7cJu88XBD_t71tojDNxym0-KiY7Yce2PWNftGz1gsD8L8v2O1OVHOdaCi25kv89ejdifkC0xaTq2mr3A_1eMxta66uxu8M2p3Po7VFTj7tYgUda1xTmZfisEsQ2SOUXmWHZrWVTJDX2x5rRcWoRHhtVoER4F18ANqjV7PdLeJ7R_RlqFoYU2v5bDKYI7Wn2ea_ACTdooDlQxk9ObFoeH5agq7BkvdHZbbLh3i5_u59zw_7UDXqFopXrkqgYS5v0ObXNHymHn3uBaTsbGEmk2OkWhkVwlJ5jaZ68dKXWLAFFCBYzPUFU4rv_aQW7wCL4zd90Te9IG3o5mlx4RkE1tMdZMT9sm9p8BC_DvB93fC704iXSDZozda1EDSnt5MjKI6dg0hZ7pu0QV2tjMhOyvNRZ9_a3IABBkDduKS6qktltlR_u-d9M5JcDafqX6v66nzMNnoiJ2gbx6soiMQrZp71B3wxMg-ebjIGNze17gaoesYAMftGwpFuH0QMmbHpvi1RrZtyPrdbcallftH3gLYUzOdAfQMR-xx7znyAwzSO1BF2TQFWm_fKqEI8TzcrT53KpSnRJ3lIacuT3w-SZ0Gss7TPK8y-UK5_b4OGYzFuX6q0KetS0fKxjKTIDwK0kq0Jc5taFv_ed5OX0wiAHWruFODMi9hhIJ9rl6w-2MvovTdL91Wp4Iu4o21BnwH3gX9y0-PuAgGN9cuon2gyK6Uj-g58mP2jmZo4zh7VbvzKIUVKO81jb6E1xnmcG5FioIEWVAGESqgPwdE0hNK8C0kvWwFRuumUKvOkeQEnS8puZDt2f1o1CLVDak0M9n1FEHBF9R5XAwGrnq_tQtMWEo3OZLMVzMLNDzuX7_MabtOCgrgHdD_vnokYDY7GRbb08832W99ACaJ_6OHZs9b9JptyRC-43dCFPuvR7HzfOpdJS81iEd4Zu2DHIBC0pqIzOq9PkkW9yk6Ba_03_y2Qlhreui1ilIUKfdRjNZcJUuC7JiSxetOPPl2cRkYwJyBExKwd-yW-1z4M_KEZ8X_5vi8CXEwBwRt58Eqjxrj-MrnJzSPg_OeaW8UyNAQWq8xuAcV-NMg2bmOLwtIBBlwWakT1rgLaocDqlhTOYxIJO7yN2tR2BXyTfHk76ZHTk3CNaHDtrpNd3BA5rr2dP8ONZsr55QWCDQ8xSCvBcNPNRBG_X3qfrYHoivGjKhMp3tBY3_YtnjwPpv1T8WifJn3lnk_gnVwyuVcVRgasZ2rBFMi4JLA4fBI6ouGOB8SKuHdYSRJegzyGG3baHNGFO92H4-m4bQzu3aD-gBQRBCo7PARemljxuKWgl8ywQA8ajofyvONGqJ2n7PYAquOqpJC-sGr7AeIfStO0p9qgdzDU66GIbAQoQ8rykwh4I5VB4Zb-kKGSEvWxOery5SpBYjBxVpI2Do34A_uYmORQM8HOH_7pfbivtbTmWY3MjqZoNjM-YA4SpFRPUX5thtvihMMAISTqQJne3waugCC6G3vTI1qpL8WK5hceMayrrOHLB_i0DxKk788V77RTmOipOZQU6H2o1qEJFKW4RAK7GKyuWR7EqLJNUCsIlAcUXjXChSkZZSk02cX5InXqbeJY_fj2sQ7FZ2QAlcc-VCOdSCqpQGNqtb4W4Z9J1Emtkck6uPVxiw-433Tr6dE6o1PYQlW_bUXdTVfvbM0Z8gVkPPyBjRkZ_eDI3dsnsvziaRWNx_Ph4w0B6PUMa9zujLnwYS8no7lrLIQOBnvNh2J-YsB0fQSiqzpfgrll9zuyyO9NYCX-Uil7jpidjPapQeiSi0tS-lqMdbsLHcc1ccrvrKF0eUFVqmuH3sFmgrs5RJe97QM7v3kMH5vX_Vp5eU7PXdVuMyMZCpN07mOHay2D92koaJMcI-iR7x0th8WMxy5iYivkEA0pX1teKZ208WXd0ydZmwNuKcjf4-LFyDfrOXPKvYcNUyh2yc_aH2Prq1jvbC75nKREnfh2ZOFlXSiq86rgVmNQ5UXk1zKb_p9btOd0NvZIheBhDnMLsWrbJj5D5Cwf8GG2W6peui7TE5vxjgYSHU2LlYLtOiFOHDVCDhUB1TM5mvxgdlXc0zwyVD67BJ74nzu_aSF1jxOYpP5mR-O8vB50Y1XUZ1g_Q16qb0FzxF_NWJxx_DTVtHw8ZXpCoSRK1ujQKkyl9BMt-0UF3Qwc2gyxzG7O-M0h5NzHe9q17KIM_XNi7E711nZyo6m5c1AXH8qt00ZQB6IC88BpnyfrGZZ7BbMVUJFVluboBRBQ20qer3qDirEmZQDYGWKLD-OIvDhRnyyVIJf57UuMO3ltyWimQh6GhTKBRxYjRLk-SYHoWPvsKvLGJFY54uyFEzqht4NaHq6B_90FCfaMNuQPbMoPRZSft-peFqSxrJsI_Gj7dqHZIz4fzMDpnV5wX88YwLYCsq5XEpv4Jh26_ZClIheKNC9WMqKB9LN2P7YUFRzSkh544bAM2AVfk2BH8Mbyyzx00KHns40aiWb4vWvOclfBtVJOX3EmeD9Pj0LN0SPlErGv42hIy0KQxDNOT0ZBOEzv4jawpkg-zudCvLlEVt1FuWP2VRG95DK0yt04jvYwfmbG6JLIePPVuurc6sh9u-hGtNHW7pBqKTkxwcIilOH5th-dZ0MLpXCm5trRgRt3DBOhOq72tp3-9LmuNNXfUj6ZLlOGmlEkXElwEzIJYPZ888WAaALer0Xz2BoWWIGPlrTH-eKyQchGWIRRkS9QIkR12cBUo60_3KmNqKrxAVPxdBOx0gDd-z0TPex1EznK2xn7ipbBOg4LMr--5UsPr6JFVD75A_QwynJuseuUWF2wWwoCehhUifc1zUvygPJr0buDP3p32F-zjpi-S7k1ex-1giiCKtvs-SLeD_n0OAAD9UWKSqjWIw9K_2ieTykFoXErXoyjCBur-h8gyDGjz2ktNoxfcn9Q97g1YiYyQ06sranghXMz-Fw1hVteZ92zkVw5u0l3OK2W9h5WSk8huW9uyPLIP60PUc8uB4t6ZJy6FX4dMhYVYGU3S4aHZIBrxEX_CqNp4xdVGPTUzWCcb1mBtsW5emb95sCFWBhu916Ti4ClNxmDHdcjPJ4zw0h_MavcwEjqC57JjO9x8soxEi4921kaWq6ex9sy7Bx6osX72QAnJV9E6l-xE6jvXCOxvFiFr-a8Ld3TRVN6GJNA0T6rMxLJQv4dzpvYjMC6vhyzueCXE7y9oiZjtr5eh2ZilVvGTbaMx55XgzEphqXmzdWlWr6f9k92cOhtJs7ww0qcB5JfnqiXS3tXrjapXlHh1H-NNLg6-PksG6vhEnMuO6R_kdqmNG4XQL6Eo9CUZYVq6SBcYkaNrl-KToD2AWgNxdLDVaMC_U4yAi8oOVjoh2oI5zsOPZ_AKo8Ht4ZThregeSQUmmyq1DWHuzO1BL4byk7d73EGbcvO9j9b-f1vs1PbjhesjycCvKGHxyqirG9vXHs2WooytFH5sUyXfhJy13DIS97J_AQlXYKtPJQ8J0N4NkwNnv9tmtCNIWbKUrrI6l_aVITSnveEcy6EjTH1l6JOgvqR05k4xkjrkA-w",
				"https://cdn4ads.com/kj.aspx?x=6583778&r=1120218787&d=1606500124&j=1597407272&g=493&p=%21grQoNQIYe21n5iYLJO3aRv3C4bStViA%2BddOuIjEUHDmh2JUIsNO0o1SBI%2F2cbXrWUDwx5xHFMSoLMaMEZneZyVxDYVTfPS7wtdHCutmbgWY%2FMI8NoqDQjqEvaqMpMBCWttpf8pY8yZctAh801nzILLC6pSc5Xr74MB0SzzRo7u3NDzR98u2IQnPiyrKFtuWA5%2BrkdR%2BYwDSFxh0ICwWbVxk040cf6iZvkpeSkF3QpNmYF3H%2F2lnOzGMq1lA3iCoPdn0IzqruGOPt3HMHgpQ3EczKWcojkMoeqZh%2FWj9VK74nN3x%2FjCTa%2FK8KV25xJA6OGjKRgDv7ZwLDWYSxp6G8d2MEtiRqH8S50UJsGHBHUk205Hp%2FdAtWi91MNHodXhRlqXqKDf%2BSKtGtk%2Fo%2FEIvcO92WuOZgoI3REVBpS%2FrDS9TDMpF9d%2BntUCCIkIk%2FQhj41pK2priDlvCtv9KgEBO2E%2BSCOnBNvkki2E7E74%2FroQ0%3D&s=1536,864,1.02,1566.72,881.28,0&v=&m="
				];

massivnoremove = [];

whiteurl = ["earnfree-ltc.xyz", "bitfun.co", "moondoge.co.in", "moondash.co.in", "bonusbitcoin.co", "www.bestchange.com", "moonliteco.in", "earnfree-eth.xyz", "ad-doge.com", "moonbit.co.in", "moonbitcoin.cash", "earnfree-doge.xyz", "earnfree-dash.xyz", "earnfree-bch.xyz", "www.free-litecoin.com", "www.free-ethereum.io", "www.free-dogecoin.com", "www.free-bcash.com", "sky-eth.com", "evexmr.xyz", "evedoge.xyz", "eveltc.xyz", "evebch.xyz", "evetrx.xyz", "evexrp.xyz"]

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
				"coothupu.net", "salmon.games", "wilfulpessimistic.com", "x-1xbet-11831.world", "streamtv.by", "trovabious.pro", "alfik-fik.com", "app.simplefx.com", "minersgarden.com", "x-1xbet-53596.world", "bestanimegame.com", "storecompletely-thenewestfile.best", "districtbaloneywhiskers.com", "happy-porn.com", "app.simplefx.com", "bestanimegame.com", "tilltucked.com", "x-1xbet-53596.world", "s.viifan.com", "tentmess.com", "streamtv.by", "x-1xbet-16640.world", 	"www.groupian.io","litecoinads.com", "x-1xbet-02480.world", "deepdice.bet", "worldoftanks.ru", "streambucks.io", "scryptcube.com", "www.highrevenuecpm.com", "x-1xbet-67578.world", "btc-sites.com", "apptastic-mobi.g2afse.com", "www.ostlon.com", "installhighly-therenewedfile.best", "s.viifax.com", "x-1xbet-94086.world", "topepisode.com", "cartoonsinfo.com", "axtrader.com", "travelsecurityline.eu", "pokeramazing.com", "cryptonex.xyz", "cryptofans.ru", "www.funnelleadsystem.com", "x-1xbet-78144.world", "startvideo.life", "s.viitok.com", "www.adanaatikhaber.com", "ru.warface.com", "www.tubezaur.com", "itrk.itrkinc.com", "www.my1tube.com", "p.1ts06.top", "www.monkamovies.com", "derevya2sh8ka09.com", "www.porngur.com", "www.ipuss.tv", "arrano.network", "www.youhodler.com", "cosmeticsgenerosity.com", "creative.alxbgo.com", "nyniglinu.pro", "bullx.io", "date-till-late.us","www.myemailtracking.com" , "bet1-x92354.com", "midpopedge.com", "www.vipvixen.ru", "splittingpick.com", "yandex.ru", "bet1-x81025.com", "a.leon.ru", "atani.com", "offer.alibaba.com", "exo.xvideass.top", "musict.ir", "www.musict.ir", "cardinalimprovementscartrige.com", "bet1-x58326.com", "bet1-x62670.com", "bet1-x95895.com", "cas-fast-39.com", "x1.x-casiinox-game.com", "warning.rt.ru", "dnevnienovosti.ru", "www.myemailtracking.com", "bet1-x92354.com", "midpopedge.com", "www.vipvixen.ru", "splittingpick.com", "yandex.ru", "bet1-x81025.com", "a.leon.ru", "edurustoday.ru","mbest.aliexpress.ru", "bet1-x72792.com", "startvideo.fun", "fadsimz.com", "accounts.binancezh.pro", "anyporn.org", "cos.flacon-magazine.com", "searchsecurer.com","bet1-x10847.com", "9k8f9.bemobtrcks.com", "ali2express.com", "kts.visitstats.com", "getdoge.io", "teamsperilous.com", "41upk.bemobtrk.com", "41upk.bemobpath.com", "www.leomax.ru", "gooblesdd.com", "lofepsypti.pro", "dschat.club", "www.crucerosmediterraneo.travel", "login.bitlocity.io", "bet1-x28746.com", "lp.crypt.casino", "bet1-x20027.com", "liteworld.live", "g5xq2z.mighttrack.com", "apps.apple.com", "leonodikeu9sj10.com", "bitgenerator.online", "www.baby.ru", "globalcrypto.exchange", "purplemining.ltd", "bitstarz1.eu","push.aarth.net", "landing.hentaiheroes.com", "www.adslyoigo.net", "news.gnezdo.ru", "stakecube.net", "www.mgid.com", "bet1-x22216.com", "99airdrops.com","accounts.binance.com", "rt.bongacams13.com","srsly.ru", "www.vokrug.tv", "bet1-x62651.com", "www.catala-reinon.es", "www.xm.com", "beklefkiom.com", "euphe-gun.com", "crawlarchive1120.com", "theonlygames.com", "www.google.com", "spbinvestment.ru", "bit-sitess.com", "crsed.net", "bet1-x31759.com", "www.purplemining.ltd","artisany.net", "bet1-x78464.com", "cryptotabbrowser.com", "newsurveyrus.typeform.com", "cryptoware.biz", "rsafrwd.com", "adverdirect.com", "fb.ru", "www.youtube.com", "kto-chto-gde.ru", "hyip.money", "p.1ts18.top", "code4us.com", "prizebox.org", "inbound.trilema.com", "epicmotoring.com","pegloang.com", "www.aaxpro.com", "belaya2shu1ba1.com", "rabota-doma.org", "cryptocoinsad.com","bet1-x24022.com", "mediasama.com", "see.xxx", "www.toprevenuecpmnetwork.com", "adbtc.io", "twndo77864.com", "ru.4game.com", "united-family.org", "cretgate.com", "cointools.info", "catermich.pro", "r.rips.icu", "pinednews.ru", "tq.adventurefeeds.com", "bet1-x99511.com", "link.securewebservices.ch", "www.gaming-adult.com","best.aliexpress.ru", "hq-sex-tube.com", "ru.leon9c7as1no.com", "www.bestrevenuenetwork.com", "www.pornofrant.com", "ws.exchange", "best2020-games-web1.com", "starcontent.monster", "grtposh.com", "www.cuntempire.com", "apps6.cointraffic.io", "mellowads.com", "todaybrings.ru", "unicom24.ru", "rt.pornhubpremium.com", "www.myincomeclub.com", "nexo.io", "m2mdonations2.com", "ruvi.tv", "betfury.io", "www.watermine.io", "bet1-x00495.com", "track.adsplay.in", "eu.4game.com", "disturbedaccruesurfaces.com", "rtyznd.com", "gilc.ru", "ivnx.ru", "btb88.com", "vidox.net", "smartme.cash","cuntwars.com", "installlatest-theintenselyfile.best", "yougotacheck.com", "x-1xbet-74927.world", "lywyjashu.pro", "stythewagro.pro", "kotikinar2ko8tiki09.com", "pushwelcome.com", "www.elegantthemes.com", "prpops.com", "x-1xbet-28171.world", "rzypgzojdan.com", "rt.bongacams20.com", "coinpot.in", "best.aliexpress.com", "s.viitrn.com", "aetejxolo.com", "dollarsurvey.org", "promo.stormgain.com", "asxemfnwbrmpdp.com", "zwnxzckwihg.com", "freebitco.in", "nopapmyzyjiqnc.com", "zdcuivnen.com", "adsbitcoin.io"
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
			
			if ((Programms[i].startintervalDOGE / Programms[i].intervalDOGE) > 1 && Programms[i].skipblock){
				Programms[i].start(i); Programms[i].startintervalDOGE = 0;
			}
			
			
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































