const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder,man,manImage;
var maxDrops=5;
var load,load1,load2,load3;
var drops = [];

function preload(){
   load=loadImage("images/1.png"); 
   load1=loadImage("images/2.png"); 
   load2=loadImage("images/3.png"); 
   load3=loadImage("images/4.png"); 
   manImage=loadImage("images/walking_1.png")
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();
  world = engine.world;


  if (frameCount % 12 === 0) {
    thunder = createSprite(350,20);
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder.addImage("load",load);
        break;
        case 2: thunder.addImage("load1", load1);
        break;
        case 3: thunder.addImage("load2", load2);
        break;
        case 4: thunder.addImage("load3", load3);
        break;
    }
  } 
  
  man=new Ground(350,780)
}

function draw(){
    background(0); 
    Engine.update(engine);  
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drop (random(600,0) , random(20,0)))
    }

    for (var i= 0; i< drops.length; i++)
{
    drops[i].display(); 
}
man.display();
}   

