const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js");

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should PASS