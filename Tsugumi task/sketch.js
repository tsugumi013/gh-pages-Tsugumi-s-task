var x, y;

function setup() {
  createCanvas(500,500);
  // Starts in the middle
  x = width/2 ;
  y = height;
  noStroke()
}

function draw() {
  background(255);
  
  // circle
  
  fill(random(255),random(255),random(255));
  ellipse(x, y, random(-122,120), random(-122,100));
  
  //circle2
  
  fill(random(255),random(255),random(255));
  ellipse(x+random(-90,90), y+random(-90,90), random(-2,100), random(-2,100));
  
  
  //circle3
  
  
   
  fill(random(255),random(255),random(255));
  ellipse(x+random(-160,160), y+random(-160,160), random(-20,100));
  
  
  //circle4
  
   
  fill(random(255),random(255),random(255));
  ellipse(x+random(-180,180), y+random(-80,80), random(-30,100), random(-20,100));
  
  //circle5
  
  
  fill(random(255),random(255),random(255));
  ellipse(x+random(-10,220), y+random(-10,220), random(-50,100), random(-20,100));
  
  //circle6
  
  fill(random(255),random(255),random(255));
  ellipse(x+random(-200,200), y+random(-200,200), random(-200,100));
  
  
  //circle 7
  
  fill(random(255),random(255),random(255));
  ellipse(x+random(-250,250), y+random(-250,250), random(-200,100));
  
  //circle8
  fill(random(255),random(255),random(255));
  ellipse(x+random(-150,150), y+random(-150,150), random(-200,100));
  
  //circle9
  fill(random(255),random(255),random(255));
  ellipse(x+random(-350,350), y+random(-350,350), random(-200,100));
  
  
  //circle10
  
fill(random(255),random(255),random(255));
  ellipse(x+random(-400,50), y+random(-400,50), random(-200,100));
  
  //circle 11
  fill(random(255),random(255),random(255));
  ellipse(x+random(-400,2), y+random(-400,10), random(-200,200));
  
  //circle 12
  fill(random(255),random(255),random(255));
  ellipse(x+random(-400,250), y+random(-400,150), random(-200,200));
  
  //circle 13
  fill(random(255),random(255),random(255));
  ellipse(x+random(-400,350), y+random(-400,350), random(-200,200));
  
   //circle 14
  fill(random(255),random(255),random(255));
  ellipse(x+random(-400,350), y+random(-100,150), random(-100,100));
  
  //circle 15
  fill(random(255),random(255),random(255));
  ellipse(x+random(-200,350), y+random(-300,150), random(-100,300));
  
  //circle 16
  fill(random(255),random(255),random(255));
  ellipse(x+random(-500,350), y+random(-500,150), random(-400,300));
  
  
  //circle 17
  fill(random(255),random(255),random(255));
  ellipse(x+random(-10,50), y+random(-80,150), random(-100,300));
  
  //circle 18
  fill(random(255),random(255),random(255));
  ellipse(x+random(-500,50), y+random(-500,50), random(-30,200));
  
  //circle 19
  fill(random(255),random(255),random(255));
  ellipse(x+random(-400,200), y+random(-200,150), random(-100,100));
  
  //circle 20
  fill(random(255),random(255),random(255));
  ellipse(x+random(-200,300), y+random(-100,250), random(-200,200));
  
  
  //circle 21
  fill(random(255),random(255),random(255));
  ellipse(x+random(-200,200), y+random(-200,250), random(-200,200));
  
  //circle 22
  fill(random(255),random(255),random(255));
  ellipse(x+random(-300,300), y+random(-300,350), random(-300,3));
  
  
  
  
  // horizontal axis
  x = x + random(-10,10);
  // speed
  y = y-1 ;
  
  // Reset
  if (x>width) {x = width;
  }else if(y < 0) {
    y = height;
  }
}