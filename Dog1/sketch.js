var word = 'Huahua';
var age1 = 'Four year-young';
var dislike = 'Dislike:';
var x = 0;

function preload() {
  frame = loadImage('plx/Dog1/image/Frame.png');
  dog1 = loadImage('plx/Dog1/image/chihuahua.png');
  bow = loadImage('plx/Dog1/image/bow.png');
  ribbon = loadImage('plx/Dog1/image/ribbon.png');
  
  ghost =loadImage('plx/Dog1/image/ghost.png');
  ghost1 = loadImage('plx/Dog1/image/ghost1.jpg');
  
  mail = loadImage('plx/Dog1/image/mail.png');
  mail1 = loadImage('plx/Dog1/image/mail1.jpg');
  
  cat = loadImage('plx/Dog1/image/cat.png');
  cat1 = loadImage('plx/Dog1/image/cat1.jpg');
  
  bone = loadImage('plx/Dog1/image/bone.png');
  bone1 = loadImage('plx/Dog1/image/bone1.jpg');
  
  tennis = loadImage('plx/Dog1/image/tennis.png');
  tennis1 = loadImage('plx/Dog1/image/tennis1.jpg');
  
  bird = loadImage('plx/Dog1/image/bird.png');
  bird1 = loadImage('plx/Dog1/image/bird1.jpg');
  
  male = loadImage('plx/Dog1/image/male.png');
  male1 = loadImage('plx/Dog1/image/male1.jpg');
  
  female = loadImage('plx/Dog1/image/female.png');
  female1 = loadImage('image/female1.jpg');
  
  love1 = loadImage('plx/Dog1/image/love.png');
  dislike1 = loadImage('plx/Dog1/image/dislike.png');
  
  
  button = loadImage('plx/Dog1/image/button.png');
}
function setup(){
  createCanvas(1524,768);
  background(205,235,252);
}
function draw(){
  translate(100,0);
  push();
  
  push();
  textSize(50);
  text(word, 425, 80);
  pop();
  
  push();
  textSize(30);
  text(age1,770,250);
  text(dislike,770,400);
  pop();
  
  pop();
  
  push();
  scale(0.4);
  image(frame,200,100);
  image(dog1,200,100);
  image(male,0,300);
  image(love1,-350,700);
  image(dislike1,1500,700);
  image(button,680,1200);
  pop();
  
  push();
  scale(0.15);
  
  image(bird,4800,3500);
  image(cat,6000,3500);
  image(mail,5400,3500);
  
  image(bone,0,3500);
  image(tennis,600,3500);
  image(ghost,1200,3500);
  pop();
  
   if (mouseButton == RIGHT && mouseIsPressed)
      if (mouseX > 500 && mouseX < 800 && mouseY < 800 && mouseY > 500) {
        dot();
        x = x+1;
      if(x>50){
        mail = ghost1;
      }
      if(x>80){
        bone = bird1;
      }
      if(x>110){
        tennis = mail1;
      }
      if(x>140){
        bird = ghost1;
      }
      if(x>170){
        cat = ghost1;
      }
      if(x>200){
        bird1 = ghost1;
      }
      if(x>230){
        mail1 = ghost1;
      }
      

      }
}
function dot(){
  ellipse(x,0,1,1);
}
