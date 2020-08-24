const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]); //should PASS
assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]); //should FAIL