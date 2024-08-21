class Figure {

    constructor(x, y, velocity) {
        this.velocity = velocity;
        this.location = new Vector(x, y);

        this.canvasWidth = 0; // ancho del canvas
        this.canvasHeight = 0; // alto del canvas

        this.dy = this.velocity;
        this.dx = this.velocity * (Math.random() < 0.5 ? -1 : 1);
    }

    setCanvasDimensions(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
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