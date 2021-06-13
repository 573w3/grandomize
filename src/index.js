"use strict";

const names = require("./names");

const grandom = {
  firstNames: names.firstNames,
  lastNames: names.lastNames,
};

module.exports = {
  grandom,
  default: grandom,
};
