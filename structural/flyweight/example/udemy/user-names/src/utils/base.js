function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.randomString = () => {
  let result = [];
  for (let x = 0; x < 10; x++) {
    result.push(String.fromCharCode(65 + getRandomInt(26)));
}
    return result.join('')
}
