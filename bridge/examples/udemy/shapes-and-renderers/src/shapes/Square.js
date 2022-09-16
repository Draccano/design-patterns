const Shape = require('./Shape');

class Square extends Shape {
    constructor(renderer, side) {
        super(renderer);
        this.side = side;
    }

    draw() {
        this.renderer.renderSquare(this.side);
    }

    changeside(side) {
        this.side = side;
    }

}

module.exports = Square;
