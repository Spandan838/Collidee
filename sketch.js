var bullet,wall;
var speed,weidth;


function setup() {
  createCanvas(1300,400);
  speed = random(223,321);
 weidth = random(30,52);
 thickness = random(22,83);
 bullet = createSprite(50, 200, 100, 10);
 bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  
  
}

function draw() {
  background("blue");
  if(collisiondetection(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weidth*speed*speed/(thickness*thickness*thickness);
    console.log(damage)
   if(damage > 10)
   {
     wall.shapeColor=color("Green")
   }

   if(damage < 10)
   {
     wall.shapeColor=color("Red")
   }
  }
  
drawSprites();
}

function collisiondetection(target1, target2){
    
  bulletRightEdge=target1.x + target1.width;
    wallLeftEdge=target2.x;
  
    if(bulletRightEdge>=wallLeftEdge){   
      return true;
    
  }
  else {
    return false;
    
  }

}