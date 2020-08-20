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
    console.log((`${'✅✅✅'} Assertion Passed: ${arguments[0]} === ${arguments[1]}`));
  } else {
    console.log(`${'❌❌❌'} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (remove === false) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

// TEST CASES
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["none", "jargon", "christmas"], ["christmas"])); // => ["none", "jargon"]