var birdy;
var obs = [];
var gameState = 0;

function setup() {
	createCanvas(800, 800);

	birdy = createSprite(50,400,20,20);
	birdy.shapeColor = "yellow";
}


function draw() {
	background(0,255,255);

	if(gameState == 0){
		//Game playing

		Move();
		createObstacles();

		for(var i = 0;i<obs.length;i++){
			if(birdy.isTouching(obs[i])){
				gameState = 1;
			}
		}
	}
	else if(gameState == 1){

		birdy.velocityX = 0;
		birdy.velocityY = 10;
	}
	else if(gameState == 2){
		// Game won
	}
	drawSprites();
}

function Move(){
	birdy.velocityX = frameCount/100;
	camera.x += frameCount/100;

	if(keyWentDown(32)){
		birdy.velocityY = -10;
	}

	birdy.velocityY += 0.4;
}

function createObstacles(){
	if(frameCount % 100 == 0){
		var obsY = random(0,250);

		var obsUp = createSprite(birdy.x + 750,obsY,50,500);
		obsUp.lifetime = 400;
		obsUp.shapeColor = "lime";
		var obsDown = createSprite(birdy.x + 750,obsY + 650,50,500);
		obsDown.lifetime = 400;
		obsDown.shapeColor = "lime";

		obs.push(obsUp);
		obs.push(obsDown);
	}
}