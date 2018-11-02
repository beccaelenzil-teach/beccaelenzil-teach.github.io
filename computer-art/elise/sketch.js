var x;
var y;
var img;
var song;

function preload(){
  song= loadSound("yoursong.mp3")
  img= loadImage("yourimage.jpg")
}

function setup() {
  createCanvas(466, 412);
  image(img,0,0)
  song.loop()
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw(){
  // ****Replace 200 with an RGB value [R,G,B]
  // where 0 <= R,G,B <=255****
  //background(6);
  image(img,0,0)
  // Draw a circle
  stroke(.5);
  //---------------------------------------
  // ****Replace 100 with an RGB value [R,G,B]
  // where 0 <= R,G,B <=255****
  //---------------------------------------
  fill(36);
  // ****Change the numbers 24 and see what happens****
  ellipse(x, y,42,42);
  y = y - .58 ;
  console.log(y)
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}




