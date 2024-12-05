// for...in 

// for...of iterates over property values, while 
// for...in loop iterates over all the enumerable properties of an object or array, accessing each property’s key .
// (ignoring ones keyed by Symbols), including inherited enumerable properties.
// NB:for..in mainly used for objects.

// SYNTAX-
// for (variable in object)
//     statement

// let user = {name: "John", age: 30, isAdmin: true};
// for (let key in user) {
//     // keys
//     console.log( key );  // name, age, isAdmin
//     // values for the keys
//     console.log( user[key] ); // John, 30, true
// }

// const arr = [3, 5, 7];
// arr.foo = "hello";
// for (const i in arr) {
//   console.log(i);  // "0" "1" "2" "foo"
// }
// for (const i of arr) {
//   console.log(i);  // 3 5 7
// }
 