import { Figure } from './figure.js';
import { Paddle } from './paddle.js';

export class Ball extends Figure {

    constructor(x = 0, y = 0, r = 1) {
        super(x, y);
        this.radius = r;

        this._velocity = 2;
        this.dy = this._velocity;
        this.dx = this._velocity * (Math.random() < 0.5 ? -1 : 1);
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
    }

    edges() {
        if (this.getX() < this.radius
            || this.getX() > this.canvasWidth - this.radius) {
            this.dx *= -1;
        }

        if (this.getY() < this.radius
            || this.getY() > this.canvasHeight - this.radius) {
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