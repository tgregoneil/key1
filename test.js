#!/usr/bin/node
// test.js

var key1 = require ('key1');

var k1 = key1 ({thisKey: 'thisVal'});
    // returns 'thisKey'
console.log ('k1: ' + k1);

var k2 = key1 ({x: 100, y: 120});
    // returns null, since ob has > 1 key
console.log ('k2: ' + k2);

k3 = key1 (undefined);
    // returns null, since arg is undefined
    // key1 always returns null, unless it's passed a non-null, non-Array object
console.log ('k3: ' + k3);


k4 = key1 ([{a: 'a string'}]);
    // returns null, since argument is an array
console.log ('k4: ' + k4);
