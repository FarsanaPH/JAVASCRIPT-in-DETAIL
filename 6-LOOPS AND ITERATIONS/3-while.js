// while loop

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
// NB: The condition is evaluated before executing the statement.
// IMP:
// If you use a variable in the condition, you must initialize it before the loop, and increment it within the loop. Otherwise the loop will never end. This will crash your browser.
// If the condition is always true, the loop will never end. This will also crash your browser. 


// SYNTAX-
// while (condition)
//     statement

// let n = 0;
// while (n < 3) {
//   n++;
// }
// console.log(n); // 3

// ------------------
// BREAK - break stops statement execution and goes to the first statement after the loop.
// let number = 1;
// while (number <= 10) {
//   console.log("Current number:", number);
//   if (number === 5) {
//     console.log("Breaking the loop...");
//     break; // Exits the loop when number is 5
//   }
//   number++;
// }
// console.log("Loop has been broken.");
// Logs-
// Current number: 1
// Current number: 2
// Current number: 3
// Current number: 4
// Current number: 5
// Breaking the loop...
// Loop has been broken.

// CONTINUE-continue stops statement execution and re-evaluates condition.
// let number = 1;
// while (number <= 10) {
//   if (number === 5) {
//     console.log("Skipping number 5...");
//     number++; // Increment to avoid an infinite loop
//     continue; // Skips the rest of the loop when number is 5
//   }
//   console.log("Current number:", number);
//   number++;
// }
// console.log("Loop has completed.");
// Logs-
// Current number: 1
// Current number: 2
// Current number: 3
// Current number: 4
// Skipping number 5...
// Current number: 6
// Current number: 7
// Current number: 8
// Current number: 9
// Current number: 10
// Loop has completed.