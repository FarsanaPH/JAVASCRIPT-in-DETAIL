// In JavaScript, a boolean is a simple data type that can hold one of two values: true or false. 
// It is used to represent logical states and are essential in controlling the flow of a program.
// Booleans are commonly used in conditional testing (if, else, while, etc.) to determine whether a block of code should execute or not.
// Rarely need to explicitly convert something to a boolean value, as JavaScript does this automatically. For eg:- if (condition) and if (!condition) instead of if (condition === true) or if (condition === false)

//-----------------------------------------------------------------------------------------------------------------------------
// CREATE BOOLEAN
// NB: Booleans can be created either as primitives using boolean literals(true and false), or as objects using the Boolean() constructor:
const bool1 = true;              //Boolean literal
const bool2 = false;             //Boolean literal
const bool3 = new Boolean(true);  // Boolean object
const bool4 = new Boolean("a boolean object"); // Boolean object

//---------------------------------------------------------------------------------------------------------------------------------
// Truthy and Falsy Values:
// In JavaScript, when a value is expected to be a Boolean but isn't explicitly true or false, JavaScript will coerce it into one.

// The following values are considered falsy, meaning they are treated as false in Boolean contexts:
// false
// 0 (the number zero)
// "" (empty string)
// null
// undefined
// NaN (Not-a-Number)

// Any other value is considered truthy, meaning it is treated as true in Boolean contexts, including:
// Non-empty strings ("Hello", "0", etc.)
// Any non-zero numbers (1, -42, etc.)
// Objects ({}, [])

//-------------------------------------------------------------------------------------------------

//Boolean primitives and Boolean objects

//Boolean primitives- boolean function and double NOT operators returns boolean primitives

// boolean function----Boolean()
// num1=Boolean(0)
// console.log(num);             // false
// console.log(typeof num1);      // boolean
//--another example
// console.log(Boolean("Hello"));          // true
// console.log(typeof Boolean("Hello");    // boolean

// double NOT operator----!!
// console.log(!!1);                // true
// console.log(typeof !!1);         // boolean
// console.log(!!"");              // false
// console.log(typeof !!"");        // false

// ---
// Boolean objects - Boolean() constructor with new keyword produce boolean object 
// NB:(not preferred as all objects give truthy effect in conditional statements)
// let boolObj = new Boolean(0);  
// console.log(boolObj);           // [Boolean: 0]
// console.log(typeof boolObj);    // "object"

// NB: Do not preferred to use the Boolean() constructor with new because all objects(including a Boolean object whose wrapped value is false)are truthy and evaluate to true in places such as conditional statements. .
// let boolObj = new Boolean(false);  
// console.log(boolObj);           // [Boolean: false]
// console.log(typeof boolObj);    // "object"
// if (boolObj) {
//     console.log("This is truthy!");  // Output: This is truthy!
// } 
// else{
//     console.log("This is falsy!");
// }

// ------------------------------------------------------------------------------------------------------------
// BOOLEAN COERCION-Implicit conversion of a non boolean value to a boolean.
//                  This happens when the JavaScript engine expects a boolean value instead of a non boolean one.

// Implicit Coercion happens automatically when JavaScript engine expects a boolean (like in conditional statements).
// Explicit Coercion happens when you manually convert a value to a boolean (using the Boolean double NOT operator).

// Examples of Boolean Coercion

// In conditional statement:[Implicit]---JavaScript implicitly coerces the value into a boolean
// let number = 42;
// if (number) {
//     console.log("The number is truthy!");  // This will run because 42 is truthy
// } else {
//     console.log("The number is falsy!");
// }
//--another example
// let number2 = 0;
// if (number2) {
//     console.log("The number is truthy!");  
// } else {
//     console.log("The number is falsy!");    // This will run because 0 is falsy
// }

// Boolean Function:[Explicit ]
// The Boolean() function explicitly converts a value into a boolean.
// let bool = Boolean("Hello");
// console.log(bool);  // true (non-empty string is truthy)

// Double NOT operator: [Explicit]
// !! negates the value twice, converting it into a boolean.
// let str=""
// console.log(!!str);  // false ( empty string is falsy)
 
//----
// BOOLEAN COERCION using BOOLEAN FUNCTION[explicit]: LEARN HOW TO CONVERT DIFFERENT DATATYPES TO BOOLEAN
// On operations-
// Booleans are returned as-is.
// let boolTrue = true;
// let boolFalse = false;
// console.log(Boolean(boolTrue));  // true
// console.log(Boolean(boolFalse)); // false

// undefined turns into false.
// let undef;
// console.log(Boolean(undef));  // false

// null turns into false.
// let nothing = null;
// console.log(Boolean(nothing));  // false

// 0, -0, and NaN turn into false; other numbers turn into true.
// console.log(Boolean(0));       // false
// console.log(Boolean(-0));      // false
// console.log(Boolean(NaN));     // false
// console.log(Boolean(123));     // true
// console.log(Boolean(-42));     // true

// 0n turns into false; other BigInts turn into true.
// console.log(Boolean(0n));                   // false
// console.log(Boolean(12345678901234567890n)); // true

// The empty string "" turns into false; other strings turn into true.
// console.log(Boolean(""));         // false
// console.log(Boolean("0"));        // true
// console.log(Boolean("Hello"));    // true
// console.log(Boolean("false"));    // true (non-empty string is truthy)

// Symbols turn into true.
// let sym = Symbol("mySymbol");
// console.log(Boolean(sym));  // true

// All objects become true.
// console.log(Boolean({}));            // true (empty object)
// console.log(Boolean([]));            // true (empty array)
// console.log(Boolean({ name: "Farsana" }));  // true (non-empty object)

//---------------------------------------------------------------------------------------------------------------------
// BOOLEAN INSTANCE METHODS

// Boolean.prototype.toString()
// Converts a Boolean object to a string representation of "true" or "false".
// let boolTrue = true;
// let boolFalse = false;
// console.log(boolTrue.toString());  // Output: "true"
// console.log(boolFalse.toString()); // Output: "false"

// Boolean.prototype.valueOf()
// Returns the primitive value of the Boolean object itself.
// let boolObjTrue = new Boolean(true);
// let boolObjFalse = new Boolean(false);
// console.log(boolObjTrue.valueOf());  // Output: true (primitive value)
// console.log(boolObjFalse.valueOf()); // Output: false (primitive value)

//----------------------UNDERSTAND
// NB: if(42) means if(42 === true). It will be truthy on strict equality but falsy on loose equality  

// if (42) {     //means 42 === true
//     console.log("42 is truthy");  // This will run because 42 is truthy
// }
// else{
//     console.log("42 is falsy");
// }
//----
// if ( 42 == true) {
//     console.log("42 is truthy");
// }
// else{
//     console.log("42 is falsy");  // This will run because 42 is falsy on loose equality
 
// }

// NB:The values 0, -0, '' (empty string), NaN, undefined, and null, evaluate to false and all other values evaluate to true, even empty arrays and objects.
//--------------------------UNDERSTAND
// 0 === false  //true
// 0 == false   //true
// 42 === true  //true
// 42 == true   //false
// null==undefined       //true
// null===undefined      //false
// "" === false      //true
// "" == false       //true
// "hello" === true  //true
// "hello" == true   //false
// "0" === true      //true
// "0" ==  true      //false
// "0" === false     //false
// "0" == false      //true
// [] === true       //true
// [] == true        //false
// {} === true       //true
// {} == true        //false