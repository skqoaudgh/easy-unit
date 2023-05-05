# easy-unit

> The easiest Javascript unit converter

## Prerequisites

Run the following [npm](https://www.npmjs.com/) command to install easy-unit into your existing project:

```
npm i easy-unit
```

Or, Run the following [yarn](https://classic.yarnpkg.com/) commnad.

```
yarn add easy-unit
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
Convert weight(tons, killograms, grams, milligrams) unit.

```javascript
// Convert tons to killograms
const killograms = new Cv('3t').to('kg');
console.log(killograms); // --> 3000kg

// Convert killograms to grams
const grams = new Cv('10kg').to('g');
console.log(grams); // --> 10000g

// Convert milligrams to killograms
const killograms = new Cv('10000mg')to('g');
console.log(killograms); // --> 0.01kg
```

**4. Distance unit convert** \
Convert distance(kilometers, meters, centimeters, millimeters) unit.

```javascript
// Convert kilometers to meters
const meters = new Cv('2km').to('m');
console.log(meters); // --> 2000m

// Convert meters to centimeters
const centimeters = new Cv('12m').to('cm');
console.log(centimeters); // --> 1200cm

// Convert millimeters to centimeters
const centimeters = new Cv('1000mm')to('cm');
console.log(centimeters); // --> 100cm
```

**5. Temperature unit convert** \
Convert temperature(Fahrenheit, Celsius) unit.

```javascript
// Convert Fahrenheit to Celsius
const meters = new Cv('33.8F').to('C');
console.log(meters); // --> 1C

// Convert Celsius to Fahrenheit
const centimeters = new Cv('32C').to('F');
console.log(centimeters); // --> 0F
```

## Authors

**Myungho Bae** - _aka Cada_

## License

[MIT License](https://opensource.org/license/mit/)
