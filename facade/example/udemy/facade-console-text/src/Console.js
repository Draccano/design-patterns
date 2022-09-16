const Buffer = require('./Buffer');
const Viewport = require('./Viewport');

class Console {
    constructor() {
        this.buffer = new Buffer();
        this.currentViewport = new Viewport(this.buffer);
        this.buffers = [this.buffer];
        this.viewports = [this.currentViewport];
    }

    write(text) {
        this.currentViewport.buffer.write(text);
    }
    
    getCharAt(index) {
        return this.currentViewport.getCharAt(index);
    }

    

}