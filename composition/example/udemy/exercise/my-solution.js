/**
 * Consider the code presented below. We have two classes called SingleValue 
 * and ManyValues. SingleValue stores just one numeric value (initialized in 
 * the constructor), but ManyValues can store either numeric values or SingleValue 
 * objects (assume it implements a push() method for adding items).
 * 
 * You are asked to write a function called sum that takes an array of items 
 * (any item can be either SingleValue or ManyValues).
 * 
 * Here is a sample Jasminea unit test:
*/
// describe('composite', function()
// {
//   it('should sum up different objects', function()
//   {
//     let singleValue = new SingleValue(11);
//     let otherValues = new ManyValues();
//     otherValues.push(22);
//     otherValues.push(33);
//     expect(sum([singleValue, otherValues])).toEqual(66);
//   });
// });


// Solution (1), my solution:
class SingleValue {
  constructor(value) {
    this.value = value
  }
  getValue() {
    return this.value
  }
}

class ManyValues {
  // ensure there's a push(value) method
    constructor() {
        this.values = [];
    }

    push(value) {
        this.values.push(value)
    }
    getValue() {
        return this.values.reduce((a, b) => a + b, 0)
    }
}

let sum = function (containers) {
    return containers.reduce((a, b) => a + b.getValue(), 0)
  // todo
};
