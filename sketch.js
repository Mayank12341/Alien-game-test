//create the  astronaut and give behaviour.
//create the obstacles.
//create aliens and give behaviour.
//create animations and images.
//create the scoring system.
//make the lazer.
//make gamestates.

var alien1,alien2,alien3;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var ground;
var player;
var healthTotal,health,actualHealth,division;
var bullet=[];
var score;
var laserAlein,laserAlein2,laserAlein3,laserAlein4,laserAlein6;
var LaserGroup,LaserGroup2,LaserGroup3,LaserGroup4,LaserGroup5,LaserGroup6;
var alien4,alien5,alien6;
var play=1;
var end=0;
var win = 2;
var gamestate=play;
var reload;
var black;
var retry;
var SCORE;

function preload(){


  Player1=loadImage("Player_Left2.gif");
  Dude = loadImage("PlayerMan2.gif");
  Astro = loadImage("PlayerMan.gif");
  Pla2 = loadImage("Player_Left.gif");
  obstacleImage = loadImage("obstacle.gif");
  Player_Health = loadImage("health.gif");
  alien_left =loadImage("alien.gif");
  alien_right= loadImage("alien_right.gif");
  backroundImage = loadImage("space4.png");
  backroundImage2 = loadImage("SPACE.png");
  Reload = loadImage("reload.gif");
  bullet_image = loadImage("Bullet.gif")
  Retry = loadImage("retry.gif");
  Alien_Bullet = loadImage("bullet2.gif");
  Score = loadImage("score.gif");
  PlayerUp = loadImage("UP!.gif");
 PlayerShoot = loadImage("shoot.gif")
  PlayerRight=loadImage("right.gif");
  PlayerLeft=loadImage("left.gif");
  

}

