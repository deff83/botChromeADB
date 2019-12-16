window.onload = init;
function init(){
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
 
setInterval( test, 100 );

