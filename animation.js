let x;
let y;
let r,g,b;

let xVel;
let yVel;

function pickColor(){
r= random(256);
g= random(256);
b = random(256);
}
let dvd;
function preload(){
  dvd=loadImage('https://i.imgur.com/0cvxDo5.png');
}
function setup() {
  createCanvas(800,400);
  x = random(width);
  y = random(height);

  xVel = 10;
  yVel = 10;
}

function draw() {

  tint(r,g,b)
  background(0);
  image(dvd,x, y);
  x = x + xVel;
  y = y + yVel;

  if (x + dvd.width >= width) {
    xVel = -xVel;
    x = width -dvd.width;
    pickColor();
  }
  else if(x<=0){
    xVel=-xVel;
    pickColor();
  }
  
  if (y + dvd.height>= height) {
    yVel = -yVel;
    y = height - dvd.height;
   pickColor();
  }
  else if(y<=0){
    yVel=-yVel;
    y=0;
    pickColor();
  }
}
