let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(20, 255, 89);
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  x = constrain(x, 0, 400)
  y = constrain(y, 0, 400)
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX,mouseY, distancia);
  //circle(x, y, 10);
   
  if (distancia < 10){ 
    text("Encontrei!", 200, 200);
    noLoop();
  }
}

function draw() {
  background(20, 255, 89);
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX,mouseY,distancia); 
  //circle(x, y, 10);
  
  if(distancia > 50){
    fill("blue")
  }
  if(distancia < 50){
    fill("red")
  }

  if (distancia < 2){
    text('Encontrei',200,200);
    noLoop();
  }
}
