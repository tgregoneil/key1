### Key1 

Extracts the key from an object with a single key/value pair.
Returns null if anything else is passed to key1().

### Installation
```shell
$ npm install key1
```

### Example (test.js)

```js
var key1 = require ('key1');

var k1 = key1 ({thisKey: 'thisVal'});
// returns 'thisKey'

var k2 = key1 ({x: 100, y: 120});
// returns null, since ob has > 1 key

k3 = key1 (undefined);
// returns null, since arg is undefined
// key1 always returns null, unless it's passed a non-null, non-Array object


k4 = key1 ([{a: 'a string'}]);
// returns null, since argument is an array
```
