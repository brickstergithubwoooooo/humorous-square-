var funnybox; 

function setup() {
  createCanvas(400,400);
  funnybox = createSprite(30, 30, 30, 30)
  funnybox.shapeColor = "gold"
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    funnybox.x += 10
  }
  if (keyIsDown(LEFT_ARROW)) {
    funnybox.x -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    funnybox.y += 10
  }
  if (keyIsDown(UP_ARROW)) {
    funnybox.y -= 10
  }

}




