const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const position = sentence[i];

    if (results[position]) {
      results[position].push(i);
    } else {
      results[position] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;