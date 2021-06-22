# Grandomize

Use to generate mock data such as personal details or addresses.

**Features**

- Generate data
- Data in multiple languages
- Randomize items from your own files, remote or local

## Usage

Import and start generate randomized data.

**Example**

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

Code is also documented with JSDoc.

### Functions

The regular randomizer functions.

**firstNames**

```js
const firstNames = firstNames("english", 3);
```

**lastNames**

```js
const lastNames = lastNames("english", 3);
```

**streets**

```js
const streets = streets("english", 3);
```

**addresses**

```js
const addresses = addresses("english", 3);
```

**cities**

```js
const cities = cities("english", 3);
```

**cheese**

```js
const cheese = cheese(3);
```

#### Custom data

These functions provide the ability to randomize items from custom data. The data is JSON located either remote or locally.

Provide a location (local/remote), a path in the JSON structure and a number items to generate.

**anythingRemoteAsync** For remote data files.

**anythingLocalAsync** For local data files.

**Examples**

<small>JSON file remote at URL _url.to.json_</small>

```JSON
["list", "of", "strings"]
```

```js
const nrOfItems = 10;
const items = anythingRemoteAsync("url.to.json", null, nrOfItems);
```

---

<small>JSON file on disc at location _/my/data/data.json_</small>

```JSON
{
  "foo": ["list", "of", "foo", "strings"],
  "bar": ["list", "of", "bar", "strings"]
}
```

```js
const nrOfItems = 10;
const fooItems = anythingLocalAsync("/my/data/data.json", "foo", nrOfItems);
const barItems = anythingLocalAsync("/my/data/data.json", "bar", nrOfItems);
```

---

<small>JSON file remote at URL _url.to.json_</small>

```JSON
{
  "fooA": { "fooB": { "fooC": ["list", "of", "foo", "strings"] } },
  "barA": { "barB": { "barC": ["list", "of", "bar", "strings"] } },
}
```

```js
const nrOfItems = 10;
const fooItems = anythingRemoteAsync(
  "url.to.json",
  ["fooA", "fooB", "fooC"],
  nrOfItems
);
const barItems = anythingRemoteAsync(
  "url.to.json",
  ["barA", "barB", "barC"],
  nrOfItems
);
```

### Constants

The **languages** constant holds all languages known by _grandomize_. Used in functions with a _language_ parameter.
