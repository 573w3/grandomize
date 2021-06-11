const data = require("../assets/names.json");
const random = require("./random");

const MAX = 1000000; // one million

function getNames(lang) {
  switch (lang) {
    case "en":
      return data.english;
    case "sv":
      return data.swedish;
    default:
      throw 'Unknown language: "' + lang + '"';
  }
}

/**
 * Gets a list of random first names.
 * @param {string} lang Language in which the names are common.
 * @param {number | undefined} nr The number of names to randomize.
 * Defaults to 1.
 * Cap is 1 000 000.
 * @param {"male" | "female" | undefined} gender Gender of names.
 * Is randomized for each name if left out.
 * @returns An array of names.
 */
exports.getRandomFirstNames = (lang, nr, gender) => {
  if (!nr || nr < 1) {
    nr = 1;
  }
  nr = Math.min(nr, MAX);

  let firstNames = getNames(lang).first;

  let genderNames;
  if (gender === "female") {
    genderNames = firstNames.female;
  } else if (gender === "male") {
    genderNames = firstNames.male;
  } else {
    gender = undefined;
  }

  const names = [];
  for (let i = 0; i < nr; i++) {
    if (!gender) {
      genderNames =
        random.randomInt(1) === 1 ? firstNames.female : firstNames.male;
    }

    const randomIndex = random.randomInt(genderNames.length - 1);
    const first = genderNames[randomIndex];
    names.push(first);
  }

  return names;
};
