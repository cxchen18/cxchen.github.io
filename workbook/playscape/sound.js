let sound;
let button;

let amp;
let vol;

let volumes = [];

function preload(){
  sound = loadSound("The University of Melbourne 8.mp3")
}

function setup() {
  createCanvas(400, 400);
  button = createButton("PLAY");
  button.mousePressed(toggle);

  amp = new p5.Amplitude();
}

function draw() {
  background(50);

//obtains numerical volume data 
if (sound.isPlaying()){
  vol = amp.getLevel();
  volumes.push(vol);
  console.log(vol);
}
//creates circle pulse from volume
  let mapVol = map(vol, 0, 1, 0, height);
  circle(width/2, height/2, mapVol);

// creates graph from volume
  beginShape();
  for (let i = 0; i < volumes.length; i++) {
    strokeWeight(3);
    let mapVolumes = map(volumes[i], 0, 1, height, 0);
    point(i, mapVolumes);
    strokeWeight(1.5);
    vertex(i, mapVolumes);
  }
  endShape();

//moves graph along canvas as the song plays
  if (volumes.length > width) {
    volumes.splice(0, 1);
  } 
  
}

//plays or pauses sound when button is pressed 
function toggle() {
  if (!sound.isPlaying()) {
    sound.play();
    button.html("PAUSE");
  } else if (sound.isPlaying()) {
    sound.pause();
    button.html("PLAY");
  }
}