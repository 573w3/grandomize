"use strict";

const names = require("./names");
const addresses = require("./addresses");
const languages = require("./languages");

const grandomize = {
  firstNames: names.firstNames,
  lastNames: names.lastNames,
  streets: addresses.streets,
  addresses: addresses.addresses,
  languages: languages,
};

module.exports = grandomize;
