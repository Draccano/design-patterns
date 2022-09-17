const Shape = require('./Shape');

class Square extends Shape {
    constructor(side = 0) {
        super();
        this.side = side;
    }
    toString() {
        return `A square with side ${this.side}`;
    }
}

module.exports = Square;