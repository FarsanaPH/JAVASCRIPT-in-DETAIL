//                                        BUILT-IN OR GLOBAL OBJECTS

// Built-in objects, or “global objects”, are those initially built into the language specification itself. 
// There are numerous built-in objects within the JavaScript language, all of which are accessible at the global scope. 
// Some examples are: Object, Number, String, Array, Function, Boolean, RegExp, Math, Date,  Error.

// Object: The base object from which all other objects inherit. Example: let obj = new Object();
// Array: Used to store multiple values in a single variable. Example: let arr = [1, 2, 3];
// String: Represents and manipulates a sequence of characters. Example: let str = "Hello, World!";
// Number: Represents numerical values, including integers and floats. Example: let num = 42;
// Boolean: Represents logical values, either true or false. Example: let bool = true;
// Function: Represents a function, a block of reusable code. Example: function greet() { console.log("Hello"); }
// Date: Represents dates and times. Example: let now = new Date();
// RegExp: Represents regular expressions, used for pattern matching in strings. Example: let regex = /abc/;
// Error: Represents an error in the execution of a script. Example: let err = new Error("Something went wrong");
// Math: Provides mathematical constants and functions. Example: let randomNum = Math.random();
// Promise: Represents the eventual completion (or failure) of an asynchronous operation. Example: let promise = new Promise((resolve, reject) => {...});
// JSON: Used for parsing and stringifying JSON data. Example: let jsonData = JSON.stringify({name: "Farsana"});

// -----------------------------------------------------------------------------------------------------------------------------------------

// MATH OBJECT
// Math object is a built-in static object.
// It is used for performing complex math operations.
// Example usage of Math object methods

// console.log(Math.PI);                // 3.141592653589793: Value of π (pi)
// console.log(Math.abs(-5.7));         // 5.7: Absolute value of -5.7
// console.log(Math.round(4.6));        // 5: Rounds to the nearest integer.
// console.log(Math.floor(4.9));        // 4: Rounds down to (largest) integer less than or equal to the input
// console.log(Math.ceil(4.1));         // 5: Rounds up to (smallest) integer greater than or equal to the input.
// console.log(Math.random());          // Random number between 0 and 1: Generates a random float

// console.log(Math.max(1, 2, 3));       // 3: Largest of the numbers 1, 2, and 3
// console.log(Math.min(1, 2, 3));       // 1: Smallest of the numbers 1, 2, and 3
// console.log(Math.pow(2, 3));          // 8: 2 raised to the power of 3
// console.log(Math.exp(1));             // 2.718281828459045: e (Euler's number) raised to the power of 1
// console.log(Math.sqrt(16));           // 4: Square root of 16


//--------------------------------------------------------------------------------------------------------------------------------------------
// DATE OBJECT
// Date object manipulates date and time.
// Date object allows you to get and set the year, month, day, hour, minute, second and millisecond fields.

// var d = new Date(); // Current date and time
// console.log(d.toLocaleString()); //  9/23/2024, 12:59:30 PM
// console.log(d.getHours());       //  12
// console.log(d.getDay());         //  1 (Monday)
// console.log(d.getMonth());       //  8 (September, as months are 0-indexed)
// console.log(d.getFullYear());    //  2024
// console.log(d.getMinutes());     //  59

// Passing Year, Month, Day:
// var d = new Date(2024, 8, 23);  // September 23, 2024 (month is 0-indexed)
// console.log(d);  //2024-09-22T18:30:00.000Z

// Passing Year, Month, Day, Hour, Minute, Second, Millisecond:
// var d = new Date(2024, 8, 23, 12, 0, 0, 0);  // September 23, 2024, 12:00:00
// console.log(d);

// Passing a Date String:
// var d = new Date("2024-09-23");   // September 23, 2024------here month not 0-indexed 
// console.log(d);  //2024-09-23T00:00:00.000Z



  
  