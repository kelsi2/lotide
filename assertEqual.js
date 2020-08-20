const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${'✅✅✅'} Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else if (actual !== expected) {
    console.log(`${'❌❌❌'} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(2, 4);