class WordToken {
  constructor(capitalize = false) {
    this.capitalize = capitalize;
  }
}

class Sentence {
  constructor(plainText) {
    this.words = plainText.split(' ');
    this.tokens = {};
  }

  at(index) {
    let wt = new WordToken();
    this.tokens[index] = wt;
    return this.tokens[index];
  }

  toString() {
    let buffer = [];
    for (let i = 0; i < this.words.length; ++i) {
      let w = this.words[i];
      if (this.tokens[i] && this.tokens[i].capitalize) w = w.toUpperCase();
      buffer.push(w);
    }
    return buffer.join(' ');
  }
}
