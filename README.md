# Grandomize

Use to generate mock data such as personal details or addresses.

## Usage

Import and start generate randomized data.

**Example:**

```javascript
const grandomize = require("grandomize");

let language = grandomize.languages.english;
const nrOfNames = 2;
const gender = "male";

const twoMaleNames = grandomize.firstNames(language, nrOfNames, gender);
const twoMaleAndOrFemaleNames = grandomize.firstNames(language, nrOfNames);
const oneMaleOrFemaleName = grandomize.firstNames(language);

language = grandomize.languages.swedish;
const nrOfCities = 3;
const threeSwedishCities = grandomize.cities(language, nrOfCities);
```

## API

`firstNames`

`lastNames`

`streets`

`addresses`

`citites`

`languages`
