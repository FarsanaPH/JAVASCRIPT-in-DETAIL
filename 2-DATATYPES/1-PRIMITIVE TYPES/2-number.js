// The Number data type in JavaScript represents floating-point numbers, such as 37 or -9.25. 
// The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function.

//-----------------------------------------------------------------------------------------------
// CREATE NUMBER 

// NB:All these different representations are equal to 255 in JavaScript.
// let num1 = 255; // integer
// let num2 = 255.0; // floating-point number with no fractional part
// let num3 = 0xff; // hexadecimal notation
// let num4 = 0b11111111; // binary notation
// let num5 = 0.255e3; // exponential notation

// let numobj = new Number("123");  //Number object

//-------------------------------------------------------------------------------------------------

// NUMBER CONSTRUCTOR---ie, Number()
// NB:It creates number objects when called with constructor context( new keyword) and primitive values of type Number when called as a function.

//--------------------------------------------------------------------------------------------------
// NUMBER PRIMITIVES AND NUMBER OBJECTS

// NUMBER PRIMITIVES - Number literals and number functions (numbers returned from calling Number in non-constructor context (without using the new keyword)) return primitive number values.

// NB: Number Literals -
// const primitiveNum = 42; // A literal is a number primitive
// console.log(primitiveNum); // 42
// console.log(typeof primitiveNum); // "number"

// NB: Number Function - The Number function converts other types to numbers:
// const primitiveNumber = Number("123"); // Coerced into the number primitive 123
// console.log(primitiveNumber); // 123
// console.log(typeof primitiveNumber); // "number"

//-------
// NUMBER OBJECTS - Numbers returned from calling Number in a constructor context (using the new keyword) are number objects.

// const numberObj = new Number(42);
// console.log(numberObj); // [Number: 42]
// console.log(typeof numberObj); // "object"

// CONVERT NUMBER OBJECT TO ITS PRIMITIVE VALUE

// const numberObj = new Number(42);
// console.log(numberObj); // [Number: 42]
// console.log(numberObj.valueOf());  // 42
// console.log(numberObj.toString()); // "42"---------converted to string

//-------------------------------------------------------------------------------------------------------------------

// NUMBER COERCION - Implicit conversion of a non-number value to a number.
//                   This occurs when the JavaScript engine expects a number, such as during arithmetic operations or when a non-number value is used in a context where a number is expected.

// Implicit Coercion happens automatically when the JavaScript engine expects a number (e.g., during arithmetic operations).
// Explicit Coercion (conversion) occurs when you manually convert a value to a number (using the Number function or similar methods).


//Example of NUMBER COERCION

// Arithmetic Operations: [IMPLICIT]
// let str = "5";
// let result = str * 2;  // The string "5" is implicitly coerced to the number 5
// console.log(result); // 10
//----another example
// let bool = true;
// let result = bool + 1;  // The boolean true is implicitly coerced to the number 1
// console.log(result); // 2

// Unary Plus(+) : [EXPLICIT]
// let str = "42";
// let num = +str; // Using unary plus to convert the string to a number
// console.log(num); // 42
// console.log(typeof num); // "number"


// Using the Number Function: [EXPLICIT]
// const num = Number("123");  // Coerced into the number primitive 123
// console.log(num); // 123
// console.log(typeof num); // "number"
//----another example
// const num = Number("abc");  // Coerced into NaN, as "abc" doesn't have a direct numeric representation.
// console.log(num); // NaN
// console.log(typeof num); // "number"
//------another example
// let obj = { name: "Farsana" };
// let result = Number(obj);     // The object is coerced to NaN because it doesn't have a direct numeric representation.
// console.log(result);         // NAN
// console.log(typeof result);  // "number"
//-----
// let obj = { value: "10" };
// let result = Number(obj.value); // The string value inside the object is explicitly converted to the number 10
// console.log(result);            // 10
// console.log(typeof result);     // "number"

//---------

// NUMBER COERCION using NUMBER FUNCTION [explicit]: LEARN HOW TO CONVERT DIFFERENT DATA TYPES TO NUMBERS

// Numbers are returned as-is.
// let num = 123;
// console.log(Number(num));  // 123

// undefined turns into NaN.
// let undef;
// console.log(Number(undef));  // NaN

// null turns into 0.
// let nothing = null;
// console.log(Number(nothing));  // 0

