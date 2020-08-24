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

module.exports = findKey;