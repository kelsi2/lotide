const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + "Assertion Passed: " + arguments[0] + " === " + arguments[1]);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x274C) + "Assertion failed: " + arguments[0] + " !== " + arguments[1]);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(2, 4);