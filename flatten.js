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

//flatten takes in array containing elements including nested arrays of elements
//return flattened version of array (all elements in one array)
//elements can be arrays or not(use Array.isArray to determine if element is array or not)

const flatten = (arr) => {
  let flatArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArr.push(arr[i]);
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (Array.isArray(arr[i])) {
        flatArr.push(arr[i][j]);
      }

    }
  }
  return flatArr;
};

//--------TEST CASES----------
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);