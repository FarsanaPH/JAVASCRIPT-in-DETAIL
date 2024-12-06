// Sometimes, we need to perform different actions based on different conditions; for that we need conditional statements. 
// In JavaScript, we have three conditional statements: 
// 1-if
// 2-if...else
// 3-switch

// -------------------------------------------------------------------------------------------------------
// if statement and  conditional operator ?

// if statement-
// SYNTAX-
// if (condition) {
//     statement;
// }

// case: one statement
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) console.log( 'You are right!' );

// case: more than one statement
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) {
// console.log( 'You are right!' );
// console.log('You are samrt');
// }

// --
// Using if conditionals as boolean

// let cheese = "Cheddar";
// if (cheese) {
//   console.log("Yay! Cheese available for making cheese on toast.");
// } else {
//   console.log("No cheese on toast for you today.");
// }

// let shoppingDone = true;
// if (shoppingDone) {
//   console.log("Yay! Out of the shop");
// } else {
//   console.log("Stay on shop!");
// }

// ------------------------------------------
// conditional operator ? 

// SYNTAX-
// let result = condition ? value1 : value2;

// single case- ( if....else)
// let age = 20; // Example age
// let access = age > 18 ? "allowed" : "not allowed";
// console.log(access); //"allowed"

// multiple case-( if....else if...else )
// let age = 18;
// let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello!' : (age < 100) ? 'Greetings!' : 'What an unusual age!';
// console.log( message );

// Non-traditional use of ?
// don’t assign a result to a variable here; instead logs it directly.
// let age = 18;
// (age < 18) ? console.log('Hi, baby!') : console.log("Hi, adult!");

// ------------------------------------------------------------------------------------------------------------------------------------
