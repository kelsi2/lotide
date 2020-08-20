const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${'✅✅✅'} Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else if (actual !== expected) {
    console.log(`${'❌❌❌'} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};
//scan object and return first key which contains value
//if no key found, return undefined

const findKeyByValue = function(obj, value) {
  let result = "";

  for (const key in obj) {
    if (obj[key] === value) {
      result = key;
    }
  }
  if (result === "") {
    return undefined;
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"); //FAIL
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci-fi"); //FAIL