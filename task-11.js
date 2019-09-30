
const start_ball_speed = 5;
const ball_size = 30;

const pwidth = 15;
const pheight = 90;

var p1pos, p2pos;
var p1v, p2v;
var p1s, p2s;

var ball, ballVelocity;

function setup() {

  createCanvas(800, 400);

  p1pos = p2pos = height / 2 - 50; 

  p1v = p2v = 0;
  p1s = p2s = 0;

  ball = createVector(width / 2, height / 2); 
  ballVelocity = createVector(random(-1, 1), random(-1, 1));
  ballVelocity.setMag(start_ball_speed); 

  textAlign(CENTER);
  textSize(30);
  fill(500);
}

function draw() {

  background(100);

 
  rect(pwidth * 2, p1pos, pwidth, pheight);
  rect(width - (pwidth * 3), p2pos, pwidth, pheight);

  ellipse(ball.x, ball.y, ball_size);

  text(p1s + "  |  " + p2s, width / 2, 50);

  handlePaddles();

  handleBall();
}

function handleBall() {

  ball.x += ballVelocity.x;
  ball.y += ballVelocity.y;

  if (ball.y > height || ball.y < 0)
    ballVelocity.y *= -1; 

  if (ball.x <= pwidth * 3) { 

    if (ball.x <= pwidth) { 

      p2s++;
      reset();
      return;
    }

   
    if (ball.y > p1pos && ball.y < p1pos + pheight) {

      if (ballVelocity.x < 0) { 

        ballVelocity.x *= -1;
        ballVelocity.mult(random(1, 1.1));
      }
    }

  } else if (ball.x >= width - (pwidth * 3)) { 

    if (ball.x >= width - pwidth) { 

      p1s++;
      reset();
      return;
    }

    if (ball.y > p2pos && ball.y < p2pos + pheight) {

      if (ballVelocity.x > 0) {
        ballVelocity.x *= -1;
        ballVelocity.mult(random(1, 1.1));
      }
    }

  }

}

function reset() {

  ballVelocity.setMag(start_ball_speed); 
  ball = createVector(width / 2, height / 2);
}

function handlePaddles() {

  if (keyIsDown(87)) {


    p1v -= 5;
  } else if (keyIsDown(83)) {


    p1v += 5;
  }

  if (keyIsDown(UP_ARROW)) {


    p2v -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
  

    p2v += 5;
  }

  p1pos += p1v;
  p2pos += p2v;

  /* friction */
  p1v *= 0.4;
  p2v *= 0.4;
}
