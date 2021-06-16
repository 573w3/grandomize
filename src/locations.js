"use strict";

const random = require("./random");
const generic = require("./randomizer");
const streetAssets = require("../assets/streets.json");
const languages = require("./languages");

/**
 * Gets a list of random address, i.e. street name and number.
 * @param {string} language Language in which the names are common.
 * @param {number} count Number of addresses generated.
 * @returns An array of address names.
 */
const addresses = (language, count) => {
  const randomStreets = generic.genericRandomizer(
    streetAssets,
    language,
    count
  );

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

exports.addresses = addresses;
