"use strict";

const random = require("./random");
const { sanitizeCount } = require("./utils");
const getLocalizedAssets = require("./assetLoader");

const genericRandomizer = (language, count, assets) => {
  const localizedAssets = getLocalizedAssets(language, assets);
  count = sanitizeCount(count);

  const randomValues = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(localizedAssets.length - 1);
    randomValues.push(localizedAssets[randomIndex]);
  }

  return randomValues;
};

module.exports = genericRandomizer;
