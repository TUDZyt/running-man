var path
var trackImage
var runner, runnerAnimation
var wall1
var wall2
function preload()
{
  //pre-load images
  trackImage = loadImage("path.png")
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage(trackImage)
  path.velocityY = 4
  path.scale = 1.2

  runner = createSprite(200, 300)
  runner.addAnimation("running", runnerAnimation)
  runner.scale = 0.05

  wall1 = createSprite(0, 200, 50, 400)
  wall2 = createSprite(400, 200, 50, 400)
  wall1.visible = false
  wall2.visible = false

}

function draw() 
{
  background(0);
  if (path.y > 400)
  {
    path.y = height/2
  }
  runner.collide(wall1);
  runner.collide(wall2);
  runner.x = mouseX
  drawSprites()
}
