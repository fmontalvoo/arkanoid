class Ball {
    constructor(x, y, r) {
        this.radius = r;
        this.diameter = r / 2;

        this.velocity = 1;
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
        context.beginPath();
        context.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
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
    edges() { }
}





