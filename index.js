// key1.js

// key1 extracts the single key from an object 
// containing only one key/value pair
// and returns the string value for the key
// anything else passed to key1 returns null

module.exports = (function () {

//---------------------
var key1 = (ob) => {

    key = null;

    var uniqueKeyExists = typeof ob !== 'undefined' &&
                          ob !== null &&
                          !Array.isArray(ob) &&
                          typeof ob === 'object' &&
                          Object.keys(ob).length === 1;
    
    if (uniqueKeyExists) {
    
        var keys = Object.keys(ob);
        key = keys[0];
    
    } else if (Array.isArray (ob)) {

        var ob0 = ob [0];
        var uniqueArrayKeyExists = typeof ob0 !== 'undefined' &&
                                   ob0 !== null &&
                                   typeof ob0 !== 'object';

        if (uniqueArrayKeyExists) {
            
            key = ob0;

        } // end if (uniqueArrayKeyExists)


    } // end if (uniqueKeyExists)
    
    return key;
    
}; // end key1 

return key1;

}());
