// null represents the intentional absence of any object value. In simpler words, it means there is no value or no object.
// It is considered as one of JavaScript’s primitive values and a falsy value.
// null is a way to reset a variable, signalling that it should not reference any object showing that the variable is meant to be empty or non-existent at execution time.

//---------------------------------------------------------------------------------------------
// CREATE NULL 
// let a = null;
// console.log(a);         //null

//--------------------------------------------------------------------------------------
// typeof null QUIRK
// NB:One of the quirks of null is that the typeof operator reports that the type of null is 'object'

// let a = null;
// console.log(typeof a);  //object----As everything in JS is considered as object .However, null is a special value representing the absence of an object.

//------------------------------------------------------------------------------------

//CHECK FOR NULL

//  Use the strict equality (===) or inequality (!==) operator to check if a variable is null.
// let a = null;
// if (a === null) {
//   console.log("variable is null");
// }

//--------------------------------------------------------------------------------------------
// NULL IN REAL-WORLD SCENARIO

// In web application where users create a profile without providing all their information immediately. 
// let userProfile = {
//     name: null,
//     age: null,
//     email: null
//   };

// NB:next time you come across null, don't be alarmed. It's just your code just telling you that it wish to doesn't have a value for a certain variable at the moment

//----------------------------------------------------------------------------------
// NULL IS NOT UNDEFINED

// NB:Null and Undefined are often confused because they both represent "nothing" or "empty" values. 
// However,undefined is like an empty plot of land where nothing has been built yet. 
// On the other hand, null is like a plot where a building was planned but never built. The foundation was laid, but there's no building there.
// null means the variable has been explicitly defined as null,whereas undefined means the variable has not been assigned a value yet.

// null is used when a variable is intentionally empty or has no value. It is something you can assign to a variable to indicate "no value."
// let value = null;  // Intentionally set to "no value"
// console.log(value); // null

// undefined means a variable has been declared but has not been assigned a value yet. JavaScript automatically assigns undefined to uninitialized variables.
// let value;           // No value is assigned, so it's undefined
// console.log(value);  // Output: undefined

//---------------------------------------------------------------------------------------
//ARITHMETIC OPERATION ON NULL AND UNDEFINED

// null is considered as 0 in arithmetic operations
// 2 + null; // 2
// 2 - null; // 2
// null - 2; // -2
// 2 * null; // 0
// 2 ** null; // 1
// 0 ** 2; // 0
// null / 2; // 0

// undefined causes all arithmetic operations to result in NaN:
// 2 + undefined; // NaN
// 2 * undefined; // NaN
// 2 - undefined; // NaN
// 2 ** undefined; // NaN

// ------------------------------------------------------UNDERSTAND
//NB:  Using double equals with null is a shorthand for checking whether a value is null or undefined.
//     Therefore, x == null is not used as it also checks whether x is undefined, while strict equality doesn't.

// null === null; // true
// null === undefined; // false
// null == null; // true
// null == undefined; // true

//---
// typeof null; // "object" (not "null" for legacy reasons)
// typeof undefined; // "undefined"
// !null; // true
// Number.isNaN(1 + null); // false  ----1 is a number
// Number.isNaN(1 + undefined); // true  ------NaN is not a number

//--------------------------------------------------------------------------------------------------------------------