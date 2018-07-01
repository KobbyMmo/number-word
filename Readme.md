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
var numtoword = require('numtoword');
var word = numtoword.getWordFromNumber(100);
```
```sh
Output should be 'One Hundred'
```

### TypeScript
```typescript
import { getWordFromNumber } from 'numtoword';
console.log(getWordFromNumber(100))
```
```sh
Output should be 'One Hundred'
```

### AMD
```javascript
define(function(require,exports,module){
  var numtoword = require('numtoword');
});
```

## Test 
```sh
npm run test
```