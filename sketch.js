//Creating the Variables
var r = 0;
var g = 100;
var b=105;

function setup(){
  // creating the canvas
  createCanvas(400,400);

}

function draw(){
  
  //Setting the Background
  background(World.mouseY,World.mouseX,b);

  //filling the ellipse
  fill(200,255,245)  
  
  //Creating an Ellipse
  ellipse(World.mouseX,World.mouseY,25,25);
  

}