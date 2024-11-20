//                                               EXPLICIT TYPE CONVERSION/ EXPLICIT TYPE CASTING / TYPE CASTING
// Type casting generally refers to explicit type casting 
// Manually  conversion of a value from one type to another using functions(methods) or operators, like Number("123") ,parseInt("456") , parseFloat() or toString().
// It means transferring data from one data type to another explicitly by specifying the type to convert the given data to.
// In JavaScript the type casting can be done only for strings, numbers and Boolean (object) data types.

// -------------------------------------------------------------------------------------------------------------------------------------------------
// NB:In JavaScript the type casting can be done only for strings, numbers and Boolean (object) data types.
// Methods used for conversion-
// String () – it converts any type of given value into string type
// toString () – it converts the given number into number. convert to binary, octal, and hexadecimal in the radix base
// Number () – it converts any type of given value into number type
// ParseInt () – the given value to converts an integer .have radix/base also
// ParseFloat () – the given value to converts a float
// Boolean () – converts any type of given value into true or false (or) 0 and 1
// UNARY OPERATOR(+)

// --
// UNARY OPERATOR(+) -- used to convert to number
// let y = "5";      // y is a string
// let x = + y;      // x is a number
// NB:If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):
// let y = "John";   // y is a string
// let x = + y;      // x is a number (NaN)



// STRING METHODS
// 1) String()- This global method can convert numbers to strings. It does not support radix/base
// String(10)        //"10"
// String("10")      //"10"
// String(100+23)    //"123"
// String(true)      // "true"
// String(false)     // "false"
// String(null)      // "null"
// String(undefined) // "undefined"
// String([1, 2, 3])      // "1,2,3"
// String({name:farsana}) // "[object Object]"
// const myFunction = function() {
//     console.log("This is my function!");
// };
// String(myFunction) // function(){ console.log("This is my function!");}
// String(Date())     // "Wed Sep 25 2024 22:33:47 GMT+0530 (India Standard Time)"
// --
// 2) toString()- This method available on most objects, numbers, booleans, and arrays  does the same as above. However, primitive strings (which are already strings) do not have .toString() method
//                Only difference is Calling toString() on null and undefined throw a TypeError and support radix/base
// null.toString()      // TypeError
// undefined.toString() // TypeError
// (255).toString()     // "255"
// (255).toString(2)    // "11111111" (binary representation of 255)
// "255".toString()     // "255" (no change)
// "255".toString(2)    // "255" (still no change)

// -----------------------------------------------------------------------

// NUMBER METHODS
// 1) Number()- support decimal point but does not support a radix (base) 
// Number("3.14")   // 3.14
// Number(Math.PI)  // 3.141592653589793
// Number("  42 ");  // 42 ----ignores leading and trailing whitespace.
// Number("99 88")  // NaN
// Number("10abc")  // NaN
// Number("abc")    // NaN
// Number(" ")      // 0
// Number("")       // 0
// Number(false)    // 0
// Number(true)     // 1
// Number(null)     // 0
// Number(undefined)  // NaN
// Number([1])        // 1
// Number([1, 2])     // NaN
// Number({})         // NaN
// const myFunction = function() {
//     console.log("This is my function!");
// };
// Number(myFunction)  // NaN
// Number(Date())      // NaN
// d = new Date();
// Number(d)          // returns 1404568027739
// --
// 2) ParseInt()- support radix/base but does not support decimal point
// console.log(parseInt("123"));         // 123 (decimal)
// console.log(parseInt("077"));         // 77 in most cases (treated as decimal)
// console.log(parseInt("42.56"));       // 42 (ignores everything after the decimal point)
// console.log(parseInt("  42 "));       // 42 (ignores leading/trailing spaces)
// console.log(parseInt("123abc"));      // 123 (stops at 'a')
// console.log(parseInt("abc123"));      // NaN (no valid number at the start)
// console.log(parseInt("   42abc"));    // 42 (ignores non-numeric characters)
// console.log(parseInt("101", 2));      // 5 (interprets "101" as a binary number with radix/base 2)
// --
// 3) ParseFloat()- same as parseInt ;only difference is it support decimal point and not support radix/base.
// console.log(parseFloat("123"));        // 123 (interprets as a floating-point number)
// console.log(parseFloat("42.56"));      // 42.56 (keeps the decimal part)
// console.log(parseFloat("  42.56  "));  // 42.56 (ignores leading/trailing spaces)
// console.log(parseFloat("123.45abc"));  // 123.45 (stops at 'a')
// console.log(parseFloat("abc123.45"));  // NaN (no valid number at the start)
// console.log(parseFloat("   42.56abc"));// 42.56 (ignores non-numeric characters after the valid number)
// console.log(parseFloat("101.1", 2));   // 101.1 (radix/base not supported by parseFloat, always decimal)


// ---------------------------------------------------------------------------------

// BOOLEAN METHODS
// Truthy values (will return true)
// console.log(Boolean(1));            // true (non-zero number)
// console.log(Boolean("Hello"));      // true (non-empty string)
// console.log(Boolean([]));           // true (empty array is truthy)
// console.log(Boolean({}));           // true (empty object is truthy)
// console.log(Boolean(Infinity));     // true (infinity is truthy)
// console.log(Boolean(-1));           // true (non-zero number)
// console.log(Boolean(true));         // true (the boolean value true)
// Falsy values (will return false)
// console.log(Boolean(0));            // false (zero)
// console.log(Boolean(null));         // false (null)
// console.log(Boolean(undefined));    // false (undefined)
// console.log(Boolean(NaN));          // false (Not-a-Number)
// console.log(Boolean(""));           // false (empty string)
// console.log(Boolean(false));        // false (the boolean value false)




