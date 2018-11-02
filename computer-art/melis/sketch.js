let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

var img;
var song;
var song2;
var song3;

function preload(){
	img = loadImage("latest.jpeg")
	song = loadSound("chimes.wav")
	song2 = loadSound("bass.wav")
	song3 = loadSound("drums.wav")
}

function setup() {
	createCanvas(900, 450);

	image(img,0,0)
	song.loop()
	song2.loop()
	song3.loop()

	noStroke();

	phase = 0;
	speed = 0.035;
	maxCircleSize = 15;

	numRows = 4;
	numCols = 16;
	numStrands = 4;

	colorA = color(230, 174, 150);
	colorB = color(234, 129, 345);
}

function draw() {
	image(img,0,0)
	//background(5, 467, 976, 5);

	for(let strand = 0; strand < numStrands; strand += 1) {
		for(let col = 0; col < numCols; col += 1) {
			for(let row = 0; row < numRows; row += 1) {
				
				let strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
				
				let colOffset = map(col, 0, numCols, 0, TWO_PI);
				let x = map(col, 0, numCols, 50, width - 50);
				let y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
				
				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
				
				let circleSize = sizeOffset * maxCircleSize;

				fill(lerpColor(colorA, colorB, row / numRows));
				ellipse(x, y, circleSize, circleSize);
			}
		}
	}

	phase = frameCount * speed;
}