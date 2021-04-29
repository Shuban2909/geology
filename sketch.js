const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone1;
var iron1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(595,height,1200,20);
    plane.debug=true;
    hammer = new Hammer(10,100);

    
    rubber1 = new Rubber(100,51,50,{
        restitution:0.7,
        friction:5,
        density:1,
      
    });
  
    stone1= new Stone(300,580,50,150);

    iron1=new Iron(800,580,50,150);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    // var option={
    //     restitution:0.3,
    //     friction:5,
    //     density:1,
    //     isStatic:false
    // }
    // ellipse(rubber1.x,rubber1.y,35,{
    //     restitution:0.3,
    //     friction:5,
    //     density:1,
    //     isStatic:false
    // });   

    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
 
}

