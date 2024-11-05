
// String is a primitive type that holds a sequence of characters.
// String in Javascript is written within a pair of single quotation marks '', double quotation marks "", or backticks `` (template literals).
// The String constructor provides methods to work with strings and values of other types can be converted to strings using the String() function.
// It mainly provides methods like String.prototype.includes(), String.prototype.indexOf(), etc., to manipulate and interact with strings.
// Some of the most-used operations on strings are 
// - to check their length,
// - to build and concatenate them using the + and += string operators,
// - checking for the existence or location of substrings with the indexOf() method,
// - or extracting substrings with the substring() method.
//-------------------------------------------------------------------------------------------------------
// CREATE STRING
// NB:Strings can be created either as primitives using string literals, or as objects using the String() constructor:
// const string1 = "A string primitive";          //Primitive String
// const string2 = 'Also a string primitive';     //Primitive String
// const string3 = `Yet another string primitive`; //Primitive String
// const string4 = new String("A String object");  ////String object

//-------------------------------------------------------------------------------------------------------------

// STRING CONSTRUCTOR---ie, String()
// NB:It creates string objects when called with constructor context( new keyword) and primitive values of type String when called as a function.

//-----------------------------------------------------------------------------------------------------------
// STRING PRIMITIVES AND STRING OBJECTS

// STRING PRIMITIVES-String literals (double or single quotes) and string functions (strings returned from calling string in  non-constructor context [without using the new keyword]) returns primitive string value.

// NB:String literals-
// const primitive="hello"; // A literal is a string primitive
// console.log(primitive);  //"hello"
// console.log(typeof primitive);   //"string"


// NB:String Function-The String function converts other types to strings:
// const primitiveString = String(123);  // Coerced into the string primitive "123"
// console.log(primitiveString); // "123"
// console.log(typeof primitiveString); // "string"


//-------
// STRING OBJECTS--String returned from calling strings in constructor context (using the new keyword) are string objects.

// const stringObj = new String("Hello");
// console.log(stringObj); // [String: 'Hello']
// console.log(typeof stringObj); // "object"

// CONVERT STRING OBJECT TO ITS PRIMITIVE VALUE 

// const stringObj = new String("Hello");
// console.log(stringObj); // [String: 'Hello']
// console.log(stringObj.valueOf());  // "hello"
// console.log(stringObj.toString()); // "hello"

//---
// const s1 = "2 + 2";    // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); //  returns number 4
// console.log(eval(s2)); // [String: '2 + 2']
// console.log(eval(s2.valueOf())); // returns the number 4
// console.log(eval(s2.toString())); // returns the number 4

//---------------------------------------------------------------------------------------------------------------------------------------
//COMPARE STRINGS

// const a = "a";
// const b = "b";
// if (a < b) {      //based on alphabetic order
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

//----------
// NB:Comparison operators === and ==  compare strings case-sensitively. so convert to upper or lower case before comparing
// const str1 = "Hello";
// const str2 = "hello";
// console.log(str1 === str2); // false (case-sensitive comparison)
// console.log(str1.toLowerCase() === str2.toLowerCase()); // true (case-insensitive comparison)
// console.log(str1.toUpperCase() === str2.toUpperCase()); // true (case-insensitive comparison)

//-----------
// NB:The localeCompare method in JavaScript is used to compare two strings in a locale-sensitive manner(e.g., taking into account accents, case sensitivity, or the alphabet order in different languages)
// It returns a number indicating whether the reference string comes before, after, or is the same as the compared string in sort order. 

// const str1 = "Hello";
// const str2 = "hello";
// console.log(str1.localeCompare(str2)); // 1 (str1 comes after str2)
// console.log(str1.localeCompare(str2, 'en', { sensitivity: 'base' })); // 0 (case-insensitive comparison using localeCompare)


//---------------------------------------------------------------------------------------------------------------
// STRING COERCION- Implicit conversion of a non string value to a string.
//                  This happens when the JavaScript engine expects a string, such as when performing string concatenation or when a non-string value is used in a context where a string is expected.

// Implicit Coercion happens automatically when JavaScript engine expects a string.(In stringconcatination and template literals)
// Explicit Coercion(conversion) happens when you manually convert a value to a string (using the String function or similar methods)


