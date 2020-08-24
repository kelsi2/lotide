const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

assertEqual(head([5, 6, 7]), 5); //5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //"Hello" === "Hello"
assertEqual(head([1]), 3); //1 !== 3
assertEqual(head([])); //undefined