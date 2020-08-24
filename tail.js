const assertEqual = require("./assertEqual.js");

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;