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

//return a slice of the array with elements taken from the beginnint
//keep going until callback returns truthy value
//callback should only be provided one value: item in the array

const takeUntil = function(array, callback) {
  const newArr = [];

  for (let i of array) {
    if (callback(i)) {
      return newArr;
    }
    newArr.push(i);
  }
};

// ---------------TEST CASES -----------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);