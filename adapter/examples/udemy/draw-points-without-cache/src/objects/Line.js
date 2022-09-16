class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    toString() {
        return `${this.start.toString()}→${this.end.toString()}`;
    }
}

module.exports = Line;