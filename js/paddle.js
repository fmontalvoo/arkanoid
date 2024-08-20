class Paddle extends Figure {
    constructor(x, y, pWidth, pHeight) {
        super(x, y, 5);
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
}