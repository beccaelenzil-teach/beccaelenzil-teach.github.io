//parameters that can be changed
var x = 320;
var y = 180;
var x2 = 50;
var y2 = 500;
var x3 = 122;
var y3 = 68;

var xspeed = 30;
var yspeed = 120;
var xspeed2 = 220;
var yspeed2 = 80;
var xspeed3 = 60;
var yspeed3 = 270;

var canvas_height = 600
var canvas_width = 600

var r = 50;
var n = 50;

//initializing variables
var x0 = 0
var y0 = 0

var distance = 100;

var img;
var song;

function preload(){
  //load your song and image
  song = loadSound("https://raw.githubusercontent.com/bushschool/data-storage/master/weird-al-yankovic-weasel-stomping-day.mp3")
  img = loadImage("Weasel.jpg")
}

function setup() {
  //change canvas size to be same as image
  createCanvas(1200,1000);
  //draw image to canvas
  image(img, 0, 0)
  //loop song
  song.loop()
}

function draw() {
  //commnet out background(0) and draw image
  image(img, 0, 0)

  //background(R,G,B,transparency)
  //background(0,0,0,5);
  

  horz_space = width/n
  vert_space = width/n
  
  //for (i = 1; i<n; i++){
    //x0 = horz_space*i
    //for (j = 1; j<n; j++){
      //y0 = vert_space*j
      //fill(random(255),random(255),random(255))
    	//fill(0,0,0)
  		//ellipse(x0, y0, r/15, r/5)
    //}
  //}
  
  //body
  fill([68, 47, 4])
  ellipse(x, y, r*2, r*2);
  //iris
  fill([255,0,0])
  ellipse(x, y, r/2, r/2);
  //pupil
  fill([0,0,0])
  ellipse(x, y, r/4, r/4);
  
  //body
  fill([68, 47, 4])
  ellipse(x2, y2, r*2, r*2);
  //iris
  fill([255,0,0])
  ellipse(x2, y2, r/2, r/2);
  //pupil
  fill([0,0,0])
  ellipse(x2, y2, r/4, r/4);
  
  //body
  fill([68, 47, 4])
  ellipse(x3, y3, r*2, r*2);
  //iris
  fill([255,0,0])
  ellipse(x3, y3, r/2, r/2);
  //pupil
  fill([0,0,0])
  ellipse(x3, y3, r/4, r/4);

  
  x -= xspeed;
  x2 += xspeed2;
  x3 += xspeed3;
  
  y -= yspeed;
  y2 += yspeed2;
  y3 -= yspeed3;
  
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  
  if (x2 > width - r || x2 < r) {
    xspeed2 = -xspeed2;
  }
  if (y2 > height - r || y2 < r) {
    yspeed2 = -yspeed2;
  }
  
  if (x3 > width - r || x3 < r) {
    xspeed3 = -xspeed3;
  }
  if (y3 > height - r || y3 < r) {
    yspeed3 = -yspeed3;
  }
  
  distance = Math.sqrt(Math.pow((x-x2),2)+Math.pow((y-y2),2))
  distance2 = Math.sqrt(Math.pow((x2-x3),2)+Math.pow((y2-y3),2))
  distance3 = Math.sqrt(Math.pow((x-x3),2)+Math.pow((y-y3),2))

  if (distance <= r*2){
    xspeed = -xspeed
    xspeed2 = -xspeed2
    
    yspeed = -yspeed
    yspeed2 = -yspeed2
  }

  if (distance2 <= r*2){
    xspeed2 = -xspeed2
    xspeed3 = -xspeed3
    
    yspeed3 = -yspeed3
    yspeed2 = -yspeed2
  }
  
  if (distance3 <= r*2){
    xspeed = -xspeed
    xspeed3 = -xspeed3
    
    yspeed3 = -yspeed3
    yspeed = -yspeed
  }
}