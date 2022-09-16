class Connectable {
  connectTo(other) {
    for (let from of this) {
      for (let to of other) {
        from.out.push(to);
        to.in.push(from);
      }
    }
  }
}

module.exports = Connectable;
