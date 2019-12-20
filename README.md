[![Build Status](https://travis-ci.org/Reutovsky/plury.svg?branch=master)](https://travis-ci.org/Reutovsky/plury)
[![Coverage Status](https://coveralls.io/repos/github/Reutovsky/plury/badge.svg?branch=master)](https://coveralls.io/github/Reutovsky/plury?branch=master)

# Plury

A Node.js module that returns the plural form of any noun.
Full TypeScript support.

## Installation

```sh
npm i plury
yarn add plury
```

## Usage

### Javascript

```javascript
import { getPlural, getSingular } from 'plury';

const boys = getPlural('Boy');
console.log(boys); // => 'Boys'

const thief = getSingular('Thieves');
console.log(thief); // => 'Thief'
```

### TypeScript

```typescript
import { getPlural, getSingular } from 'plury';
console.log(getPlural('Goose')); // => 'Geese'
console.log(getSingular('Guns')); // => 'Gun'
```

```sh
Output should be 'Geese'
Output should be 'Gun'
```

### AMD

```javascript
define(function(require, exports, module) {
  var plury = require('plury');
});
```

## Test

```sh
npm run test
```
