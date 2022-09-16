const aggregation = require('./utils/Aggregation');
const Connectable = require('./Connectable');
const Neuron = require('./Neuron');

class NeuronLayer extends aggregation(Array, Connectable) {
  constructor(count) {
    super();
    while (count --> 0) this.push(new Neuron());
  }

  toString() {
    return `NeuronLayer with ${this.length} neurons`;
  }
}

module.exports = NeuronLayer;