class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  deepCopy() {
    return new Point(this.x, this.y);
  }
  toString() {
    return `Point: x: ${this.x}, y: ${this.y}`;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  toString() {
    return `Line has starting point ${this.start} and ending point ${this.end}`;
  }

  deepCopy() {
    return new Line(this.start.deepCopy(), this.end.deepCopy());
  }
}

const aPoint = new Point(11, 5);
const bPoint = new Point(5, 50);
console.log(aPoint.toString());
console.log(bPoint.toString());

const line = new Line(aPoint, bPoint);
console.log(line.toString());

const copyLine = line.deepCopy();

console.log(copyLine.toString());
