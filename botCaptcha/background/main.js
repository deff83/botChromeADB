//var hostmain = 'http://s929107n.beget.tech';
	
var hostmain = 'http://192.168.0.12/public_html';


function openPage() {
	browser.runtime.openOptionsPage();
}

//console.log('back');

var Config = function(){
	
	
	
	
	this.url = hostmain+'/api/setCaptcha.php';
	this.urlsolve = hostmain+'/api/getSolveCaptcha.php';
	this.urlget = hostmain+'/api/getCaptcha.php';
	this.method = 'GET';
}
var conf = new Config();

//var massTabs = [];
var massTabsCaptcha = {};
var massTabsCaptchaSolvered = {};
var massSuccf = {}
var activMass = {}


var massDeleteHosts = {};

var ObjBack = function(idtab, idsity, images_src, type, host){
	this.idtab = idtab;
	this.idsity = idsity;
	this.images_src = images_src;
	this.type = type;
	this.host = host;
}
 
 
 function ajaxGET(url, callback){
	 console.log("ajaxGET:"+url);
	var request = new XMLHttpRequest();
	
	request.addEventListener('readystatechange', function() {
		// если состояния запроса 4 и статус запроса 200 (OK)
		if ((request.readyState==4) && (request.status==200)) {
			console.log("ajaxGET_request:"+request.responseText);
			callback(request.responseText);
		}
	});
	
	request.open('GET',url,true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	request.send();
}

 
 
 
 
chrome.runtime.onMessage.addListener(
          function(request, sender, sendResponse) {
			  
			  
			  try{
				  
				  if (request=='active'){
					  chrome.tabs.update(sender.tab.id , {selected: true});
					  return;
				  }
				  
				  if (request=='activecap'){
					  //console.log('activecap');
					  if (massTabsCaptcha[sender.tab.id]!=null && massTabsCaptcha[sender.tab.id].host!= null && massTabsCaptcha[sender.tab.id].host!= ''){
						  let urlnew = conf.urlget + "?active=" + encodeURIComponent(massTabsCaptcha[sender.tab.id].host);
						
							//console.log("++++++++++++++"+urlnew);
							
							
							ajaxGET(urlnew, function (response){
							
									//console.log('++++++++++++++++');
									//console.log(response);
									if(response=='click'){
										
										//после клика на капче удалить запись в массиве на этой вкладке
										if (activMass[sender.tab.id]==null || activMass[sender.tab.id]==''){
											//console.log('test1');
											massTabsCaptcha[sender.tab.id] == null;
										}
										
										
										activMass[sender.tab.id]='act';
									}else{
										//console.log('test12');
											
										activMass[sender.tab.id]='';
										
									}
								});
					  }
					  
					  if(activMass[sender.tab.id]=='act'){
						  chrome.tabs.update(sender.tab.id , {selected: true});
						  //console.log('%%%%%%%%%%');
						  sendResponse('click');
					  }
					  
					  
					  return;
				  }
				  
				  
				  
				  
				  if (request=='newsitecap'){
					  /*let urlnew = conf.url + "?newcap=" + sender.tab.id;
						
						
						
						fetch(urlnew,
							{
								"method": conf.method,
							})
							.then(response => response.text())
							.then((response) => {
								
								//console.log(response);
								 sendResponse(response);
							})*/
							return;
				  }
				  
				  
				  
				  
				  
				  if (request=='reload'){
					  chrome.tabs.reload(sender.tab.id);
					  return;
				  }
				  
				  if (request=='succfdel'){
					  massSuccf[sender.tab.id] = '';
					  return;
				  }
				  
				  
				  if (request=='succf'){//удалить с базы все записи с url
					
					////console.log(massSuccf[sender.tab.id]!='');
					
					if (massSuccf[sender.tab.id]==1){
						//massSuccf[sender.tab.id] = '';
						sendResponse(true);
						
					}else{
						sendResponse(false);
					}
					return;
				  }
				  
				  
				  
				  
				  if (request=='deleteurl'){//удалить с базы все записи с url
					  //console.log('----------))-------');
						
						let urlnew = conf.url + "?deleteurl=" + encodeURIComponent(massDeleteHosts[sender.tab.id]);
						massTabsCaptcha[sender.tab.id] = null;
						//console.log(urlnew);
						
						massSuccf[sender.tab.id] = 1;
						ajaxGET(urlnew, function (response){
								////console.log('++++++++++++++++');
								//console.log(response);
								 //sendResponse(response);
							})
							  
							  //sendResponse(massTabsCaptchaSolvered);
						  
						  
					  return;
				  }
				  
				  
				  if (request=='delete'){
					  //console.log('delete');
					  
					  let ids = massTabsCaptcha[sender.tab.id].idsity;
					  massDeleteHosts[sender.tab.id] = massTabsCaptcha[sender.tab.id].host;
					  //massTabsCaptcha[sender.tab.id] = null;
					// let obj = new ObjBack(sender.tab.id, idnew, request.images_src, request.type, '');
						massTabsCaptcha[sender.tab.id].images_src = null;
						massTabsCaptcha[sender.tab.id].type = -1;
					  massTabsCaptchaSolvered[ids] = null;
					  
					  //sendResponse(massTabsCaptchaSolvered);
					  
					  
					  return;
				  }
				  
				  
				  if (request=='solvered'){
					  //console.log('solvered');
					  
					  sendResponse(massTabsCaptchaSolvered);
					  
					  
					  return;
				  }
				  
				  
				  
			   
			   
			   let idnew = 1;
			   
			   if (massTabsCaptcha[sender.tab.id] != null && massTabsCaptcha[sender.tab.id].idsity != 1){
				   //если уже есть эта вкладка
				  
				   if (massTabsCaptcha[sender.tab.id].idsity == 10101){
					   return;
				   }
				   
				   idnew = massTabsCaptcha[sender.tab.id].idsity;
				   
				  if (massTabsCaptcha[sender.tab.id].idsity == 'nothave'){//если ответ от сервера nothave то создать новый
					   idnew = 1;
					   massTabsCaptcha[sender.tab.id].images_src = '';
						return;
				   }
				   
				   //console.log('find solver');
				   
				   let urlnew = conf.urlsolve + "?idsity=" + massTabsCaptcha[sender.tab.id].idsity;
				  // console.log("++++++++++++++"+'find solver');
				   //console.log(urlnew);
				   
				   
				   
				   ajaxGET(urlnew, function (response){
				   
						
						//massTabsCaptcha[sender.tab.id].idsity = response;
						if (massTabsCaptcha[sender.tab.id] != null){
							//console.log(response);
							let args_responce = response.split('@');
							
							try{
							
								//console.log(args_responce[0]);
								//console.log(args_responce[1]);
								
								if (args_responce[1]==massTabsCaptcha[sender.tab.id].images_src){
									
									//console.log(true);
									if (args_responce[0] != ''){
										console.log('solveeee....');
										try{
											let arg_promegut = (args_responce[0].substring(2, args_responce[0].length - 1)).split('$$');
											
											
											massTabsCaptchaSolvered[massTabsCaptcha[sender.tab.id].idsity]=arg_promegut;
											
											
											
											//console.log(arg_promegut);
											return;
											
										}catch(Exc){}
									}
									
									
								}
								if (args_responce[1]==''){//если такой записи с таким id нет в базе, то
									massTabsCaptcha[sender.tab.id] = null;
									massTabsCaptchaSolvered[ids] = null;
									return;
								}
								
							}catch(Exc){}
							
							//console.log(urlnew);
							
						 //sendResponse(response);
						}
					});
				   
				   
				   
				   //если картинка поменялась или не пришел ответ с сайта
				   if (request.images_src == massTabsCaptcha[sender.tab.id].images_src){
					   console.log('images_src=='+massTabsCaptcha[sender.tab.id].images_src);
					   sendResponse(massTabsCaptcha[sender.tab.id]);
					   return;
				   }
				   
				   
				   
			   }
			 // //console.log(sender.tab.id);












				let obj = new ObjBack(sender.tab.id, idnew, request.images_src, request.type, '');
				
				massSuccf[sender.tab.id] = '';
				
				let urlnew = conf.url + "?images=" + encodeURIComponent(request.images_src) + "&id=" + idnew + "&type=" + request.type + "&name=" + request.name + "&tabid=" + sender.tab.id;
				
				
				
				
				console.log(urlnew);
				
				massTabsCaptcha[sender.tab.id] = obj;
				//massTabs.push(sender.tab.id);
				
				
				massTabsCaptcha[sender.tab.id].  = 10101;
				ajaxGET(urlnew, function (response){
				
						if(response!='have'){
							massTabsCaptcha[sender.tab.id].idsity = response;
							//massTabsCaptcha[sender.tab.id].idnew = 
						
						}
						console.log("setC:"+response);
						 //sendResponse(response);
					})
				
				
				
				sendResponse(massTabsCaptcha[sender.tab.id]);
				
				
				}catch(Exc){console.log(Exc);};
	});

	var timerTabsUrl = setInterval(function() {
		
		
		////console.log('lll');
		
		chrome.tabs.query( {}, 
								function(tabs) { 
									////console.log("tabCount", tabs.length);
									
										let mas_str_tabid = 'and';
										let array_tabids = [];
										
										for(var i = 0; i < tabs.length; i++){
											
											tab = tabs[i];
											mas_str_tabid += tab.id + "and";
											array_tabids.push(tab.id);
											
											if (massTabsCaptcha[tab.id]!=null){//если присутствует капча в массиве
												
													if (massTabsCaptcha[tab.id].host == '' && tab.url != 'undefined'){
														
														
														//console.log("timerTabsUrl:tab.id="+tab.id);
														//console.log("timerTabsUrl:tab.url="+tab.url); //undefined
											
														
														massTabsCaptcha[tab.id].host = tab.url;
														
															let urlnew = conf.url + "?idurl=" + tab.id + "&urladress=" + tab.url;
															//console.log("timerTabsUrl:tab.urlnew="+urlnew);
															
															
															
															
															
															
															
															ajaxGET(urlnew, function (response){
																
																
																	if(response!='error'){
																		
																		if (massTabsCaptcha[tab.id]!=null && massTabsCaptcha[tab.id].host == tab.url){
																		
																			massTabsCaptcha[tab.id].idsity = response;
																		}
																	}
																
																
															});
															
															
															
															/*
															
															fetch(urlnew,
																{
																	"method": conf.method,
																})
																.then(response => response.text())
																.then((response) => {
																	
																	if(response!='error'){
																		
																		if (massTabsCaptcha[tab.id]!=null && massTabsCaptcha[tab.id].host == tab.url){
																		
																			massTabsCaptcha[tab.id].idsity = response;
																		}
																	}
																	
																	//console.log("timerTabsUrl:response="+response);
																	//console.log("timerTabsUrl:tab.url="+tab.url);
																	//console.log("timerTabsUrl:host="+massTabsCaptcha[tab.id].host);
																	 //sendResponse(response);
																});
															
															
															
															*/
															
															
															
															
															
															
															
															
															
															
															
															
															
													}
												
											}
											
										}
										
										
										
										//отправка id вкладок открытых
										let urlnewtabs = conf.url + "?masstabid=" + mas_str_tabid;
										console.log("timerTabsUrl:"+array_tabids);
										ajaxGET(urlnewtabs, function (response){
													
													
													//console.log("timerTabsUrl:tab.urlnewtabs response="+response);
										
													
													
											});
										
										
										
										
								}
								);
	
}, 3000);



/*

function clearmass(){
	//console.log('clear');
	
	for(var i = 0; i < massTabs.length; i++){
	
		let objk = massTabsCaptcha[massTabs[i]];
	
	//console.log(objk.images_src);
	
		fetch(objk.images_src,
			{
				"method": 'GET',
			})
			.then(response => response.text())
			.then((response) => {
				
				//console.log(response);
				
				
				//если содержит gone
				if(response.indexOf('gone') !== -1){
					
					let urlnew = conf.url + "?delete=" + objk;
					fetch(urlnew,
						{
							"method": conf.method,
						})
						.then(response => response.text())
						.then((response) => {
							massTabsCaptcha[sender.tab.id].idsity = response;
							////console.log(response);
							 //sendResponse(response);
						})
				}
				
				
				 //sendResponse(response);
			})
	
	
	}
	
	
	
}*/
		  
		  
		  
		  