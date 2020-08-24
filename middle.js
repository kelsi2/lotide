const middle = function(arr) {
  let newArr = [];
  let middle = arr[Math.floor(arr.length / 2)];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return newArr;
    } else if (arr.length % 2 !== 0) {
      newArr.push(middle);
      return newArr;
    } else if (arr.length % 2 === 0) {
      newArr.push(middle - 1);
      newArr.push(middle);
      return newArr;
    }
  }
};

module.exports = middle;