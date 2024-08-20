class Ball extends Figure {
    constructor(x, y, r) {
        super(x, y, 2);
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

    checkCollision(figure) {
        if (figure instanceof Paddle) {
            const nearestX = Math.max(figure.getX(), Math.min(this.getX(), figure.getX() + figure.pWidth));
            const nearestY = Math.max(figure.getY(), Math.min(this.getY(), figure.getY() + figure.pHeight));

            const deltaX = this.getX() - nearestX;
            const deltaY = this.getY() - nearestY;

            return ((deltaX * deltaX) + (deltaY * deltaY)) < (this.radius * this.radius);
        }
        return false;
    }
}





