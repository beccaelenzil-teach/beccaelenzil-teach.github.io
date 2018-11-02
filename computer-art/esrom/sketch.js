//intialize variables
var img;

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(40,150,402);
}

function draw() {
  //-----------------------------------------
  //****Change the second 10 to a number between 20 and 100 and see what happens****
  //-----------------------------------------
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  
  //-----------------------------------------
  //****Change the values 30 and see what happens****
  //-----------------------------------------
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      
      // starting point of each circle depends on mouse position
      let xAngle = map(150, width, -2* PI, 4* PI, true);
      let yAngle = map(150, height, -2 * PI, 4* PI, true);
			
			//let xAngle = map(mouseX, 0, width, -4* PI, 4* PI, true);
      //let yAngle = map(mouseY, 0, height, -4 * PI, 4* PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      //-----------------------------------------
      //****Change the values 20 and see what happens****
      //-----------------------------------------
      let myX = x + 230 * cos(2 * PI * t + angle);
      let myY = y + 12 * sin(2 * PI * t + angle);

    
      
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
//**********************
//changed the 
