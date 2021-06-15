"use strict";

const random = require("./random");
const generic = require("./genericRandomizer");
const streetAssets = require("../assets/streets.json");
const cityAssets = require("../assets/cities.json");
const languages = require("./languages");

/**
 * Gets a list of random street names.
 * @param {string} language Language in which the names are common.
 * @param {number?} count Number of streets generated. Defaults to 1.
 * @returns {string[]} An array of street names.
 */
const streets = (language, count) => {
  return generic.genericRandomizer(language, count, streetAssets);
};

/**
 * Gets a list of random street names.
 * @param {string} language Language in which the names are common.
 * @param {number?} count Number of streets generated. Defaults to 1.
 * @param {string?} assetsUrl URL to a street assets file.
 * @returns {Promise<string[]>} Promise for an array of street names.
 */
const streetsAsync = (language, count, assetsUrl) => {
  return generic.genericRandomizerAsync(language, count, assetsUrl);
};

/**
 * Gets a list of random address, i.e. street name and number.
 * @param {string} language Language in which the names are common.
 * @param {number} count Number of addresses generated.
 * @returns An array of address names.
 */
const addresses = (language, count) => {
  const randomStreets = streets(language, count);

  for (let i = 0; i < randomStreets.length; i++) {
    let street = randomStreets[i];
    switch (language) {
      case languages.english:
        // todo: remove names with number
        // todo: add compass points
        street = (random.randomInt(10000) + 1).toString() + " " + street;
        break;
      case languages.swedish:
        street = street + " " + random.randomInt(98) + 1;
        break;
      default:
        throw "Unknown language: " + language;
    }

    randomStreets[i] = street;
  }

  return randomStreets;
};

/**
 * Gets a list of random city names.
 * @param {string} language Language in which the cities are common.
 * @param {number} count Number of citis generated.
 * @returns {string[]} An array of city names.
 */
const cities = (language, count) => {
  return generic.genericRandomizer(language, count, cityAssets);
};

exports.streets = streets;
exports.addresses = addresses;
exports.cities = cities;
