class Paddle extends Figure {
    constructor(x, y, pWidth, pHeight) {
        super(x, y, 10);
        this.pWidth = pWidth;
        this.pHeight = pHeight;
        this.$sprite = document.querySelector('#sprite');
    }

    display(context) {
        context.drawImage(
            this.$sprite,
            29,
            174,
            this.pWidth,
            this.pHeight,
            this.getX(),
            this.getY(),
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