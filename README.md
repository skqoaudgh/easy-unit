# easy-unit

> The easiest Javascript unit converter

## Prerequisites

Run the following command to install easy-unit into your existing project:

```
npm i easy-unit
```

## Output Configuration

You can customize output through options parameter on the `to` function. \
The `to` function takes an optional `options` object that may contain any of the following keys:

### to(unit, [options])

**digit** \
The number of digits to appear after the decimal point, should be a value between 1 and 100, inclusive.

**printUnit** \
When set to `false`, then the output will do not include unit, So only appeared with number value.

## How to use

**1. Import** \
You can import with CJS and ESM both.

```javascript
// Import with CJS (CommonJS)
const Cv = require('easy-unit');
new Cv();

// Import with ESM (ES Modules)
import Cv from 'easy-unit';
new Cv();
```

**2. Time unit convert** \
Convert time(hours, minutes, seconds, millieseconds) unit.

```javascript
// Convert hours to minutes
const minutes = new Cv('3h').to('m');
console.log(minutes); // --> 180m

// Convert minutes to seconds
const seconds = new Cv('15m').to('s');
console.log(seconds); // --> 900s

// Convert seconds to hours
const hours = new Cv('3600s')to('h');
console.log(hours); // --> 1h
```

**3. Weight unit convert** \
Convert time(tons, killograms, grams, milligrams) unit.

```javascript
// Convert tons to killograms
const minutes = new Cv('3t').to('kg');
console.log(minutes); // --> 3000kg

// Convert killograms to grams
const seconds = new Cv('10kg').to('g');
console.log(seconds); // --> 10000g

// Convert milligrams to killograms
const hours = new Cv('10000mg')to('g');
console.log(hours); // --> 0.01kg
```

## Authors

**Myungho Bae** - _aka Cada_

## License

[MIT License](https://opensource.org/license/mit/)
