const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log((`${'✅✅✅'} Assertion Passed: ${inspect(arguments[0])} === ${inspect(arguments[1])}`));
  } else {
    console.log(`${'❌❌❌'} Assertion failed: ${inspect(arguments[0])} !== ${inspect(arguments[1])}`);
  }
};

module.exports = assertObjectsEqual;