# plury

A Node.js module that returns the plural form of any noun

## Installation

```sh
npm install plury --save
yarn add plury
```

## Usage

### Javascript

```javascript
var plury = require('plury');
var boys = plury.getPlural('Boy');
```

```sh
Output should be 'Boys'
```

### TypeScript

```typescript
import { getPlural } from 'plury';
console.log(getPlural('Goose'));
```

```sh
Output should be 'Geese'
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

[![Build Status](https://travis-ci.org/Reutovsky/plury.svg?branch=master)](https://travis-ci.org/Reutovsky/plury)
[![Coverage Status](https://coveralls.io/repos/github/Reutovsky/plury/badge.svg?branch=master)](https://coveralls.io/github/Reutovsky/plury?branch=master)
