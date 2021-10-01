

window.load = init();

var Progresses = []
var proccesesforSt;

chrome.extension.sendMessage('saveTab', function(backMessage){
			
		});




function init(){
	
}


function click(){
	alert('yu');
}



function creatDivForProgress(prog, i){
	var divcreate = "<div id='progress"+i+"' class='progress'><input type='checkbox'  class='checkbox'><div class='textcaptcha'></div><div class='content'><div class='progressbar'></div><div class='textProgress'>"+prog.name + "</div><div class='balance'></div><div class='balanceUSD'></div><div class='testtext'></div></div></div>";
	
	return divcreate;
}

function firstinit(i){
	setProgressBar(i);
}

function updateDivForProgress(prog, i){
	var divclick = document.getElementById("progress"+i).getElementsByClassName('content')[0];
	divclick.onclick = function () {
		/////////////////////
		chrome.extension.sendMessage('startClick '+i, function(backMessage){});
		
	}
	if((prog.startintervalDOGE / prog.intervalDOGE) > 1){Progresses[i].update(100);
	}else{
		Progresses[i].update((prog.startintervalDOGE / prog.intervalDOGE)*100);
	}
	
	if(prog.boolStartingDOGE){
		document.getElementById("progress"+i).className = 'progress-nenorm';
	}else{
		document.getElementById("progress"+i).className = 'progress';
	}
	
	
	
	var updateTextProgress = prog.name;  
	console.log(parseFloat(prog.balance)+" /"+ prog.delited);
	// + (prog.startintervalDOGE % prog.intervalDOGE);
	var textProgressBar = document.getElementById('progress'+i).getElementsByClassName('content')[0].getElementsByClassName('textProgress')[0];
	textProgressBar.innerHTML = updateTextProgress;
	var balanceProgress = document.getElementById('progress'+i).getElementsByClassName('content')[0].getElementsByClassName('balance')[0];
	balanceProgress.innerHTML = (parseFloat(prog.balance) / prog.delited);
	var testtextProgress = document.getElementById('progress'+i).getElementsByClassName('content')[0].getElementsByClassName('testtext')[0];
	testtextProgress.innerHTML =  prog.text_test;
	var textcaptchaProgress = document.getElementById('progress'+i).getElementsByClassName('textcaptcha')[0];
	if (prog.text_captcha!=null) textcaptchaProgress.innerHTML =  prog.text_captcha;
	
	//console.log(prog.text_captcha);
	if (prog.text_captcha!=null){
		if (prog.text_captcha.includes('v3')){
		
			document.getElementById('progress'+i).style.border = "3px dashed green";
		}
		if (prog.text_captcha.includes('v2')){
		
			document.getElementById('progress'+i).style.border = "1px solid blue";
		}
	}
	
	var balanceProgress = document.getElementById('progress'+i).getElementsByClassName('content')[0].getElementsByClassName('balanceUSD')[0];
	balanceProgress.innerHTML =  Math.floor((parseFloat(prog.balance) / prog.delited)*prog.multUSD*100)/100 + "$";
	var checkboxProgress = document.getElementById('progress'+i).getElementsByClassName('checkbox')[0];
	if (prog.userBool){
		checkboxProgress.checked = true;
	}else{
		checkboxProgress.checked = false;
		document.getElementById("progress"+i).className = 'progress-otkluch';
	}
	checkboxProgress.onclick = function (){
		chrome.extension.sendMessage('checkBox '+i, function(backMessage){});
	}
}



function setProgressBar(i) {
      var n, id, progress;

       progress = new CircularProgress({
        radius: 30,
        strokeStyle: 'black',
        lineCap: 'square',
        lineJoin: 'round',
        lineWidth: 3,
        shadowBlur: 0,
        shadowColor: 'yellow',
        text: {
          font: 'bold 15px arial',
          shadowBlur: 0
        },
        initial: {
          strokeStyle: 'white',
          lineCap: 'square',
          lineJoin: 'round',
          lineWidth: 3,
          shadowBlur: 10,
          shadowColor: 'black'
        }
      });

      var elementProgressBar = document.getElementById('progress'+i).getElementsByClassName('content')[0].getElementsByClassName('progressbar')[0];
	  
elementProgressBar.appendChild(progress.el);
	Progresses[i] = progress;
      
}

var startButt = document.getElementById("startButt");
var clearButt = document.getElementById("clearButt");
var clearInfo = document.getElementById("clearInfo");
var clearButt1 = document.getElementById("Butt1");

var save1 = document.getElementById("save1");
var save2 = document.getElementById("save2");



chrome.extension.sendMessage('getBoolStartingTrue', function(backMessage){
	if(backMessage){
		//startButt.setAttribute("Style", "display:none");
		document.getElementById("buttonsdiv").setAttribute("Style", "display:none");
		document.getElementById("infotestStart").setAttribute("Style", "display:none");
		doTimerForrs();
	}
});




