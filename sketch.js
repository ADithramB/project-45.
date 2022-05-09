var bg1;
var bullet1,spaceship1
var enemyspaceship1;

var PLAY =1;
var END =0;

var gameState = PLAY;

function preload() {
    bg1   =  loadImage("bg.jpg")
    bullet1 = loadImage("bullet.png")
    spaceship1 = loadImage("spaceship.png")
    enemyspaceship1 = loadImage("enemy spaceship.png")
    
}
function setup(){
createCanvas(1000,500);

 bg = createSprite(500,250)
 bg.addImage(bg1)

 spaceship = createSprite(500,100,10,20)
 spaceship.addImage(spaceship1)

 bullet = createSprite(500,100,5,10)
 bullet.addImage(bullet1)

 enemyspaceship = createSprite(100,100,10,20)
 enemyspaceship.addImage(enemyspaceship1)
 enemyspaceship.velocityX = -3

 bulletGroup = new Group()


}

function draw() {
    background(0);

    if(gameState === PLAY){
   

      enemyspaceship.visible = true

      if(keyDown("space")){
        createBullets();
      }

      enemyspaceship.velocityX = -3

      spaceship.visible = true
    bullet.visible = true
    
      spaceship.y = mouseY
      bullet1.y = spaceshipY
      bg.velocityX = -3 ;
    if (bg.y < 0){
     bg.y =bg.width/2;
    }
    spaceship.x = mouseX
}  
 else if(gameState === END){
    bulletGroup.destroyEach()
    spaceship.visible = false
    bullet.visible = false
    enemyspaceship.visible = false
    bg.velocityX = 0
    
  }

 

 }
  






    

    
 function createBullets() {
  var bullet2 = createSprite(100, 100, 60, 10);
  bullet2.addImage(bullet);
  bullet2.x = 800;
  bullet2.y=gun1.y;
  bullet2.velocityX = -8;
  bullet2.lifetime = 300;
  bullet2.scale = 0.03;
  bulletGroup.add(bullet2)
}

Edge1=createEdgeSprites();
 enemyspaceship.bounceOff(Edge1);

 drawSprites();

  




