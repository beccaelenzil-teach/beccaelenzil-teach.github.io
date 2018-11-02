let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;
//*********************
//changed size
function setup() {
	createCanvas(700, 600);

	noStroke();

  //**********
  // speed faster
	phase = 0;
	speed = 0.07;
	maxCircleSize = 90;

	numRows = 10;
  //**************************
  // Less cols
	numCols = 6;
	numStrands = 1;

  //***********
  // Less red, less blue(ColorA)
  // Less green, less blue(ColorB)
	colorA = color(100, 79, 120);
	colorB = color(226, 99,61);
}

function draw() {
  //*************************
  //more blue
	background(4, 10, 74);

	for(let strand = 0; strand < numStrands; strand += 1) {
		for(let col = 0; col < numCols; col += 1) {
			for(let row = 0; row < numRows; row += 1) {
				
				let strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
				
				let colOffset = map(col, 3, numCols, 0, TWO_PI);
				let x = map(col, 1, numCols, 100, width - 40);
				let y = height/2 + row * 60 + sin(strandPhase + colOffset) * 50;
				
				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
				
				let circleSize = sizeOffset * maxCircleSize;

				fill(lerpColor(colorA, colorB, row / numRows));
				ellipse(x, y, circleSize, circleSize);
			}
		}
	}

	phase = frameCount * speed;
}