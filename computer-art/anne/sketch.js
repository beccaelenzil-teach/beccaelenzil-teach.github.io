let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

var img;
var song;

function preload(){
	//song = loadSound()
	img = loadImage("backgroundimage.jpg")
}

function setup() {
	createCanvas(700, 500);
	image(img, 0, 0)
	//song.loop()

	noStroke();

	phase = 0;
	speed = 0.05;
	maxCircleSize = 20;

	numRows = 80;
	numCols = 20;
	numStrands = 4;

	colorA = color(0, 50, 200);
	colorB = color(255, 0, 0, 265);

}

function draw() {
	image(img, 0, 0)

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