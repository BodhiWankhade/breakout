var bricks,ball,paddle;
var edges;
var ballImg,Score=0;


function preload(){
ballImg=loadImage("ball1.jpg");
}



function setup(){
createCanvas(1000,600);
ball = createSprite(700,450,20,20);
ball.addImage(ballImg);
ball.scale=0.05;

//bricks=createSprite(65,65,50,25);
paddle=createSprite(700,500,200,10);
paddle.shapeColor="brown";
edges = createEdgeSprites();

bricks=createGroup();




createBrickRow(65,"red");
createBrickRow(65+29,"orange");
createBrickRow(65+29+29,"yellow");
createBrickRow(65+29+29+29,"green")
createBrickRow(65+29+29+29+29,"blue")
}







function draw (){
background("black");
paddle.x = World.mouseX;
ball.bounceOff(edges[2]);
ball.bounceOff(edges[0]);
ball.bounceOff(paddle);
ball.bounceOff(edges[1]);
ball.bounceOff(bricks,brickHit );

fill("yellow");
text("SCORE ::"+Score,450,20);

 
if(Score>=425){
  console.log("Game Won");
  ball.velocityX=0;
  ball.velocityY=0;
}






if(paddle.x<100){
  paddle.x=100;
}

if(paddle.x>900){
paddle.x=900;

}



  drawSprites()
}

function keyPressed(){

 if(keyCode===32){
   ball.velocityX = -8;
   ball.velocityY = -8;
  } 





}
function createBrickRow(y, color){
  for(var c = 0; c < 17;  c++){
    var brick = createSprite(65+54*c, y, 50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
  }
  
  }

  function brickHit(ball,brick){
    Score=Score+5;
    brick.remove()
 
 }
   
  

