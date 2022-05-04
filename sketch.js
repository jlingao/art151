
function preload() {
  glitchfont = loadFont('RobotoMonoglitched.otf');
  portraits = loadImage('portraits.gif');
  boards = loadImage('boards.gif');
  monocle = loadImage('monocle.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(50);
  fill(255);
  textFont('monospace');
  text("The Legacy of Charles Darrow", 600, 350);
  
  image(portraits, 0, height/4, 600,500);
  image(boards, width/3, 0);
  image(monocle, width/4, -100, 600,500);
}