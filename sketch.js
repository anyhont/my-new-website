var song;

function preload(){
song = loadSound("mysterious.mp3");
}

function setup(){
createCanvas(500, 500);
song.play();
}

function draw(){
background(0);
}
