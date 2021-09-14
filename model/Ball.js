import Sprite from "./Sprite.js";

class Ball extends Sprite {
    bounce(canvasWidth, canvasHeight) {
        if (this.x < 0 || this.x + this.width > canvasWidth) {
          // bounce off the left/right edges
          this.dx *= -1; // switch direction
        } 
      
        if (this.y < 0 || this.y + this.height > canvasHeight) {
          // bounce off the top/bottom edge
          this.dy *= -1; // switch direction
        } 
    }
}

export default Ball;