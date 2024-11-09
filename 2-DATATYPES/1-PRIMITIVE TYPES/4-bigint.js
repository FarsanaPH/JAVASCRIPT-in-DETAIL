// BigInt is a built-in JavaScript object that represent numeric values which are too large to be represented by the number primitive.
// Unlike the Number type, which can accurately represent integers only within the range of safe integers ie, ±2^53(±9,007,199,254,740,992) , BigInt can handle integers far beyond this limit.

//----------UNDERSTAND
// console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER+1);  // 9007199254740992----value changed
// console.log(Number.MIN_SAFE_INTEGER-1);  // -9007199254740992----value changed
// console.log(Number.MAX_SAFE_INTEGER+2);  // 9007199254740992----value not changed(hence we using bigint)
// console.log(Number.MIN_SAFE_INTEGER-2);  // -9007199254740992----value not changed(hence we using bigint)
// console.log(BigInt(Number.MAX_SAFE_INTEGER+2)); // 9007199254740992n----changed to bigint
// console.log(BigInt(Number.MIN_SAFE_INTEGER-2)); // -9007199254740992n----changed to bigint
// console.log(BigInt(Number.MAX_SAFE_INTEGER+3)); // 9007199254740994n
// console.log(BigInt(Number.MIN_SAFE_INTEGER-3)); // -9007199254740994n

// LIMITATIONS OF BIGINT 
// BigInt doesn't support certain operations like floating point calculations. For example:
// const c = BigInt(1.5);  // This will throw a RangeError because BigInt only supports whole numbers.


//-------------------------------------------------------------------------------------------------------------

// CREATE BIGINT
// NB: BigInts can be created using BigInt literals (by appending an 'n' to the end of an integer) or by using the BigInt() function (by giving it an integer value or string value.).
// const bigint1 = 1234567890123456789012345678901234567890n;  // BigInt literal
// const bigint2 = BigInt("1234567890123456789012345678901234567890");  // 1234567890123456789012345678901234567890n
// const hugeString = BigInt("9007199254740991");      // 9007199254740991n

//-------------------------------------------------------------------------------------------------------------

// BIGINT CONSTRUCTOR---ie, BigInt()
// NB: The BigInt function returns primitive values of type BigInt when called as a function.
// It does not have a constructor form (BigInt cannot be used with the `new` keyword). Throws an error when called with new.

//-----------------------------------------------------------------------------------------------------------
// BIGINT PRIMITIVES

// BigInt literals are created using an integer followed by "n":
// const primitiveBigInt = 1234567890123456789012345678901234567890n;  // A BigInt literal
// console.log(primitiveBigInt);  // 1234567890123456789012345678901234567890n
// console.log(typeof primitiveBigInt);  // "bigint"

// BigInt function converts other types to BigInt:
// const fromNumber = BigInt(123);  // Coerced into BigInt primitive 123n
// console.log(fromNumber);  // 123n
// console.log(typeof fromNumber);  // "bigint"

//-----------------------------------------------------------------------------------------------------------
// OPERATIONS WITH BIGINT
// BigInt can be used in arithmetic operations with other BigInts, but not with regular numbers.
// because it do not permit operands to be of mixed types — both operands must be BigInt or neither

// const a = 10n;
// const b = 20n;
// console.log(a + b);  // 30n
// console.log(a * b);  // 200n

// Trying to mix BigInt and regular number throws an error:
// console.log(a + 10);  // TypeError: Cannot mix BigInt and other types

// To mix, you can explicitly convert regular numbers to BigInt:
// console.log(a + BigInt(10));  // 20n

// Special cases:
// Addition (+) involving a string and a BigInt returns a string.
// const result = 100n + " is a big number";
// console.log(result); // "100 is a big number"-----not 100n changed to 100
// console.log(typeof result); // "string"

// Division (/) truncates fractional components towards zero, since BigInt is unable to represent fractional quantities
// const result = 10n/3n;
// console.log(result); // 3n (the fractional part is truncated)


//------------------------------------------------------------------------------------------------------------

// COMPARE
// 0n === 0; // false
// 0n == 0; // true

// 1n = 1; // true
// 1n < 2; // true
// 2n > 1; // true
// 2 > 2; // false
// 2n > 2; // false

// NB:0n is falsy; everything else is truthy.
// --------------------------------------------------------------------------------------------------------------

// NB:Coercing between Number values and BigInt values can lead to loss of precision, 
// hence-the following are recommended:
// Only use a BigInt value when values greater than 2^53 are reasonably expected.
// Don't coerce between BigInt values and Number values.

//---------------------------------------------------------------------------------------------------------------------
//BIGINT COERCION------(only has explicit coercion)