// true turns into 1; false turns into 0.
// console.log(Number(true));   // 1
// console.log(Number(false));  // 0

// Strings are converted by parsing them as if they contain a number literal.
// Parsing failure results in NaN. Some specific cases:
// let str1 = "42";
// let str2 = " 42 ";  // Leading and trailing whitespace are ignored.
// let str3 = "42abc"; // Non-numeric characters cause parsing to fail, resulting in NaN.
// let str4 = "abc"; // Non-numeric characters cause parsing to fail, resulting in NaN.
// let str5 = "  ";    // Empty or whitespace-only strings are converted to 0.
// console.log(Number(str1));  // 42
// console.log(Number(str2));  // 42
// console.log(Number(str3));  // NaN
// console.log(Number(str4));  // NaN
// console.log(Number(str4));  // 0

// Special cases for strings:
// console.log(Number("+42"));  // 42   (leading + is allowed)
// console.log(Number("-42"));  // -42  (leading - is allowed)
// console.log(Number("Infinity"));  // Infinity (Infinity is recognized as a literal)
// console.log(Number("-Infinity")); // -Infinity

// BigInts throw a TypeError to prevent unintended implicit coercion causing loss of precision.
// let bigInt = 12345678901234567890n;
// try {
//   console.log(Number(bigInt));  // TypeError: Cannot convert a BigInt value to a number
// } catch (e) {
//   console.log(e);  // Will log the error
// }

// Symbols throw a TypeError.
// let sym = Symbol("mySymbol");
// try {
//   console.log(Number(sym));  // TypeError: Cannot convert a Symbol value to a number
// } catch (e) {
//   console.log(e);  // Will log the error
// }

//----
// Objects are first converted to a primitive by calling its [Symbol.toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The resulting primitive is then converted to a number.

// Example without [Symbol.toPrimitive] or custom methods:
// let obj = { name: "Farsana" };
// let numObj = Number(obj);  // Tries to convert to number by calling internal methods (object's valueOf() and toString() methods)
// console.log(numObj);  // NaN----- because default object doesn't have a numeric representation
// console.log(typeof numObj);  // "number"


// NB: Symbol.toPrimitive: If this method exists, it’s the first method called. 
// It has the highest priority and can be customized for different types of conversions (like string, number).
// const obj = {
//     name: "Alice",
//     age: 25,
//     [Symbol.toPrimitive](hint) {
//         if (hint === 'number') {
//             return this.age;
//         }
//         return null;
//     }
// };
// const resultNumber = Number(obj);
// console.log(resultNumber);        // 25 - by converting first to primitive (number) then to number
// console.log(typeof resultNumber); // "number"


// NB: valueOf(): If Symbol.toPrimitive is not available or doesn't produce a primitive, JavaScript then calls the valueOf() method, which should return a primitive value.
// let obj = {
//     name: "Farsana",
//     valueOf() {
//         return 42;  
//     }
// };
// console.log(Number(obj));  //  42

// NB: toString(): If valueOf() doesn't return a primitive, JavaScript tries to call the toString() method to get a string representation, which is then converted to a number.
// let obj = {
//     name: "Farsana",
//     toString() {
//         return "123";  
//     }
// };
// console.log(Number(obj));  // 123-----(string converted to number)



//--------------------------------------------------------------------------------------------
// Number.parseFloat() and Number.parseInt() :-

// NB:Number.parseFloat() and Number.parseInt() are similar to Number() but only convert strings
// If number is given instead of string , first converts the number to a string (eg: "123"), and then performs the integer parsing.
// Stops parsing at the first non-numeric character.
// parseInt() doesn't recognize the decimal point, and parseFloat() doesn't recognize the 0x prefix.
// They are same the global parseFloat() and parseInt() function

// console.log(Number.parseInt("10.5"));    // Output: 10 (decimal part discarded)
// console.log(Number.parseInt("10abc"));    // Output: 10 (Stops parsing at the first non-numeric character)
// console.log(Number.parseInt("abc"));     // Output: NaN

// console.log(Number.parseFloat("10.5"));    // Output: 10.5 (decimal part not discarded)
// console.log(Number.parseFloat("10abc"));    // Output: 10
// console.log(Number.parseInt("abc"));     // Output: NaN

// console.log(Number("10abc"));  // NaN--------gives NAN while  parseFloat() and parseInt() stopped parsing at the first non-numeric character
// console.log(Number("abc"));     //  NaN

