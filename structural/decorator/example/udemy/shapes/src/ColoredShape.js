const Shape = require('./Shape'); 
// we don't want ColoredSquare, ColoredCircle, etc.

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} ` + `has the color ${this.color}`;
  }
}

module.exports = ColoredShape;
