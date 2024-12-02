// for...of 
// The for...of loop iterates over iterable objects like arrays, strings, or sets. It accesses each element’s value directly.
// NB:for..of mainly used for arrays

// SYNTAX-
// for (variable of iterable)
//     statement

// Iterate over array-
// const colors = ['red', 'green', 'blue'];
// for (const color of colors) {
//   console.log(color);    // red, green, blue
// }

// Iterate over string-
// const iterable = "boo";
// for (const value of iterable) {
//   console.log(value);   // b, o, o
// }

// Iterate over object-
// const objs = { foo: 1, bar: 2 };
// for (const i of objs){
//     console.log(i);  // TypeError : objs is not iterable.
// }
// Error occurs as for...of loop only works with iterable objects, such as arrays, strings, maps, and sets. Objects are not directly iterable. 
// To loop through the properties of an object, you can use for...in instead, or convert the object properties to an iterable format using Object.keys(), Object.values(), or Object.entries().
// Correct Ways-
// const objs = { foo: 1, bar: 2 };
// for (const key in objs) {
//     console.log(key, objs[key]);
// }
// Logs-
// "foo" 1
// "bar" 2
// OR
// for (const [key, val] of Object.entries(objs)) {
//   console.log(key, val);
// }
// Logs-
// "foo" 1
// "bar" 2

// Iterate over Map
// const iterable = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
// ]);
// for (const entry of iterable) {
//     console.log(entry);
// }
// Logs-
// ['a', 1]
// ['b', 2]
// ['c', 3] 
// for (const [key, value] of iterable) {
//     console.log(value);
// }
// Logs-
// 1
// 2
// 3

// Iterate over set-
// const iterable = new Set([1, 1, 2, 2, 3, 3]);
// for (const value of iterable) {
//   console.log(value);
// }
// 1
// 2
// 3

  