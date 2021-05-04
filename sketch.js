let mySound;
function preload() {
  soundFormats('mp3');
  mySound = loadSound('162483__kastenfrosch__mysterious.mp3');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
