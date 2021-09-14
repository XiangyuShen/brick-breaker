import Sprite from "./Sprite.js";

class Ball extends Sprite {
  constructor(x, y, width, height, color, dx, dy) {
    super(x, y, width, height, color, dx, dy);
  }
  
  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0) {
        // bounce off the left edge
        this.dx *= -1; // switch direction
      } else if (this.x > canvasWidth) {
        // bounce off the right edge
        this.dx *= -1;
      }
    
      if (this.y < 0) {
        // bounce off the top edge
        this.dy *= -1; // switch direction
      } else if (this.y > canvasHeight) {
        // bounce off the bottom edge
        this.dy *= -1;
      }
  }
}

export default Ball;