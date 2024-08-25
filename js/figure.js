import { Vector } from './vector.js';

export class Figure {

    constructor(x = 0, y = 0) {
        this.location = new Vector(x, y);

        this.canvasWidth = 0; // ancho del canvas
        this.canvasHeight = 0; // alto del canvas
    }

    setCanvasDimensions(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
    }

    applyForce(...args) {
        if (args.length === 1 && args[0] instanceof Vector) {
            this.location.add(args[0]);
        }
        else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            this.location.add(new Vector(args[0], args[1]));
        }
    }

    display(context) {

    }

    update() {

    }

    checkCollision(figure) {

    }

    getX() {
        return this.location.x;
    }

    getY() {
        return this.location.y;
    }
}