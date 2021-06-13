"use strict";

const names = require("./names");
const languages = require("./languages");

const grandomize = {
  firstNames: names.firstNames,
  lastNames: names.lastNames,
  languages: languages,
};

module.exports = grandomize;
