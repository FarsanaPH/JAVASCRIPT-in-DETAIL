// undefined is a Primitive data type in Javascript.
// Whenever a variable is declared but not initialized or assigned a value, then it is stored as undefined.
// A function returns undefined if a value was not returned.
// A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.
//-------------------------------------

// 1. Create undefined- Variable Declaration Without Initialization and as literals
// let myVar;
// console.log(myVar); // undefined
// let a=undefined;
// console.log(a); //undefined

// 2. Function Without a Return Value
// function myFunction() {
//   // No return statement
// }
// console.log(myFunction()); // undefined

// 3. Accessing an Uninitialized Property
// const obj = { name: "John" };
// console.log(obj.age); // undefined (property 'age' does not exist)

// 4. Function Parameters Not Provided
// function greet(name) {
//   console.log(name);
// }
// greet(); // undefined (no argument provided for 'name')

// 5. Array Elements Not Initialized
// const arr = [1, 2, , 4]; // The third element is not initialized
// console.log(arr[2]); // undefined

// 6. `undefined` as a Value in Code
// let explicitUndefined = undefined;
// console.log(explicitUndefined); // undefined

// 7. Strict equality and undefined
// NB: x == undefined is not used as it also checks whether x is null, while strict equality doesn't.
// let x;
// if (x === undefined) {
//   // these statements execute
// } else {
//   // these statements do not execute
// }

// 8. `undefined` causes all arithmetic operations to result in NaN:
// 2 + undefined; // NaN
// 2 * undefined; // NaN
// 2 - undefined; // NaN
// 2 ** undefined; // NaN
