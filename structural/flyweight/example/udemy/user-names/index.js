
const User = require('./src/User');
const User2 = require('./src/User2');
const { randomString } = require('./src/utils/base');

let firstNames = [];
let lastNames = [];
let users = [];
let users2 = [];   

for (let x = 0; x < 100; x++) {
    firstNames.push(randomString());
    lastNames.push(randomString());
}

for (let first of firstNames){
    for (let last of lastNames){
        users.push(new User(`${first} ${last}`));
        users2.push(new User2(`${first} ${last}`));
    }
}

console.log(`10k users take up approx ` +
`${JSON.stringify(users).length} chars`);

let users2length = [users2, User2.strings]
    .map(x => JSON.stringify(x).length)
    .reduce((x, y) => x + y);

console.log(`10k users2 take up approx  ${users2length} chars`);


//node ./structural/flyweight/example/udemy/user-names/index.js 

// output
// 10k users take up approx 350001 chars
// 10k users2 take up approx  160014 chars