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

module.exports = findKeyByValue;