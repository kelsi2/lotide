const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;