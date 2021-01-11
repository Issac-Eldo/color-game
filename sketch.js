var canvas;
var music;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(100,580,200,20)
    blue.shapeColor = "blue"
    green = createSprite(300,580,200,20)
    green.shapeColor = "green"
    yellow = createSprite(500,580,200,20)
    yellow.shapeColor = "yellow"
    purple = createSprite(700,580,200,20)
    purple.shapeColor = "purple"


    //create box sprite and give velocity
    box = createSprite(random(20,750),50,20,20)
    box.shapeColor = "white"
    box.velocityX = random(-5,5)
    box.velocityY = random(2,5)
    
    leftEdge = createSprite(-5,300,10,600)
    rightEdge = createSprite(805,300,10,600)
    topEdge = createSprite(400,-5,800,10)
    
}

function draw() {
    background(rgb(169,169,169));
    
    if(blue.isTouching(box)){
        box.shapeColor = "blue"
    }
    if(green.isTouching(box)){
        box.shapeColor = "green"
    }
    if(yellow.isTouching(box)){
        box.shapeColor = "yellow"
    }
    if(purple.isTouching(box)){
        box.shapeColor = "purple"
    }


    box.bounceOff(blue)
    box.bounceOff(yellow)
    box.bounceOff(green)
    box.bounceOff(purple)
    box.bounceOff(leftEdge)
    box.bounceOff(rightEdge)
    box.bounceOff(topEdge)
    //create edgeSprite
 


    //add condition to check if box touching surface and make it box

    
    drawSprites()
}
