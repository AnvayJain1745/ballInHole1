
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
   
  ground=new Ground(500,690,1000,20);

  ball=new Ball(200,200,20);
  
  dustbin1=new dustbin(830,675,150,10);
  dustbin2=new dustbin(775,655,10,50);
  dustbin3=new dustbin(925,655,10,50);
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
	Matter.Body.applyForce(ball.body,ball.body.position,{y:37.5,x:37.5});
	
}
}
