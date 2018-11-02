
let t = 0; // time variable

var img;
var song; 

function preload(){
  song = loadSound("muzak.mp3")
  img = loadImage("nutte.png")
}

function setup() {
  createCanvas(1200, 652);
  image(img, 0, 0)
  song.loop()
}

function draw() {
  //-----------------------------------------
  //****Change the second 10 to a number between 20 and 100 and see what happens****
  //-----------------------------------------
  image(img, 0, 0); // translucent background (creates trails)

  // make a x and y grid of ellipses
  
  //-----------------------------------------
  //****Change the values 30 and see what happens****
  //-----------------------------------------
  for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 7) {
      //changed y=y+7
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4* PI, 4* PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4* PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      //-----------------------------------------
      //****Change the values 20 and see what happens****
      //-----------------------------------------
      let myX = x + 10 * cos(.5 * PI * t + angle);
      let myY = y + 20 * sin(8000 * PI * t + angle);
//changed myX = x+ 10 to myX = x + 20 and y + 1 
    
      
      //-----------------------------------------
      //****Uncomment the line below by removing the //****
      //-----------------------------------------
      
      //fill([50,200,random(255)])
      
      //-----------------------------------------
      //****Change the value 10****
      //-----------------------------------------
      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
