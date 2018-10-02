circle_list = []
n = 500
h = 757
w = 1400
m = 0
mult = 50000
dt = 400
var img;
var song;

function preload(){
  song = loadSound("01Serpentine.m4a")
  img = loadImage("sunrise.jpg")
}

function setup() {
  createCanvas(w,h)
  image(img,0,0)
  //tint(255, 127); 
  song.loop()

  fill(random(0,256))
  cursor_color = [random(0,256),random(0,256),random(0,256)]
  for(i=0; i<n; i++){
  	circ = new circle(random(0,w+1),random(0,h+1),random(9,12),[random(0,256),random(0,256),random(0,256)])//random([-4,-2,2,4]),random([-4,-2,2,4]))
  	circle_list.push(circ)
  }
}

function draw() {
  //background(0,0,0,50)
  image(img,0,0)
  //tint(255, 127); 

  if(mouseIsPressed) {
  	clear()
  	//background([random(0,256),random(0,256),random(0,256)])
    cursor_color = [random(0,256),random(0,256),random(0,256)]
  	circle_list = []
  	for(i=0; i<n; i++){
  		circ = new circle(random(0,w+1),random(0,h+1),random(9,12),[random(0,256),random(0,256),random(0,256)])//,random([-4,-2,2,4]),random([-4,-2,2,4]))
  		circle_list.push(circ)
  	}
  }

 
  for (i=0; i<n; i++){

      circle_list[i].display()

      dist = sqrt(Math.pow((mouseX-circle_list[i].x),2) + Math.pow((mouseY-circle_list[i].y),2))
      
        if (circle_list[i].x > mouseX){
          circle_list[i].speed_x = mult*1/(dist*dist)
        }
        else{
          circle_list[i].speed_x = -mult*1/(dist*dist)
        }
        if (circle_list[i].y > mouseY){
          circle_list[i].speed_y = mult*1/(dist*dist)
        }
        else{
          circle_list[i].speed_y = -mult*1/(dist*dist)
        }
        
        circle_list[i].move()
  }

  noCursor()
  d = random(15,25)
  fill(cursor_color)
  ellipse(mouseX,mouseY,30,30)

  m+=1
}

//function circle(x,y,d,speed_x,speed_y,fill_color){
function circle(x,y,d,fill_color){
	this.x = x
	this.y = y
	this.d = d
	this.speed_x = 1//speed_x;
	this.speed_y = 1//speed_y;
  this.fill_color = fill_color

	this.change_x = function(){
		this.speed_x *= -1
	}
	this.change_y = function(){
		this.speend_y *= -1
	}

	this.move = function(){
		  //this.x += random(-this.speed_x, this.speed_x);
    	//this.y += random(-this.speed_y, this.speed_y);
      this.x += this.speed_x
    	this.y += this.speed_y
	}

	this.display = function() {
		ellipse(this.x, this.y, this.d, this.d)
    //fill(random(0,256),random(0,256),random(0,256))
    fill(fill_color)
    noStroke()
  }
}

