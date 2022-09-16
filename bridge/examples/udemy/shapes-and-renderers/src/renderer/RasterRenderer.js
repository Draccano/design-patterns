
class RasterRenderer {
  renderCircle(radius) {
    console.log('Drawing pixels for a circle of radius ' + radius);
  }
  renderSquare(points) {
    console.log('Drawing pixels for a square with side ' + points);
  }
}

module.exports = RasterRenderer;