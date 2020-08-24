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

module.exports = countLetters;