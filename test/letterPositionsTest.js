const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

// -----------TEST CASES -------------
assertArraysEqual(letterPositions("hello").e, [1]); // PASS
assertArraysEqual(letterPositions("lighthouse").e, [5]); //FAIL
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]); 