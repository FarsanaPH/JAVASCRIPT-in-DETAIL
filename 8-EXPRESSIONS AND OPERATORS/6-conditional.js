//                                                       Conditional / Ternary Operator: 
// used for simple conditional checks.
// Shorthand for `if-else`.
// condition ? expr1 : expr2

// single case- (if ...else)
// let age = 20;
// let state = age >= 18 ? "Adult" : "Minor";
// console.log(state); // "Adult"

// multiple case-( if....else if...else )
// let age = 18;
// let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello!' : (age < 100) ? 'Greetings!' : 'What an unusual age!';
// console.log( message ); Greetings!

// ----------------------------------------------------------------------------------------------------------------------------------------------
//                                                        Nullish Coalescing Operator (??)
// 
// Used to return the right-hand operand when the left-hand operand is null or undefined. 
// It differs from the || operator, which returns the right-hand operand if the left is any falsy value.
// Syntax: expr1 ?? expr2.

// let user;
// console.log(user ?? "Guest"); // "Guest" (because `user` is `undefined`)

// user = null;
// console.log(user ?? "Guest"); // "Guest" (because `user` is `null`)

// user = "John";
// console.log(user ?? "Guest"); // "John" (because `user` is not `null` or `undefined`)

// -------------------------------------------------------------------------------------------------------------------------------------------
//                                                         Optional Chaining (?.)
// 
// Used to safely access deeply nested properties of an object without needing to check if each reference is valid.
// Will not throw error but returns undefined instead.
// Syntax: obj?.property, obj?.[expr], obj?.method().

// let user = {
//     name: "Alice",
//     address: {
//       street: "Main Street",
//       city: "Wonderland"
//     }
// };
// console.log(user?.name); // "Alice" (valid path)
// console.log(user?.address?.street); // "Main Street" (valid path)
// console.log(user?.contact?.phone); // `undefined` (no error, safely returns `undefined`)
// user = null;
// console.log(user?.name); // `undefined` (no error, `user` is `null`)
  