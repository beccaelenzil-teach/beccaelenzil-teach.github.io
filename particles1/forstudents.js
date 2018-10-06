// initialize variables
var img;
var song;

function preload(){
  // load your song and image
  song = loadSound("yoursong.m4a")
  img = loadImage("yourimage.jpg")
}

function setup(){
  //change canvas size to be same as image
  createCanvas(image_width, image_height)
  //draw image to canvas
  image(img, 0, 0)
  //loop song
  song.loop() 
}

function draw(){
  //comment out background(0) and draw image
  image(img, 0, 0)
}