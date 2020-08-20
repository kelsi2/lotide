const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log((`${'✅✅✅'} Assertion Passed: ${arguments[0]} === ${arguments[1]}`));
  } else {
    console.log(`${'❌❌❌'} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


// ---------------- TEST CASES ----------------------
const results = map(words, word => word[0]);
console.log(results);
assertArraysEqual(results, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results3 = map(words, word => `${word} is found in the words array!`);
console.log(results3);
assertArraysEqual(results3, ['ground is found in the words array!', 'control is found in the words array!', 'to is found in the words array!', 'major is found in the words array!', 'tom is found in the words array!']);