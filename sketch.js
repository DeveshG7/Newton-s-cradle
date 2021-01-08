
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5, ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    bob1= new Bob(300,500,40);

    bob2= new Bob(340,500,40);

    bob3= new Bob(380,500,40);

    bob4= new Bob(420,500,40);

    bob5= new Bob(460,500,40);

    ground= new Ground(370,250,400,40);

    rope1= new Rope(bob1.body,{x:300, y:250})

    rope2= new Rope(bob2.body,{x:340, y:250})

    rope3= new Rope(bob3.body,{x:380, y:250})

    rope4= new Rope(bob4.body,{x:420, y:250})

    rope5= new Rope(bob5.body,{x:460, y:250})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  ground.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
   
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body, bob1.body.position,{x: -95, y:-95})

}


}

