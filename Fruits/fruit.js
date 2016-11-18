//Declare all  variables at the top
var canvas;
var ctx;
//Starting position and radius of player sprite
var x = 300;
var y = 300;
var r = 20;
//Holding the speed in the x and y directions
var mx = 0;
var my = 0;
//Save position of fruit
var goodX;
var goodY;
var badX;
var badY;
var spriteWidth = 50;
var spriteHeight = 50;
// Boolean to keep track of whether collision is occuring
var goodCollision = false;
var badCollision = false;
//Width and height of our Canvas
var WIDTH = 600;
var HEIGHT = 600;
var score = 0;

//Draw cicle to denote player sprite
function circle(x,y,z){
	beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle= "tomato";
	ctx.fill();
}

//Wipe our whole canvas
function clear() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//Import our images into canvas
function drawGood(){
	ctx = doncument.getElementById('myCanvas').getContext('2d');
	var good = new Image();
	good.src="imagres.png"
	ctx.drawImage(good,goodX,goodY,50,50);
	bad.src="images.png"
	ctx.drawImage(bad,badX,badY,50,50);

}


//Initialize our animation
function init(){
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	//put sprites in random position
	badX = Math.floor(Math.random()*);
	badY = Math.floor(Math.random()*);
	goodX = Math.floor(Math.random()*);
	goodY = Math.floor(Math.random()*);
	//Wait for a keyboard event, then call a function
	window onkeydown = keydownControl();
	//Set the draw() to run every 10 ms
	return setInterval(draw,10);

}
//Draw scene function
function draw(){

	//Call clear() to wipe canvas and draw circle & sprites
	clear();
	circle(x,y,r);
	drawGood();
	drawBad();
	//Tell the sprite to bounce off the walls
	if(x+mx> WIDTH- r || x +mx <0+r);{
		mx = -mx
	} else if(y+my> WIDTH- r || y+my <0+r);{
		my = -my
	}

	//Move our sprite
	x+=mx;  //Same as x = +mx
	y+=mx;  
	//Check for collisions
	collisionCheck();
	collisionHandle();


//Check for collisions(logic)
function collisionCheck(){
	if((x>=badX)&&(x<= badX +spriteWidth)&&(y >= badY)&&(y <= badY +spriteHeight)){
		badCollision = true;
	}else{
		badCollision = false;
	}

}

	if((x>=goodX)&&(x<= goodX +spriteWidth)&&(y >= goodY)&&(y <= goodY +spriteHeight)){
		goodCollision = true;
	}else{
		goodCollision = false;
	}

}
//Handles what happens if there is a collision
function collisionHandle(){
	if(badCollision == true) {
	badX = Math.floor(Math.random()*);
	badY = Math.floor(Math.random()*);
	score-= 1;
	document.getElementById("score").innerHTML = score;
	}
		if(goodCollision == true) {
	badX = Math.floor(Math.random()*);
	badY = Math.floor(Math.random()*);
	score-= 1;
	document.getElementById("score").innerHTML = score;
	}



//Function to check which key is being pressed
function keydownControl(e) {
	if (e.keyCode == 37){
		mx=-4;
		my= 0;
	}else if(e.keyCode == 38){
		mx=-0;
		my= 4;
}else if(e.keyCode == 39){
		mx=-0;
		my= 4;


//Calling the entry point function
init();
































