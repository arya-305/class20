var frect,mrect;

function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 80, 40);
  frect = createSprite(400, 200, 50, 60);
}

function draw() {
  background(255,255,255); 
  
mrect.x=World.mouseX;
mrect.y=World.mouseY;

  if(mrect.x-frect.x < mrect.width/2+frect.width/2 && frect.x-mrect.x < frect.width/2+mrect.width/2 && 
     mrect.y-frect.y<mrect.height/2+frect.height/2 && frect.y-mrect.y < frect.height/2+mrect.height/2) {
  mrect.shapeColor="green";
  frect.shapeColor="green";
  }

  
  else{
  mrect.shapeColor="yellow";
  frect.shapeColor="red";
  }
  drawSprites();
}