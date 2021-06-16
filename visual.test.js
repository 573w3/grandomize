const random = require("./src/random");
const grandomize = require("./src/index");
const english = grandomize.languages.english;
const swedish = grandomize.languages.swedish;

function testRandom() {
  const count = 100;
  let max = 1;
  let booleans = [];
  for (let i = 0; i < count; i++) {
    booleans.push(random.randomBoolean());
  }
  console.log(count + " random booleans:", booleans);

  max = 10;
  let ints = [];
  for (let i = 0; i < count; i++) {
    ints.push(random.randomInt(max));
  }
  console.log(count + " random ints in [0, " + max + "]:", ints);
}

function testFirstNames() {
  const count = 10;
  const randomNames = grandomize.firstNames(english, count);
  console.debug(
    count + ' random first names in language "' + english + '":',
    randomNames
  );
}

function testLastNames() {
  const count = 10;
  const randomNames = grandomize.lastNames(swedish, count);
  console.debug(
    count + ' random last names in language "' + swedish + '":',
    randomNames
  );
}

function testStreets() {
  const count = 10;
  const randomStreets = grandomize.streets(english, count);
  console.debug(
    count + ' random streets in language "' + english + '":',
    randomStreets
  );
}

function testAddresses() {
  const count = 10;
  const randomAddresses = grandomize.addresses(english, count);
  console.debug(
    count + ' random addresses in language "' + english + '":',
    randomAddresses
  );
}

function testCities() {
  const count = 10;
  const randomCities = grandomize.cities(english, count);
  console.debug(
    count + ' random cities in language "' + english + '":',
    randomCities
  );
}

console.log("Testing random():");
testRandom();

console.log("Testing firstNames():");
testFirstNames();

console.log("Testing lastNames():");
testLastNames();

console.log("Testing streets():");
testStreets();

console.log("Testing addresses():");
testAddresses();

console.log("Testing cities():");
testCities();
