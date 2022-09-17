// factory is just a separate class or separate component, which takes on the responsibility of creating objects of a particular type
// here return e.g. 2DFactory, 3DFactory, or single factory creating two types of objects

CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1,
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // coupling - object and factory are coupled together (against open closed principle but nice API)
  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  // not necessarily static, without static it could be iniaitlized (instances)
  newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

// this line will not work if newCartesianPoint is static!
// if we want to the user they should not use the constructor
let p1 = Point.factory.newCartesianPoint(2, 3);
console.log(p1);

let p2 = Point.factory.newPolarPoint(2, 6)
console.log(p2)