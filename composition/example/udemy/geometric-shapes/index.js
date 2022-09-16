const Circle = require('./src/Circle');
const Square = require('./src/Square');
const GraphicObject = require('./src/GraphicObject');
/**
 * The Graphic object is single object but
 * it is could be collection of objects. 
 */

let drawing = new GraphicObject();
drawing.children.push(new Square('Red'));
drawing.children.push(new Circle('Yellow'));

let group = new GraphicObject();
group.children.push(new Circle('Blue'));
group.children.push(new Square('Blue'));
drawing.children.push(group);



console.log(drawing.toString());
// node ./composition/example/udemy/geometric-shapes/index.js 