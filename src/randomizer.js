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
 * Gets a list of random names of something from a remote JSON assets file.
 * @param {string} assetsUrl URL to a assets file.
 * @param {string | string[] | null} path Path, in the JSON, to the string array of names.
 * A string is the same as an array with only that string.
 * Null if the JSON is an array of strings.
 * Example: if the JSON is `{ a: { b: { c: ["name1", "name2", "name3"] } } }` then `path` should be `["a", "b", "c"]`
 * @param {number?} count Optional number of names generated. Defaults to 1.
 * @returns {Promise<string[]>} Promise of an array of names.
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

/**
 * Gets a list of random names of something from a local JSON assets file.
 * @param {string} filePath Assets file path.
 * @param {string | string[] | null} path Path, in the JSON, to the string array of names.
 * A string is the same as an array with only that string.
 * Null if the JSON is an array of strings.
 * Example: if the JSON is `{ a: { b: { c: ["name1", "name2", "name3"] } } }` then `path` should be `["a", "b", "c"]`
 * @param {number?} count Optional number of names generated. Defaults to 1.
 * @returns {Promise<string[]>} Promise of an array of names.
 */
const randomizeLocalAsync = (filePath, path, count) => {
  return new Promise((resolve, reject) => {
    assetLoader.getLocalAssets(filePath).then(
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
exports.randomizeLocalAsync = randomizeLocalAsync;
