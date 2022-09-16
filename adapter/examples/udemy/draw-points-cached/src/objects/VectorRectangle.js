const Point = require('./Point');
const Line = require('./Line');
const VectorObject = require('./VectorObject');
class VectorRectangle extends VectorObject {
  constructor(x, y, width, height) {
    super();
    this.push(new Line(new Point(x, y), new Point(x + width, y)));
    this.push(
      new Line(new Point(x + width, y), new Point(x + width, y + height))
    );
    this.push(new Line(new Point(x, y), new Point(x, y + height)));
    this.push(
      new Line(new Point(x, y + height), new Point(x + width, y + height))
    );
  }
  // ↑↑↑ this is your API ↑↑↑
}

module.exports = VectorRectangle;