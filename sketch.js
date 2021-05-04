var song;

let song;
function preload() {
  song = loadSound(mysterious.mp3);
}

function setup() {
  createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 100, 100);
}


