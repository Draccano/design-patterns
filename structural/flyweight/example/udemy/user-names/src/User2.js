const getOrAdd = function (s) {
  let idx = User2.strings.indexOf(s);
  if (idx !== -1) return idx;
  else {
    User2.strings.push(s);
    return User2.strings.length - 1;
  }
};

class User2 {
  static strings = [];

  constructor(fullName) {
    this.names = fullName.split(' ').map(getOrAdd);
  }
}

// User2.strings = []

module.exports = User2;