// EXPLICIT COERCION-
// the BigInt() function is used to explicitly convert a value to a BigInt

// BIGINT COERCION using BIGINT FUNCTION[explicit]: LEARN HOW TO CONVERT DIFFERENT DATATYPES TO BIGINT
// BigInts are returned as-is.
// let bigInt = 12345678901234567890n;
// console.log(BigInt(bigInt));  // 12345678901234567890n

// undefined  throw a TypeError.
// let undef;
// console.log(BigInt(undef)); // Throws TypeError: Cannot convert undefined to a BigInt

// null throw a TypeError.
// let nothing = null;
// console.log(BigInt(nothing)); // Throws TypeError: Cannot convert null to a BigInt


// true turns into 1n; false turns into 0n.
// console.log(BigInt(true));   // 1n
// console.log(BigInt(false));  // 0n

// Strings are converted by parsing them as if they contain an integer literal.
// console.log(BigInt("123456"));    // 123456n
// Parsing failure in strings results in a SyntaxError.
// console.log(BigInt("123.456"));  // Throws SyntaxError: Cannot convert "123.456" to a BigInt


// Numbers are converted to BigInt if the number is a whole number(integers) , and throw a TypeError if the number is a non-integer numbers(floats) to prevent unintended implicit coercion causing loss of precision.
// let num = 123;
// console.log(BigInt(num));  // 123n
// let numfloat = 123.456;
// console.log(BigInt(numfloat));  // Throws TypeError: Cannot convert 123.456 to a BigInt

// Symbols throw a TypeError.
// let sym = Symbol("sym");
// console.log(BigInt(sym));  // Throws TypeError: Cannot convert a Symbol value to a BigInt


// ------
// Objects are first converted to a primitive by calling their [Symbol.toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The resulting primitive is then converted to a BigInt.

// Example without [Symbol.toPrimitive] or custom methods
// let obj = { name: "Farsana" };
// let bigIntObj = BigInt(obj); // Tries to convert to BigInt by calling internal methods
// console.log(bigIntObj);     // SyntaxError: Cannot convert [object Object] to a BigInt -------because object does not have a valid number or string representation

// Example with [Symbol.toPrimitive]
// const obj = {
//     name: "Alice",
//     age: 25,
//     [Symbol.toPrimitive](hint) {
//       if (hint === 'number') {
//         return this.age;  // Returns a number when hint is 'number'
//       }
//       return null;
//     }
//   };
//   const bigIntResult = BigInt(obj);  // Calls [Symbol.toPrimitive] with 'number' hint which returns 25
//   console.log(bigIntResult);         // 25n

// Example with custom valueOf() method
// let objCustom = {
//     name: "Farsana",
//     valueOf() {
//       return 42;  // Returns a number that can be converted to BigInt
//     }
//   };
//   const bigIntCustom = BigInt(objCustom);  // Calls valueOf() which returns 42
//   console.log(bigIntCustom);               // 42n
  
// Example with custom toString() method
// let objToString = {
//     name: "Farsana",
//     toString() {
//       return "123";  // Returns a string that can be converted to BigInt
//     }
//   };
//   const bigIntToString = BigInt(objToString);  // Calls toString() which returns "123"
//   console.log(bigIntToString);                  // 123n
  

// LIMITATIONS OF BIGINT COERCION

// BigInt doesn't support certain operations like floating point calculations. For example:
// const c = BigInt(1.5);  // This will throw a RangeError because BigInt only supports whole numbers.

//--------------------------------------------------------------------------------------------------------------------------------

// BIGINT INSTANCE METHODS


// BigInt.prototype.toLocaleString()
// Converts a BigInt to a language-sensitive string representation, which includes locale-based number formatting.
// let num = 12345678901234567890n;
// console.log(num.toLocaleString('en-US'));  // Output: "12,345,678,901,234,567,890" (comma-separated in US locale)
// console.log(num.toLocaleString('de-DE'));  // Output: "12.345.678.901.234.567.890" (dot-separated in German locale)

// BigInt.prototype.toString()
// Converts a BigInt to a string, with optional radix (base).
// let num = 255n;
// console.log(num.toString());     // Output: "255" (default base 10)
// console.log(num.toString(16));   // Output: "ff" (base 16 / hexadecimal)
// console.log(num.toString(2));    // Output: "11111111" (base 2 / binary)

// BigInt.prototype.valueOf()
// Returns the primitive value of the BigInt instance itself. 
// Mostly used internally by JavaScript but can be called directly.
// let bigIntnum = 123n;
// console.log(bigIntnum.valueOf());  // Output: 123n (same as the original BigInt value)

//------------------------------------------------------------------------------------------------------------------------------------------