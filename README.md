# Grandomize

Use to generate mock data, like personal details.

## Usage

Import and start generating data.

**Example:**

```javascript
const grandomize = require("grandomize");

const language = grandomize.english;
const nrOfNames = 2;
const gender = "male";

const twoMaleNames = grandomize.firstNames(language, nrOfNames, gender);
const twoMaleAndOrFemaleNames = grandomize.firstNames(language, nrOfNames);
const oneMaleOrFemaleName = grandomize.firstNames(language);
```

## API

`firstNames`

`lastNames`

`languages`
