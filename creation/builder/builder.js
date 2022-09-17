// Builder
// HTML tagy pairing
class Tag {
  static get indentSize() {
    return 2;
  }
  constructor(name = '', text = '') {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children) html.push(child.toStringImpl(indent + 1));

    html.push(`${i}</${this.name}>\n`);
    return html.join();
  }

  toString() {
    return this.toStringImpl(0);
  }
  static create(name) {
    return new HtmlBuilder(name);
  }
}

// Builder helps creating paragraphs...
class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  // add children to the current element (root)
  addChild(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }
  addChildFluent(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }
  toString() {
    return this.root.toString();
  }
  clear() {
    this.root = new Tag(this.rootName);
  }
  build() {
    return this.root;
  }
}

let words = ['hello', 'world'];
// let builder = new HtmlBuilder('ul');
let builder = Tag.create('ul');

for (let word of words) {
  builder.addChild('lchildNamei', word);
}

console.log(builder.root.toString());
builder.clear();
builder
  .addChildFluent('li', 'foo')
  .addChildFluent('li', 'bar')
  .addChildFluent('li', 'baz');

console.log(builder.root.toString());
