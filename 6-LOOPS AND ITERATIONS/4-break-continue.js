// break/continue 

// break statement, without a label reference, can only be used to jump out of a loop or a switch block.
// continue statement, with or without a label reference, can only be used to skip one loop iteration.
// NB: break and continue applies only to loops, not to conditional blocks like if,else if etc.

// -------------
// BREAK-
// let text = '';
// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   text = text + i;
// }
// console.log(text); //"012"

// BREAK IN FOR-
// NB:break serves to terminate execution out of the loop that it is placed within but applies only to loops, not to conditional blocks like if , else if etc.
// If placed with a label it will terminate execution of the specified label statement.
// var nums = [1, 11, 3, 2, 5];
// for (var i = 0; i < nums.length; i++) {
//    if (nums[i] % 2 === 0) {
//       break;
//    }
//    console.log(nums[i]);     // 1, 11, 3
// }

// BREAK WITH LABEL-
// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {     //named label labelCancelLoops
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;     // terminate upto labelCancelLoops label
//     } else if (z === 10) {
//       break;                      // break applies to loops, not conditional blocks.So 'else if' is not terminated; upto while (true) is terminated.
//     }
//   }
// }
// --another
// outerBlock: {
//     innerBlock: {
//       console.log("1");
//       break outerBlock; // breaks out of both innerBlock and outerBlock
//       console.log(":-("); // skipped
//     }
//     console.log("2"); // skipped
// }

// BREAK IN DO..WHILE-
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

// BREAK IN WHILE-
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

// BREAK IN SWITCH-
// const food = "sushi";
// switch (food) {
//   case "sushi":
//     console.log("Sushi is originally from Japan.");
//     break;
//   case "pizza":
//     console.log("Pizza is originally from Italy.");
//     break;
//   default:
//     console.log("I have never heard of that dish.");
//     break;
// }

// ------------------------------------------------------------------------------------------------------------------
// CONTINUE 

// In a while or do...while loop, it jumps back to the condition. (don't forget to update before continue; otherwise will lead to infinite loop)
// In a for loop, it jumps to the update expression.
// In a for...in, for...of, or for await...of loop, it jumps to the next iteration.

// let text = '';
// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text = text + i;
// }
// console.log(text); //"01245"  ----3 skipped

// CONTINUE IN FOR-
// The continue keyword serves to skip the current iteration(not loop) and move to the next iteration.
// In a for loop, continue jumps to the update-expression.
// var nums = [1, 11, 3, 2, 5];
// for (var i = 0; i < nums.length; i++) {
//    if (nums[i] % 2 === 0) {
//       continue;
//    }
//    console.log(nums[i]);  // 1, 11, 3, 5
// }

// CONTINUE WITH LABEL-
// let i = 0;
// let j = 8;
// checkIAndJ: while (i < 4) {
//   console.log(`i: ${i}`);
//   i += 1;
//   while (j > 4) {
//     console.log(`j: ${j}`);
//     j -= 1;
//     if (j % 2 === 0) continue checkIAndJ; // on continue it will move to checkIAndJ instead of while loop.
//     console.log(`${j} is odd.`);
//   }
//   console.log(`i = ${i}`);
//   console.log(`j = ${j}`);
// }

// CONTINUE IN DO..WHILE-
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

// CONTINUE IN WHILE-
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


