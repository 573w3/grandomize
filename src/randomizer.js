"use strict";

const random = require("./random");
const { sanitizeCount } = require("./utils");
const assetLoader = require("./assetLoader");

/**
 * @param {any} assets
 * @param {string[] | string | null} path
 * @param {number?} count
 * @returns {string[]}
 */
const randomize = (assets, path, count) => {
  if (path) {
    if (typeof path === "string") {
      path = [path];
    }
    for (let i = 0; i < path.length; i++) {
      assets = assets[path[i]];
    }
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
 * @param {string[] | string | null} path
 * @param {number?} count
 * @returns {Promise<string[]>}
 */
const randomizeAsync = (assetsUrl, path, count) => {
  return new Promise((resolve, reject) => {
    assetLoader.getRemoteAssets(assetsUrl).then(
      (json) => {
        resolve(randomize(json, path, count));
      },
      (error) => {
        reject(error);
      }
    );
  });
};

exports.randomize = randomize;
exports.randomizeAsync = randomizeAsync;
