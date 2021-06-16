const firstNamesData = require("../assets/firstNames.json");
const sanitizeCount = require("./utils").sanitizeCount;
const random = require("./random");
const randomizer = require("./randomizer");

const FEMALE_GENDER = "female";
const MALE_GENDER = "male";

function randomGender(count, language) {
  count = sanitizeCount(count);
  const names = [];
  for (let i = 0; i < count; i++) {
    let gender = random.randomBoolean() ? FEMALE_GENDER : MALE_GENDER;
    let randomNames = randomizer.randomize(firstNamesData, [language, gender]);
    names.push(randomNames[0]);
  }

  return names;
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
  const path = [language];
  if (gender === FEMALE_GENDER || gender === MALE_GENDER) {
    path.push(gender);
  } else {
    return randomGender(count, language);
  }

  return randomizer.randomize(firstNamesData, path, count);
};

exports.firstNames = firstNames;
