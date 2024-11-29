// do...while

// The do...while statements combo defines a code block to be executed atleast once, and repeated as long as a condition is true.
// NB: The do...while is used when you want to run a code statement at least one time because in do...while
// condition is evaluated only after executing the statement. Hence, the specified statement will execute at least once.
// IMP:
// If you use a variable in the condition, you must initialize it before the loop, and increment it within the loop. Otherwise the loop will never end. This will crash your browser.
// If the condition is always true, the loop will never end. This will also crash your browser.

// SYNTAX-
// do
//   statement
// while (condition);

// let i = 0;
// do {
//   i += 1;
//   console.log(i); // 1, 2, 3, 4, 5
// } while (i > 0 && i < 5);

// ---
// break stops statement execution and goes to the first statement after the loop.
// continue stops statement execution and re-evaluates condition.

// BREAK IN DO..WHILE
// NB:Break exits the entire do...while loop and excute next line after do...while
// let number = 1;
// do {
//   if (number === 5) {
//     console.log("Breaking the loop...");
//     break; // Exits the entire do...while loop when number is 5 and excute next line after do...while which logs "Loop has been broken."
//   }
//   console.log("Current number:", number);
//   number++;
// } while (number <= 7);
// console.log("Loop has been broken.");
// Logs-
// Current number: 1
// Current number: 2
// Current number: 3
// Current number: 4
// Current number: 5
// Breaking the loop...
// Loop has been broken.

// --
// CONTINUE IN DO..WHILE
// NB: Continue exits the lines after it in do loop and reach while loop to check condition.
// let number = 0;
// do {
//   number++;
//   if (number === 5) {
//     console.log("Exiting the do loop without prinitng current number 5...");
//     continue; // Exits the do loop when number is 5 without logging the next "Current number:" line and reach while loop to check condition 
//   }
//   console.log("Current number:", number);
// } while (number <= 7);
// console.log("Do..while loop ended.");
// Logs-
// Current number: 1
// Current number: 2
// Current number: 3
// Current number: 4
// Exiting the do loop without prinitng current number 5...
// Current number: 6
// Current number: 7
// Current number: 8
// Do..while loop ended.
// ---

