var wall, wall2, thickness, thickness2;
var bullet, bullet2, speed, speed2, weight;
var damage = 0;
var damage2 = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  thickness = random(22,83);
  thickness2 = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1300,200,thickness,height/3);
  wall2 = createSprite(1300,600,thickness2,height/3);

  bullet = createSprite(200,200,30,20);
  bullet.velocityX = 13;
  bullet.shapeColor = "white";

  bullet2 = createSprite(200,600,30,20);
  bullet2.velocityX = 13;
  bullet2.shapeColor = "white";
}

function draw() {
  background("lightBlue");  

  textSize(20);
  textAlign(CENTER);
  text("Damage of Wall: " + Math.round(damage), width/3, 200);

  textSize(20);
  textAlign(CENTER);
  text("Damage of Wall: " + Math.round(damage2), width/3, 600);

  textSize(20);
  textAlign(CENTER);
  text("Thickness of Wall: " + Math.round(thickness), width*2/3, 200);

  textSize(20);
  textAlign(CENTER);
  text("Thickness of Wall: " + Math.round(thickness2), width*2/3, 600);


  if(collided(bullet,wall)){
    bullet.velocityX = 0;

    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = "red";
    }else if(damage === 10){
      wall.shapeColor = "yellow";
    }else {
      wall.shapeColor = "lightGreen";
    }
  }

  if(collided(bullet2,wall2)){
    bullet2.velocityX = 0;

    damage2 = 0.5 * weight * speed * speed/(thickness2 * thickness2 * thickness2);

    if(damage2 > 10){
      wall2.shapeColor = "red";
    }else if(damage2 === 10){
      wall2.shapeColor = "yellow";
    }else {
      wall2.shapeColor = "lightGreen";
    }
  }


  drawSprites();
}

function collided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  bullet2RightEdge = bullet2.x + bullet2.width;
  wall2LeftEdge = wall2.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }else {
    return false;
  }

}