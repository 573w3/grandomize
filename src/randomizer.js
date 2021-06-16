"use strict";

const random = require("./random");
const { sanitizeCount } = require("./utils");
const assetLoader = require("./assetLoader");

/**
 * @param {any} assets
 * @param {string?} language
 * @param {number?} count
 * @returns {string[]}
 */
const genericRandomizer = (assets, language, count) => {
  if (language) {
    assets = assets[language];
  }
  count = sanitizeCount(count);

  const randomValues = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(assets.length - 1);
    randomValues.push(assets[randomIndex]);
  }

  return randomValues;
};

/**
 * @param {string} assetsUrl
 * @param {string?} language
 * @param {number?} count
 * @returns {Promise<string[]>}
 */
const randomizeAsync = (assetsUrl, language, count) => {
  return new Promise((resolve, reject) => {
    assetLoader.getRemoteAssets(assetsUrl).then(
      (json) => {
        resolve(genericRandomizer(json, language, count));
      },
      (error) => {
        reject(error);
      }
    );
  });
};

exports.genericRandomizer = genericRandomizer;
exports.randomizeAsync = randomizeAsync;
