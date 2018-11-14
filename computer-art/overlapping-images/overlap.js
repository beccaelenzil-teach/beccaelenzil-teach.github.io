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
  image(img, 0, 0);
  var dx = (mouseX-img.width/2) - offset;
  offset += dx * easing;
  tint(255, 127);  // Display at half opacity
  image(img, offset, 0);
}