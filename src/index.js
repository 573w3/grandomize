"use strict";

const names = require("./names");
const locations = require("./locations");
const languages = require("./languages");
const generic = require("./randomizer");
const lastNameAssets = require("../assets/lastNames.json");
const streetAssets = require("../assets/streets.json");
const cityAssets = require("../assets/cities.json");
const cheeseAssets = require("../assets/cheese.json");

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
    return generic.genericRandomizer(lastNameAssets, language, count);
  },

  /**
   * Gets a list of random street names.
   * @param {string} language Language in which the names are common.
   * @param {number?} count Optional number of streets generated. Defaults to 1.
   * @returns {string[]} An array of street names.
   */
  streets: (language, count) => {
    return generic.genericRandomizer(streetAssets, language, count);
  },

  addresses: locations.addresses,

  /**
   * Gets a list of random city names.
   * @param {string} language Language in which the cities are common.
   * @param {number?} count Optional number of cities generated. Defaults to 1.
   * @returns {string[]} An array of city names.
   */
  cities: (language, count) => {
    return generic.genericRandomizer(cityAssets, language, count);
  },

  /**
   * Gets a list of random street names from a remote JSON assets file.
   * @param assetsUrl URL to a street assets file.
   * @param language Language in which the names are common.
   * @param count Optional number of streets generated. Defaults to 1.
   * @returns Promise for an array of street names.
   */
  streetsRemoteAsync: generic.randomizeAsync,

  /**
   * Gets a list of random city names from a remote JSON assets file.
   * @param assetsUrl URL to a street assets file.
   * @param language Language in which the cities are common.
   * @param count Optional number of streets generated. Defaults to 1.
   * @returns Promise for an array of street names.
   */
  citiesRemoteAsync: generic.randomizeAsync,

  /**
   * Gets a list of random cheese names.
   * @param {number?} count Optional number of cheese names generated. Defaults to 1.
   * @returns {string[]} An array of cheese names.
   */
  cheese: (count) => {
    return generic.genericRandomizer(cheeseAssets, null, count);
  },

  languages: languages,
};

module.exports = grandomize;
