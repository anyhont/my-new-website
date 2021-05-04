var song;

let song;
function preload() {
  song = loadSound(mysterious.mp3);
}

function setup() {
  createCanvas(200, 200);
  cnv.mousePressed(canvasPressed);
  background(0);
  text('tap here to play', 100, 100);
}


