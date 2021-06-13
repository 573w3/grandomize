"use strict";

const names = require("./names");

const grandomize = {
  firstNames: names.firstNames,
  lastNames: names.lastNames,
};

module.exports = {
  grandomize,
  default: grandomize,
};
