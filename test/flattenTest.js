const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

//--------TEST CASES----------
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);