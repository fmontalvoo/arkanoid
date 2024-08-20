class Paddle extends Figure {
    constructor(x, y, pWidth, pHeight) {
        super(x, y, 10);
        this.pWidth = pWidth;
        this.pHeight = pHeight;
    }

    display(context) {
        context.fillStyle = '#09f';
        context.fillRect(
            this.location.x,
            this.location.y,
            this.pWidth,
            this.pHeight
        );
    }

    move(delta) {
        if (delta > 0 && this.getX() < this.canvasWidth - this.pWidth) {
            this.location.x += this.velocity;
        }
        else if (delta < 0 && this.getX() > 0) {
            this.location.x -= this.velocity;
        }
    }
}