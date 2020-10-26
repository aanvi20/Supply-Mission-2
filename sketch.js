var helicopterIMG, helicopterSprite, packageSprite1, packageSprite2, packageSprite3, packageSprite4, packageSprite5, packageIMG1, packageIMG2, packageIMG3, packageIMG4,packageIMG5;
var packageBody1, packageBody2, packageBody3, packageBody4, packageBody5, ground
var buttonIMG1, buttonIMG2, buttonIMG3, buttonIMG4,buttonIMG5
var buttonSprite1, buttonSprite2, buttonSprite3, buttonSprite4, buttonSprite5
var personIMG1, personIMG2, personIMG3, personIMG4,personIMG5
var personSprite1, personSprite2, personSprite3, personSprite4, personSprite5
var backgroundSprite, backgroundIMG, block
var happy1, happy2, happy3, happy4, happy5, happyIMG
var rect1, rect2, rect3, rectBody1, rectBody2, rectBody3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG1=loadImage("2012-8-10-crate-9ad237d3f045c262741371d8ed75e129.png")
	packageIMG2=loadImage("12065571981703332379mcol_closed_box.svg.hi.png")
	packageIMG3=loadImage("Transparent_Blue_Suitcase_PNG_Clipart_Picture.png")
	packageIMG4=loadImage("unnamed (16).png")
	packageIMG5=loadImage("unnamed (17).png")

	buttonIMG1=loadImage("number-1-button-hi.png")
	buttonIMG2=loadImage("number-2-button-hi.png")
	buttonIMG3=loadImage("number-3-button-hi.png")
	buttonIMG4=loadImage("number-4-button-hi.png")
	buttonIMG5=loadImage("number-5-button-hi.png")

	personIMG1=loadImage("1200px-A_Cartoon_Businessman_With_Beard.svg.png")
	personIMG2=loadImage("unnamed (15).png")
	personIMG3=loadImage("business-man-cartoon-png-free-download-31567109436y3oqiw5stw.png")
	personIMG4=loadImage("Unnamed (18).png")
	personIMG5=loadImage("CE983B81-E6F4-4761-9F0E-F3FEDF52445C.png")

	backgroundIMG=loadImage("24c70c7a55d7b348f87c8a7a0a078897.png")
	happyIMG=loadImage("image_processing20200511-13221-tpzu97.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	

	groundSprite=createSprite(width/2, height-40, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible=false;

	backgroundSprite=createSprite(width/2, height/2, width, height);
	backgroundSprite.addImage(backgroundIMG)
	backgroundSprite.scale=1.5
	
	block=createSprite(650, 200, 50,50);
	block.visible=false;

	rect1=createSprite(250, 620, 20,150);
	rect1.shapeColor=color("red")

	rect2=createSprite(380, 685, 250,20);
	rect2.shapeColor=color("red")

	rect3=createSprite(500, 620, 20,150);
	rect3.shapeColor=color("red")

	packageSprite1=createSprite(width/2, 80, 10,10);
	packageSprite1.addImage(packageIMG1)
	packageSprite1.scale=0.15
	packageSprite1.visible=false;

	packageSprite2=createSprite(width/2, 80, 10,10);
	packageSprite2.addImage(packageIMG2)
	packageSprite2.scale=0.15
	packageSprite2.visible=false;

	packageSprite3=createSprite(width/2, 80, 10,10);
	packageSprite3.addImage(packageIMG3)
	packageSprite3.scale=0.03
	packageSprite3.visible=false;

	packageSprite4=createSprite(width/2, 80, 10,10);
	packageSprite4.addImage(packageIMG4)
	packageSprite4.scale=0.15
	packageSprite4.visible=false;

	packageSprite5=createSprite(width/2, 80, 10,10);
	packageSprite5.addImage(packageIMG5)
	packageSprite5.scale=0.15
	packageSprite5.visible=false;

	buttonSprite1=createSprite(500, 80, 10,10);
	buttonSprite1.addImage(buttonIMG1)
	buttonSprite1.scale=0.05
	buttonSprite1.visible=false;

	buttonSprite2=createSprite(540, 80, 10,10);
	buttonSprite2.addImage(buttonIMG2)
	buttonSprite2.scale=0.05
	buttonSprite2.visible=false;

	
	buttonSprite3=createSprite(580, 80, 10,10);
	buttonSprite3.addImage(buttonIMG3)
	buttonSprite3.scale=0.05
	buttonSprite3.visible=false;


	buttonSprite4=createSprite(620, 80, 10,10);
	buttonSprite4.addImage(buttonIMG4)
	buttonSprite4.scale=0.05
	buttonSprite4.visible=false;


	buttonSprite5=createSprite(660, 80, 10,10);
	buttonSprite5.addImage(buttonIMG5)
	buttonSprite5.scale=0.05
	buttonSprite5.visible=false;


	personSprite1=createSprite(70, 550, 10,10);
	personSprite1.addImage(personIMG1)
	personSprite1.scale=0.12

	personSprite2=createSprite(180, 550, 10,10);
	personSprite2.addImage(personIMG2)
	personSprite2.scale=0.5
	
	personSprite3=createSprite(550, 550, 10,10);
	personSprite3.addImage(personIMG3)
	personSprite3.scale=0.35

	personSprite4=createSprite(650, 550, 10,10);
	personSprite4.addImage(personIMG4)
	personSprite4.scale=0.6

	personSprite5=createSprite(750, 550, 10,10);
	personSprite5.addImage(personIMG5)
	personSprite5.scale=0.9

	happy1=createSprite(80, 465, 10,10);
	happy1.addImage(happyIMG)
	happy1.scale=0.12
	happy1.visible=false;

	happy2=createSprite(180, 465, 10,10);
	happy2.addImage(happyIMG)
	happy2.scale=0.12
	happy2.visible=false;

	happy3=createSprite(550, 465, 10,10);
	happy3.addImage(happyIMG)
	happy3.scale=0.12
	happy3.visible=false;

	happy4=createSprite(645, 465, 10,10);
	happy4.addImage(happyIMG)
	happy4.scale=0.12
	happy4.visible=false;

	happy5=createSprite(750, 465, 10,10);
	happy5.addImage(happyIMG)
	happy5.scale=0.12
	happy5.visible=false;

	helicopterSprite=createSprite(-100, 170, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8
	helicopterSprite.velocityX=6
	


	engine = Engine.create();
	world = engine.world;

	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody2);

	packageBody3 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody3);

	packageBody4 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody4);

	packageBody5 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody5);
	
  //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	/*
	rectBody1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, rectBody1);

	rectBody2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, rectBody2);

	rectBody3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, rectBody3);
	*/


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y 

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  packageSprite3.x= packageBody3.position.x 
  packageSprite3.y= packageBody3.position.y 

  packageSprite4.x= packageBody4.position.x 
  packageSprite4.y= packageBody4.position.y 

  packageSprite5.x= packageBody5.position.x 
  packageSprite5.y= packageBody5.position.y 
  drawSprites();

  if(helicopterSprite.isTouching(block)){
	 helicopterSprite.velocityX=0;
	 fill("black")
	 text("Press them one by one.", 520, 60)
	 buttonSprite1.visible=true;
  }
   
  
  
  
  keyPressed();
}

function keyPressed() {
 if (mousePressedOver(buttonSprite1)) {
    Matter.Body.setStatic(packageBody1, false);
	packageSprite1.visible=true;
	happy3.visible=true;
	buttonSprite1.remove();
	buttonSprite2.visible=true;
  }

  if (mousePressedOver(buttonSprite2)) {
    Matter.Body.setStatic(packageBody2, false);
	packageSprite2.visible=true;
	happy5.visible=true;
	buttonSprite2.remove();
	buttonSprite3.visible=true;
  }

  if (mousePressedOver(buttonSprite3)) {
    Matter.Body.setStatic(packageBody3, false);
	packageSprite3.visible=true;
	happy1.visible=true;
	buttonSprite3.remove();
	buttonSprite4.visible=true;
  }

  if (mousePressedOver(buttonSprite4)) {
    Matter.Body.setStatic(packageBody4, false);
	packageSprite4.visible=true;
	happy2.visible=true;
	buttonSprite4.remove();
	buttonSprite5.visible=true;
  }

  if (mousePressedOver(buttonSprite5)) {
    Matter.Body.setStatic(packageBody5, false);
	packageSprite5.visible=true;
	happy4.visible=true;
	buttonSprite5.remove();
	
  }

 
}



