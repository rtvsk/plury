![Header Logo](https://res.cloudinary.com/codemecodeyou/image/upload/v1576844510/codemecodeyou/oc8kdeeoknrnj9o4z2wm.png)

# Plury

A module that returns plural or singular form of any noun(-s).
Full TypeScript support.

[![Build Status](https://travis-ci.org/Reutovsky/plury.svg?branch=master)](https://travis-ci.org/Reutovsky/plury)
[![Coverage Status](https://coveralls.io/repos/github/Reutovsky/plury/badge.svg?branch=master)](https://coveralls.io/github/Reutovsky/plury?branch=master)

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

## Test

```sh
npm run test
```
