

var link_tex = '';
var col_count = 0;
var con = 0;

var waitinghtml = "<div>waiting...</div>";



setInterval(function() {
	
	ajaxGET("api/getCaptcha.php", callback)
	
}, 1000);

var arr_old = [];

function callback(request){
	//console.log(request);
	var massiv_captcha = JSON.parse(request);
	
	page = "<div>";
	
	
	if (link_tex==''){
		
		var arr = [];		
		active('nullls');
		
		for(var i = 0; i < massiv_captcha.length; i++){
			
			let obj = massiv_captcha[i];
			
			if (arr.includes(obj.urladress)==false){
				arr.push(obj.urladress);
				
				/*
				
				<ul id="menu">
		<li><a href="#"><span>lua-коды</span></a></li>
				*/
				page += "<ul id='menu'><li><a onclick='col_count = 0; link_tex = `" + obj.urladress + "`'>" + obj.urladress + "</a></li></ul>";
			}
			
		}
		
		
		
	}else{
		var arr = [];		
		active(link_tex);
		con = 0;
		for(var i = 0; i < massiv_captcha.length; i++){
			let obj = massiv_captcha[i];
			
			
			
			if (obj.urladress == link_tex){
				
				
			
				
				arr.push(obj.images+'k'+obj.solve);
				if (obj.solve == '' && obj.name != "null"){
					col_count = 0;
					con += 1;
					page += "<div class='text'>";
					page += "<br><div>"+link_tex+"</div>";
					
					page += "<br><div>"+obj.name+"</div>";
					
					
					
					
					if (obj.type==2){//3*3
						page += '<div style="width: 324px; height: 324px;">';
						for (let k = 0; k <= 2; k++) {
							for (let j = 0; j <= 2; j++) {
								page += '<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'+obj.id+'`).value+=`$'+(k*3+j)+'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'+obj.id+'`).value = document.getElementById(`s'+obj.id+'`).value.replace(`$'+(k*3+j)+'$`,``); }; return false;"><div style="margin-top: -'+(k*100)+'px; margin-left: -'+(j*100)+'px;"><img src="';
								page += obj.images;
								page += '"></div></div>';
							}
						}
						page += '</div>';
					}
					
					if (obj.type==1){//4*4
						page += '<div style="width: 432px; height: 432px;">';
						for (let k = 0; k <= 3; k++) {
							for (let j = 0; j <= 3; j++) {
								page += '<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'+obj.id+'`).value+=`$'+(k*4+j)+'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'+obj.id+'`).value = document.getElementById(`s'+obj.id+'`).value.replace(`$'+(k*4+j)+'$`,``); }; return false;"><div style="margin-top: -'+(k*100)+'px; margin-left: -'+(j*100)+'px;"><img src="';
								page += obj.images;
								page += '" style="width: 400px; height: 400px;"></div></div>';
							}
						}
						page += '</div>';
					}
					
					if (obj.type==3){//4*4
						page += '<div style="width: 432px; height: 432px;">';
						
						array_imgs = (obj.images).split('$$');
						
						if(array_imgs.length>0){
							page += '<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'+obj.id+'`).value+=`$'+array_imgs[1]+'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'+obj.id+'`).value = document.getElementById(`s'+obj.id+'`).value.replace(`$'+array_imgs[1]+'$`,``); }; return false;"><img src="';
								page += array_imgs[0];
								page += '"></div>';
						}
						if(array_imgs.length>2){
							page += '<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'+obj.id+'`).value+=`$'+array_imgs[3]+'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'+obj.id+'`).value = document.getElementById(`s'+obj.id+'`).value.replace(`$'+array_imgs[3]+'$`,``); }; return false;"><img src="';
								page += array_imgs[2];
								page += '"></div>';
						}
						if(array_imgs.length>4){
							page += '<div style="overflow: hidden; width: 100px; height: 100px; float:left;  border: 4px ridge black;" onclick="if (this.style.borderColor == `black`){this.style.borderColor = `red`; document.getElementById(`s'+obj.id+'`).value+=`$'+array_imgs[5]+'$`;}else{this.style.borderColor = `black`; document.getElementById(`s'+obj.id+'`).value = document.getElementById(`s'+obj.id+'`).value.replace(`$'+array_imgs[5]+'$`,``); }; return false;"><img src="';
								page += array_imgs[4];
								page += '"></div>';
						}
						
						page += '</div>';
					}
					
					
					/*page += '<form action="api/setCaptcha.php" method="get"><input name="idsolved" type="hidden" value="'+obj.id+'"><input name="solve" id="s'+obj.id+'" type="text" value="#"><input name="type" type="hidden" value="'+obj.type+'">';
					page += '<input type="submit" name="submit" value="Далее"></form>';
					
					page += '<form action="api/setCaptcha.php" method="get"><input name="delete" type="hidden" value="'+obj.id+'">';
					page += '<input type="submit" name="submit" value="Удалить"></form>';
					*/
					
					page += '<input name="solve" id="s'+obj.id+'" type="text" value="#" readonly><button onClick="dalee('+obj.id+', '+obj.type+'); arr_old = [1];">Далее</button>'
					page += '<button onClick="cancel_cap('+obj.id+'); arr_old = [1];">Cancel</button>'
					
					
					
					page += '</div>';
					
					
					
					
					page += "</div>";
					break;
				}
			}
		}
		if (con == 0){
			if (arr.length == 0){//если нет ничего
				link_tex = '';
			}
			col_count += 1;
			if (col_count < 50){
				page += '<div>waiting...'+col_count+'</div>'
			}else{
				
				col_count = 0;
				ajaxGET(`api/setCaptcha.php?deleteurl=`+encodeURIComponent(link_tex), function coll(request){})
				link_tex = '';
			}
		}
		page += "</div><ul id='menu'><li><a onclick='document.getElementById(`content_cap`).innerHTML = `"+waitinghtml+"`; arr_old = [1]; link_tex = ``'>cancel</a></li></ul>";
	}
	
	if (con == 0){
		document.getElementById('content_cap').innerHTML = page;
	}
	
	
	if (odinakov(arr_old, arr)){
	
	
	
	
	}else{
		arr_old = arr;
		document.getElementById('content_cap').innerHTML = page;
	}
	
}

function dalee(id_dalee, type_dalee){
	
	console.log(`api/setCaptcha.php?idsolved=`+id_dalee+`&solve=`+encodeURIComponent(document.getElementById('s'+id_dalee+'').value)+`&type=`+type_dalee+``);
	ajaxGET(`api/setCaptcha.php?idsolved=`+id_dalee+`&solve=`+encodeURIComponent(document.getElementById('s'+id_dalee+'').value)+`&type=`+type_dalee+``, function coll(request){})
}

function active(urlact){
	
	console.log(`api/setCaptcha.php?active=`+encodeURIComponent(urlact)+``);
	ajaxGET(`api/setCaptcha.php?active=`+encodeURIComponent(urlact)+``, function coll(request){
		console.log(request);
	})
}



function cancel_cap(id_dalee){
	
	console.log(`api/setCaptcha.php?delete=`+id_dalee);
	ajaxGET(`api/setCaptcha.php?delete=`+id_dalee, function coll(request){})
}

function odinakov(array1, array2){
	return (array1.length === array2.length && array1.sort().every(function(value, index) { return value === array2.sort()[index]})); 
}

