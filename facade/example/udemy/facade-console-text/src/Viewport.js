
const Buffer  = require('./Buffer');
class Viewport {
    constructor(buffer= new Buffer()) {
        this.buffer = buffer;
        this.offset = 0
    }
    append(text, pos) {
        this.buffer.write(text, pos + this.offset);
    }

    getCharAt(index) {
        // return this.buffer[this.offset + indes];
        return this.buffer.charAt(index + this.offset);
    }
}

module.exports = Viewport;