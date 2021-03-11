
var success_button = false;

var idsite = 0;
var typesd = 0;
var images_src = '';

var images_src_main = '';



var open_count = 0;
var open_count_active = 0;

var pause_count = 0;

var ObjPage = function(name, type, images_src, urladress){
	this.type = type;
	this.images_src = images_src;
	this.name = name;
	this.urladress = urladress;
}

var ObjBack = function(/*idtab,*/ idsity, images_src, type, host){
//	this.idtab = idtab;
	this.idsity = idsity;
	this.images_src = images_src;
	this.type = type;
	this.host = host;
}


obj = new ObjBack(/*sender.tab.id,*/ 1, 'null', -1, window.location.href);


var ObjCapDef = function(img, type){
	this.type = type;
	this.img = img;
}




function start_solve(){//каждую секунду

		chrome.extension.sendMessage('succf', function (message){
			//console.log('ggg');
			console.log(message);
			//console.log(document.getElementById('userpanel')!=null);
			if (message && document.getElementById('userpanel')!=null){
				
				//console.log('jjj');
					chrome.extension.sendMessage('succfdel', function (message){});
					document.getElementById('userpanel').getElementsByTagName('img')[0].click();

				return;
			}
			
		});
		
		
		let statuss = document.getElementById('recaptcha-accessible-status');
		if (statuss != null){
			
			open_count_active +=1;
			if (open_count_active == 7){
				open_count_active = 0;
			
			chrome.extension.sendMessage('activecap', function (message){
				if(message=='click'){
					/*open_count +=1;
					if (open_count == 2){
						open_count = 0;*/
						document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
					//
				}
			});
			}
		}



		

			var captcha = document.getElementById('recaptcha-token');
			if (captcha!=null){
				
				
				
				
				
				if (pause_count > 0){
					//если картинка поменялась то досрочно поменять pause_count = 0;
					let obj_tter = getTypeImg();
														
					let type = obj_tter.type;
					let image1 = obj_tter.img;
					if (image1!=images_src_main){pause_count=0;}else{//если картинка поменялась
						pause_count -= 1;
						return;
					};
					
					
					
				}
				try{
				if (document.getElementsByClassName('rc-doscaptcha-header-text')[0].textContent=='Повторите попытку позже'){
					chrome.extension.sendMessage('reload', function (message){});
				}
				}catch(Exc){}
				
				console.log('captcha');
				
				
				let statuss = document.getElementById('recaptcha-accessible-status');
				if (statuss != null){
					//первый фрейм капчи
					console.log(statuss.textContent);
					if (statuss.textContent == 'Вы прошли проверку'){
						console.log('success');
						//скрипт после решения капчи
						
						
						chrome.extension.sendMessage('deleteurl', function (message){
							
							
							
						});
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						return;
					}else{
						/*open_count +=1;
						if (open_count == 5){
							open_count = 0;
							document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
						}*/
						
						//chrome.extension.sendMessage('newsitecap', function (message){
							//if (message=='active'){
								/*open_count +=1;
								if (open_count == 5){
									open_count = 0;
									document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
								}*/
							//}
							
							
							
						//});
					}
					
				}
				
				
				
				
				
				
				
				
				var challenge = document.getElementsByClassName('rc-imageselect-challenge')[0];
				
				if (challenge!=null){
					
					//если открыта капча
					
					
					
					
					var name = document.getElementById('rc-imageselect').getElementsByTagName('strong')[0].textContent;
					
					
					
					
					
					
					
					
					let obj_tter = getTypeImg();
					
					let type = obj_tter.type;
					let image1 = obj_tter.img;
					
					
					//alert(image1);
					
					//return;
					
					
					
					/*
					
					if (image2 == ''){
						type = 2;	//3х3
					}
					
					if (images_captcha.length==16){
						type = 1;	//4х4
					}
					
					if (type==3){
						image1 =
					}
					*/
					 console.log(name);
					// console.log(type);
					// console.log(image1);
					let urladressf = '';
					if (type != 0){
					chrome.extension.sendMessage(new ObjPage(name, type, image1, urladressf), function (message){
						console.log(message.idsity);
						idsite = message.idsity;
						typesd = message.type;
						images_src = message.images_src;
						
						chrome.extension.sendMessage('solvered', function (message){
											
											let array_idsite = message[idsite];
											console.log(typesd);
											console.log(idsite);
											if (array_idsite!=null){
												
												pause_count = 1;
												
												let challenge = document.getElementsByClassName('rc-imageselect-challenge')[0];
												let challenge_td = challenge.getElementsByTagName('td');
												
												let obj_tter = getTypeImg();
												
												let type = obj_tter.type;
												let image1 = obj_tter.img;
												if (image1!=images_src){return;};
												images_src_main = image1;//сохраняем картинку где нажали
												
												for(var i = 0; i < array_idsite.length; i++){
													if(array_idsite[i]<17){//если существует картинка то нажать
														challenge_td[array_idsite[i]].click();
													}
												}
												console.log('delete');
												console.log(array_idsite);
												//удалить с массивов - чтобы не повторялся этот код
												chrome.extension.sendMessage('active', function (message){});
												chrome.extension.sendMessage('delete', function (message){});
												
												if(typesd==0){//неизвестная
													pause_count = 4;
													setTimeout(function(){
													document.getElementById('recaptcha-verify-button').click();
													
													}, 5000);
												}
												if(typesd==1){//4*4
													pause_count = 1;
													setTimeout(function(){
													document.getElementById('recaptcha-verify-button').click();
													
													}, 1000);
												}
												if(typesd==2){//3*3 простая
													
													pause_count = 4;
													setTimeout(function(){
													document.getElementById('recaptcha-verify-button').click();
													
													}, 5000);
												}
												if(typesd==3){//3*3 сложная
												
												
													pause_count = 4;
													if (array_idsite.length != 0 && array_idsite[0] == 25){
														pause_count = 1;
														setTimeout(function(){
														document.getElementById('recaptcha-verify-button').click();
														
														}, 1000);
													}
												}
												
												
												
												
													
												
												
											}
												
						});
					});
					
					}
					
				}else{
					
					let token = document.getElementById('recaptcha-token');
					let alertt = document.getElementById('rc-anchor-alert');
					
					if (token!=null && alertt==null){
						console.log('uuj');
						
						
						chrome.extension.sendMessage(new ObjPage('null', -1, 'null', ''), function (message){
							
						});
					}
					
					
					/*
						open_count +=1;
									if (open_count == 10){
										open_count = 0;
										
									}*/
					
				}
				
				
				
				
				
				
				
				
			}


		
}
/*
function start_host(){
	console.log(location.host);
}
*/

