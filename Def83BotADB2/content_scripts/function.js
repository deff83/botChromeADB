function hideDiv(getElement, name, count){
	var appBanneres;
	switch(getElement){
		case "Name":
			appBanneres = document.getElementsByName(name); 
		break;
		case "ClassName":
			appBanneres = document.getElementsByClassName(name); 
		break;
		case "Id":
			appBanneres = document.getElementById(name); 
			if(appBanneres != null)
				appBanneres.setAttribute('style','display:none;');
			return;
		break;
		case "TagName":
			appBanneres = document.getElementsByTagName(name); 
		break;
	}
	if(count== -1){
		for (var i = 0; i < appBanneres.length; i++) { 
			appBanneres[i].setAttribute('style','display:none;');
		}
	}else{
		appBanneres[count].setAttribute('style','display:none;');
	}
};
function clickButton(getElement, name, count){
	var appBanneres;
	switch(getElement){
		case "Name":
			appBanneres = document.getElementsByName(name); 
		break;
		case "ClassName":
			appBanneres = document.getElementsByClassName(name); 
		break;
		case "Id":
			appBanneres = document.getElementById(name); 
			appBanneres.click();
			return;
		break;
		case "TagName":
			appBanneres = document.getElementsByTagName(name); 
		break;
	}
	appBanneres[count].click();
}
function clickButtonInDIV(getElementDIV, nameDIV, countDIV, getElement, name, count){
	var appBanneresDIV;
	switch(getElementDIV){
		case "Name":
			appBanneresDIV = document.getElementsByName(nameDIV)[countDIV]; 
		break;
		case "ClassName":
			appBanneresDIV = document.getElementsByClassName(nameDIV)[countDIV]; 
		break;
		case "Id":
			appBanneresDIV = document.getElementById(nameDIV); 
		break;
		case "TagName":
			appBanneresDIV = document.getElementsByTagName(nameDIV)[countDIV]; 
		break;
	}
	var appBanneres;
	switch(getElement){
		case "Name":
			appBanneres = appBanneresDIV.getElementsByName(name); 
		break;
		case "ClassName":
			appBanneres = appBanneresDIV.getElementsByClassName(name); 
		break;
		case "Id":
			appBanneres = appBanneresDIV.getElementById(name); 
			appBanneres.click();
			return;
		break;
		case "TagName":
			appBanneres = appBanneresDIV.getElementsByTagName(name); 
		break;
	}
	appBanneres[count].click();
}

function drawDIVSkrit(type){
	var d=document.createElement('div');
	d.style.position = 'fixed';
	d.style.width = '20%';
	d.style.height = '20%';
	d.id = 'skrit';
	d.style.left = '0px';
	d.style.bottom = '0px';
	d.style.background = '';
	d.style.zIndex = 2147483646;
	d.innerHTML = '<div style="width:100%; height:100%; text-align:center; background: linear-gradient(0deg,#000000  ,#210055 );"><div id="skritText" style=" font-family: Anton script=latin rev=2; font-size: 150px; font-style: normal; 	font-weight: 400; 	color: #0000ff;">Wait.<br>Do not close the page. </div><div style=" font-family: Anton script=latin rev=2; font-size: 20px; font-style: normal; 	font-weight: 400; 	color: #0000ff;">When you close the page, the process does not stop.</div></div><div style="position:absolute; left:0px; bottom:50px;"><img src="http://ipic.su/7yFYuH" width="50px" height="50px" /></div>';
	document.body.appendChild(d);
	//hideReklammBan();
}

