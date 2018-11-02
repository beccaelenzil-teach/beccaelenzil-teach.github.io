var img;
var song;

function preload(){
	song = loadSound("Musica.mp3")
	img = loadImage("Ocean.jpg")
}

let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
	createCanvas(1200, 900);

	image(img, 0, 0)

	song.loop()

	noStroke();

	phase = 2;
	speed = 0.07;
	maxCircleSize = 20;

	numRows = 10;
	numCols = 50;
	numStrands = 5;

	colorA = color(0, 150, 150);
	colorB = color(0, 100, 200);
}

function draw() {
	//background(4, 58, 74);
	image(img, 0, 0)

	for(let strand = 0; strand < numStrands; strand += 1) {
		for(let col = 0; col < numCols; col += 1) {
			for(let row = 0; row < numRows; row += 1) {
				
				let strandPhase = 10+phase + map(strand, 0, numStrands, 0, TWO_PI);
				
				let colOffset = map(col, 0, numCols, 10, TWO_PI);
				let x = map(col, 0, numCols, 50, width+10);
				let y = height/2  + sin(strandPhase + colOffset) * 50;
				
				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1)*3;
				
				let circleSize = sizeOffset * maxCircleSize;

				fill(lerpColor(colorA, colorB, row / numRows));
				ellipse(x*2-200, y*8-2800, 20, circleSize);
			}
		}
	}

	phase = frameCount * speed;
}