function getTypeImg(){
	let challenge = document.getElementsByClassName('rc-imageselect-challenge')[0];
	let images_captcha = challenge.getElementsByTagName('img');
	
	let image1 = '';
	let choose1 = 0;
	let count_image1 = 0;
	
	let image2 = '';
	let choose2 = 0;
	let count_image2 = 0;
	
	let image3 = '';
	let choose3 = 0;
	let count_image3 = 0;
	
	let image4 = '';
	let choose4 = 0;
	let count_image4 = 0;
	
	
	for(let i = 0; i < images_captcha.length; i++){
		let src = images_captcha[i].getAttribute('src');
		
		
		if (image1 == '' || src == image1){
			image1 = src;
			choose1 = i;
			count_image1 += 1;
			continue;
		}

		if (image2 == '' || src == image2){
			image2 = src;
			choose2 = i;
			count_image2 += 1;
			continue;
		}

		if (image3 == '' || src == image3){
			image3 = src;
			choose3 = i;
			count_image3 += 1;
			continue;
		}

		
		if (image4 == '' || src == image4){
			image4 = src;
			choose4 = i;
			count_image4 += 1;
			continue;
		}

		
	}
	
	let sum_count_image = count_image1 + count_image2 + count_image3 + count_image4;
	
	console.log(image1);
	console.log(image2);
	console.log(image3);
	console.log(image4);
	
	console.log(count_image1);
	console.log(count_image2);
	console.log(count_image3);
	console.log(count_image4);
	
	let type = 2;
	
	if (sum_count_image == 16){
		type = 1; 	//4х4
	}
	
	if (sum_count_image == 9){
		if (count_image1 == 9){
			type = 2;	//3х3
		}else{
			type = 3;	//3х3 с дополнительными картинками
			
			
			image_new = '';
			
			if (count_image1 == 1){image_new += image1 + '$$' + choose1 + '$$'};
			if (count_image2 == 1){image_new += image2 + '$$' + choose2 + '$$'};
			if (count_image3 == 1){image_new += image3 + '$$' + choose3 + '$$'};
			if (count_image4 == 1){image_new += image4 + '$$' + choose4 + '$$'};
			
			
			image1 = image_new;
			
			
		}
	}
	
	return new ObjCapDef(image1, type);
}



/*
function check_solve(){
		var captcha = document.getElementById('recaptcha-token');
			if (captcha!=null){
				let statuss = document.getElementById('recaptcha-accessible-status');
				if (statuss != null){
					chrome.extension.sendMessage('solvered', function (message){
											console.log(idsite);
											console.log(message);
											console.log(message[idsite]);
											
					});
				}
			}
					
}
*/
//var startInterv = setInterval(check_solve, 5000);




var startInterv = setInterval(start_solve, 1000);
//var startInterv = setTimeout(start_host, 5000);