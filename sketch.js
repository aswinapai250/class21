 var ball,ground,left,right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var ball_option = {
	isStatic:false,
restitution:0.95,
friction:0,
density:1.2
}
	Engine.run(engine);
  ball = Bodies.circle(50,100,20,ball_option);
  World.add(world,ball);

  groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);


  

  ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
fill("red")
 ellipse(ball.position.x,ball.position.y,20);
 groundObj.display()
 leftSide.display()
 rightSide.display()
  
}
function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }

}
/*function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
  
  function vForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
    }*/
 