function setup() {

  createCanvas(1580,800);
  
  score=0;
  textSize(60);
  black = createSprite(800,35,1600,80)
  reload = createSprite(1200,50,100,100);
  obstacle1= createSprite(200,500,200,30);
  ground= createSprite(800,790,1600,50);
  obstacle2 = createSprite(800,600,200,30);
  obstacle3=createSprite(600,200,200,30);
  obstacle4=createSprite(500,400,200,30);
  obstacle5=createSprite(970,430,200,30);
  obstacle6=createSprite(1390,300,200,30);
  up = createSprite(1410,610,60,60);
  left=createSprite(1350,670,85,60);
  right=createSprite(1470,681,85,60);
  shoot=createSprite(1410,735,155,60);
  alien1=createSprite(200,430,50,50);
  alien2=createSprite(600,130,50,50);
  alien3=createSprite(500,330,50,50);
  alien4=createSprite(970,360,50,50);
  alien5=createSprite(1390,230,200,30);
  alien6=createSprite(800,530,200,30);
  player= createSprite(600,700,50,50);
  healthTotal = createSprite(300,50,600,50);
  actualHealth= createSprite(300,50,600,50);
  health = createSprite(100,50,100,50);
  retry = createSprite(770,400,100,100);
  img = createSprite(200,200,50,50);
  SCORE = createSprite(800,50,100,100);
  laserAlein3=createSprite(alien3.x,alien3.y,90,10);
  laserAlien=createSprite(alien1.x,alien1.y,90,10);
  laserAlien2=createSprite(alien2.x,alien2.y,90,10);
  bullet=createSprite(0,0,90,10);
  black.depth = 0;
  

  healthTotal.shapeColor="darkRed";
  actualHealth.shapeColor="Green"
  black.shapeColor = "black";

  bullet.shapeColor="red";
 
  player.addImage("Player_Left2",Player1);
  player.addImage("PlayerMan2",Dude)
  player.addImage("PlayerMan",Astro);
  player.addImage("Player_Left",Pla2);
  alien1.addImage("alien",alien_left);
  alien1.addImage("alien_right",alien_right);
  alien2.addImage("alien",alien_left);
  alien2.addImage("alien_right",alien_right);
  alien3.addImage("alien",alien_left);
  alien3.addImage("alien_right",alien_right);
  alien4.addImage("alien",alien_left);
  alien4.addImage("alien_right",alien_right);
  alien5.addImage("alien",alien_left);
  alien5.addImage("alien_right",alien_right);
  alien6.addImage("alien",alien_left);
  alien6.addImage("alien_right",alien_right);
  obstacle1.addImage("obstacle",obstacleImage);
  obstacle2.addImage("obstacle",obstacleImage);
  obstacle3.addImage("obstacle",obstacleImage);
  obstacle4.addImage("obstacle",obstacleImage);
  obstacle5.addImage("obstacle",obstacleImage);
  obstacle6.addImage("obstacle",obstacleImage);
  bullet.addImage("Bullet",bullet_image);
  retry.addImage("retry",Retry);
  SCORE.addImage("score",Score)
  reload.addImage("reload",Reload);
  up.addImage("UP!",PlayerUp);
  shoot.addImage("shoot",PlayerShoot);
  right.addImage("right",PlayerRight);
  left.addImage("left",PlayerLeft);
  health.addImage("health",Player_Health);

  player.setCollider("rectangle",-1,5,60,80);
  obstacle1.setCollider("rectangle",-1,-6,190,40);
  obstacle2.setCollider("rectangle",-1,-6,190,40);
  obstacle3.setCollider("rectangle",-1,-6,190,40);
  obstacle4.setCollider("rectangle",-1,-6,190,40);
  obstacle5.setCollider("rectangle",-1,-6,190,40);
  obstacle6.setCollider("rectangle",-1,-6,190,40);

  alien1.setCollider("rectangle",-1,5,60,80);
  bullet.visbility=false;  
  LaserGroup = new Group();
  LaserGroup2 = new Group();
  LaserGroup3= new Group();
  LaserGroup4 = new Group();
  LaserGroup5 = new Group();
  LaserGroup6 = new Group();

  laserAlien.visible=false;
  laserAlien2.visible=false;
  laserAlein3.visible=false;
  retry.visible = false;
  alien4.visible=false;
  alien5.visible=false;
  alien6.visible=false;
  reload.visible = false;
}
function draw() {
  console.log(gamestate);
  background(backroundImage); 

if(gamestate===play){
  img.visible=false;
  if(keyDown("UP_ARROW")   ) {
    player.velocityY = -15;

    }
    if(keyDown("RIGHT_ARROW")  ) {  
      player.x =player.x+7;
      player.changeImage("Player_Left2",Player1);
      img.x=300;
    }
    if(keyDown("LEFT_ARROW")  ) {
      player.x =player.x-7;
      player.changeImage("PlayerMan2",Dude);
      img.x=400;
    }
    // if(keyDown("UP_ARROW") && img.x===400){
    //   img.y=400;
    // }
    // if(img.y===400){
    //   player.changeImage("PlayerMan",Astro);
    // }

  // if(player.x>800 ){
  
  //   player.changeImage("PlayerMan2",Dude);
  // }
  // if(player.x<800  ){
  
  //   player.changeImage("Player_Left2",Player1);
  // }
  // if(player.x>800 && keyDown("UP_ARROW")){
  
  //   player.changeImage("PlayerMan",Astro);
  // }
  
  // if(player.x<800 && keyDown("UP_ARROW")){
  
  //   player.changeImage("Player_Left",Pla2);
  // }

  if(player.x>alien1.x){
    alien1.changeImage("alien",alien_left);
  }
  if(player.x<alien1.x){
    alien1.changeImage("alien_right",alien_right);
  }
  if(player.x>alien2.x){
    alien2.changeImage("alien",alien_left);
  }
  if(player.x<alien2.x){
    alien2.changeImage("alien_right",alien_right);
  }
  if(player.x>alien3.x){
    alien3.changeImage("alien",alien_left);
  }
  if(player.x<alien3.x){
    alien3.changeImage("alien_right",alien_right);
  }
  if(player.x>alien4.x){
    alien4.changeImage("alien",alien_left);
  }
  if(player.x<alien4.x){
    alien4.changeImage("alien_right",alien_right);
  }
  if(player.x>alien5.x){
    alien5.changeImage("alien",alien_left);
  }
  if(player.x<alien5.x){
    alien5.changeImage("alien_right",alien_right);
  }
  if(player.x>alien6.x){
    alien6.changeImage("alien",alien_left);
  }
  if(player.x<alien6.x){
    alien6.changeImage("alien_right",alien_right);
  }
  // if(player.x<800){
  //   player.changeImage("Player_Left",Pla2)

  // }

  
  player.velocityY = player.velocityY + 0.8;   
    
    if(player.x>1570){
      player.x=1569
    }
    if(player.x<30){  
      player.x=31;
    }
    if(player.y<30){
      player.y=31;
    }

    if(mousePressedOver(shoot) && bullet.velocityX===0 ){
      fire();   
     }
    if(mousePressedOver(shoot) && bullet.velocityX===0){
    fireRight();
    }
    if(keyDown("space") && bullet.velocityX===0 ){
     fire();   
    }
    if(keyDown("space") && bullet.velocityX===0){
      fireRight();
     }
     if(bullet.x<30){
      bullet.x=0;
      bullet.y=0;
      bullet.velocityX=0;
     }
     
     if(bullet.x>1570){
      bullet.x=0;
      bullet.y=0;
      bullet.velocityX=0;
     }
    if(actualHealth.x<100){
      actualHealth.shapeColor = "Orange";
    }
    if(mousePressedOver(up)){
      player.velocityY=-15;
    }
    if(mousePressedOver(left)){
      player.x=player.x-7;
      player.changeImage("PlayerMan2",Dude);
      img.x=400;
    }

    if(mousePressedOver(right)){
      player.x=player.x+7;
      player.changeImage("Player_Left2",Player1);
      img.x=300;
    }
    player.collide(up);
    player.collide(right);
    player.collide(left);
    player.collide(shoot);
    if(bullet.velocityX===-17 || bullet.velocityX===17 ){
      text("RELOADING LASER.....", 900,50);
      

      reload.visible=true;
    }else{
      reload.visible=false;
    }
    player.collide(ground);
    player.collide(obstacle1);
    player.collide(obstacle2);
    player.collide(obstacle4);
    player.collide(obstacle3);
    player.collide(obstacle5);
    player.collide(obstacle6);
    player.collide(healthTotal);
    player.collide(black);
    //bullet.collide(alien1);
    //bullet.collide(alien2);
    //bullet.collide(alien3);


    if(alien1.visible===true){
      alien1Shoot();
    }
    if(alien2.visible===true){
      alien2Shoot();
    }
    if(alien3.visible===true){
      alien3Shoot();
    }
    if(LaserGroup.isTouching(player)){
      actualHealth.x=actualHealth.x-10;
    }
    if(LaserGroup2.isTouching(player)){
      actualHealth.x=actualHealth.x-10;
    }
    if(LaserGroup3.isTouching(player)){
      actualHealth.x=actualHealth.x-10;
    }
    if(LaserGroup4.isTouching(player)){
      actualHealth.x=actualHealth.x-10;
    }
    if(LaserGroup5.isTouching(player)){
      actualHealth.x=actualHealth.x-10;
    }
    if(LaserGroup6.isTouching(player)){
      actualHealth.x=actualHealth.x-10;
    }

    if(alien2.visible===false){
      alien5.visible=true;
    }
    if(alien1.visible===true){
      alien1Shoot();
    }
    if(alien2.visible===true){
      alien2Shoot();
    }
    if(alien3.visible===true){
      alien3Shoot();
    }
    if(alien4.visible===true){
      alien4Shoot();
    }
    if(alien5.visible===true){
      alien5Shoot();
    }
    if(alien6.visible===true){
      alien6Shoot();
    }
    
  
    if(bullet.x<alien1.x+70 && bullet.x>alien1.x && bullet.y<alien1.y+50 && bullet.y>alien1.y ||bullet.x<alien1.x+70 && bullet.x>alien1.x && bullet.y>alien1.y-50 && bullet.y<alien1.y){
      if(alien1.visible){
        score = score + 10
      }
      alien1.visible=false;
      alien4.visible=true;
     
    }
    if(bullet.x<alien2.x+50 && bullet.x>alien2.x && bullet.y<alien2.y+50 && bullet.y>alien2.y ||bullet.x<alien2.x+50 && bullet.x>alien2.x && bullet.y>alien2.y-35 && bullet.y<alien2.y){
      if(alien2.visible){
        score = score + 10
      }
      alien2.visible=false;
      alien5.visible=true;
    }
    if(bullet.x<alien3.x+70 && bullet.x>alien3.x && bullet.y<alien3.y+50 && bullet.y>alien3.y ||bullet.x<alien3.x+70 && bullet.x>alien3.x && bullet.y>alien3.y-35 && bullet.y<alien3.y){
      if(alien3.visible){
        score = score + 10
      }
      alien3.visible=false;
      alien6.visible=true;
    }
    if(bullet.x<alien4.x+70 && bullet.x>alien4.x && bullet.y<alien4.y+50 && bullet.y>alien4.y ||bullet.x<alien4.x+70 && bullet.x>alien4.x && bullet.y>alien4.y-35 && bullet.y<alien4.y){
      if(alien4.visible){
        score = score + 10
      }
      alien4.visible=false;
      alien1.visible=true;
    }


    if(bullet.x<alien5.x+70 && bullet.x>alien5.x && bullet.y<alien5.y+50 && bullet.y>alien5.y ||bullet.x<alien5.x+70 && bullet.x>alien5.x && bullet.y>alien5.y-35 && bullet.y<alien5.y){
      if(alien5.visible){
        score = score + 10
      }
      alien5.visible=false;
      alien2.visible=true;

    }
    if(bullet.x<alien6.x+70 && bullet.x>alien6.x && bullet.y<alien6.y+50 && bullet.y>alien6.y ||bullet.x<alien6.x+70 && bullet.x>alien6.x && bullet.y>alien6.y-35 && bullet.y<alien6.y){
      if(alien6.visible){
        score = score + 10
      }
      alien6.visible=false;
      alien3.visible=true;
    }
    if(actualHealth.x<-300){
      player.visible=false;
      gamestate=end;
    }

    if(score===1000){
      gamestate=win;
    }

  }
  
  if(gamestate===win){

    background(backroundImage2);
    fill("blue")
    textSize(60);
    text("You Win !! Aliens have given up !!",400,200);
    img.visible=false;
    alien1.visible=false;
    alien2.visible=false;
    alien3.visible=false;
    alien4.visible=false;
    alien5.visible=false;
    alien6.visible=false;
    ground.visible = false;
    obstacle1.visible = false;
    obstacle2.visible = false;
    obstacle3.visible = false;
    obstacle4.visible = false;
    obstacle5.visible = false;
    obstacle6.visible = false;
    bullet.visible = false;
    retry.visible = true;
    reload.visible=false;
    LaserGroup.destroyEach();
    LaserGroup2.destroyEach();
    LaserGroup3.destroyEach();
    LaserGroup4.destroyEach();
    LaserGroup5.destroyEach();
    LaserGroup6.destroyEach();
    // if (mouseX<retry.x+100 && mouseX>retry.x-100 && mouseY > retry.y-100 && mouseY < retry.y +100){
    //   gamestate=play;
    // }
    if (mousePressedOver(retry)){
      reset();
    }
  }

  if(gamestate===end){
    
    background(backroundImage2);
    bullet.x=0;
    bullet.y=0;
    alien1.visible=false;
    alien2.visible=false;
    alien3.visible=false;
    alien4.visible=false;
    alien5.visible=false;
    alien6.visible=false;
    ground.visible = false;
    obstacle1.visible = false;
    obstacle2.visible = false;
    obstacle3.visible = false;
    obstacle4.visible = false;
    obstacle5.visible = false;
    obstacle6.visible = false;
    bullet.visible = false;
    retry.visible = true;
    reload.visible=false;
    img.visible=false;
    LaserGroup.destroyEach();
    LaserGroup2.destroyEach();
    LaserGroup3.destroyEach();
    LaserGroup4.destroyEach();
    LaserGroup5.destroyEach();
    LaserGroup6.destroyEach();
    // if (mouseX<retry.x+100 && mouseX>retry.x-100 && mouseY > retry.y-100 && mouseY < retry.y +100){
    //   gamestate=play;
    // }
    if (mousePressedOver(retry)){
      reset();
    }
  }
  drawSprites();
  text(score,900,20,100,100);
  
}


