"use strict";

const names = require("./names");
const locations = require("./locations");
const languages = require("./languages");
const randomizer = require("./randomizer");
const localAssets = require("./assetLoader").localAssets;

const grandomize = {
  firstNames: names.firstNames,

  /**
   * Gets a list of random last names.
   * @param {string} language Language in which the names are common.
   * @param {number?} count The number of names to randomize.
   * Defaults to 1.
   * Cap is 1 000 000.
   * @returns {string[]} An array of names.
   */
  lastNames: (language, count) => {
    return randomizer.randomize(localAssets.lastNames, language, count);
  },

  /**
   * Gets a list of random street names.
   * @param {string} language Language in which the names are common.
   * @param {number?} count Optional number of streets generated. Defaults to 1.
   * @returns {string[]} An array of street names.
   */
  streets: (language, count) => {
    return randomizer.randomize(localAssets.streets, language, count);
  },

  addresses: locations.addresses,

  /**
   * Gets a list of random city names.
   * @param {string} language Language in which the cities are common.
   * @param {number?} count Optional number of cities generated. Defaults to 1.
   * @returns {string[]} An array of city names.
   */
  cities: (language, count) => {
    return randomizer.randomize(localAssets.cities, language, count);
  },

  /**
   * Gets a list of random cheese names.
   * @param {number?} count Optional number of cheese names generated. Defaults to 1.
   * @returns {string[]} An array of cheese names.
   */
  cheese: (count) => {
    return randomizer.randomize(localAssets.cheese, null, count);
  },

  anythingRemoteAsync: randomizer.randomizeAsync,
  languages: languages,
};

module.exports = grandomize;
