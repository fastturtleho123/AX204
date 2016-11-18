console.log("hahaha");

//Declaring variables at the top
var game = new Phaser.Game(800,500,Phaser.AUTO,'',{preload:preload,create:create,update:update})
;

var score = 0;

function preload(){
	//load some assets
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png')
}

function create(){
	//define the physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//add the sky
	game.add.sprite(0,0, 
		'sky');
}

function update(){

}