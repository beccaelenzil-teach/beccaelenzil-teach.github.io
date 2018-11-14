var img;
var offset = 0;
var easing = 0.05;
var vid;

function preload(){
  img = loadImage("moonwalk.jpg");  // Load an image into the program
  vid = createVideo(["light.m4v"]);
  
}

function setup() {
  createCanvas(800, 400, WEBGL);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function draw() {
  background(0)

  texture(img,0,0);
  rectMode(CENTER)
  rect(0,0,800,400)
  

  push()
  rotateX(frameCount*0.01)
  rectMode(CENTER)
  rect(0,0,800,400)
  texture(img,0,0);
  
  //translate(100,100,100)
  rotateY(frameCount*0.005)
  rotateX(frameCount*0.005)
  rotateZ(frameCount*0.005)
  
  texture(vid,0,0);  // Display at full opacity
  box(150,150,150)
  
  pop()

  ////overlaping code
  //var dx = (mouseX-img.width/2) - offset;
  //offset += dx * easing;
  //tint(255, 127);  // Display at half opacity
  //texture(img, offset, 0);
}