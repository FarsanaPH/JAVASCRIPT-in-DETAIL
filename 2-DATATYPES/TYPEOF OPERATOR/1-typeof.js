// The typeOf operator is used to find the data type of a JavaScript variable. It returns a string indicating the type of provided operand’s value.

// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

typeof new Function() === "function";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";   // classes are functions as well
typeof Math.sin === "function";

// This stands since the beginning of JavaScript
typeof null === "object";

// Using typeof on lexical declarations (let, const, and class) in the same block before the place of declaration will throw a ReferenceError. 
// Because Block scoped variables are in a temporal dead zone from the start of the block until the initialization is processed, during which it will throw an error if accessed.
// Normally, using typeof on a non-existent and uninitialized variable does return "undefined" rather than throwing an error. However, with let, const, and class throws error due to the temporal dead zone (TDZ), 
typeof newLetVariable;   // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass;         // ReferenceError
let newLetVariable;
const newConstVariable = "hello";
class newClass {}
// After
typeof newLetVariable;   // "undefined" (declared but uninitialized)
typeof newConstVariable; // "string"
typeof newClass;         // "function"