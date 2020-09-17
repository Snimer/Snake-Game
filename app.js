let snake;
let scl = 10;
let dadu;
let w;
let h;
let Score = 0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / scl);
  h = floor(height / scl);
  frameRate(10)
  snake = new Snake();
  daduLocation();

}
function daduLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
  dadu = createVector(x, y);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0,1);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1,0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1,0);
  }else if (keyCode === '  ') {
    snake.grow();

   }
}



function draw() {
  scale(scl);
  background(0);
  fill(255)
  textSize(1.8)
  text('Score : ' + Score, 0.5, 2)

  if(snake.endGame()){
    background(255,0,0);
    fill(255)
    textSize(5)
    text("END GAME!", 5, 20)
    noLoop();
  }

  if(snake.eat(dadu)){
    daduLocation();
    Score += 1;
  }

  snake.update();
  snake.show();

  fill(255,0,0);
  noStroke();
  rect(dadu.x,dadu.y,1,1);
}
