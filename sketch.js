
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var rod ;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
  function preload(){
 	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	engine = Engine.create();
	world = engine.world;
	ball1 = new ball(310,350,15,13);
	ball2 = new ball(325,350,15,13);
	ball3 = new ball(340,350,15,13);
	ball4 = new ball(355,350,15,13);
	ball5 = new ball(370,350,15,13);
	ball6 = new ball(395,350,15,13);
	rod = new rod(ball1,ball2,ball3,ball4,ball5,ball6);
	Engine.run(engine);
}
function draw() {
  ball1.display();
  drawSprites();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  rod.display();
  }