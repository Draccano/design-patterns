const TextRange = require('./TextRange');

class BetterFormattedText {

    constructor(plainText) {
        this.plainText = plainText;
        this.formatting = [];
    }

    getRange(start, end) {
        let range = new TextRange(start, end);
        this.formatting.push(range);
        return range;
    }

    toString() {
        const buffer = [];
        for (let i = 0; i < this.plainText.length; i++) {
            let c = this.plainText[i];
            for (const range of this.formatting) {
                if (range.covers(i) && range.capitalize) {
                    c = c.toUpperCase();
                } 
                buffer.push(c);
            }
        }
        return buffer.join('');
    }
}

module.exports = BetterFormattedText;