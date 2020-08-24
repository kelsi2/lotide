const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should PASS