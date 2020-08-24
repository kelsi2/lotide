const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");

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