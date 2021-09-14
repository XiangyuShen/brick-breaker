import Ball from "./model/Ball.js";
import './style.css'

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball(canvas.width / 2, canvas.height - 30, 10, 10, "#0095DD", 2, -2);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ball.draw(ctx);
  ball.move();
  ball.bounce(canvas.width, canvas.height);

  window.requestAnimationFrame(draw);
}

draw();