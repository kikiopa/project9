
var trex ,trex_running;
var ground,groundimage

function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

groundimage=loadImage("ground2.png")

}


function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,70);
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  //create a ground sprite
  ground=createSprite(200,180,400,20)
  ground.addImage(groundimage)


}

function draw(){
  background("white")
  
  //trex jumps as the space bar is pressed
  if(keyDown("space")){
    trex.velocityY=-10 
  }

  //add gravity to the trex
  trex.velocityY=trex.velocityY+0.8
    

  trex.collide(ground)



  drawSprites();

}
