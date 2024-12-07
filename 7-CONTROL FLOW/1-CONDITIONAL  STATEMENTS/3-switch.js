// switch 

// switch statements shine when you have a single variable to compare against multiple distinct values.
// The switch statement evaluates an expression, matching the expression’s value against a series of case clauses, 
// and executes statements after the first case clause with a matching value, until a break statement is encountered. 
// The default clause of a switch statement will be jumped to if no case matches the expression’s value.
// NB:Used when need to test the same thing for different values(of same type), and want to perform different actions on each outcome.
// ie, A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.
// Type of expression and values matters in switch.

// SYNTAX-
// switch (expression) {
//     case value1:
//        statements;
//     case value2:
//        statements;
//     ... 
//     case valueN:
//        statements;
//     default:
//        statements;
// }


// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':      // its a case of taking advantage of fall-through where each mangoes and papayas will give output "Mangoes and papayas are $2.79 a pound."
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');   // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
//NB:default clause is the last clause executed in a switch statement, even if it's mentioned at the start of a switch statement.

// Type matters-
// switch statement uses strict comparison (===) to match case values ie,
// The type of expression and value must be equal.
// const x = "5"; // x is a string
// switch (x) {
//   case 5:
//     console.log("Matched number 5");
//     break;
//   case 6:
//     console.log("Matched number 6");
//     break;
//   default:
//     console.log("No match");
// }
// Logs-
// No match -----as 5 is a string in expression.


// Understand breaking and fall-through-
// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0:                  // Value of foo matches this criteria; execution starts from here
//     console.log(0);        // Forgotten break! Execution falls through
//   case 1:                  // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break;                 // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// Logs-
// 0 and 1

// Taking advantage of fall-through-
// eg:single operation sequential case statement, where four different values perform exactly the same.
// const Animal = "Giraffe";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe":
//   case "Dog":
//   case "Pig":
//     console.log("This animal is not extinct.");
//     break;
//   case "Dinosaur":
//   default:
//     console.log("This animal is extinct.");
// }
// --
// OR
// var char = 'a';
// switch (char) {
//    case 'a':
//    case 'e':
//    case 'i':
//    case 'o':
//    case 'u':
//       console.log('Vowel');
//       break;
//    default:
//       console.log('Consonant');
// }


// Understand Deeply-
// const foo = 1;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }
// The output will be following-
// For Value	                                              Log
// NaN or not 0, 1, 2, 3, 4, 5	               Please pick a number from 0 to 5!
// 0	                                        Output: So What Is Your Name?
// 1	                                        Output: What Is Your Name?
// 2	                                        Output: Your Name?
// 3	                                        Output: Name?
// 4	                                        Output: ?
// 5	                                        Output: !


// switch statement isn't just limited to break; we can do exact same thing using return ,
// but make sure that it's used only inside a function.
// NB:Using return outside a function is illegal!
//    Precisely,return not just breaks execution out of switch but also out of the entire enclosing function.
// function getRatingDescription(rating) {
//     switch (rating) {
//        case 1:
//           return 'Very bad';
//        case 2:
//           return 'Bad';
//        case 3:
//           return 'Average';
//        case 4:
//           return 'Good';
//        case 5:
//           return 'Excellent';
//     }
//  }
//  var rating = 1;
//  console.log(getRatingDescription(rating));  // Very bad