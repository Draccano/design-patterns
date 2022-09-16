class GraphicObject {
  constructor(name = 'Group' + GraphicObject.count++) {
    this._name = name;
    this.color = undefined;
    this.children = [];
  }

  static count = 0;
  // GraphicObject.count = 0;

  get name() {
    return this._name;
  }

  print(buffer, depth) {
    buffer.push('*'.repeat(depth));
    if (depth > 0) buffer.push(' ');
    if (this.color) buffer.push(this.color + ' ');
    buffer.push(this.name);
    buffer.push('\n');

    for (let child of this.children) child.print(buffer, depth + 1);
  }

  toString() {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join('');
  }
}
// GraphicObject.count = 0;

module.exports = GraphicObject;

