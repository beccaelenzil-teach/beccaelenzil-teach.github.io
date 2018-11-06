var img;
var offset = 0;
var easing = 0.05;

function preload(){
  img = loadImage("moonwalk.jpg");  // Load an image into the program
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  //background(0)
  image(img, 0, 0);  // Display at full opacity
  var dx = (mouseX-img.width/2) - offset;
  offset += dx * easing;
  tint(255, 127);  // Display at half opacity
  image(img, offset, 0);
}