function fire(){
  if(img.x===400){
bullet.velocityX=-17;
bullet.y=player.y;
bullet.x=player.x;
  }
}


function fireRight(){
  if(img.x===300){
bullet.velocityX=17;
bullet.y=player.y;
bullet.x=player.x;
  }
  
}
function alien1Shoot(){
  if(frameCount % 12 === 0 && player.y<500 && player.y>410 && player.x>alien1.x){
    var laserAlein = createSprite(alien1.x,alien1.y,90,10);
    laserAlein.velocityX = 17;
    laserAlein.shapeColor="green"  
    LaserGroup.add(laserAlein);
    laserAlien.addImage("bullet2",Alien_Bullet)


  } 
  if(frameCount % 12 === 0 && player.y<470 && player.y>390 && player.x<alien1.x){
    var laserAlein = createSprite(alien1.x,alien1.y,90,10);
    laserAlein.velocityX =-17;
    laserAlein.shapeColor="green";
    LaserGroup.add(laserAlein);
  }
}
  function alien2Shoot(){
  if(frameCount % 12 === 0 && player.y<200 && player.y>100 && player.x>alien2.x){
    var laserAlein2 = createSprite(alien2.x,alien2.y,90,10);
    laserAlein2.velocityX = 17;
    laserAlein2.shapeColor="green"
    LaserGroup2.add(laserAlein2);
  }
  if(frameCount % 12 === 0 && player.y<200 && player.y>100 && player.x<alien2.x){
    var laserAlein2 = createSprite(alien2.x,alien2.y,90,10);
    laserAlein2.velocityX =-17;
    laserAlein2.shapeColor="green"
    LaserGroup2.add(laserAlein2);
    
  }
}
function alien3Shoot(){
  if(frameCount % 12 === 0 && player.y<400 && player.y>320 && player.x>alien3.x){
    var laserAlein3 = createSprite(alien3.x,alien3.y,90,10);
    laserAlein3.velocityX = 17;
    laserAlein3.shapeColor="green"
    LaserGroup3.add(laserAlein3);
  }
  if(frameCount % 12 === 0 && player.y<400 && player.y>320 && player.x<alien3.x){
    var laserAlein3 = createSprite(alien3.x,alien3.y,90,10);
    laserAlein3.velocityX =-17;
    laserAlein3.shapeColor="green"
    LaserGroup3.add(laserAlein3);
  }
}
function alien4Shoot(){
  if(frameCount % 12 === 0 && player.y<400 && player.y>320 && player.x>alien4.x){
    var laserAlein4 = createSprite(alien4.x,alien4.y,90,10);
    laserAlein4.velocityX = 17;
    laserAlein4.shapeColor="green"
    LaserGroup4.add(laserAlein4);
  }
  if(frameCount % 12 === 0 && player.y<410 && player.y>330 && player.x<alien4.x){
    var laserAlein4 = createSprite(alien4.x,alien4.y,90,10);
    laserAlein4.velocityX =-17;
    laserAlein4.shapeColor="green"
    LaserGroup4.add(laserAlein4);
  }
}
function alien5Shoot(){
  if(frameCount % 12 === 0 && player.y<270 && player.y>190 && player.x>alien5.x){
    var laserAlein5 = createSprite(alien5.x,alien5.y,90,10);
    laserAlein5.velocityX = 17;
    laserAlein5.shapeColor="green"
    LaserGroup5.add(laserAlein5);
  }
  if(frameCount % 12 === 0 && player.y<270 && player.y>190 && player.x<alien5.x){
    var laserAlein5 = createSprite(alien5.x,alien5.y,90,10);
    laserAlein5.velocityX =-17;
    laserAlein5.shapeColor="green"
    LaserGroup5.add(laserAlein5);
  }
}
function alien6Shoot(){
  if(frameCount % 12 === 0 && player.y<570 && player.y>490 && player.x>alien6.x){
    var laserAlein6 = createSprite(alien6.x,alien6.y,90,10);
    laserAlein6.velocityX = 17;
    laserAlein6.shapeColor="green"
    LaserGroup6.add(laserAlein6);
  }
  if(frameCount % 12 === 0 && player.y<570 && player.y>490 && player.x<alien6.x){
    var laserAlein6 = createSprite(alien6.x,alien6.y,90,10);
    laserAlein6.velocityX =-17;
    laserAlein6.shapeColor="green"
    LaserGroup6.add(laserAlein6);
  }
}

function reset(){
  gamestate=play;
  background(backroundImage);
  retry.visible = false;
  alien1.visible=true;
  alien2.visible=true;
  alien3.visible=true;
  alien4.visible=true;
  alien5.visible=true;
  alien6.visible=true;
  ground.visible = true;
  obstacle1.visible = true;
  obstacle2.visible = true;
  obstacle3.visible = true;
  obstacle4.visible = true;
  obstacle5.visible = true;
  obstacle6.visible = true; 
  player.visible = true;
  bullet.visible = true;
  score= 0;
  actualHealth.x=300;
  actualHealth.shapeColor="green";
  player.x=600;
  player.y=700;
}

