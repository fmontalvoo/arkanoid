export function Vector(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function (v) {
    if (v instanceof Vector) {
        this.x += v.x;
        this.y += v.y;
    }
}

Vector.prototype.sub = function (v) {
    if (v instanceof Vector) {
        this.x -= v.x;
        this.y -= v.y;
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