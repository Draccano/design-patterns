const Shape = require('./Shape');

class Circle extends Shape {
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
    }

    draw() {
        this.renderer.renderCircle(this.radius);
    }

    resize(factor) {
        this.radius *= factor;
    }
}

module.exports = Circle;