function drawDIVUser(type, onclickStr){
	if (type == '1'){
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.text = 'function clickButtonInDIV(getElementDIV, nameDIV, countDIV, getElement, name, count){ 	var appBanneresDIV; 	switch(getElementDIV){ 		case "Name": 			appBanneresDIV = document.getElementsByName(nameDIV)[countDIV];  		break; 		case "ClassName": 			appBanneresDIV = document.getElementsByClassName(nameDIV)[countDIV];  		break; 		case "Id": 			appBanneresDIV = document.getElementById(nameDIV);  		break; 		case "TagName": 			appBanneresDIV = document.getElementsByTagName(nameDIV)[countDIV];  		break; 	} 	var appBanneres;  	switch(getElement){ 		case "Name": 			appBanneres = appBanneresDIV.getElementsByName(name);  		break; 		case "ClassName": 			appBanneres = appBanneresDIV.getElementsByClassName(name);  		break; 		case "Id": 			appBanneres = appBanneresDIV.getElementById(name);  			appBanneres.click(); 			return; 		break; 		case "TagName": 			appBanneres = appBanneresDIV.getElementsByTagName(name); 		break; 	} 	appBanneres[count].click(); /*alert(appBanneres[count].getAttribute("name"));*/ }';
		document.head.appendChild(script);

		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.text = 'function clickButton(getElement, name, count){	var appBanneres;	switch(getElement){		case "Name":			appBanneres = ocument.getElementsByName(name); 		break;		case "ClassName":			appBanneres = document.getElementsByClassName(name); 		break;		case "Id":			appBanneres = document.getElementById(name); 			appBanneres.click();			return;		break;		case "TagName":			appBanneres = document.getElementsByTagName(name); 		break;	}	appBanneres[count].click();}';
		document.head.appendChild(script);
		
		var d=document.createElement('div');
		d.style.position = 'fixed';
		d.style.width = '60px';
		d.style.height = '80px';
		d.style.left = '0px';
		d.style.bottom = '0px';
		d.style.background = '#ffffff';
		d.style.zIndex = 2147483646;
		document.body.appendChild(d);
		//<input type="button" value="Проверить" onclick="isEmail()"></p>
		//d.innerHTML = '<div><input type="button"  value="GO" style="background: #00ff00; width:150px; height:15px;" onclick="'+onclickStr+'"></input></div><div id="userpanel" style="float: left;"><img src="http://ipic.su/7yFUh4.png" width="50px" height="50px" onclick="'+onclickStr+'; document.getElementById(\'userpanel\').setAttribute(\'style\',\'display:none;\');"/><span style="color:#000000; font-size: 20px;">  Do not touch. I wll do it self. If I can not please help me. Please be patient because I am a robot</span></div>';
		d.innerHTML = '<div></div><div id="userpanel" ><img src="http://ipic.su/7yFUh4.png" width="50px" height="50px" onclick="'+onclickStr+'; document.getElementById(\'userpanel\').setAttribute(\'style\',\'display:none;\');"/></div>';
		/*var b=document.createElement('input');
		b.setAttribute('type', 'button');
		b.setAttribute('value', 'GO');
		b.setAttribute('onclick', onclickStr);*/
		//d.appendChild(b);
		hideReklammBan();
	}
	if (type == '2'){
		
		var d=document.createElement('div');
		d.style.position = 'fixed';
		d.style.width = '150px';
		d.style.height = '100px';
		d.style.left = '0px';
		d.style.bottom = '0px';
		d.style.background = '#ffffff';
		d.style.zIndex = 2147483646;
		document.body.appendChild(d);
		//<input type="button" value="Проверить" onclick="isEmail()"></p>
		d.innerHTML = '<div><input type="button"  value="GO" style="background: #00ff00; width:150px; height:15px;" onclick="'+onclickStr+'"></input></div><div id="userpanel" style="float: left;"><img src="http://ipic.su/7yFZxj.png" width="50px" height="50px"/><span style="color:#000000; font-size: 20px;">  Do not touch. I wll do it self. If I can not please help me. Please be patient because I am a robot</span></div>';
		/*var b=document.createElement('input');
		b.setAttribute('type', 'button');
		b.setAttribute('value', 'GO');
		b.setAttribute('onclick', onclickStr);*/
		//d.appendChild(b);
		hideReklammBan();
	}
	if (type == '3'){
		
		if(document.getElementById('userpanel')==null){
			var script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.text = 'function clickButtonInDIV(getElementDIV, nameDIV, countDIV, getElement, name, count){ 	var appBanneresDIV; 	switch(getElementDIV){ 		case "Name": 			appBanneresDIV = document.getElementsByName(nameDIV)[countDIV];  		break; 		case "ClassName": 			appBanneresDIV = document.getElementsByClassName(nameDIV)[countDIV];  		break; 		case "Id": 			appBanneresDIV = document.getElementById(nameDIV);  		break; 		case "TagName": 			appBanneresDIV = document.getElementsByTagName(nameDIV)[countDIV];  		break; 	} 	var appBanneres;  	switch(getElement){ 		case "Name": 			appBanneres = appBanneresDIV.getElementsByName(name);  		break; 		case "ClassName": 			appBanneres = appBanneresDIV.getElementsByClassName(name);  		break; 		case "Id": 			appBanneres = appBanneresDIV.getElementById(name);  			appBanneres.click(); 			return; 		break; 		case "TagName": 			appBanneres = appBanneresDIV.getElementsByTagName(name); 		break; 	} 	appBanneres[count].click(); /*alert(appBanneres[count].getAttribute("name"));*/ }';
			document.head.appendChild(script);
			var script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.text = 'function clickButton(getElement, name, count){	var appBanneres;	switch(getElement){		case "Name":			appBanneres = ocument.getElementsByName(name); 		break;		case "ClassName":			appBanneres = document.getElementsByClassName(name); 		break;		case "Id":			appBanneres = document.getElementById(name); 			appBanneres.click();			return;		break;		case "TagName":			appBanneres = document.getElementsByTagName(name); 		break;	}	appBanneres[count].click();}';
			document.head.appendChild(script);
		
			var d=document.createElement('div');
			d.style.position = 'fixed';
			d.style.width = '150px';
			d.style.height = '100px';
			d.style.left = '0px';
			d.style.bottom = '0px';
			d.style.background = '#ffffff';
			d.style.zIndex = 2147483646;
			document.body.appendChild(d);
			//<input type="button" value="Проверить" onclick="isEmail()"></p>
			d.innerHTML = '<div><input type="button"  value="GO" style="background: #00ff00; width:150px; height:15px;" onclick="'+onclickStr+'"></input></div><div id="userpanel" style="float: left;"><img src="http://ipic.su/7yFZxj.png" width="50px" height="50px" onclick="'+onclickStr+'"/></div>';
			/*var b=document.createElement('input');
			b.setAttribute('type', 'button');
			b.setAttribute('value', 'GO');
			b.setAttribute('onclick', onclickStr);*/
			//d.appendChild(b);
			hideReklammBan();
		}
	}
	
}

