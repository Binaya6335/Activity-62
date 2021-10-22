var bg,bgImg;
var player, PlayerImg,heartImg ;
var  Treasure;
var TreeImg;
var tree;


function preload(){
  
  PlayerImg = loadAnimation("assets/Imported Piskel.png")
  heartImg = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/bg.png")
  Treasure = loadImage("assets/Treasure Box.png")
  TreeImg  = loadImage("assets/Trees.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

//adding the walls of the maze
var wall1= createSprite(windowWidth/2+905,windowHeight/2-50,10,400);
var wall2= createSprite(windowWidth/2+685,windowHeight/2,10,300);
var wall3= createSprite(windowWidth/2+793,windowHeight/2+140,215,20);
var wall4= createSprite(windowWidth/2+415,windowHeight/2-245,990,10);
var wall5= createSprite(windowWidth/2+314,windowHeight/2-150,751,10)
wall1.shapeColor=('black');
wall2.shapeColor=('black');
wall3.shapeColor=('black');
wall4.shapeColor=('black');
wall5.shapeColor=('black');

tree= createSprite(windowWidth/2,windowHeight/2,20,20);


//creating thw winning trophy sprite
var winningtrophy = createSprite(windowWidth/2+800,windowHeight/2+30,20,20)
winningtrophy.addImage(Treasure)
winningtrophy.shapeColor=('#FFD700');
winningtrophy.scale=0.3
    

//creating the player sprite
player = createSprite(windowWidth/2-470, windowHeight-50 , 50, 50);
player.addAnimation("player",PlayerImg)
player.scale=0.3



}

function draw() {
  background(0,255,0); 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-15
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+15
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-15
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+15
}

if (player.isTouching(tree)){
  text("1- I can fly but have no wings. I can cry but I have no eyes . Who am I ??",windowWidth/2,windowHeight/2)
}

drawSprites();

}
