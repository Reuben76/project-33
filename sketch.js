var snowimage

function preload(){
snowimage = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowimage);  
  drawSprites();
}