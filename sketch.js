const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint =Matter.Constraint;

var engine,world;
var polygon1;
var slingShot;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  polygon1=new polygon(50,100,20);
  ground = new Ground(600,height,1200,20);
  ground1=new Ground (390,235,200,20)
  block1=new Block(330,100,30,40);
  block2=new Block(360,100,30,40);
  block3=new Block(390,100,30,40);
  block4=new Block(420,100,30,40);
  block5=new Block(450,100,30,40);
  block6=new Block(360,200,30,40);
  block7=new Block(390,195,30,40);
  block8=new Block(420,195,30,40);
  block9=new Block(390,155,30,40);
  slingShot = new SlingShot(polygon1.body,{x:50,y:100});
}

function draw() {
  background(50,50,50);  
  Engine.update(engine);
  
  ground.display();
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