startButt.onclick = function (){
	
	document.getElementById("infotestStart").setAttribute("Style", "display:none");
	document.getElementById("buttonsdiv").setAttribute("Style", "display:none");

	//startButt.setAttribute("Style", "display:none");
	//clearButt.setAttribute("Style", "display:none");
	
	chrome.extension.sendMessage('setBoolStartingtrue', function(backMessage){});
	for(var i=0; i< proccesesforSt.length; i++){
		var chec = document.getElementById('checkboxSt'+i).getElementsByTagName('input')[0];
		console.log(chec.checked);
		if(chec.checked) chrome.extension.sendMessage('checkBoxSTrue'+i, function(backMessage){});
		if(chec.checked==false) chrome.extension.sendMessage('checkBoxSFalse'+i, function(backMessage){});
		
	}
	
	
	doTimerForrs();

}

clearButt.onclick = function (){
	chrome.extension.sendMessage('setBoolAllFalse', function(backMessage){
		
		location.reload();
	});
	
}

clearButt1.onclick = function (){
	chrome.extension.sendMessage('setclearButt1', function(backMessage){
		
		location.reload();
	});
	
}



clearInfo.onclick = function (){
	chrome.extension.sendMessage('clearinfo', function(backMessage){
		
		location.reload();
	});
	
}

save1.onclick = function (){
	chrome.extension.sendMessage('save1', function(backMessage){
		
		location.reload();
	});
	
}

save2.onclick = function (){
	chrome.extension.sendMessage('save2', function(backMessage){
		
		location.reload();
	});
	
}


function doTimerForrs(){
	
	setInterval(function (){
		
		chrome.extension.sendMessage('Deff83-test', function(backMessage){
				var appBanneres = document.getElementById("infotest"); 
				
				if(appBanneres.innerHTML == ''){
					
					for(var i=0; i< backMessage.length; i++){
						appBanneres.innerHTML += creatDivForProgress(backMessage[i], i);
						
					}
					for(var i=0; i< backMessage.length; i++){
						firstinit(i);
						
					}
					
					console.log(elementProgressBar);
				}else{
					
					
					
					updatePage(backMessage);
					
					var text_countVkl = "";
					for(var i=0; i< backMessage.length; i++){
						updateDivForProgress(backMessage[i], i);
						if (backMessage[i].userBool) text_countVkl = text_countVkl + i + ", "
					}
					
					
					updatecountVkl(text_countVkl);
					
				}
			});
			
		chrome.extension.sendMessage('Deff83-infortest', function(backMessage){
				updateRemoveUrl(backMessage);
			});
		
			
			
			
	}, 5000);
	
	

}



function updatecountVkl(text_countVkl){
	var countVkl = document.getElementById('countVkl');
	
	
	countVkl.innerHTML =  text_countVkl;
}

function updateRemoveUrl(backMassage){
	var removeUrl = document.getElementById('removeUrl');
	
	var removeUrltext = "";
	
	for(var i = 0; i < backMassage.length; i++){
		removeUrltext = removeUrltext + '"' + backMassage[i] + '"' + ", ";
	}
	
	
	removeUrl.innerHTML =  removeUrltext;
}


function updatePage(backMessage){
	
	chrome.extension.sendMessage('Deff83-block', function(backMessage){
		if(backMessage){
		document.getElementById('particles-js').className = 'particles-js2';
		console.log(document.getElementById('particles-js'));
	}else{document.getElementById('particles-js').className = 'particles-js1';};
		console.log('backMessage'+backMessage);
	});
	summa = 0
	for(var i=0; i< backMessage.length; i++){
		summa += (parseFloat(backMessage[i].balance) / backMessage[i].delited)*backMessage[i].multUSD;
	}
	var balanceProgress = document.getElementById('summUsd');
	balanceProgress.innerHTML =  Math.floor(summa*100)/100 + "$";
	
}





chrome.extension.sendMessage('Deff83-test', function(backMessage){
	var appBanneres = document.getElementById("infotestStart"); 
	appBanneres.innerHTML += "<ul>";
		for(var i=0; i< backMessage.length; i++){
			
			var bool_boolStart = backMessage[i].boolStart;
			if (bool_boolStart){
				appBanneres.innerHTML += "<div id='checkboxSt"+i+"'><input type='checkbox' checked>"+backMessage[i].name+"</input></div>";
			}else{
				appBanneres.innerHTML += "<div id='checkboxSt"+i+"'><input type='checkbox'>"+backMessage[i].name+"</input></div>";
			}
			
			
		}
	appBanneres.innerHTML += "</ul>";
		proccesesforSt = backMessage;
	
});































