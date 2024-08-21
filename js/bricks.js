class Bricks {
    constructor(bRowCount, bColumnCount, bWidth, bHeight, bOffsetTop, bOffsetLeft, bPadding) {
        this.bRowCount = bRowCount;
        this.bColumnCount = bColumnCount;
        this.bWidth = bWidth;
        this.bHeight = bHeight;
        this.bOffsetTop = bOffsetTop;
        this.bOffsetLeft = bOffsetLeft;
        this.bPadding = bPadding;
        this.bricks = [];

        for (let col = 0; col < this.bColumnCount; col++) {
            this.bricks[col] = []; // Inicia una fila vacia
            for (let row = 0; row < this.bRowCount; row++) {
                // Calcula posicion del ladrillo en pantalla
                const brickX = col * (this.bWidth + this.bPadding) + this.bOffsetLeft;
                const brickY = row * (this.bHeight + this.bPadding) + this.bOffsetTop;
                // Cargar ladrillo aleatorio
                const random = Math.floor(Math.random() * 8);

                this.bricks[col][row] = new Brick(brickX, brickY, this.bWidth, this.bHeight, true, random);
            }
        }
    }

    display(context) {
        for (let col = 0; col < this.bColumnCount; col++) {
            for (let row = 0; row < this.bRowCount; row++) {
                const currentBrick = this.bricks[col][row];
                if (!currentBrick.active)
                    continue;

                currentBrick.display(context);
            }
        }
    }

    checkCollision(ball) {
        if (ball instanceof Ball) {
            for (let col = 0; col < this.bColumnCount; col++) {
                for (let row = 0; row < this.bRowCount; row++) {
                    const currentBrick = this.bricks[col][row];
                    if (!currentBrick.active)
                        continue;

                    if (currentBrick.checkCollision(ball)) {
                        currentBrick.active = false;
                        ball.dy *= -1;
                    }
                }
            }
        }
    }
}