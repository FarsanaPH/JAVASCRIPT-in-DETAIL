// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, or classes to the top of their scope, prior to execution of the code.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Declarations are hoisted:initialization not

//------------UNDERSTAND
// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
//  eg-----function, function*, async function, and async function* declarations,(import declarations ).
// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
//  eg----var declaration
// The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
//  eg----let, const, and class declarations (also collectively called lexical declarations)--let, const, and class declaration often considered as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration.
// The side effects of a declaration are produced before evaluating the rest of the code that contains it.
//  eg----- import declarations 

//-----------------------------------------------------------------------------

// NB: Not a form of hoisting.There's no "access before declaration" here; it's simply because var declarations are not scoped to blocks.
//   {
//     var x = 1;
//   }
//   console.log(x); // 1

// ------------------------------------------------------------------------------------
// NB:Function hoisting

// console.log(square(5)); // 25
// function square(n) {
//   return n * n;
// }

//-------
// CASE-Function expressions, however are not hoisted.

// expression();                  //Output: "TypeError: expression is not a function
// var expression = function(){
//   console.log('Will this work?');
// };
//OR
// expression();                  //Output: "TypeError: expression is not a function
// var expression = () => {
//   console.log('Will this work?');
// };

// As we can see above, the variable declaration ie, var expression is hoisted but it’s assignment to a function is not. Therefore, the intepreter throws a TypeError since it sees expression as a variable and not a function.

// // -------------------------------------------------------------------------------------------
// NB: var hoisting

// console.log(x === undefined); // true
// var x = 3;
// (function () {
//   console.log(x); // undefined
//   var x = "local value";
// })();

// The above examples will be interpreted the same as:

// var x;
// console.log(x === undefined); // true
// x = 3;

// (function () {
//   var x;
//   console.log(x); // undefined
//   x = "local value";
// })();

// --------------------------------------------------------------------------------------------
//NB: let,const and class hoisting--- hoisted with  TDZ restriction

// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }

//-------------
// NB:class hoisting (class declarations are not hoisted (or, in some interpretations, hoisted but with the temporal dead zone restriction))

// new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
// class MyClass {}

// -----------------------------------------------------------------------------------------------
// NB:import hoisting--imported values are available in the module's code even before the place that declares them
//  …
// const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
// myCanvas.create();
// import { Canvas } from "./modules/canvas.js";
// myCanvas.createReportList();
// …

// The above examples will be interpreted the same as:
//  …
// import { Canvas } from "./modules/canvas.js";
// const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
// myCanvas.create();
// myCanvas.createReportList();
// …