//------------------------------------------------------------------------------------------------

//NUMBER STATIC METHODS

// Number.isFinite()
// Determine whether the passed value is a finite number.
// console.log(Number.isFinite(10));        // Output: true (10 is a finite number)
// console.log(Number.isFinite(Infinity));  // Output: false (Infinity is not finite)
// console.log(Number.isFinite(NaN));       // Output: false (NaN is not finite)
// console.log(Number.isFinite("10"));      // Output: false (String is not a number)

// Number.isInteger()
// Determine whether the passed value is an integer.
// console.log(Number.isInteger(10));        // Output: true (10 is an integer)
// console.log(Number.isInteger(10.5));      // Output: false (10.5 is not an integer)
// console.log(Number.isInteger("10"));      // Output: false (String is not an integer)
// console.log(Number.isInteger(Infinity));  // Output: false (Infinity is not an integer)

// Number.isNaN()
// Determine whether the passed value is NaN.
// console.log(Number.isNaN(NaN));          // Output: true (NaN is not a number)
// console.log(Number.isNaN(10));           // Output: false (10 is a number)
// console.log(Number.isNaN("NaN"));        // Output: false (String is not NaN)
// console.log(Number.isNaN(undefined));    // Output: false (undefined is not NaN)
// isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
// isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
// isNaN("37,5"); // true
// isNaN("123ABC"); // true: Number("123ABC") is NaN
// isNaN(""); // false: the empty string is converted to 0 which is not NaN
// isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN


// Number.isSafeInteger()
// Determine whether the passed value is a safe integer (number between -(2^53 - 1) and 2^53 - 1).
// console.log(Number.isSafeInteger(10));                     // Output: true (10 is a safe integer)
// console.log(Number.isSafeInteger(9007199254740991));       // Output: true (This is the largest safe integer)
// console.log(Number.isSafeInteger(9007199254740992));       // Output: false (This is not a safe integer)
// console.log(Number.isSafeInteger(10.5));                   // Output: false (10.5 is not an integer)
// console.log(Number.isSafeInteger(Infinity));               // Output: false (Infinity is not a safe integer)

// Number.parseFloat()-Converts a string to a floating-point number. It doesn't recognize the 0x prefix.
// similar to Number() but only used to convert strings.
// This is the same as the global parseFloat() function.
// console.log(Number.parseFloat("10.5"));    // Output: 10.5 (String converted to a floating-point number)
// console.log(Number.parseFloat("10abc"));    // Output: 10 (Stops parsing at the first non-numeric character)
// console.log(Number.parseFloat("abc"));     // Output: NaN (String does not start with a number)

// Number.parseInt()-Converts a string to an integer. It doesn't recognize the decimal point
// similar to Number() but only used to convert strings.
// This is the same as the global parseInt() function.
// console.log(Number.parseInt("10.5"));    // Output: 10 (String converted to an integer, decimal part discarded)
// console.log(Number.parseInt("10abc"));    // Output: 10 (Stops parsing at the first non-numeric character)
// console.log(Number.parseInt("abc"));     // Output: NaN (String does not start with a number)

//---------

// NUMBER INSTANCE METHODS

// Number.prototype.toExponential()
// Returns a string representing the number in exponential notation.
// let num = 12345.6789;
// console.log(num.toExponential());      // Output: "1.23456789e+4"
// console.log(num.toExponential(2));     // Output: "1.23e+4" (rounded to 2 decimal places)

// Number.prototype.toFixed()
// Returns a string representing the number in fixed-point notation.
// num = 12345.6789;
// console.log(num.toFixed());            // Output: "12346" (rounded to nearest integer)
// console.log(num.toFixed(2));           // Output: "12345.68" (rounded to 2 decimal places)

// Number.prototype.toLocaleString()
// Returns a string with a language-sensitive representation of this number.
// num = 12345.6789;
// console.log(num.toLocaleString('en-US'));  // Output: "12,345.679" (formatted for US English locale)
// console.log(num.toLocaleString('de-DE'));  // Output: "12.345,679" (formatted for German locale)

// Number.prototype.toPrecision()
// Returns a string representing the number to a specified precision.
// num = 12345.6789;
// console.log(num.toPrecision(4));       // Output: "1.235e+4" (rounded to 4 significant digits)
// console.log(num.toPrecision(7));       // Output: "12345.68" (rounded to 7 significant digits)

