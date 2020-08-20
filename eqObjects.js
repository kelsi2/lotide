const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else if (actual !== expected) {
    console.log(`${String.fromCodePoint(0x274C)} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
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


//Returns true if both objects have identical keys and values, else returns false
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

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
console.log(eqObjects(ab, ba)); // true

const abc = {a: "1", b: "2", c: "3"};
console.log(eqObjects(ab, abc)); // false

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
console.log(eqObjects(cd, dc)); // => true

const cd2 = {c: "1", d: ["2", 3, 4]};
console.log(eqObjects(cd, cd2)); // => false