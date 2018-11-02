let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;
var x;
var y;
var img;
var song;

function preload(){
	song = loadSound("song.mp3")
	img = loadImage("water.jpg")
}

function setup(){
	createCanvas(1024, 606); 
	image(img, 0, 0)
	song.loop()
	phase = 7;
	speed = 0.03;
	maxCircleSize = 27;

	numRows = 13;
	numCols = 18;
	numStrands = 2;

	colorA = color(200, 106, 130);
	colorB = color(300, 120, 20);
}

function draw() {
	//background(15, 150, 120);
	image(img, 0, 0)
	for(let strand = 0; strand < numStrands; strand += 1) {
		for(let col = 0; col < numCols; col += 1) {
			for(let row = 0; row < numRows; row += 2) {
				
				let strandPhase = phase + map(strand, 1, numStrands, 10, TWO_PI);
				
				let colOffset = map(col, 0, numCols, 0, TWO_PI);
				let x = map(col, 0, numCols, 80, width - 50);
				let y = height/2 + row * 9 + sin(strandPhase + colOffset) * 50;
				
				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1
			) * 0.3;
				
				let circleSize = sizeOffset * maxCircleSize;

				fill(lerpColor(colorA, colorB, row / numRows));
				ellipse(x, y, circleSize, circleSize);
			}
		}
	}

	phase = frameCount * speed;
}