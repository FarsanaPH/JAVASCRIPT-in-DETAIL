                                                                // String Operators

// Perform operations like concatenation with +.
// Used for string manipulation.

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + " " + str2); // "Hello World" (concatenation)
// str1 += " there!";
// console.log(str1); // "Hello there!"

// ----------------------------------------------------------------------------------------------------------------------------------------
                                                                  // Unary Operators
                                                     
// Operate on a single operand.
// include operations like (typeof, + , - ,  ++, --)

// 1-Unary Plus (+): Converts its operand to a number (if it isn’t already).
// Example:
// let str = "5";
// console.log(+str); // 5 (string converted to number)

// 2-Unary Negation (-): Converts its operand to a number and negates it.
// Example:
// let num = 3;
// console.log(-num); // -3

// 3-Increment (++):Increases the value of its operand by 1.
// Can be used in prefix or postfix form:
// Example:
// let a = 5;
// console.log(++a); // 6 (prefix: increments, then returns)
// console.log(a++); // 6 (postfix: returns, then increments)
// console.log(a);   // 7 (after the previous statement)
// ---
// let counter = 1;
// let a = ++counter; // (prefix: increments, then returns) 
// console.log(a); // 2
// ---
// let counter = 1;
// let a = counter++; // 6 (postfix: returns, then increments)
// console.log(a); // 1
// ---
// NB: If the result of increment/decrement is not used, there is no difference in which form to use:
// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same

// 4-Decrement (--):Decreases the value of its operand by 1.
// Also has prefix and postfix forms:
// Example:
// let b = 5;
// console.log(--b); // 4 (prefix: decrements, then returns)
// console.log(b--); // 4 (postfix: returns, then decrements)
// console.log(b);   // 3 (after the previous statement)

// 5- typeof Operator :The typeof operator returns a string indicating the type of the unevaluated operand. 
// const myFun = new Function("5 + 2");
// const shape = "round";
// const size = 1;
// const foo = ["Apple", "Mango", "Orange"];
// const today = new Date();
// typeof myFun; // returns "function"
// typeof shape; // returns "string"
// typeof size; // returns "number"
// typeof foo; // returns "object"
// typeof today; // returns "object"
// typeof doesntExist; // returns "undefined"


// ------------------------------------------------------------------------------------------------------------------------------------------
                                                            // Comma Operator:

// Evaluates both of its operands and returns the value of the last operand.
// This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. 
// It is regarded bad style to use it elsewhere, when it is not necessary.

// let result = (1 + 2, 3 + 4);
// console.log(result); // 7 (the last expression)
// -----
// let a=[];
// for (let i = 0, j = 9; i <= j; i++, j--) {
//   a[i] = [];
//   console.log(`a[${i}][${j}]= ${a[i][j]}`);
// }

