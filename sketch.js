var backgroundImg;
var catImg,cat,catImg3;
var mouse,mouseImg2,mouseImg;



function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png")
    mouseImg=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png")
    mouseImg3=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(200,700,40,50);
    mouse.addImage(mouseImg);
    mouse.scale=0.1;

    cat=createSprite(800,700,40,50);
    cat.addImage(catImg);
    cat.scale=0.1;
    


}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width- mouse.width)/2 ){
      cat.addAnimation("catImg",catImg3);
      cat.changeImage("catImg")
      cat.velocityX=0
      cat.x=300
      mouse.addImage("mouse",mouseImg3)
      mouse.changeImage("mouse")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW){
    cat.addAnimation("catwalk",catImg2)
    cat.changeAnimation("catwalk");
    cat.velocityX=-2
  

    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse");
    mouse.frameDelay=10





}

}