// Examples of String Coercion

// String Concatenation:[IMPLICIT]--not prefered to show string coercion as -- "" + x coerces its operand to a primitive instead of a string, and, for some objects, has entirely different behaviors from normal string coercion)
// let number = 42;
// let result = "The answer is " + number;
// console.log(result); // "The answer is 42"


// Template Literals: [IMPLICIT]
// let bool = true;
// let result = `The value is ${bool}`;
// console.log(result); // "The value is true"

// Using the String Function: [EXPLICIT]
// const primitiveString = String(123);  // Coerced into the string primitive "123"
// console.log(primitiveString); // "123"
// console.log(typeof primitiveString); // "string"
//---another example
// let obj = { name: "Farsana" };
// let result = String(obj);    // Tries to convert to string by calling internal methods (object's toString() method) inherited from Object.prototype.
// console.log(result);         // "[object Object]"------object converted to string but not in exact form
// console.log(typeof result);  // " string"
//--
// let obj = { value: "10" };
// let result = String(obj.value); // The string value inside the object is explicitly converted to the string 10
// console.log(result);            // 10
// console.log(typeof result);     // "string"
//----

// STRING COERCION using STRING FUNCTION[explicit]: LEARN HOW TO CONVERT DIFFERENT DATATYPES TO STRING
// On operations-
// Strings are returned as-is.
// let str = "Hello";
// console.log(String(str));  // "Hello"

// undefined turns into "undefined".
// let undef;
// console.log(String(undef));  // "undefined"

// null turns into "null".
// let nothing = null;
// console.log(String(nothing));  // "null"

// true turns into "true"; false turns into "false".
// console.log(String(true));   // "true"
// console.log(String(false));  // "false"

// Numbers are converted with the same algorithm as toString(10).
// let num = 123;
// console.log(String(num));  // "123"

// BigInts are converted with the same algorithm as toString(10).
// let bigInt = 12345678901234567890n;
// console.log(String(bigInt));  // "12345678901234567890"


// Symbols throw a TypeError.
// let sym = Symbol("mySymbol");
// try {
//   console.log(String(sym));  // TypeError: Cannot convert a Symbol value to a string
// } catch (e) {
//   console.log(e);  // Will log the error
// }

//---
// Objects are first converted to a primitive by calling its [Symbol.toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.

// Example without [Symbol.toPrimitive] or custom methods:
// let obj = { name: "Farsana" };
// let strObj = String(obj);  // Tries to convert to string by calling internal methods (object's toString() method) inherited from Object.prototype
// console.log(strObj);  // "[object Object]"-----converted to string but not exact form of object
// console.log(typeof strObj);  // "string"


// NB: Symbol.toPrimitive: If this method exists, it’s the first method called. 
// It has the highest priority and can be customized for different types of conversions (like string, number).
// const obj = {
//     name: "Alice",
//     age: 25,
//     [Symbol.toPrimitive](hint) {
//         if (hint === 'string') {
//             return `Alice is ${this.age} years old`;
//         }
//         return null;
//     }
// };
// const result = String(obj);
// console.log(result);        // Output: "Alice is 25 years old"-------------by converting first to primitive then to string output appeared as this, otherwise wil appear as  "[object Object]"
// console.log(typeof result); // Output: "string"


// NB: toString(): If Symbol.toPrimitive is not available or doesn't produce a primitive, JavaScript then calls the toString() method, which should return a string representation of the object.
// let obj = { name: "Farsana" };
// console.log(String(obj));  // "[object Object]"-----------with string function (By default, when you call String(obj) on an object that doesn't have a custom toString() or valueOf() method, JavaScript uses the built-in toString() method. This typically returns the string "[object Object]".)
//
// let objCustom = {
//   name: "Farsana",
//   toString() {
//     return `Person: ${this.name}`;
//   }
// };
// console.log(String(objCustom));  // "Person: Farsana"---------- With custom `toString()` method



