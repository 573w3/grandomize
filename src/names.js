const assets = require("../assets/names.json");
const getLocalizedAssets = require("./assetLoader");
const sanitizeCount = require("./utils").sanitizeCount;
const random = require("./random");

/**
 * Gets a list of random first names.
 * @param {string} language Language in which the names are common.
 * @param {number | undefined} count The number of names to randomize.
 * Defaults to 1.
 * Cap is 1 000 000.
 * @param {"male" | "female" | undefined} gender Gender of names.
 * Is randomized for each name if left out.
 * @returns An array of names.
 */
const firstNames = (language, count, gender) => {
  count = sanitizeCount(count);
  const firstNames = getLocalizedAssets(language, assets).first;

  let genderNames;
  if (gender === "female") {
    genderNames = firstNames.female;
  } else if (gender === "male") {
    genderNames = firstNames.male;
  } else {
    gender = undefined;
  }

  const names = [];
  for (let i = 0; i < count; i++) {
    if (!gender) {
      genderNames = random.randomBoolean()
        ? firstNames.female
        : firstNames.male;
    }

    const randomIndex = random.randomInt(genderNames.length - 1);
    const first = genderNames[randomIndex];
    names.push(first);
  }

  return names;
};

/**
 * Gets a list of random last names.
 * @param {string} language Language in which the names are common.
 * @param {number} count The number of names to randomize.
 * Defaults to 1.
 * Cap is 1 000 000.
 * @returns An array of names.
 */
const lastNames = (language, count) => {
  count = sanitizeCount(count);
  const lastNames = getLocalizedAssets(language, assets).last;

  const names = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(lastNames.length - 1);
    names.push(lastNames[randomIndex]);
  }

  return names;
};

exports.firstNames = firstNames;
exports.lastNames = lastNames;
