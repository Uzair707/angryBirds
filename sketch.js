const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,250,50,50);
    box2 = new Box(750,250,50,50);
    box3 = new Box(600,350,50,50);
    box4 = new Box(750,350,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(675,300);
    pig2 = new Pig(675,351);
    log1 = new Log(100,300,200,PI/3);
    log2 = new Log(675,300,200,PI/2);
    bird1 = new Bird(50,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
}