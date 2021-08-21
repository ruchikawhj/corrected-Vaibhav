const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var ground;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
ball =new Ball(100,200,50);
ground=new Ground(200,390,400,10);
  
}


function draw() 
{
  background(51);
  
  Engine.update(engine);
  ball.display();
  ground.display();
  
  
  

 
}
