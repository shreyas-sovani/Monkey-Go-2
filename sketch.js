var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground,groundImg;

var PLAY=1;
var END=0;
var gameState=PLAY;

var bGroundImg;

var bGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
   bGroundImg=loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600,500);
  
  
  
  
  bGround=createSprite(300,225,1,1);
  bGround.addImage(bGroundImg);
  
  monkey=createSprite(50,450,19,19);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  
  ground=createSprite(300,490,600,10);
  ground.visible=false;
  
  FoodGroup=new Group();
   obstacleGroup=new Group();
  
  //monkey.debug=true;    
  
 
  
}


function draw() { 
background("lightBlue");
  
  if(gameState===PLAY){
    
    switch(score){
        
        
      case 1:monkey.scale=0.17;
              break;
      case 2:monkey.scale=0.19;
              break;
       case 3:monkey.scale=0.21
              break;
        
      case 4:monkey.scale=0.23;
              break;
        
              default:break;
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
                                        
    
    bGround.velocityX=-3;
    if(bGround.x<110){
      
      bGround.x=300;
      
    }
    
    if(keyDown("space")&& monkey.collide(ground)){   
    monkey.velocityY=-20;
  }
  
  
  if(FoodGroup.isTouching(monkey)){
    score=score+1;
    FoodGroup.destroyEach();
  }
  
    monkey.velocityY=monkey.velocityY+1.3;
    
    
  food();
  obstacles(); 
    
    if(monkey.isTouching(obstacleGroup)){
      
      gameState=END;
      monkey.scale=monkey.scale-0.02;
      monkey.collide(ground);
      obstacleGroup.destroyEach();
      
    
    
    
    
    
  }
  
  
  
  
 if(gameState===END){
     
   reset();
   
 }
  
   monkey.collide(ground);
   
  drawSprites();
fill("red");
  textSize(19);
  stroke("white");
  text("Score : "+score,100,50);
  
}
}
function obstacles(){
  
  if(frameCount%300===0){
    
    obstacle=createSprite(600,448,1,1);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-7;
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
     obstacle.lifetime=600;
  }
}

function food(){
  
  if(frameCount%200===0){
    
    banana=createSprite(600,random(300,400),1,1);
    banana.addImage(bananaImage );
    banana.velocityX=-7;
    banana.scale=0.15;
 //   banana.visible=false;
    FoodGroup.add(banana);
    banana.lifetime=600;
  }
  
  
  
}

function reset(){
  
  monkey.collide(ground);

  score=0;
  
  if(keyDown("R")){
    
    gameState=PLAY;    
    
    //bGround.x=300;
  }
  bGround.velocity.x=0;
  text("Press 'R' To restart",250,250);
}





    


