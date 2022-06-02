
var trex ,trex_running,trex_collided;
var ground,invisibleGround, groundImage;
var obstacle,obstacleImage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  

}
obstacle.addAnimation(200,180,80,80)
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,180,20,50);
 trex.addAnimation("running", trex_running);

 ground=createSprite(200,180,400,20)
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-10
  }
trex.velocityY=trex.velocityY+0.8
trex.collide(ground);
drawSprites();
}
