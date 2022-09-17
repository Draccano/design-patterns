const Connectable = require('./Connectable');

// class Neuron {
class Neuron extends Connectable {
  constructor() {
    super();
    this.in = [];
    this.out = [];
  }

  // not good approach
  // connectTo(other) {
  //     this.out.push(other);
  //     other.in.push(this);
  // }
  toString() {
    return (
      `A neuron with ${this.in.length} inputs ` +
      `and ${this.out.length} outputs`
    );
  }

  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({
        value: this,
        done: returned++,
      }),
    };
  }
}

module.exports = Neuron;
