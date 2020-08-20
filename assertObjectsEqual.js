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

const eqObjects = function(object1, object2) {
  let obj1Length = Object.keys(object1).length;
  let obj2Length = Object.keys(object2).length;

  if (obj1Length !== obj2Length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      } else if ((typeof object1[key] === "object") && (typeof object2[key] === "object")) {
        if (!(eqObjects(object2[key], object2[key]))) {
          return false;
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log((`${'✅✅✅'} Assertion Passed: ${inspect(arguments[0])} === ${inspect(arguments[1])}`));
  } else {
    console.log(`${'❌❌❌'} Assertion failed: ${inspect(arguments[0])} !== ${inspect(arguments[1])}`);
  }
};

// ----------- TEST CASES -----------

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
console.log(assertObjectsEqual(ab, ba)); // true

const abc = {a: "1", b: "2", c: "3"};
console.log(assertObjectsEqual(ab, abc)); // false