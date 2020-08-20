const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${'✅✅✅'} Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else if (actual !== expected) {
    console.log(`${'❌❌❌'} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

//scan object, return first key with truthy value
//if no key found return undefined

const findKey = (object, callback) => {
  let keys = Object.keys(object);

  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//------------TEST CASES -------------

assertEqual(findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 3), "Akaleri"); // => "Akaleri"

assertEqual(findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 1), "Blue Hill"); // => "Blue Hill"

assertEqual(findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 0), undefined); // => undefined
