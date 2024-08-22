const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 450;
canvas.height = 400;

const ball = new Ball(canvas.width / 2, canvas.height - 25, 4);
ball.setCanvasDimensions(canvas.width, canvas.height);

const [pWidth, pHeight] = [50, 10];
const paddle = new Paddle((canvas.width - pWidth) / 2, canvas.height - 2 * pHeight, pWidth, pHeight);
paddle.setCanvasDimensions(canvas.width, canvas.height);

const bricks = new Bricks(5, 13, 32, 16, 20, 18, 0);

function clean() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

const fps = 60;
let msPrev = window.performance.now();
let msFPSPrev = window.performance.now() + 1000;
const msPerFrame = 1000 / fps;
let frames = 0;
let framesPerSec = fps;

const godMode = false;

function draw() {
    window.requestAnimationFrame(draw);

    const msNow = window.performance.now();
    const msPassed = msNow - msPrev;

    if (msPassed < msPerFrame) return;

    const excessTime = msPassed % msPerFrame
    msPrev = msNow - excessTime

    frames++

    if (msFPSPrev < msNow) {
        msFPSPrev = window.performance.now() + 1000
        framesPerSec = frames;
        frames = 0;
    }

    paint();
}

function paint() {
    clean();

    ball.display(context);
    ball.update();

    paddle.display(context);

    if (ball.checkCollision(paddle)) {
        ball.dy *= -1;
    }

    if (!godMode && ball.getY() > paddle.getY() + 2 * ball.radius) {
        document.location.reload();
    }

    bricks.display(context);
    bricks.checkCollision(ball);

    context.fillStyle = '#fff';
    context.fillText(`FPS: ${framesPerSec}`, 5, 10);
}

function initEvents() {
    const keyDownHandler = (event) => {
        const { key } = event;
        switch (key) {
            case 'ArrowLeft':
                paddle.move(-1);
                break;
            case 'ArrowRight':
                paddle.move(1);
                break;
        }
    }
    const keyUpHandler = (event) => {
        const { key } = event;
        if (key == 'ArrowLeft' || key == 'ArrowRight') {
            paddle.move(0);
        }
    }

    document.addEventListener('keyup', keyUpHandler);
    document.addEventListener('keydown', keyDownHandler);
}

draw();
initEvents();