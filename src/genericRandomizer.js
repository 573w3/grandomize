"use strict";

const random = require("./random");
const { sanitizeCount } = require("./utils");
const assetLoader = require("./assetLoader");

const genericRandomizer = (language, count, assets) => {
  const localizedAssets = assetLoader.getLocalizedAssets(language, assets);
  count = sanitizeCount(count);

  const randomValues = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(localizedAssets.length - 1);
    randomValues.push(localizedAssets[randomIndex]);
  }

  return randomValues;
};

const genericRandomizerAsync = (language, count, assetsUrl) => {
  return new Promise((resolve, reject) => {
    assetLoader.getRemoteAssets(assetsUrl).then(
      (json) => {
        const randomStreets = genericRandomizer(language, count, json);
        resolve(randomStreets);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

exports.genericRandomizer = genericRandomizer;
exports.genericRandomizerAsync = genericRandomizerAsync;
