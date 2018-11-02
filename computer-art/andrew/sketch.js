var x = 50;
var y = 50;
var xspeed = 5;
var yspeed = 2;

var r = 25;

// initialize variables
var img;
var song;

function preload(){
  song = loadSound("deep-bass.htm")
  //img = loadImage("big-mouth-picture.jpg")
}

function setup(){
  //song.loop()
  image(img,0,0)
  createCanvas(288, 369);
}

function draw() {
  image(img,0,0)
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}

