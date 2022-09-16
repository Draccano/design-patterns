const Circle = require('./shapes/Circle');
const Square = require('./shapes/Square');
const Shape = require('./shapes/Shape');
const RasterRenderer = require('./renderer/RasterRenderer');
const VectorRenderer = require('./renderer/VectorRenderer');
/**
 * We have
 * Shape  - Square, Cirlcle, Triangle 
 * Renderer - Raster, Vector
 * We will do bridge between obious elements.
 */
    const raster = new RasterRenderer();
    const vector = new VectorRenderer();

    // Circle 1 - vector
    const circle = new Circle(vector, 5);
    circle.draw();
    circle.resize(2);
    circle.draw();


    // Circle 2 - raster
    const circle2 = new Circle(raster, 5);
    circle2.draw();
    circle2.resize(2);
    circle2.draw();

    // Square 1 - vector
    const square = new Square(vector, 10);
    square.draw();
    square.changeside(20);
    square.draw();