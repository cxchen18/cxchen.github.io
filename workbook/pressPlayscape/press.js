var img, img2;

function preload () {
  img=loadImage("pressPlayscape/yoda.jpeg");
  img2=loadImage("pressPlayscape/pigeon.png");
}
function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(120,120,120,10);
  if (mouseIsPressed){
image(img, mouseX-25, mouseY-25, 50, 50/img.width*img.height);
  } else {
    
image(img2, mouseX-25, mouseY-25, 50, 50/img.width*img.height);
}
}