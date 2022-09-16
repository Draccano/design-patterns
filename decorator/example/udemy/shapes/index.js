/**
 * Decorating Shape for different output
 * 
 */
const ColoredShape = require('./src/ColoredShape');
const TransparentShape = require('./src/TransparentShape');
const Circle = require('./src/Circle');    

let circle = new Circle(2);
console.log(circle.toString());

let redCircle = new ColoredShape(circle, 'red');
console.log(redCircle.toString());

// impossible: redHalfCircle is not a Circle
// redHalfCircle.resize(2);

let redHalfCircle = new TransparentShape(redCircle, 0.5);
console.log(redHalfCircle.toString());

// node ./decorator/example/udemy/shapes/index.js 
/**
 * Output
 * A circle of radius 2
 * A circle of radius 2 has the color red
 * A circle of radius 2 has the color red has 50% transparency 
 */