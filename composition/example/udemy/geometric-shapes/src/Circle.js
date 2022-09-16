const GraphicObject = require('./GraphicObject');

class Circle extends GraphicObject {
  constructor(color) {
    super('Circle');
    this.color = color;
  }
}

module.exports = Circle;