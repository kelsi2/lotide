const eqArrays = function(arr1, arr2) {
  let result = true;

  if (arr1.length !== arr2.length) {
    result = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log((`${String.fromCodePoint(0x2705)} Assertion Passed: ${arguments[0]} === ${arguments[1]}`));
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]); //should PASS
assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]); //should FAIL
