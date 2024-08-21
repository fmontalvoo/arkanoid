class Ball extends Figure {

    constructor(x, y, r) {
        super(x, y);
        this.radius = r;
        this.diameter = r / 2;

        this.velocity = 2;
        this.dy = this.velocity;
        this.dx = this.velocity * (Math.random() < 0.5 ? -1 : 1);
    }

    display(context) {
        context.beginPath();
        context.arc(
            this.getX(),
            this.getY(),
            this.radius, 
            0,
            2 * Math.PI
        );
        context.fillStyle = '#fff';
        context.fill();
        context.closePath();
    }

    update() {
        this.applyForce(this.dx, this.dy);

        if (this.getX() < this.diameter
            || this.getX() > this.canvasWidth - this.diameter) {
            this.dx *= -1;
        }

        if (this.getY() < this.diameter
            || this.getY() > this.canvasHeight - this.diameter) {
            this.dy *= -1;
        }
    }

    checkCollision(paddle) {
        if (paddle instanceof Paddle) {
            const nearestX = Math.max(paddle.getX(), Math.min(this.getX(), paddle.getX() + paddle.pWidth));
            const nearestY = Math.max(paddle.getY(), Math.min(this.getY(), paddle.getY() + paddle.pHeight));

            const deltaX = this.getX() - nearestX;
            const deltaY = this.getY() - nearestY;

            return ((deltaX * deltaX) + (deltaY * deltaY)) < (this.radius * this.radius);
        }
        return false;
    }
}