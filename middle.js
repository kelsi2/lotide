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

const middle = function(arr) {
  let newArr = [];
  let middle = arr[Math.floor(arr.length / 2)];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return newArr;
    } else if (arr.length % 2 !== 0) {
      newArr.push(middle);
      return newArr;
    } else if (arr.length % 2 === 0) {
      newArr.push(middle - 1);
      newArr.push(middle);
      return newArr;
    }
  }
};

// -------------TEST CASES------------------

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

const words = ["hello", "world", "lighthouse"];
middle(words, ["world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);