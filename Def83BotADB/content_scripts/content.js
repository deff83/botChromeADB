/*

*/



window.onload = init;

function drawDIVGround(left, top, width, height, angle, ground){
	var d=document.createElement('div');
	d.style.position = 'absolute';
	var leftblock =  left - width / 2;
	d.style.width = width+'px';
	d.style.height = height+'px';
	d.style.left = leftblock+'px';
	var topblock =  top - height / 2;
	d.style.top = topblock+'px';
	switch (ground){
		case '1':
			d.style.background = '#fff000';
			break;
		case '2':
			d.style.background = '#00ff00';
			break;
	}
	rotateDIV(d, angle);
	document.body.appendChild(d);
	return d;
	//console.log('тут');
}
var ObjPage = function(message, html, src){
	this.html = html;
	this.src = src;
	this.message = message;
}

function init(){
	console.log("initing");
	//alert('тут1');
	/*
	clickButton("Id", "SubmitButton", 0);
	hideDiv("TagName", "h1", -1);
	hideDiv("ClassName", "aspNetHidden", -1);
	hideDiv("ClassName", "navbar", -1);
	hideDiv("ClassName", "col-sm-3 hidden-xs", -1);
	hideDiv("ClassName", "col-sm-6 semi-trans", -1);*/
	//chrome.extension.sendMessage(window.location.hostname, function(backMessage){
		
			chrome.extension.sendMessage(new ObjPage('content' , document.documentElement.innerHTML, window.location.hostname), function (message){
				if(message == 'reload') setTimeout(function() {init(); }	, 1000);
				if(message == 'reload2') setTimeout(function() {init(); }	, 5000);
			});
		
	
	
}


function preload(){
	chrome.extension.sendMessage(new ObjPage('preload' , document.documentElement.innerHTML, window.location.hostname), function (message){

		});
	console.log("preload", window.location.hostname);
}

preload();














