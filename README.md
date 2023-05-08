# easy-unit

> The easiest Javascript library for parsing, validating, manipulating, and formatting units.

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

## How to import

You can import with CJS and ESM both.

```javascript
// Import with CJS (CommonJS)
const Cv = require('easy-unit');
new Cv();

// Import with ESM (ES Modules)
import Cv from 'easy-unit';
new Cv();
```

## How to validate

```javascript
// Validate that assigned unit is convertable
const result = new Cv('3h').isValid();
console.log(result); // --> true

const result = new Cv('3e').isValid('m');
console.log(result); // --> false

// Validate that unit is on the same system
const result = new Cv('10kg').isValid('8t');
console.log(result); // --> true

const result = new Cv('30m').isValid('24.5C');
console.log(result); // --> false
```

## How to get/set values

```javascript
// Getter/Setter of unit
const unit = new Cv('3h').unit;
console.log(unit); // --> h

const unit = new Cv('30ha').getUnit();
console.log(unit); // --> ha

// Getter/Setter of base
const base = new Cv('10kg').base;
console.log(base); // --> 10

const base = new Cv('24.5C').getBase();
console.log(base); // --> 24.5
```

## How to convert

**1. Time unit convert** \
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

**2. Weight unit convert** \
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

**3. Distance unit convert** \
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

**4. Temperature unit convert** \
Convert temperature(Fahrenheit, Celsius) unit.

```javascript
// Convert Fahrenheit to Celsius
const celsius = new Cv('33.8F').to('C');
console.log(celsius); // --> 1C

// Convert Celsius to Fahrenheit
const fahrenheit = new Cv('32C').to('F');
console.log(fahrenheit); // --> 0F
```

**5. Area unit convert** \
Convert area(hectare, are, square metre) unit.

```javascript
// Convert hectare to are
const are = new Cv('20ha').to('a');
console.log(are); // --> 20000a

// Convert are to square meter
const squareMeter = new Cv('150a').to('m^2');
console.log(squareMeter); // --> 15000m^2

// Convert square meter to hectare
const hectare = new Cv('50000m^2').to('ha');
console.log(hectare); // --> 5ha
```

## How to calculate

**1. Add** \

```javascript
// Add two time values
const result = new Cv('10m').to('3h');
console.log(result); // --> 190m

// Add two distance values
const result = new Cv('1km').to('500m');
console.log(result); // --> 1.5km

// Add two temperature values
const result = new Cv('5F').to('35C');
console.log(result); // --> 100F
```

## Authors

**Myungho Bae** - _aka Cada_

## License

[MIT License](https://opensource.org/license/mit/)
