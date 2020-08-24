const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

// ---------------- TEST CASES ----------------------
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const results = map(words, word => word[0]);
console.log(results);
assertArraysEqual(results, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results3 = map(words, word => `${word} is found in the words array!`);
console.log(results3);
assertArraysEqual(results3, ['ground is found in the words array!', 'control is found in the words array!', 'to is found in the words array!', 'major is found in the words array!', 'tom is found in the words array!']);