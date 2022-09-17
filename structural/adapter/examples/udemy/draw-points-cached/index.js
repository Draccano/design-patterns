const VectorRectangle = require('./src/objects/VectorRectangle');
const LineToPointAdapter = require('./src/LineToPointAdapter');

// ↓↓↓ this is what you have to work with ↓↓↓

let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6),
];

let drawPointFunc = function (point) {
  process.stdout.write('.');
};


LineToPointAdapter.count = 0;
LineToPointAdapter.cache = {}; // empty cache directory

let drawPoints = function () {
  {
    for (let vo of vectorObjects)
      for (let line of vo) {      
        let adapter = new LineToPointAdapter(line); // <--- this is the adapter
        adapter.items.forEach(drawPointFunc);
      }
  }
};

drawPoints();
drawPoints(); 

// output
// 0: Generating points for line (1, 1)→(11, 1) (caching)
// ...........1: Generating points for line (11, 1)→(11, 11) (caching)
// ...........2: Generating points for line (1, 1)→(1, 11) (caching)
// ...........3: Generating points for line (1, 11)→(11, 11) (caching)
// ...........4: Generating points for line (3, 3)→(9, 3) (caching)
// .......5: Generating points for line (9, 3)→(9, 9) (caching)
// .......6: Generating points for line (3, 3)→(3, 9) (caching)
// .......7: Generating points for line (3, 9)→(9, 9) (caching)
// ...............................................................................
