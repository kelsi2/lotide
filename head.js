const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else if (actual !== expected) {
    console.log(`${String.fromCodePoint(0x274C)} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

const head = function(arr) {
  return arr[0];
};

//TEST CASES
assertEqual(head([5, 6, 7]), 5); //5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //"Hello" === "Hello"
assertEqual(head([1]), 3); //1 !== 3
assertEqual(head([])); //undefined