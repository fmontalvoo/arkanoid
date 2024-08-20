class Ball extends Figure {
    constructor(x, y, r) {
        super(x, y, 1);
        this.radius = r;
        this.diameter = r / 2;
    }

    display(context) {
        context.beginPath();
        context.arc(
            this.location.x,
            this.location.y,
            this.radius, 0,
            2 * Math.PI
        );
        context.fillStyle = '#fff';
        context.fill();
        context.closePath();
    }

    update() {
        this.location.add(this.dx, this.dy);

        if (this.location.x < this.diameter
            || this.location.x > this.canvasWidth - this.diameter) {
            this.dx *= -1;
        }

        if (this.location.y < this.diameter
            || this.location.y > this.canvasHeight - this.diameter) {
            this.dy *= -1;
        }
    }
}





