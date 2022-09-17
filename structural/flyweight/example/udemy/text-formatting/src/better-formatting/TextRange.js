class TextRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.capitalize = false;
    }

    covers(position) {
        return position >= this.start && position <= this.end;
    }
}
module.exports = TextRange;