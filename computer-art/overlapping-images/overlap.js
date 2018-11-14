var img;
var offset = 0;
var easing = 0.05;

function preload(){
  img = loadImage("moonwalk.jpg");  // Load an image into the program
}

function setup() {
  createCanvas(800, 400, WEBGL);
}

function draw() {
  background(0)

  rectMode(CENTER)
  rect(0,0,800,400)
  texture(img,0,0);

  push()
  rotateX(frameCount*0.01)
  rectMode(CENTER)
  rect(0,0,800,400)
  texture(img,0,0);
  
  //translate(100,100,100)
  rotateY(frameCount*0.01)
  rotateX(frameCount*0.01)
  rotateZ(frameCount*0.01)
  
  texture(img,0,0);  // Display at full opacity
  box(100,100,100)
  
  pop()

  ////overlaping code
  //var dx = (mouseX-img.width/2) - offset;
  //offset += dx * easing;
  //tint(255, 127);  // Display at half opacity
  //texture(img, offset, 0);
}