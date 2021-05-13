var movingrect, fixedrect;
var form1,bgi,bg;
var knight1,knight2;
var game;
function preload(){
  bgi=loadImage("desktop.jpeg");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form1=new Form();
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 game =new Game();
}

function draw() {
  background("pink"); 
  form1.display();
  
}