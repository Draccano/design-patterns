class Buffer extends Array {
    constructor(width=30, height=20, fill=' ') {
        super();
        this.width = width;
        this.height = height;
        this.alloc = width*height;
    }
    write(text, position=0) {
        // 
    }
}

module.exports = Buffer;