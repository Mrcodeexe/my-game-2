const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var sherlock, backp, back


function setup() {
  createCanvas(800,400);

  backp=loadImage("back.jpeg")
  engine = Engine.create();
	world = engine.world;

  sherlock=new Sherlock(200, 200);

	Engine.run(engine);

  back.addImage(backp);

}

function draw() {
  background();  
  drawSprites();
  sherlock.display();
}