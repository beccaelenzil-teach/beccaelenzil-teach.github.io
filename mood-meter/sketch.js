var board_size = window.innerHeight*0.95
var spacing = 5.0
var xoffset = 10.0
var yoffset = 10.0
var cell_num = 8
var initialize_board = 1
var link_word = ''
var words = [['enraged', 'panicked', 'stressed','shocked',
                 'surprised','upbeat','exhilarated','ecstatic'],
            ['livid','frightened','nervous','restless',
            'hyper','motivated','inspired','elated'],
                ['fuming','apprehensive','tense','annoyed',
                'focused','optimistic','happy','thrilled'],
                ['repulsed','troubled','uneasy','peeved',
                'pleasant','joyful','playful','blissful'],
            ['disgusted','disappointed','down','apathetic',
            'at ease','satisfied','content','fulfilled'],
            ['morose','discouraged','sad','bored',
            'calm','chill','secure','balanced'],
                ['miserable','sullen','disheartened','fatigued',
                'mellow','thoughtful','peaceful','carefree'],
                ['hopeless','desolate','spent','drained',
                'complacent','sleepy','tranquil','serene']]

var creative = {}
var all_cells = []


function Cell(row,col,type,word){
  this.row = row
  this.col = col
  this.type = type
  this.x = 0
  this.y = 0
  this.word = word
  this.xpos = 0
  this.ypos = 0
}

function createOneRow(row,cell_num){
    single_row = []
    for (col = 0; col < cell_num; col++){
      if (row < 4 && col < 4){
        cell = new Cell(row,col,4,words[row][col])
      }
      else if (row >= 4 && col < 4){
        cell = new Cell(row,col,3,words[row][col])
      }
      else if (row < 4 && col >= 4){
        cell = new Cell(row,col,1,words[row][col])
      }
      else if (row >= 4 && col >= 4){
        cell = new Cell(row,col,2,words[row][col])
      }
      
      if (row >= 4){
        cell.x = row-3
      }
      else{
        cell.x = row-4
      }
      if (col >= 4){
        cell.y = col-3
      }
      else{
        cell.y = col-4
      }
      single_row.push(cell)
    }
    return single_row
}

function createBoard(cell_num){
    A = []
    for (row = 0; row < cell_num; row++){
        A.push(createOneRow(row,cell_num))
    }
    return A
}


function calculate_cell_size(board_size,cell_num){
  factor = board_size/600
  new_spacing = spacing
  cell_size = (board_size-(cell_num)*new_spacing)/(cell_num)
  return cell_size
}


function drawBoard(A,cell_size){
  factor = board_size/600
  new_spacing = spacing
  for (row = 0; row < A[0].length; row++){
    y_pos = ((cell_size+new_spacing) * row) + yoffset
    for (col = 0; col < A.length; col++){
      x_pos = ((cell_size+new_spacing) * col) + xoffset
      A[row][col].xpos = x_pos
      A[row][col].ypos = y_pos
      x = abs(A[row][col].x)
      y = abs(A[row][col].y)
      noStroke()
      if (A[row][col].type == 1){
        fill((16+y)/20*255,(16+x)/20*200,0)
      }
      else if (A[row][col].type == 2){
        fill((6+x)/10*50,(10-x)/10*255,(6+x)/10*50)
      }
      else if (A[row][col].type == 3){
        fill(50,(10-x)/10*50,(10-x)/10*255)
      }
      else if (A[row][col].type == 4){
        fill((10-x)/10*255,(10-x)/10*50,50)
      }
      rect(x_pos,y_pos,cell_size,cell_size)
      
      the_word = A[row][col].word
      
      if (mouseX > A[row][col].xpos && mouseX < A[row][col].xpos + cell_size && mouseY > A[row][col].ypos && mouseY < A[row][col].ypos+ cell_size
        && (the_word == "thrilled" || the_word == "frightened" || the_word == "tense" || the_word == "chill" || 
        the_word == "calm" || the_word == "sad" || the_word == "peaceful" || the_word == "mellow" )){
      	fill(0)
        textSize(factor*16*(20-the_word.length)/12.5)
        textAlign(CENTER);
        textStyle(BOLD);
        //textStyle(ITALIC);
        text(the_word,x_pos+cell_size/2,y_pos+cell_size/2)

        link_word = the_word
      }
      else if (mouseX > A[row][col].xpos && mouseX < A[row][col].xpos + cell_size && mouseY > A[row][col].ypos && mouseY < A[row][col].ypos+ cell_size){
        fill(255)
        textSize(factor*16*(20-the_word.length)/12.5)
        textAlign(CENTER);
        textStyle(BOLD);
        //textStyle(ITALIC);
        text(the_word,x_pos+cell_size/2,y_pos+cell_size/2)

        link_word = the_word
      } 
      else{
        fill(255)
        textSize(factor*16*(20-the_word.length)/13)
        textAlign(CENTER);
        textStyle(NORMAL);
        text(the_word,x_pos+cell_size/2,y_pos+cell_size/2)
        link_word = ''
      }

      if (link_word == "thrilled" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/eli/index.html")
      }
      else if (link_word == "frightened" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/anne/index.html")
      }
      else if (link_word == "tense" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/erik/index.html")
      }
      else if (link_word == "sad" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/elise/index.html")
      }
      else if (link_word == "calm" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/esrom/index.html")
      }
      else if (link_word == "peaceful" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/lyla/index.html")
      }
      else if (link_word == "mellow" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/meimei/index.html")
      }
      else if (link_word == "chill" && mouseIsPressed){
        window.open("https://beccaelenzil-teach.github.io/computer-art/melis/index.html")
      }
      
      
      


        
      


      
    
    }
  }
}




function setup() { 
  createCanvas(board_size+xoffset, board_size+yoffset);
  A = createBoard(cell_num)
  cell_size = calculate_cell_size(board_size,cell_num)
  
  for (col = 0; col < cell_num; col++){
  	for (row = 0; row < cell_num; row++){
    	creative[words[row][col]] = [row,col]
      all_cells.push(A[row][col])
      
    }
  }


}

function draw(){
  board_size = window.innerHeight*0.95
  background(255);
  cell_size = calculate_cell_size(board_size,cell_num)
  drawBoard(A,cell_size)
  

  
  /*for (i = 0; i<all_cells.length; i++){
    if (mouseX > all_cells[i].xpos && mouseX < all_cells[i].xpos + cell_size && mouseY > all_cells[i].ypos && mouseY < all_cells[i].ypos+ cell_size){
     	fill(255)
      the_word = all_cells[i].word
      textSize(16*(20-the_word.length)/13)
      textAlign(CENTER);
      textStyle(BOLD);
      textStyle(ITALIC);
      text(the_word,all_cells[i].xpos+cell_size/2,all_cells[i].ypos+cell_size/2)
    }
  }*/
}