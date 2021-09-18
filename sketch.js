var cat;
var mouse;
var bgImage;
function preload() {
 bgImage=loadImage("images/garden.png");
tomImg1= loadAnimation("images/cat1.png");
tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
tomImg3= loadAnimation("images/cat4.png");
jerryImg1=loadAnimation("images/mouse1.png");
jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600);
    mouse=createSprite(200,600);
    cat.addAnimation("c1",tomImg1);
    mouse.addAnimation("m1",jerryImg1);
    cat.scale=0.2;
    mouse.scale=0.15;
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) { cat.velocityX=0;
    cat.addAnimation("tomLastImage", tomImg3);
    cat.x =300; cat.scale=0.2;
    cat.changeAnimation("tomLastImage");
    mouse.addAnimation("jerryLastImage", jerryImg3);
    mouse.scale=0.15;
    mouse.changeAnimation("jerryLastImage"); }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("tomRunning", tomImg2);
    cat.changeAnimation("tomRunning");
    mouse.addAnimation("jerryTeasing", jerryImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing");

}

}
