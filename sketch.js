var car;
var stone,fire,log;
var carImg;
var fireImg;
var stoneImg;
var logImg;
var canvas,background;
var track;
var bac;
var score=0;


function preload(){
  carImg = loadImage('car.jpg');
  fireImg = loadImage('fire3.jpg');
  stoneImg = loadImage('stone.jpg');
  logImg = loadImage('log1.jpg');
  track = loadImage("black.jpg");
  bac = loadImage("bac.jpg");

}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  car = createSprite(761,676,10,10);
  car.addImage(carImg);
  car.scale = 0.1;

  stone = createSprite(545,462,10,10);
  stone.addImage(stoneImg);
  fire = createSprite(659,177,10,10);
  fire.addImage(fireImg);
  log = createSprite(876,176,10,10);
  log.addImage(logImg);
  log.scale = 0.5;
//car.velocityY = -2;
//bac=createSprite(0,0,2000,2000);
//bac.addImage(bac);
background.velocityY=-4;
}

function draw() {
  background("white");
   //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
   if(frameCount%60===0){

   }
     
       
     
      if (keyWentDown(LEFT_ARROW)) {
        car.velocityX= -2;
      }
      if (keyWentDown(RIGHT_ARROW)) {
        car.velocityX= 2;
      }
      if (keyWentDown(UP_ARROW)) {
        car.velocityY= -2;
      }

      if(car.collide(log)){
        score = score-1;
      }
      if(car.collide(fire)){
        score = score-1;
      }
      if(car.collide(stone)){
        score = score-1;
      }
     
  text(mouseX+','+mouseY,mouseX,mouseY);
  car.display(); 
  stone.display(); 
  fire.display(); 
  log.display(); 
  drawSprites();
  fill(0);
  textSize(30); 
   text("S C O R E  "+score ,1309,37);

   if(score<-5){
    text("G A M E   O V E R ",712,366);
  }

}
