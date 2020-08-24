//return a slice of the array with elements taken from the beginnint
//keep going until callback returns truthy value
//callback should only be provided one value: item in the array

const takeUntil = function(array, callback) {
  const newArr = [];

  for (let i of array) {
    if (callback(i)) {
      return newArr;
    }
    newArr.push(i);
  }
};

module.exports = takeUntil;