// NB: valueOf(): If toString() doesn't return a primitive, JavaScript tries valueOf(), which usually returns a number or another primitive type.
// let obj = { name: "Farsana" };
// console.log(String(obj));  // "[object Object]"-----------with string function
//
//   let objCustom = {
//     name: "Farsana",
//     valueOf() {
//       return `Person: ${this.name}`;
//     }
//   };
//   console.log(String(objCustom));  // "Person: Farsana"  -----------with Custom `valueOf()` method


//--------------------------------------------------------------------------------------------------------------------------------
// toString() METHOD instead of String() function for STRING COERCION(not preferable)

// NB: The String() function is a more reliable way of converting values to strings than calling the toString() method of the value, as toString() method does not works  on null and undefined. 
// const nullVar = null;
// nullVar.toString(); // TypeError: Cannot read properties of null
// String(nullVar); // "null"
//---
// const undefinedVar = undefined;
// undefinedVar.toString(); // TypeError: Cannot read properties of undefined
// String(undefinedVar); // "undefined"

//---------------------------------------------------------------------------------------------------------------------------------

//  STRING STATIC  METHODS -Static methods are functions that belong to the class itself rather than any instance of the class.So, they are called on the class name(here String) itself.

// -String.fromCharCode()
// This method creates a string by using the specified sequence of Unicode values (which represent characters).
// console.log(String.fromCharCode(65, 66, 67)); // "ABC"

// -String.fromCodePoint()
// Similar to fromCharCode, but it works with code points, which can represent characters from a broader range of Unicode characters, including those outside the Basic Multilingual Plane (BMP).
// console.log(String.fromCodePoint(9731, 9733, 9734)); // "☃★☆"

// -String.raw()
// This method returns a string created from a raw template string. It doesn't process escape sequences (like \n for a newline) and instead returns the string as it was written.
// let rawString = String.raw`Hello\nWorld`;
// console.log(rawString); // "Hello\nWorld"

// ----------------------------------------------------------------------------------------------------------------------------------

// NB:"String instances have their own properties, such as length, and inherited methods like slice() and charAt() from String.prototype."

// INSTANCE PROPERTIES- Instance properties are defined in the constructor of the class
// 1-length- Returns the number of characters in the string.
// const str = "Hello, World!";
// console.log(str.length);  // 13

//---
// INSTANCE METHODS- Instance methods are defined within the class, and they are invoked on instances of the class.
//NB: The String object includes many methods for string operations
//They are instance methods-means they work with the specific string instance on which they are called.You can call these methods directly on a string value or string variable. For example, "Hello".toUpperCase() will return "HELLO".

// 3 - String.prototype.at()
// Returns the character at a specific index, allowing negative indices to count back from the end.
// const str1 = "Hello";
// console.log(str1.at(1)); // "e"
// console.log(str1.at(-1)); // "o"

// 4 - String.prototype.charAt()
// Returns the character at a specific index.
// const str1 = "Hello";
// console.log(str1.charAt(1)); // "e"

// 5 - String.prototype.charCodeAt()
// Returns the UTF-16 code unit value at a specific index.
// const str1 = "Hello";
// console.log(str1.charCodeAt(0)); // 72 (H)

// 6 - String.prototype.codePointAt()
// Returns the Unicode code point value at a specific index.
// const str1 = "Hello";
// console.log(str1.codePointAt(0)); // 72 (H)

// 7 - String.prototype.concat()
// Combines two or more strings into a new string.
// const str1 = "Hello";
// console.log(str1.concat(" World")); // "Hello World"

// 8 - String.prototype.endsWith()
// Checks if a string ends with a specified substring.
// const str1 = "Hello";
// console.log(str1.endsWith("lo")); // true

// 9 - String.prototype.includes()
// Checks if a string contains a specified substring.
// const str1 = "Hello";
// console.log(str1.includes("ell")); // true

// 10 - String.prototype.indexOf()
// Returns the index of the first occurrence of a specified substring.
// const str1 = "Hello";
// console.log(str1.indexOf("l")); // 2

// 11 - String.prototype.lastIndexOf()
// Returns the index of the last occurrence of a specified substring.
// const str1 = "Hello";
// console.log(str1.lastIndexOf("l")); // 3

