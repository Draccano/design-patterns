class FormattedText {
  constructor(plainText) {
    this.plainText = plainText;
    this.caps = new Array(plainText.length).map(() => false);
  }
  capitalize(start, end) {
    for (let i = start; i <= end; ++i) {
      this.caps[i] = true;
    }
  }

  toString() {
    let buffer = [];
    for (let i = 0; i < this.plainText.length; ++i) {
      let c = this.plainText[i];
      buffer.push(this.caps[i] ? c.toUpperCase() : c);
    }
    return buffer.join('');
  }
}

module.exports = FormattedText;