// Number.prototype.toString()
// Returns a string representing the specified object in the specified radix ("base").
// num = 12345.6789;
// console.log(num.toString());           // Output: "12345.6789" (default base 10)
// console.log(num.toString(2));          // Output: "11000000111001.1010101110000101000111101011100001010001111" (binary)
// console.log(num.toString(16));         // Output: "3039.acf2" (hexadecimal)

// Number.prototype.valueOf()
// Returns the primitive value of the specified object.
// num = 12345.6789;
// console.log(num.valueOf());            // Output: 12345.6789 (returns the primitive number)
// console.log(typeof num.valueOf());     // Output: "number"

//--------------UNDERSTAND

// Number("123"); // 123
// Number("12.3"); // 12.3
// Number("12.00"); // 12
// Number("012"); // 12
// Number("123e-1"); // 12.3
// Number(""); // 0
// Number(null); // 0
// Number("0x11"); // 17
// Number("0b11"); // 3
// Number("0o11"); // 9
// Number("foo"); // NaN
// Number("100a"); // NaN
// Number("1,") // NaN
// Number("1+1") // NaN
// Number("-Infinity"); // -Infinity


//---------------UNDERSTAND
//Learn how Symbol.toPrimitive property can modify the primitive value converted from an object.

// An object without Symbol.toPrimitive property.
// const obj1 = {};
// console.log(+obj1); // NaN-------object on number conversion
// console.log(`${obj1}`); // "[object Object]"--------------object on string conversion
// console.log(obj1 + ""); // "[object Object]"-------object on string conversion

// An object with Symbol.toPrimitive property.
// const obj2 = {
//     [Symbol.toPrimitive](hint) {
//       if (hint === "number") {
//         return 10;
//       }
//       if (hint === "string") {
//         return "hello";
//       }
//       return true;
//     },
//   };
//   console.log(+obj2); // 10        — hint is "number"
//   console.log(`${obj2}`); // "hello"   — hint is "string"
//   console.log(obj2 + ""); // "true"    — hint is "default"

// -----UNDERSTAND
// NaN-

// NaN is a special numeric value that is not equal to itself.
// NaN === NaN // false

// const notANumber = 3 * "a" // NaN
// notANumber == notANumber  // false
// notANumber === notANumber // false

// IMP:How to check-
// NaN is the only Javascript value that is not equal to itself. So you can check for NaN by comparing it to itself.
// if (notANumber !== notANumber) // true

// ECMAScript 6 introduced a method for checking NaN, Number.isNaN but it returns true only for NaN
// Number.isNaN(NaN) // true ------returns true only when the value passed to it is exactly NaN 
// Number.isNaN("name") // false
// --
// const notANumber = 3 * "a" // NaN
// console.log(notANumber === NaN); //false
// console.log(Number.isNaN(notANumber)); //true

// Beware of global isNaN function, it attempts to coerce it's argument before checking if it is NaN. For example,
// isNaN(NaN); // true
// isNaN("name") // true
// isNaN("1") // false


// NB Summary:
// Number.isNaN() checks if the value is exactly NaN without type conversion. while,
// isNaN() attempts to convert the value to a number first and then checks if the result is NaN. It should be avoided.
// Number.isNaN(NaN); // true ---only true case
// Number.isNaN("name"); // false
// isNaN(NaN); // true
// isNaN("name"); // true
// isNaN("1"); // false

// -------isNaN Extra Cases------------------------------------------------------------------------------------------------------------------------
// isNaN() attempts to convert the value to a number first and then checks if the result is NaN.
// The global isNaN function should be avoided

// isNaN(NaN); // true
// isNaN(undefined); // true
// isNaN({}); // true

// isNaN(true); // false
// isNaN(null); // false
// isNaN(37); // false

// Strings
// isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
// isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
// isNaN("37,5"); // true
// isNaN("123ABC"); // true: Number("123ABC") is NaN
// isNaN(""); // false: the empty string is converted to 0 which is not NaN
// isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// Dates
// isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
// isNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number

// Arrays
// isNaN([]); // false; the primitive representation is "", which coverts to the number 0
// isNaN([1]); // false; the primitive representation is "1"
// isNaN([1, 2]); // true; the primitive representation is "1,2", which cannot be parsed as number


