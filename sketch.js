var score=0;


function preload(){
boy=loadImage("boy1.webp")
bg=loadImage("back.jpg")
book=loadImage("unnamed.png")
question1=loadImage("analytical-reasoning-job-question.jpg")
g1=loadImage("ghost1.png")
basket=loadImage("baskett.png")
fruit=loadImage("donnn.png")
cap=loadImage("capsule1.png")
fruity1=loadImage("down12.png")
question2=loadImage("gk1.webp")
question3=loadImage("qk2.jpg")
//soundy=loadImage("sound1.wav")
//ghosty=loadImage("gh")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
 
  Jack=createSprite(1250, 570, 50, 50);
  Jack.addImage(boy)
  Jack.scale=0.15
  ground=createSprite(350,650,2000,10)
  ground.visible=false
 //mazes
  bookie=createSprite(20,100,300,10)
  bookie.addImage(book)
  bookie.scale=0.2
//bookie.debug=true 

maze1=createSprite(20,155,200,10)
maze1.shapeColor="orange"
maze2=createSprite(1280,355,160,10)
maze3=createSprite(500,400,10,200)
maze4=createSprite(595,300,200,10)
maze5=createSprite(100,300,200,10)
maze6=createSprite(1000,520,200,10)
maze7=createSprite(595,500,200,10)
maze8=createSprite(1000,220,200,10)
maze9=createSprite(910,120,10,200)
maze10=createSprite(300,500,200,10)
maze2.shapeColor="orange"
maze3.shapeColor="orange"
maze4.shapeColor="orange"
maze5.shapeColor="orange"
maze6.shapeColor="orange"
maze7.shapeColor="orange"
maze8.shapeColor="orange"
maze9.shapeColor="orange"
maze10.shapeColor="orange"


basket1=createSprite(1260,320,50,50)
basket1.scale=0.5
fruit1=createSprite(350,300,20,20)
fruit2=createSprite(1100,300,20,20)
fruit3=createSprite(1100,570,20,20)
fruit4=createSprite(800,300,20,20)
fruit5=createSprite(590,420,20,20)
fruit6=createSprite(820,40,20,20)
fruit7=createSprite(100,500,20,20)
fruit8=createSprite(880,400,20,20)
fruit9=createSprite(100,900,20,20)
fruit10=createSprite(1000,100,20,20)
fruit11=createSprite(519,103,20,20)
fruit1.addImage(fruity1)
fruit2.addImage(fruit)
fruit3.addImage(fruity1)
fruit4.addImage(fruit)
fruit6.addImage(fruit)
fruit5.addImage("fruit",cap)
fruit7.addImage(fruit)
fruit8.addImage(fruity1)
fruit9.addImage(fruit)
fruit10.addImage("fruit",cap)
fruit11.addImage(fruit)
fruit1.scale=0.2
fruit2.scale=0.2
fruit3.scale=0.2
fruit4.scale=0.2
fruit5.scale=0.1
fruit6.scale=0.2
fruit7.scale=0.2
fruit8.scale=0.2
fruit9.scale=0.2
fruit10.scale=0.1
fruit11.scale=0.2
basket1.addImage(basket)
ghost1=createSprite(428,0,20,20)
//ghost1.addImage(ghosty)
ghost2=createSprite(0,220,20,20)
ghost1.velocityY=+6
ghost2.velocityX=+6
ghost3=createSprite(970,236,20,20)
ghost3.velocityY=+6
ghost1.addImage(g1)
ghost1.scale=0.2
ghost2.addImage(g1)
ghost2.scale=0.2
ghost3.addImage(g1)
ghost3.scale=0.2
//maze1.collide(Jack)
//ghosts
//ghost1=createSprite(300,300,40,40) 
//ghost1.addImage(g1)

//Jack.collide(maze2)
//Jack.collide(maze3)
//Jack.collide(maze4)
//Jack.collide(maze5)
//Jack.collide(maze6)
//Jack.collide(maze7)
//Jack.collide(maze8)
//Jack.collide(maze9)
//Jack.collide(maze10)






  
}

