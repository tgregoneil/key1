#!/usr/bin/node
// test.js

var key1 = require ('key1');

var k1 = key1 ({thisKey: 'thisVal'});
console.log ('k1: ' + k1);
    // returns 'thisKey'

var k2 = key1 ({x: 100, y: 120});
console.log ('k2: ' + k2);
    // returns null, since ob has > 1 key

k3 = key1 (undefined);
console.log ('k3: ' + k3);
    // returns null, since arg is undefined
    // key1 always returns null, unless it's passed a non-null, non-Array object


k4 = key1 ([{a: 'a string'}]);
console.log ('k4: ' + k4);
    // returns null, since argument is an array
