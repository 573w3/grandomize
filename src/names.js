const data = require("../assets/names.json");
const random = require("./random");

/**
 * Languages known by grandomize.
 */
const languages = {
  english: "en",
  swedish: "se",
};

const MAX = 1000000; // one million

function getLocalizedNames(lang) {
  switch (lang) {
    case languages.english:
      return data.english;
    case languages.swedish:
      return data.swedish;
    default:
      throw 'Unknown language: "' + lang + '"';
  }
}

function sanitizeCount(count) {
  if (!count || count < 1) {
    return 1;
  }

  return Math.min(count, MAX);
}

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
  const firstNames = getLocalizedNames(language).first;

  let genderNames;
  if (gender === languages.female) {
    genderNames = firstNames.female;
  } else if (gender === languages.male) {
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
  const lastNames = getLocalizedNames(language).last;

  const names = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(lastNames.length - 1);
    names.push(lastNames[randomIndex]);
  }

  return names;
};

exports.firstNames = firstNames;
exports.lastNames = lastNames;
exports.languages = languages;
