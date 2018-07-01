# mypluralize
A Node.js module that converts a number to its word equivalent

## Installation 
```sh
npm install numtoword --save
yarn add numtoword
bower install numtoword --save
```

## Usage

### Javascript

```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```

### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```

### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```

## Test 
```sh
npm run test
```