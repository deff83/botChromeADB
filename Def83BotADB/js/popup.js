window.onload = init;


console.log('tyt');
var appBanneres = document.getElementsByClassName("test")[0]; 
appBanneres.innerHTML += '2';


function init(){
	var appBanneres = document.getElementsByClassName("test")[0]; 
	appBanneres.innerHTML += '1';
}




var checkbox1 = document.getElementById('check1');
var checkbox2 = document.getElementById('check2');
var checkbox3 = document.getElementById('check3');



checkbox2.onclick = function (){	
	chrome.extension.sendMessage('setboolactivechangeHigh'+checkbox2.checked, function(backMessage){});
}


checkbox1.onclick = function (){
	if (checkbox2.checked){
	chrome.extension.sendMessage('setboolactivechange'+checkbox1.checked, function(backMessage){});
	}else{
		checkbox1.checked = false;
	}
}

checkbox3.onclick = function (){	
	chrome.extension.sendMessage('setBoolStarting'+checkbox3.checked, function(backMessage){});
	
	if (checkbox3.checked==false){
		chrome.extension.sendMessage('setboolactivechange'+false, function(backMessage){});
		chrome.extension.sendMessage('setboolactivechangeHigh'+false, function(backMessage){});
		checkbox1.checked = false;
		checkbox2.checked = false;
		
	}else{
		//chrome.extension.sendMessage('setboolactivechangeHigh'+true, function(backMessage){});
		//checkbox2.checked = true;
	}
}



chrome.extension.sendMessage('getBoolStartingTrue', function(backMessage){
	checkbox3.checked = backMessage;
});

chrome.extension.sendMessage('getboolactivechange', function(backMessage){
	checkbox1.checked = backMessage;
});

chrome.extension.sendMessage('getboolactivechangeHigh', function(backMessage){
	checkbox2.checked = backMessage;
});


/*

	//alert('trf');
	chrome.extension.sendMessage('Deff83-test', function(backMessage){
		var appBanneres = document.getElementsByClassName("test")[0]; 
		appBanneres.innerHTML = 'Обратно принято из фона:'+backMessage;
	});
	
}
function test(){
  chrome.extension.sendMessage('Deff83-test', function(backMessage){
		var appBanneres = document.getElementsByClassName("test")[0]; 
		appBanneres.innerHTML = 'Обратно принято из фона:'+backMessage;
	});
}
 
//setInterval( test, 100 );

*/