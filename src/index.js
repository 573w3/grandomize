"use strict";

const names = require("./names");
const addresses = require("./locations");
const languages = require("./languages");

const grandomize = {
  firstNames: names.firstNames,
  lastNames: names.lastNames,
  streets: addresses.streets,
  addresses: addresses.addresses,
  cities: addresses.cities,
  languages: languages,
};

module.exports = grandomize;
