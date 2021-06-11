"use strict";

const names = require("./names");

const languages = {
  english: "en",
  swedish: "se",
};

console.log("Hello World!");
console.log(names.getRandomFirstNames(languages.english)[0]);

exports.grandom = names.getRandomFirstNames;
