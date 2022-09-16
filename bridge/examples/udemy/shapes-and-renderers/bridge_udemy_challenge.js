class VectorRenderer {
  renderSquare() {
    console.log(`Drawing square as lines`);
  }
  renderTriangle() {
    console.log(`Drawing triangle as lines`);
  }
}

class RasterRenderer {
  renderSquare() {
    console.log(`Drawing square as pixels`);
  }
  renderTriangle() {
    console.log(`Drawing triangle as pixels`);
  }
}

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super(renderer);
  }
  toString() {
    this.renderer.renderTriangle();
  }
}
class Square extends Shape {
  constructor(renderer) {
    super(renderer);
  }
  toString() {
    this.renderer.renderSquare();
  }
}
