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
let drawPoints = function () {
  {
    for (let vo of vectorObjects)
      for (let line of vo) {
        // we need to build adapter, something which tranforms every
        // object in vectorObjects to be drawable
        let adapter = new LineToPointAdapter(line); // <--- this is the adapter
        adapter.forEach(drawPointFunc);
      }
  }
};

drawPoints();
drawPoints(); // second time we don't need to calculate points again

// output
// 0: Generating points for line (1, 1)→(11, 1) (no caching)
// ...........1: Generating points for line (11, 1)→(11, 11) (no caching)
// ...........2: Generating points for line (1, 1)→(1, 11) (no caching)
// ...........3: Generating points for line (1, 11)→(11, 11) (no caching)
// ...........4: Generating points for line (3, 3)→(9, 3) (no caching)
// .......5: Generating points for line (9, 3)→(9, 9) (no caching)
// .......6: Generating points for line (3, 3)→(3, 9) (no caching)
// .......7: Generating points for line (3, 9)→(9, 9) (no caching)
// .......8: Generating points for line (1, 1)→(11, 1) (no caching)
// ...........9: Generating points for line (11, 1)→(11, 11) (no caching)
// ...........10: Generating points for line (1, 1)→(1, 11) (no caching)
// ...........11: Generating points for line (1, 11)→(11, 11) (no caching)
// ...........12: Generating points for line (3, 3)→(9, 3) (no caching)
// .......13: Generating points for line (9, 3)→(9, 9) (no caching)
// .......14: Generating points for line (3, 3)→(3, 9) (no caching)
// .......15: Generating points for line (3, 9)→(9, 9) (no caching)
// .......
