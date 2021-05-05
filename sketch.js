function preload() {
  song = loadSound(mysterious.mp3);
}

function setup() {
  createCanvas(300, 300);
  song.play();
}
