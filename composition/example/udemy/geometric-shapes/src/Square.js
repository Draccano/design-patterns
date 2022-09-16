const GraphicObject = require('./GraphicObject');

class Square extends GraphicObject {
  constructor(color) {
    super('Square');
    this.color = color;
  }
}

module.exports = Square;
