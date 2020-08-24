//flatten takes in array containing elements including nested arrays of elements
//return flattened version of array (all elements in one array)
//elements can be arrays or not(use Array.isArray to determine if element is array or not)

const flatten = (arr) => {
  let flatArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArr.push(arr[i]);
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (Array.isArray(arr[i])) {
        flatArr.push(arr[i][j]);
      }

    }
  }
  return flatArr;
};

module.exports = flatten;