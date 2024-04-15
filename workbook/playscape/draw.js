//establish variables outside everything 

let dice1;
let dice2;

function setup() {
  createCanvas(windowWidth, windowHeight); //hereafter 'width' height
  background(0,0,255);
  fill(255,255,255);
  stroke(255,255,255);
  strokeWeight(1);
  //frameRate(1);
}


function draw() {
  dice1 = random(1,6);
  dice2 = random(1,12);
  let circleX=dice1*12-dice2;
  let circleX_mapped=map(circleX,0,66, 0, width);
  circle(circleX_mapped, dice2*(7-dice1+12), dice2*2);
}


function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY)
}