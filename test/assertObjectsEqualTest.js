const assertObjectsEqual = require("../assertObjectsEqual");

// ----------- TEST CASES -----------

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
console.log(assertObjectsEqual(ab, ba)); // true

const abc = {a: "1", b: "2", c: "3"};
console.log(assertObjectsEqual(ab, abc)); // false