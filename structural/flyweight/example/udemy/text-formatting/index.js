const FormattedText = require('./src/bad-formatting/FormattedText');
const BetterFormattedText = require('./src/better-formatting/BetterFormattedText');

const text = 'This is a brave new world';

let ft = new FormattedText(text);
ft.capitalize(10, 15);
console.log(ft.toString())

let bft = new BetterFormattedText(text);
const range = bft.getRange(16, 19);
range.capitalize = true;

console.log(bft.toString());

// node ./structural/flyweight/example/udemy/text-formatting/index.js