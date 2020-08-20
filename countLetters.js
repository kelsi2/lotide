const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${'✅✅✅'} Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else if (actual !== expected) {
    console.log(`${'❌❌❌'} Assertion failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

const countLetters = function(str) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    //if letter isn't already in the object add it, if it exists add to the count for that letter
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

const string = "Lighthouse FTW!";
const answer = countLetters(string);

// ------------TEST CASE-------------
console.log(countLetters(string));

assertEqual(answer['e'], 1);
assertEqual(answer['F'], 1);
assertEqual(answer['g'], 1);
assertEqual(answer['h'], 2);
assertEqual(answer['i'], 1);
assertEqual(answer['L'], 1);
assertEqual(answer['o'], 1);
assertEqual(answer['s'], 1);
assertEqual(answer['t'], 1);
assertEqual(answer['T'], 1);
assertEqual(answer['u'], 1);
assertEqual(answer['W'], 1);