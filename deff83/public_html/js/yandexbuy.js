window.onload = init;

function init(){
	var button = document.getElementById("buy_add");
	button.onclick = handleButtonClick;
	
}

function handleButtonClick() {
	function isNumeric(n) {
	   return !isNaN(parseFloat(n)) && isFinite(n);
	}
	var summs = document.getElementById("summ").value.replace(',', '.');
	if(isNumeric(summs)) 
	{
	   //число
	   if (summs < 2){
		   
	   }else{
		   
		   postinyandex();
	   }
	}else{   //"не число"
		document.getElementById("summ").className = "red-border";
	}
	
	function postinyandex(){
		var inputadd = document.createElement("input");
		inputadd.type = "hidden";
		inputadd.name="successURL";
		inputadd.value= String.fromCharCode(104,116,116,112,115,58,47,47,109,111,110,101,121,46,121,97,110,100,101,120,46,114,117);
		var posterel = document.getElementById("poster");
		posterel.appendChild(inputadd);
		//<input type="hidden" name="receiver" value="410017696650339">
		
		var inputaddf = document.createElement("input");
		inputaddf.type = "hidden";
		inputaddf.name="receiver";
		inputaddf.value= "410017696650339";
		var posterelf = document.getElementById("poster");
		posterelf.appendChild(inputaddf);
		
		document.getElementById("poster").submit();
		
	}
	
}


