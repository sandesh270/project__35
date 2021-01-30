var backgroundImg;
var airBalloon , flying;
function preload(){
  backgroundImg = loadImage("images/background.png")
  flying = loadAnimation("images/1.png","images/2.png","images/3.png")
}
function setup() {
  createCanvas(800+400,400+300);
 airBalloon = createSprite(250,350,100,100);
 airBalloon.addAnimation("flying",flying);
 airBalloon.scale = 0.5
 ground = createSprite(600,690,1200,20)
 ground.visible = false;
 ground1 = createSprite(600,10,1200,20)
 ground1.visible = false;
 ground2 = createSprite(10,350,20,700)
 ground2.visible = false;
 ground3 = createSprite(1190,350,20,700)
 ground3.visible = false;
}

function draw() {
  background(backgroundImg); 
  if(keyIsDown(UP_ARROW)){
    airBalloon.y-=10
  }
  if(keyIsDown(DOWN_ARROW)){
    airBalloon.y+=10
  }
  if(keyIsDown(LEFT_ARROW)){
    airBalloon.x-=10
  }
  if(keyIsDown(RIGHT_ARROW)){
    airBalloon.x+=10
  }
  if(airBalloon.y>50){
  airBalloon.scale = airBalloon.y/533
  }
  airBalloon.collide(ground)
  airBalloon.collide(ground1)
  airBalloon.collide(ground2)
  airBalloon.collide(ground3)
  
  fill(255,0,0)
  textSize(30)
  text("use arrow keys to move airballoon",20,50)
  drawSprites();
}
