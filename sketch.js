var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;
var leaf;
var leafImg;
var score;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x=mouseX;
score = 0
}
 

function draw() {
  background(0);
  
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples()
    }
  else{
    createLeaves()
  }
  }  
  drawSprites();
}


function createApples() {
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.velocityY = 2;
apple.lifetime = 115;
apple.scale = 0.1;
}
function createLeaves() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 2;
  leaf.lifetime = 115;
  leaf.scale = 0.1;
}
var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples()
    }
  else{
    createLeaves()
  }
  }  