function drawDIVUserN(type, onclickStr, massButton, onclickAnd, onClickCancel){
	if (type == '3'){
		
		if(document.getElementById('userpanel')==null){
			var script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.text = 'function clickButtonInDIV(getElementDIV, nameDIV, countDIV, getElement, name, count){ 	var appBanneresDIV; 	switch(getElementDIV){ 		case "Name": 			appBanneresDIV = document.getElementsByName(nameDIV)[countDIV];  		break; 		case "ClassName": 			appBanneresDIV = document.getElementsByClassName(nameDIV)[countDIV];  		break; 		case "Id": 			appBanneresDIV = document.getElementById(nameDIV);  		break; 		case "TagName": 			appBanneresDIV = document.getElementsByTagName(nameDIV)[countDIV];  		break; 	} 	var appBanneres;  	switch(getElement){ 		case "Name": 			appBanneres = appBanneresDIV.getElementsByName(name);  		break; 		case "ClassName": 			appBanneres = appBanneresDIV.getElementsByClassName(name);  		break; 		case "Id": 			appBanneres = appBanneresDIV.getElementById(name);  			appBanneres.click(); 			return; 		break; 		case "TagName": 			appBanneres = appBanneresDIV.getElementsByTagName(name); 		break; 	} 	appBanneres[count].click(); /*alert(appBanneres[count].getAttribute("name"));*/ }';
			document.head.appendChild(script);
			
			
			
			
			
			
			
			
			
			
			
			
			var script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.text = 'function clickButton(getElement, name, count){	var appBanneres;	switch(getElement){		case "Name":			appBanneres = ocument.getElementsByName(name); 		break;		case "ClassName":			appBanneres = document.getElementsByClassName(name); 		break;		case "Id":			appBanneres = document.getElementById(name); 			appBanneres.click();			return;		break;		case "TagName":			appBanneres = document.getElementsByTagName(name); 		break;	}	appBanneres[count].click();}';
			document.head.appendChild(script);
		
		var script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.text = 'function clickButtonAnd(){ 	'+onclickAnd+' }';
			document.head.appendChild(script);
			
			
		
		
		
			var d=document.createElement('div');
			d.style.position = 'fixed';
			d.style.width = '150px';
			d.style.height = '100px';
			d.style.left = '0px';
			d.style.bottom = '0px';
			d.style.background = '#ffffff';
			d.style.zIndex = 2147483646;
			document.body.appendChild(d);
			let stringbuttonmassiv = '<div><input type="button"  value="GO" style="background: #00ff00; width:150px; height:15px;" onclick="'+onclickStr+'"></input></div><div id="userpanel" style="float: left;"><img src="http://ipic.su/7yGf5U" width="50px" height="70px" onclick="'+onclickStr+'"/>'
			//<input type="button" value="Проверить" onclick="isEmail()"></p>
			
			
			for (let i = 0; i < massButton.length; i++) {
			  stringbuttonmassiv += '<input type="button"  value="1" style="background: #0000ff; width:10px; height:70px;" onclick="this.disabled = true; style.background= \'#ff0000\'; '+massButton[i]+'"></input>'
			}
			stringbuttonmassiv += '<input type="button"  value="1" style="background: #0000ff; width:10px; height:70px;" onclick="this.disabled = true; style.background= \'#ff0000\'; '+onClickCancel+'; document.getElementById(\'userpanel\').setAttribute(\'style\',\'display:none;\');"></input></div>';
			d.innerHTML = stringbuttonmassiv;
			/*var b=document.createElement('input');
			b.setAttribute('type', 'button');
			b.setAttribute('value', 'GO');
			b.setAttribute('onclick', onclickStr);*/
			//d.appendChild(b);
			hideReklammBan();
		}
	}
	
}

function rotateDIV(div, deg){
	div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 
}
function hideReklammBan(){
	var elems = document.body.getElementsByTagName('div');
	
	 for (var i = 0; i<elems.length; i++) {
		 var zIndx = elems[i].style.zIndex;
		 if (zIndx == 2147483647){
			 console.log(elems[i])
			 elems[i].setAttribute('style', 'display:none');
			 
		 }
	 }
	 
	 
	 
}
function setURL(url){
	document.location.href = url;
}

function writeField(getElement, name, count, textcont){
	var appBanneres;
	switch(getElement){
		case "Name":
			appBanneres = document.getElementsByName(name); 
		break;
		case "ClassName":
			appBanneres = document.getElementsByClassName(name); 
		break;
		case "Id":
			appBanneres = document.getElementById(name); 
			appBanneres.value = textcont;
			return;
		break;
		case "TagName":
			appBanneres = document.getElementsByTagName(name); 
		break;
	}
	appBanneres[count].value = textcont;
}




















