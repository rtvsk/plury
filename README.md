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
