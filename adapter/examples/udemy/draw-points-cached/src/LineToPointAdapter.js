const Point = require('./objects/Point');

String.prototype.hashCode = function () {
  if (Array.prototype.reduce) {
    return this.split('').reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  let hash = 0;
  if (this.length === 0) return hash;
  for (let i = 0; i < this.length; i++) {
    const character = this.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
};

class LineToPointAdapter {
  constructor(line) {
    this.hash = JSON.stringify(line).hashCode(); // unique 32-bit integer for every single line
    if (LineToPointAdapter.cache[this.hash]) return; // we've already calculated this

    console.log(
      `${LineToPointAdapter.count++}: Generating ` +
        `points for line ${line.toString()} (caching)`
    );

    let points = [];

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0) {
      for (let y = top; y <= bottom; ++y) {
        points.push(new Point(left, y));
      }
    } else if (line.end.y - line.start.y === 0) {
      for (let x = left; x <= right; ++x) {
        points.push(new Point(x, top));
      }
    }
    LineToPointAdapter.cache[this.hash] = points; // cache the result
  }
  get items() {
    return LineToPointAdapter.cache[this.hash];
  }
}

module.exports = LineToPointAdapter;
