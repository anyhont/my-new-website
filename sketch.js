let mySound;
function preload() {
  mySound = loadSound(mysterious.mp3);
}

function setup() {
  createCanvas(300, 300);
  mySound.play();
}
