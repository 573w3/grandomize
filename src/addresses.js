const random = require("./random");
const { sanitizeCount } = require("./utils");
const getLocalizedAssets = require("./assetLoader");
const assets = require("../assets/streets.json");
const languages = require("./languages");

/**
 * Gets a list of random street names.
 * @param {string} language Language in which the names are common.
 * @param {number} count Number of streets generated.
 * @returns An array of street names.
 */
const streets = (language, count) => {
  const streets = getLocalizedAssets(language, assets);

  count = sanitizeCount(count);

  const randomStreets = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(streets.length - 1);
    randomStreets.push(streets[randomIndex]);
  }

  return randomStreets;
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

exports.streets = streets;
exports.addresses = addresses;
