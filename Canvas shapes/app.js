//Loading my sprite
var pikachu = new Image();
pikachu.src = "pika.png";
//Drawing sprite on to canvas
pikachu.onload = function(){
	ctx5.drawImage(pikachu, 50, 300, 60, 80);
}
//Loading my sprite
var snorlax = new Image();
snorlax.src = "snorlax.png";
//Drawing sprite on to canvas
snorlax.onload = function(){
	ctx5.drawImage(snorlax, 550, 250, 200, 300);
}
//Loading my sprite
var tree = new Image();
tree.src = "tree.png";
//Drawing sprite on to canvas
tree.onload = function(){
	ctx5.drawImage(tree, 480, 220, 500, 300);
}





var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");
//telling canvas to prepare to draw
ctx.beginPath();
//Set color for our pen
ctx.strokeStyle = "yellow";
//move my pen tip to a coordinate
ctx.moveTo(75,0);
//Move my pen tip again, except this time draw a line
ctx.lineTo(150,100);
ctx.lineTo(75,200) 
ctx.lineTo(0,100);
//Automaticlly line back to our starting point
ctx.closePath();
//Actually drawing
ctx.stroke();
//Change the fill color
ctx.fillStyle = "red";
//Actually fill the shape with color
ctx.fill();

var c2 = document.getElementById("MyCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.fillStyle = "purple";
ctx2.fill();

var c3 = document.getElementById("MyCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(150,150,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "magenta";
ctx3.fill();

var c4 = document.getElementById("MyCanvas4");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.strokeStyle = "green";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(150,0);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(300,0);
ctx4.lineTo(150,0);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "orange";
ctx4.fill();


var c5 =document.getElementById("scene");
var ctx5 = c5.getContext("2d");
//Sky and Land
ctx5.fillStyle="green"
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle="lightblue"
ctx5.fillRect(0,0,800,350);
//Sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="orange"
ctx5.fill();
//Road
ctx5.beginPath();
ctx5.moveTo(300,500);
ctx5.lineTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="grey";
ctx5.fill();
ctx5.fillRect(100,250,200,100);
ctx5.clearRect(130,280,30,30);
ctx5.clearRect(170,280,30,30);
ctx5.clearRect(210,280,30,30);
ctx5.clearRect(250,280,30,30);



















