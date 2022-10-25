// You are given a class called Sentence ,
// which takes a string such as 'hello world'. 
// You need to provide a method at(index) such 
// that the method returns a flyweight that can
// be used to capitalize a particular word in the sentence.

// Typical use would be something like:
// let s = new Sentence('alpha beta gamma');
// s.at(1).capitalize = true;
// console.log(s.toString()); // alpha BETA gamma



class Sentence {
 
  plainText = '';
  words = [];
 
  constructor(plainText) {
    this.plainText = plainText;
    this.words = plainText.split(' ').map(w => {
        return {
            string: w,
            capitalize: false
        }
    })
  }

  at(index) {
    if (index < 0 || index >= this.words.length ) return null;
    return this.words[index]; 
  }

  toString() {
    const sentence = this.words.map((w, index) => {
        console.log({w})
      if (w.capitalize) {
        return `${w.string.toUpperCase()}`;
      }
      return w.string;
    }).join(' ');

    return sentence;
  }
}



let s = new Sentence('alpha beta gamma');
s.at(1).capitalize = true;
console.log(s.toString()); // alpha BETA gamma


// in solution, there is better way to do it, using flyweight pattern
// node ./structural/flyweight/example/udemy/exercise/index.js 