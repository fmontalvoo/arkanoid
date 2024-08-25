import { Ball } from './ball.js';
import { Figure } from './figure.js';

export class Brick extends Figure {

    constructor(x = 0, y = 0, bWidth, bHeight, active, asset) {
        super(x, y);
        this.bWidth = bWidth;
        this.bHeight = bHeight;
        this.active = active;
        this.asset = asset;
        this.$bricks = document.querySelector('#bricks');
    }

    display(context) {
        context.drawImage(
            this.$bricks,
            this.asset * 32,
            0,
            this.bWidth,
            this.bHeight,
            this.getX(),
            this.getY(),
            this.bWidth,
            this.bHeight
        );
    }

    checkCollision(ball) {
        if (ball instanceof Ball) {
            const nearestX = Math.max(this.getX(), Math.min(ball.getX(), this.getX() + this.bWidth));
            const nearestY = Math.max(this.getY(), Math.min(ball.getY(), this.getY() + this.bHeight));

            const deltaX = ball.getX() - nearestX;
            const deltaY = ball.getY() - nearestY;

            return ((deltaX * deltaX) + (deltaY * deltaY)) < (ball.radius * ball.radius);
        }
        return false;
    }
}