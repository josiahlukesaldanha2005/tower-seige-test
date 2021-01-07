const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;
    
ground1 = new Ground(800,680,1000,60)


	Engine.run(engine);
	




}

function draw() {
	rectMode(CENTER);
	background(0);




ground1.dispaly();

drawSprites();
}
