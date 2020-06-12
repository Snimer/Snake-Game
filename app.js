let snake;
let scl = 10;
let dadu;
let w;
let h;
let Score = 0;

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().resume();
  createCanvas(600, 600);
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
  if(snake.endGame()){
    print("END GAME");
    background(255,0,0);
    noLoop();
    let resetButton = createButton('Play Again');
  }
  if(snake.eat(dadu)){
    daduLocation();
    Score += 1;
    console.log('SCORE : ' + Score);
  }

  snake.update();
  snake.show();

  fill(255,0,0);
  noStroke();
  rect(dadu.x,dadu.y,1,1);
}
