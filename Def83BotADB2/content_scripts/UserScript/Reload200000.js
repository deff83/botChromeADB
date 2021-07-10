try{
	
	setTimeout(function() {
	location.reload();
	}, 200000);
	
	let mue = 0
	var bool_mue = true;
	
	drawDIVCount(mue);
	
	var refreshIntervalIdpo = window.setInterval(function() {
		if (bool_mue) {
			mue = mue + 1;
			document.getElementById("mue_lk").innerHTML = '<p style="color:#FFFFFF";>'+mue+'</p>';
			if (mue > 199 ){
				location.reload();
			}
		}
		
	}, 1000);

	
	
	document.getElementById("mue_lk").onclick = function (){
		clearInterval(refreshIntervalIdpo);
	};
	
	
}catch(Exc){}