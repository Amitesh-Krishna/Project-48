
var birdy;

function setup() {
	createCanvas(800, 800);

	birdy = createSprite(50,400,20,20);
}


function draw() {
	background(0,255,255);

	Move();

	drawSprites();
}

function Move(){
	birdy.velocityX = 2;
	camera.x += 2;

	if(keyWentDown(32)){
		birdy.velocityY = -10;
	}

	birdy.velocityY += 0.4;
}

