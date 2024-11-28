// Loops offer a quick and easy way to  to repeat an action repeatedly until some condition is being met.
// There are many different kinds of loops-
// for	        Loops a code block while a condition is true	
// do...while	Loops a code block once, and then while a condition is true	
// while	    Loops a code block while a condition is true	
// break	    Breaks out of a loop	
// continue	Skips a value in a loop	
// (label statement)
// for...of	Loops the values of any iterable	
// for...in	Loops the properties of an object

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// for loop

// The for loop is meant to repeatedly execute a piece of code a known number of times.
// SYNTAX-
// for (initialization; condition; update)
//     statement;
// 
// NB:Loop is executed after evaluating condition...After the execution updation occurs.
// for (var i = 0; i < 5; i++) {
//     console.log(i);
//  }

// -----------
// ITERATE OVER ARRAY-
// var nums = [1, 10, 5, -9, -1];
// for (var i = 0; i < nums.length; i++) {
//    console.log(i+':'+nums[i]);  // 0:1, 1:10, 2:5, 3:-9, 4:-1
// }
// OR
// var nums = [1, 10, 5, -9, -1];
// for (var i = 0, len = nums.length; i < len; i++) {
//    console.log('nums[' + i + ']: ' + nums[i]);
// }

// -----------
// NESTED LOOP
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//        console.log(`(${i}, ${j})`);
//     }
// }
// Logs-
// (0, 0)
// (0, 1)
// (0, 2)
// (1, 0)
// (1, 1)
// (1, 2)
// (2, 0)
// (2, 1)
// (2, 2)
// ------------
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//        console.log(`(${j}, ${i})`);
//     }
// }
// Logs-
// (0, 0)
// (1, 0)
// (2, 0)
// (0, 1)
// (1, 1)
// (2, 1)
// (0, 2)
// (1, 2)
// (2, 2)

// ------------
// COMMA FOR DOUBLE DECLARATION AND UPDATION
// NB:Can use comma operator for multiple let and var declarations; also can create two counters that are updated simultaneously.
// const arr = [1, 2, 3, 4, 5, 6];
// for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
//   console.log(arr[l], arr[r]);
// }
// Logs-
// 1 6
// 2 5
// 3 4

// ------------
// BREAK IN FOR
// NB:break serves to terminate execution out of the loop that it is placed within.
// but it applies only to loops, not to conditional blocks like if and else if etc.
// If placed with a label it will terminate execution of the specified label statement.

// var nums = [1, 11, 3, 2, 5];
// for (var i = 0; i < nums.length; i++) {
//    if (nums[i] % 2 === 0) {
//       break;
//    }
//    console.log(nums[i]);     // 1, 11, 3
// }
// OR
// var nums = [1, 11, 3, 2, 5];
// for (var i = 0; i < nums.length && nums[i] % 2 !== 0; i++) {
//    console.log(nums[i]);    //  // 1, 11, 3
// }
// --
// for (var i = 0; i < 5; i++) {
//     if (i === 2) {
//        break;
//     }
//     console.log(i);    // 0, 1
// }
// --
// for (var i = 0; i < 5; i++) {
//     console.log(i);       // 0, 1, 2
//     if (i === 2) {
//        break;
//     }
// }
// --
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === theValue) {
//       break;
//     }
// }
// --
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

// -------------------------
// CONTINUE IN FOR
// The continue keyword serves to skip the current iteration(not loop) and move to the next iteration.
// In a for loop, continue jumps to the update-expression.
// var nums = [1, 11, 3, 2, 5];
// for (var i = 0; i < nums.length; i++) {
//    if (nums[i] % 2 === 0) {
//       continue;
//    }
//    console.log(nums[i]);  // 1, 11, 3, 5
// }

// --------------------------
// RETURN KEYWORD IN FOR-
// NB:
// 1-It returns a value to the calling context, i.e. the place where the function was called.
// 2-It breaks execution out of the function when first return is reached from  many return's in the function.  It means that no matter how many loops are nested together, return would exit them all and the containing function as well.
// function search(arr, value) {
//     for (var i = 0; i < arr.length; i++) {
//        if (arr[i] === value) {
//           return i;
//        }
//     }
//     return -1;
// }
// var nums = [1, 2, 3];
// console.log(search(nums, 1));      //0
// console.log(search(nums, 3));      //2
// console.log(search(nums, 30));     //-1