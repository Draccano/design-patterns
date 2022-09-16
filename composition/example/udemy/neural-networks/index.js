const Neuron = require('./src/Neuron');
const NeuronLayer = require('./src/NeuronLayer');
/**
 * The
 */

let neuron1 = new Neuron();
let neuron2 = new Neuron();
let layer1 = new NeuronLayer(3);
let layer2 = new NeuronLayer(4);

neuron1.connectTo(neuron2);
neuron1.connectTo(layer1);
layer2.connectTo(neuron1);
layer1.connectTo(layer2);

console.log(neuron1.toString());
console.log(neuron2.toString());
console.log(layer1.toString());
console.log(layer2.toString());

// node ./composition/example/udemy/neural-networks/index.js
/**
 * Output
 */
// A neuron with 4 inputs and 4 outputs
// A neuron with 1 inputs and 0 outputs
// NeuronLayer with 3 neurons
// NeuronLayer with 4 neurons