
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
	
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  // ellipseMode();
   
  ground=new Ground(500,670,1000,50);
  
  World.add(world,ground);

  ball=new Ball(200,200,20);
  World.add(world,ball);
  
  dustbin1=new dustbin(840,655,150,10);
  dustbin2=new dustbin(765,635,10,50);
  dustbin3=new dustbin(915,635,10,50);
  World.add(world,dustbin1);
  World.add(world,dustbin2);
  World.add(world,dustbin3);
   }


function draw() {
  rectMode(CENTER);
  background(25);
  
  ball.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
    drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{y:85,x:85});
	
}
}