function draw() {
  background(bg); 
  edges=createEdgeSprites()
  textSize(20)
  fill ("red")
  //soundy.play()
 // text(mouseX + "," + mouseY,mouseX,mouseY)
 text ("Score: " + score,200,30)
  ghost1.bounceOff(edges)
  ghost2.bounceOff(maze9)
  ghost2.bounceOff(edges)
  ghost3.bounceOff(maze8)
  ghost3.bounceOff(maze6)
  Jack.collide(edges)
  if(keyDown(RIGHT_ARROW)) {
  Jack.x=Jack.x+10}
  if(keyDown(LEFT_ARROW)) {
    Jack.x=Jack.x-10}
  if(keyDown("SPACE")){
    Jack.velocityY=-10
 
  }
  if(Jack.isTouching(bookie)){
    //text ("Score: " + score,200,30)
   // Math.rbackground(question3)andom(Round(20,30))
  // var rand = Math.round(random(question1,question2,question3))
 


 /// if(frameCount % 60){
 //   console.log(frameCount)
 // }
  
    //sprites for questions
    maze1.visible=false
    maze2.visible=false
    maze3.visible=false
    maze4.visible=false
    maze5.visible=false
    maze6.visible=false
    maze7.visible=false
    maze8.visible=false
    maze9.visible=false
    maze10.visible=false
    fruit1.visible=false
    fruit2.visible=false
    fruit4.visible=false
    fruit3.visible=false
    fruit5.visible=false
    fruit6.visible=false
    fruit7.visible=false
    fruit8.visible=false
    fruit9.visible=false
    fruit10.visible=false
    fruit11.visible=false
basket1.visible=false

ghost1.destroy()
ghost2.destroy()

ghost3.destroy()
background(question2)
Ans1=createSprite(198,320,1200,30)
Ans2=createSprite(190,360,1200,20)
Ans3=createSprite(280,400,1800,20)
Ans4=createSprite(190,440,1200,20)
Ans1.visible=false
Ans2.visible=false
Ans3.visible=false
Ans4.visible=false
if(mousePressedOver(Ans2)){
  alert("Horray!!You got it right!!:>",200,200)
 score=score+500
 console.log()
 }
 if(mousePressedOver(Ans1 , Ans3,Ans4)){
   alert("You got it wrong!!. Better luck next time:/",200,200)
  // text ("Score: " + score,200,30)
  score=score-500
 }

text ("Score: " + score,200,60)
//fill ("red")
  //text(mouseX + "," + mouseY,mouseX,mouseY)
  }
  
  Jack.velocityY=Jack.velocityY+0.8
  if(Jack.isTouching(maze1) || Jack.isTouching(maze2) || Jack.isTouching(maze3) ||Jack.isTouching(maze4) ||Jack.isTouching(maze5) ||Jack.isTouching(maze6) ||Jack.isTouching(maze7) ||Jack.isTouching(maze8) ||Jack.isTouching(maze9) ||Jack.isTouching(maze10) ){
    Jack.collide(maze1)
    Jack.collide(maze2)
     Jack.collide(maze3)
    Jack.collide(maze4)
    Jack.collide(maze5)
    Jack.collide(maze6)
    Jack.collide(maze7)
    Jack.collide(maze8)
    Jack.collide(maze9)
    Jack.collide(maze10)
     
  }
  if(Jack.isTouching(basket1)){
    score=score + 500
    basket1.destroy()
    Jack.scale=0.2
  }
  if(Jack.isTouching(fruit1)  ){
fruit1.destroy()
Jack.scale=0.1
 }
if(Jack.isTouching(fruit2)){
  score=score+100
  fruit2.destroy()
}Jack.scale=0.12
if(Jack.isTouching(fruit3)){
  score=score+100
  fruit3.destroy()
}Jack.scale=0.12
if(Jack.isTouching(fruit4)){
  score=score+100
  fruit4.destroy()
}
if(Jack.isTouching(fruit5)){
  score=score+100
  fruit5.destroy()
  Jack.scale=0.12
}
if(Jack.isTouching(fruit6)){
  score=score+100
  fruit6.destroy()
  Jack.scale=0.12
}
if(Jack.isTouching(fruit7)){
  score=score+100
  fruit7.destroy()
  Jack.scale=0.12
}
if(Jack.isTouching(fruit8)){
  score=score+100
  fruit8.destroy()
  Jack.scale=0.12
}
if(Jack.isTouching(fruit9)){
  score=score+100
  fruit9.destroy()
  Jack.scale=0.12
}
if(Jack.isTouching(fruit10)){
  score=score+100
  fruit10.destroy()
  Jack.scale=0.12
}
if(Jack.isTouching(fruit11)){
  score=score+100
  fruit11.destroy()
  Jack.scale=0.122
}
if(Jack.isTouching(ghost1) || Jack.isTouching(ghost2) || Jack.isTouching(ghost3)){
  Jack.x=1250
  Jack.y=570
  score=score-200
}
 
  
  drawSprites();
  
}