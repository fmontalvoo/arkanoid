function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function (...args) {
    if (args.length === 1 && args[0] instanceof Vector) {
        this.x += args[0].x;
        this.y += args[0].y;
    }
    else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
        this.x += args[0];
        this.y += args[1];
    } else {
        throw new Error('Invalid arguments: provide a Vector or two numbers.');
    }
}

Vector.prototype.sub = function (...args) {
    if (args.length === 1 && args[0] instanceof Vector) {
        this.x -= args[0].x;
        this.y -= args[0].y;
    }
    else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
        this.x -= args[0];
        this.y -= args[1];
    } else {
        throw new Error('Invalid arguments: provide a Vector or two numbers.');
    }
}

Vector.prototype.mult = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
}

Vector.prototype.div = function (scalar) {
    this.x /= scalar;
    this.y /= scalar;
}