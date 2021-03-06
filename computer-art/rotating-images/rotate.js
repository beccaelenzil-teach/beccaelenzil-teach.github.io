var img;
var vid;
var offset = 0;
var easing = 0.05;

function preload(){
  img = loadImage("moonwalk.jpg");  // Load an image into the program
  vid = createVideo(["light.m4v"]);
  
}

function setup() {
  createCanvas(800, 400, WEBGL);
  //vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function draw() {
  vid.volume(0.05)
  background(0)

  //background image
  texture(img,0,0);
  rectMode(CENTER)
  rect(0,0,800,400)
  
  //rotating flat image
  push()
  rotateX(frameCount*0.01)
  rectMode(CENTER)
  rect(0,0,800,400)
  texture(img,0,0);
  pop()
  
  //video on cube
  push()
  rotateY(frameCount*0.005)
  rotateX(frameCount*0.005)
  rotateZ(frameCount*0.005)
  texture(vid,0,0);  // Display at full opacity
  box(150,150,150)
  pop()
}