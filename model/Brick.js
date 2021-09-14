import Block from "./Block.js";

class Brick extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.visible = true;
  }

  draw(ctx) {
    if (this.visible) {
      super.draw(ctx);
    }
  }

  colides(ball) {
    if (this.visible && this.intersects(ball)) {
      this.visible = false;
      ball.colides(this); // causes the ball to bounce off
    }
  }
}

export default Brick;