// 12 - String.prototype.localeCompare()
// Compares two strings in a locale-sensitive manner.
// const str1 = "apple";
// console.log(str1.localeCompare("banana")); // -1 (apple comes before banana)

// 13 - String.prototype.match()
// Matches a string against a regular expression.
// const str1 = "Hello";
// console.log(str1.match(/l+/g)); // ["l", "l"]

// another example:
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;  //match all occurences of capital letters
// const found = paragraph.match(regex);
// console.log(found); // ["T", "I"]


// 14 - String.prototype.normalize()
// Returns the Unicode Normalization Form of a string.
// const str1 = "é";
// console.log(str1.normalize("NFC")); // "é"

// 15 - String.prototype.padEnd()
// Pads the end of a string with a specified string to a given length.
// const str1 = "Hi";
// console.log(str1.padEnd(5, "!")); // "Hi!!!"

// 16 - String.prototype.padStart()
// Pads the start of a string with a specified string to a given length.
// const str1 = "Hi";
// console.log(str1.padStart(5, "!")); // "!!!Hi"
// another example:
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);  // "************5581"

// 17 - String.prototype.repeat()
// Returns a string repeated a specified number of times.
// const str1 = "Hi";
// console.log(str1.repeat(3)); // "HiHiHi"

// 18 - String.prototype.replace()
// Replaces occurrences of a substring with another substring.
// const str1 = "Hello World";
// console.log(str1.replace("World", "JavaScript")); // "Hello JavaScript"

// another example:
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replace("Ruth's", 'my'));//"I think my dog is cuter than your dog!"

// const regex = /Dog/i;          //i means case insensitive
// console.log(paragraph.replace(regex, 'ferret'));//"I think Ruth's ferret is cuter than your dog!"

// const regexs = /Dog/gi;       //g means global and i means case insensitive
// console.log(paragraph.replace(regexs, 'ferret'));//"I think Ruth's ferret is cuter than your ferret!"

//----
// 19 - String.prototype.replaceAll()
// Replaces all occurrences of a substring with another substring.
// const str1 = "Hello World World";
// console.log(str1.replaceAll("World", "JavaScript")); // "Hello JavaScript JavaScript"

// 20 - String.prototype.search()
// Searches a string for a match against a regular expression.
// const str1 = "Hello World";
// console.log(str1.search(/World/)); // 6

// 21 - String.prototype.slice()
// Extracts a section of a string and returns it.
// const str1 = "Hello";
// console.log(str1.slice(1, 4)); // "ell"

// 22 - String.prototype.split()
// Splits a string into an array of substrings.
// const str1 = "Hello";
// console.log(str1.split("l")); // ["He", "lo"]

// 23 - String.prototype.startsWith()
// Checks if a string starts with a specified substring.
// const str1 = "Hello";
// console.log(str1.startsWith("Hel")); // true

// 24 - String.prototype.substr() (Deprecated)
// Returns a portion of the string starting at a specified index.
// const str1 = "Hello";
// console.log(str1.substr(1, 2)); // "el"

// 25 - String.prototype.substring()
// Returns a substring between specified indices.
// const str1 = "Hello";
// console.log(str1.substring(1, 4)); // "ell"

// 26 - String.prototype.toLowerCase()
// Converts a string to lowercase.
// const str1 = "Hello";
// console.log(str1.toLowerCase()); // "hello"

// 27 - String.prototype.toUpperCase()
// Converts a string to uppercase.
// const str1 = "Hello";
// console.log(str1.toUpperCase()); // "HELLO"

// 28 - String.prototype.trim()
// Removes whitespace from both ends of a string.
// const str1 = "  Hello  ";
// console.log(str1.trim()); // "Hello"

// 29 - String.prototype.valueOf()
// Returns the primitive value of a string object.
// const str1 = "Hello";
// console.log(str1.valueOf()); // "Hello"
// const str1 = "123";
// console.log(str1.valueOf()); // "123"----------string itself (NB:returns the primitive string not number)

// 30 - String.prototype[Symbol.iterator]
// Returns an iterator for the string’s code points.
// const str1 = "Hello";
// for (const char of str1) {
//   console.log(char); // Logs each character line by line: "H", "e", "l", "l", "o"
// }

//--------------------------------------------