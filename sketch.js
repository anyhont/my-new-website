let mySound;
function preload() {
  soundFormats('mp3');
  mySound = loadSound(mysterious.mp3);
}

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.mousePressed(canvasPressed);
  background(345);
  text('tap here to play', 40, 50);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
