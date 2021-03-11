window.onload = init;

var autoAjax;
var interval;
var timerAJAX;

var divpole;
var infotext;

var isLoop;

var mouseX;
var mouseY;
var isDrag;
var isDragDiv;

var home;
var typeHome;

var player;
var name_login;
var isDownlodGame;

var playeers_map;

var requestAnimFrame = window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;

function init(){

	name_login = document.getElementById("name_login").value;
	
	infotext = document.getElementById("infotext");
	divpole = document.getElementById("pole");
	isLoop = false;
	isDrag = false;
	autoAjax = true;
	interval = 6000;
	isDownlodGame = false;
	//////////////////////////////GET HOME/////////////////
		home = document.getElementById("HomeObj");
		typeHome = 1;
		ajaxPOST('../game/getHome.php', 'type='+typeHome+'', callback_getHome);
		
	////////////////////////////////////////////////////
	
	playeers_map = new Map();
	ajaxPOST('../game/infostart.php', 'name='+name_login, callback_infostart);

	//startPlayer(name_login, 450, 200, 0, 0);

	
	divpole.addEventListener("mousemove", mouseMove, false); //стадия всплытия
	divpole.addEventListener("mousedown", mouseDown, false); 
	divpole.addEventListener("mouseup", mouseUp, false); 
	divpole.addEventListener("mouseover", mouseOver, false); 
}

function loop(){
	if (isLoop){
		upDate();
		requestAnimationFrame(loop);
	}
}


function startloop(){
	isLoop = true;
	loop();
	intervaler();
	timerAJAX = setInterval(intervaler, interval);
}

function intervaler(){
	
		ajaxPOST('../game/coord_players.php', 'name='+player.get_name+'&pl_x='+player.get_coorX+'&pl_y='+player.get_coorY+'', callback_coord);
	
	
}

function stoploop(){
	isLoop = false;
}

function mouseMove(e){//e - event
	var divpolecoor = divpole.getBoundingClientRect();
	mouseX = e.clientX - divpolecoor.left;
	mouseY = e.clientY - divpolecoor.top;
	infotext.innerHTML = "mouseX: "+mouseX+" / mouseY: "+mouseY+"<br>div pole X:"+divpolecoor.left+"/ div pole Y:"+divpolecoor.top;
	
	if(isDrag){
		
		if (isDragDiv==player.get_div){
			player.set_coorX = mouseX;
			player.set_coorY = mouseY;
		}
	}
}

//ajaxPOST('../game/coord_players.php', 'test=rect&fork=coin', callback_coord);
function mouseDown(e){//e - event
	isDrag = true;
	//alert(isDragDiv);
	
	
}

function mouseUp(e){
	isDrag = false;
}
function mouseOver(e){
	//e.target - элемент на котором мышь
	if(!isDrag){
		isDragDiv = e.target;
	}
	
}

function moveplayers(player){
	
}

function startPlayer(name, s_coorX, s_coorY, s_speedX, s_speedY){
	var player_obj;
	var divPlayeer = document.createElement("div");
	divPlayeer.className = "playeer";
	divPlayeer.innerHTML = name;
	divpole.appendChild(divPlayeer);
	player_obj = new Playeer(name, divPlayeer);
	player_obj.set_coorX = s_coorX;
	player_obj.set_coorY = s_coorY;
	player_obj.set_speedX = s_speedX;
	player_obj.set_speedY = s_speedY;
	player_obj.drag = false;
	player_obj.set_div = divPlayeer;
	player_obj.update_coord();
	
	playeers_map.set(name, player_obj);
	if(name==name_login){
		player = player_obj;
	}
}

function upDate(){
	
	for (let key of playeers_map.keys()) {
		playeers_map.get(key).update_coord();
	}
}



class Playeer{
	
	constructor(name, div){
		this.name = name;
		this.div = div;
		this.coorX = 200;
		this.coorY = 0;
		this.speedX = 0;
		this.speedY = 0;
	}
	get get_coorX(){
		return this.coorX;
	}
	set set_coorX(coordX){
		this.coorX = coordX;
	}
	get get_drag(){
		return this.drag;
	}
	set set_drag(drag){
		this.drag = drag;
	}
	get get_coorY(){
		return this.coorY;
	}
	set set_coorY(coordY){
		this.coorY = coordY;
	}
	get get_speedX(){
		return this.speedX;
	}
	set set_speedX(speedX){
		this.speedX = speedX;
	}
	get get_speedY(){
		return this.speedY;
	}
	set set_speedY(speedY){
		this.speedY = speedY;
	}
	get get_div(){
		return this.div;
	}
	set set_div(div){
		this.div = div;
	}
	update_coord(){
		var cX = this.coorX - 25;
		var cY = this.coorY - 25;
		this.div.style.left = cX+"px";
		this.div.style.top = cY+"px";
	}
	get get_name(){
		return this.name;
	}
}

function mouseOverHome(){
	console.log("mouseOverHome");
	typeHome = 2;
	ajaxPOST('../game/getHome.php', 'type='+2+'', callback_getHome);
}
function mouseOutHome(){
	console.log("mouseOutHome");
	typeHome = 1;
	ajaxPOST('../game/getHome.php', 'type='+1+'', callback_getHome);
}
function homeClick(){
	alert("Home");
}


function callback_coord(text){
	console.log(text);
	//
	var objJson = JSON.parse(text);
	/*	{"code":0,"code_message":"SUCCESS","name":"deff83","coord":
	[
		{"name":"deff83","coor_x":"450","coor_y":"200"},
		{"name":"Deff85","coor_x":"309","coor_y":"184"},
		{"name":"djagerd","coor_x":"208","coor_y":"314"}
	]
	}
	*/
	var code = objJson.code;
	var code_message = objJson.code_message;
	var name = objJson.name;
	if(code==0){
		var massivJson_obj = objJson.coord;
		for(var i = 0; i < massivJson_obj.length; i++){
			var name_loc = massivJson_obj[i].name;
			var coor_x_loc = massivJson_obj[i].coor_x;
			var coor_y_loc = massivJson_obj[i].coor_y;
			if (playeers_map.has(name_loc)){
				var playget = playeers_map.get(name_loc);
				playget.set_coorX = coor_x_loc;
				playget.set_coorY = coor_y_loc;
				playget.set_speedX = 0;
				playget.set_speedY = 0;
			}else{
				startPlayer(name_loc, coor_x_loc, coor_y_loc, 0, 0);
			};
			
		}
	}
}

function callback_infostart(text){
	console.log(text);
	var objJson = JSON.parse(text);
	var code = objJson.code;
	var code_message = objJson.code_message;
	var name = objJson.name;
	if(code==0){
		var massivJson_obj = objJson.coord;
		var name_loc = massivJson_obj.name;
		var coor_x_loc = massivJson_obj.coor_x;
		var coor_y_loc = massivJson_obj.coor_y;
		startPlayer(name_loc, coor_x_loc, coor_y_loc, 0, 0);
		startloop();
	}else{
		console.log(text);
	}
}

function callback_getHome(text){
	console.log(text);
	var divHome = document.createElement("div");
		divHome.className = "HomeObj";
		divHome.innerHTML = text;
		home.innerHTML = "";
		if (typeHome == 1) {
			divHome.addEventListener("mouseover", mouseOverHome, true); 
		}
		
		if (typeHome == 2) {divHome.addEventListener("mouseout", mouseOutHome, true);
					
		}
		divHome.onclick = homeClick;
		home.appendChild(divHome);
	
}
	
	///////////////////////////////////////////
