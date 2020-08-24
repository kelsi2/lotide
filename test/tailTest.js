const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");

// Test Case: Check the original array
/*const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/

const words = ["one"];
tail(words);
assertEqual(words.length, 1);