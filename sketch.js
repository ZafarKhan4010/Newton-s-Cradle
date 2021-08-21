
//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


//Declaring the variables.
var bob1,bob2,bob3,bob4,bob5,roof;

var rope1,rope2,rope3,rope4,rope5;





function setup() {




createCanvas(windowWidth,windowHeight);


//Creating an engine in the variable engine.

engine = Engine.create();

//Storing engine's world in the variable world.

world = engine.world;




// creating the craddle's bob

bob1 = new Bob(505,600);

bob2 = new Bob(585,600);

bob3 = new Bob(665,600);

bob4 = new Bob(745,600);

bob5 = new Bob(825,600);


// roof
roof = new Roof(700,300);



// ropes

rope1 = new Rope(bob1.body,roof.body,-150,0);

rope2 = new Rope(bob2.body,roof.body,-75,0);

rope3 = new Rope(bob3.body,roof.body,0,0);

rope4 = new Rope(bob4.body,roof.body,75,0);

rope5 = new Rope(bob5.body,roof.body,150,0);



//Running the previously created engine.
Engine.run(engine);



}




//Draw loop function.
function draw() {



//Setting rectMode as CENTER.
rectMode(CENTER);


//Setting ellipseMode as RADIUS.
ellipseMode(RADIUS);



//Setting cloudImg variable as the background.
background("black");








//Displaying all the bodies.
rope1.display();

rope2.display();

rope3.display();

rope4.display();

rope5.display();


// bob 
bob1.display();

bob2.display();

bob3.display();

bob4.display();

bob5.display();

roof.display();





//Applying force to different bobs when different number keys are pressed.
if(keyDown("1")) {

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});

}



if(keyDown("2")) {

Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-700,y:0});

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});

}



if(keyDown("3")) {

Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-700,y:0});

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});

Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-700,y:0});

}


if(keyDown("4")) {

Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-700,y:0});

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});

Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-700,y:0});

Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-700,y:0});

}




if(keyDown("5")) {

Matter.Body.applyForce(bob2.body,bob2.body.position,{x:700,y:0});

Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});

Matter.Body.applyForce(bob3.body,bob3.body.position,{x:700,y:0});

Matter.Body.applyForce(bob4.body,bob4.body.position,{x:700,y:0});


}




if(keyDown("6")) {


Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});

Matter.Body.applyForce(bob3.body,bob3.body.position,{x:700,y:0});

Matter.Body.applyForce(bob4.body,bob4.body.position,{x:700,y:0});

}





if(keyDown("7")) {


Matter.Body.applyForce(bob4.body,bob4.body.position,{x:700,y:0});

Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});

}





if(keyDown("8")) {


Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});


}






//Displaying all the sprites.
drawSprites();




}


