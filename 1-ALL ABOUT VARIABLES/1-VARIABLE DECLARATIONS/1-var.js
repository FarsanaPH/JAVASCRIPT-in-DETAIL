
//VAR HAS FUNCTION SCOPE OR GLOBAL SCOPE
// scope of a variable declared with var is one of the following curly-brace-enclosed syntaxes that most closely contains the var statement:
// ie, Function body AND Static initialization block
// HOISTING- Executing all var declaration statements before any other statement in JavaScript is referred to as variable hoisting.ie,VARIABLES CAN BE USED BEFORE THEIR DECLARATIONS (IF INITIALIZED)
// var doest not has temporal dead zone(TDZ)
// var has lexical scoping, hence it has function scope (let and const also has)
//---------------------

// var myName;
// function logName() {
//   console.log(myName); //undefined
// }
// logName();

//-------------------------------------------------

// myName = "Chris";
// function logName() {
//   console.log(myName); //chris(-hoisting)
// }
// logName();
// var myName;  //implicitly var=name; in top dut to hoisting

//-----------------------------------------------
//NB:Even if var,let,const is not used; this also produce output chris as it become unidentified global variable  but preferred to use var,let const decalarations

// myName = "Chris";
// function logName() {
//   console.log(myName); //chris(global scope)
// }
// logName();

//----------------------------------------------
// NB: var declarations are hoisted to the top of their scope and initialized with undefined.

// function doSomething() {
//     console.log(bar); // undefined
//     var bar = 111;
//     console.log(bar); // 111
//   }
//  doSomething();

//NB:This is implicitly understood as:

// function doSomething() {
//   var bar;
//   console.log(bar); // undefined  ------NB: here, console.log(typeof bar === 'undefined'); consoles 'true'
//   bar = 111;
//   console.log(bar); // 111
// }
// doSomething();

//------------------------------------------

//NB:Even if var,let,const is not used; this also produced output 111 in non-strict mode as it become unidentified global variable
//  function doSomething() {
//     console.log(bar); // reference error-bar not defined----NB:use /console.log(typeof bar === 'undefined'); consoles 'true'/  to prevent stop execution on throwing error but keep in mind it also consoles true for declared variables without initialization.
//     bar = 111;
//     console.log(bar); // 111
//   }
//  doSomething();


//----------------------UNDERSTAND
// var declarations are hoisted to the top of their scope and initialized with undefined.
// let declarations are also hoisted, but they are not initialized. They remain in a "Temporal Dead Zone" (TDZ) until the declaration is reached in the code.

// CASE var---
// function logName() {
//   console.log(myName); //undefined
//   myName = "Chris";
//   console.log(myName); // chris
// }
// logName();
// var myName;  //implicitly var=name in top dut to hoisting


//CASE let---
// function logName() {
//   console.log(myName); //reference error
//   myName = "Chris";
//   console.log(myName); // reference error
// }
// logName();
// let myName;  //hoisted but in TDZ, till code reach here


//----------------------------------------------
// var x = 1;
// if (x === 1) {
//   var x = 2;
//   console.log(x);
//   // Expected output: 2
// }
// console.log(x);
// // Expected output: 2

//------------------------------------------------
// var x=1;
// {
//     var x=2;
//     console.log(x);// 2
    
// }
// console.log(x); //2

//------------------------------------------------

//NB:VAR HAS FUNCTION SCOPE----the concept of lexical scoping is used here 
//NB: LEXICAL OR STATIC SCOPING- a function's scope is determined by where the function is written in the code, not by where it is called
//    ie,a function has access to variables defined in its own scope and from all outer (parent) scopes.

// function outer() {
//     var x = 10;  // Variable defined in the outer function

//     function inner() {
//         console.log(x);  //10- Access variable from outer function
//     }
//     inner();
//     console.log(x); //10  
// }
// outer();  
//------

// var dog = 'snickers';
// function logDog() {
//   console.log(dog);
// }
// function go() {
//   var dog = 'sunny';
//   logDog();  //snickers---(a function's scope is determined by where the function is written in the code, not by where it is called)
// }
// go();

//---------
// function foo() {
//   var x = 1;
//   function bar() {
//     var y = 2;
//     console.log(x); // 1 (function `bar` closes over `x`)
//     console.log(y); // 2 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 1 (`x` is in scope)
//   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }
// foo();

//--------

// let outside=2;
// function outerFunction(a, b) {  // 'a' and 'b' are parameters, part of the outerfunction's own scope
//     let localVariable = 10;       // 'localVariable' is a local variable, part of the outerfunction's own scope

//     function innerFunction() {    // This function has its own local scope
//         let innerVariable = 20;   // 'innerVariable' is local to 'innerFunction', not part of 'outerFunction's own scope
//         console.log(a);           // 5----'a' is accessible here, as 'innerFunction' can access the scope of 'outerFunction'
//         console.log(outside);     // 2-----'outside' is accesible here, as innerfunction can access from outer(parent) scope
        
//     }

//     console.log(localVariable);    //10---- Accessing 'localVariable' within 'outerFunction's own scope
//     innerFunction();               // Calling 'innerFunction', which can access 'outerFunction's scope
// }
// exampleFunction(5, 15);

//----------------------------------------------------------------------------------
//NB:HOISTED DECLARATION-GLOBAL SCOPE
// function foo() {
//     x=1; 
//     function bar() {
//       var y = 2;
//       console.log(x); // 1
//       console.log(y); // 2 (`y` is in scope)
//     }
//     bar();
//     console.log(x); // 1
//     //console.log(y); // ReferenceError, `y` is scoped to `bar`
//     var x ; //(DECLARATION)
//   }
  
//   foo();

//-----------------------------------------------
//NB:DECLARATUON ONLY HOISTED,INITIALIZATION IS NOT HOISTED
// function foo() {
//     function bar() {
//       var y = 2;
//       console.log(x); // undefined
//       console.log(y); // 2 (`y` is in scope)
//     }
//     bar();
//     console.log(x); // undefined
//     //console.log(y); // ReferenceError, `y` is scoped to `bar`
//     var x=1;          //(INJTIALIZED HERE)
//   }
  
//   foo();


//-------------------------------------------
//NB:STRICT MODE-ERROR IF VARIABLE NOT DECALRED

// x = 1;   
// console.log(x) // 1
//------------

// "use strict";
// x = 1;   
// console.log(x) //REFERENCE ERROR

//----------
// "use strict";
// x = 1; 
// console.log(x)  // 1
// var x;

//----------
//NB: variable redeclarations will not trigger an error even in strict mode.
// "use strict";
// var a = 1;
// var a = "hi";
// console.log(a);  //hi

//--------------------------------------------------------------------------
//NB: Function declarations are hoisted over variable declarations but not over variable assignments.
//    ie,Variable assignment takes precedence over function declaration
//    Function declarations take precedence over variable declarations
// function declarations(both name of the function and its entire body ) are hoisted over variable declarations(not initialization) but  but variable assignments overwrite the function during the actual execution phase.

// CASE-Function declarations over variable declarations
// var double;
// function double(num) {
//   return (num*2);
// }
// console.log(typeof double); // Output: function

//--------
// CASE-Variable assignment over function declaration
// var double = 22;
// function double(num) {
//   return (num*2);
// }
// console.log(typeof double); // Output: number

//---------------
// var a;
// function a() {}
// console.log(a); // [Function: a]

//-----------
// var a = 1;
// function a() {
//     return "hi"
// }
// console.log(a); // 1

//--------------
// var a = 1;
// function a() {}
// console.log(a()); // type error: a is not a function --bcoz function 'a' hoisted first then var 'a' hoisted but assignment a=1 happens after hoisting.so,when code runs a=1 overrides the function declaration.
//                   // So when you try to call a() within console.log(a());, JavaScript sees 'a' as a number (1), not a function

// -------------
// foo();  //2   ----here only var declaration and function hoisted. so,Function declarations takes precedence over variable declarations
// var foo=function(){console.log(1);}
// function foo(){
//    console.log(2);
// }

//---------------
// var foo=function(){console.log(1);}
// function foo(){
//    console.log(2);
// }
// foo();  //1 ----here both var assignment and function decalration occured. so,Variable assignment takes precedence over function declaration

//--------------
// var id="abc";
// function foo(){
//     id=123;
//     function id(){ console.log("function");
//     }
//     console.log(id);  //123
    
// }
// foo();
// console.log(id);  //abc----hoisting of function made id=123 a local variable instead of a golabal one

//--------------------------------------------------------------------------------------------
//NB:Redeclarations doesnot throw error like let and const

// var myName = "Chris";
// var myName = "Bob";

//--------------------------------------------------------------------------------------------
//NB:var declarations has not same scope as let,const,class and import declarations
// var a = 1;
// let a = 2; // SyntaxError: Identifier 'a' has already been declared

//---------
// const a = 2; 
// var a = 1;  // SyntaxError: Identifier 'a' has already been declared (in const a;)-----var a is hoisted when it reached var a=1 statement .As let and const does not allow redeclaration with var,let const within the same scope, it lead to conflict on hoisting

//---------
// NB:If you declare a variable within a block using the var keyword, it will NOT have Block Scope but Global.

// let a = 1;
// {
//   var a = 1; // SyntaxError: Identifier 'a' has already been declared(in let a;)-----var a is hoisted only when the {} scope has entered,then the conflict with 'let a' is arised
// }

//----------
//NB:let is in a child scope of var, not the same scope:
// var a = 1;
// {
//   let a = 2; 
//   console.log(a); //2
  
// }
// console.log(a); //1

//--------------------------------------------------------------------
// NB:BE MINDFUL OF ORDER
// var x = y,
//   y = "A";
// console.log(x, y); //undefined A       (x = y is evaluated, y exists so no ReferenceError is thrown and its value is undefined)
// console.log(x)     //undefined

//-----------
// var y = "A",
//     x = y; 
// console.log(x, y); //A A

// This is equivalent to:
// var y, x = y = "A";         // (y and x declared as var)-  assignment operation works from right
// console.log(x, y); //A A

// ------------
//NB: Initialization of several variables

// var  x = y = "A";              // (x declared, y not actually declared .hence, it becomes a global variable (in non-strict mode) )
// console.log(x, y); //A A   

//-------------

// var x = 0;
// function f() {
//   var x = y = 1;     // Declares x locally; declares y globally. (y not actually declared .hence, it becomes a global variable (in non-strict mode))
//   console.log(x, y); //1 1
// }
// f();
// console.log(x, y); // 0 1

// [ABOVE SAME EXAMPLE WITH USE STRICT]

// "use strict";
// var x = 0;
// function f() {
//   var x = y = 1; 
//   console.log(x, y);  // ReferenceError: y is not defined
// }
// f();

// console.log(x, y);

//------------------------------------------------------------------
//NB:A VAR declaration within a function's body does not throw error when we  have  same name as a parameter ,as var allows redeclaration
//   (throw error in case of let and const)

// function foo(a) { //implicitly treated as var a
//     var a = 1;    //No Error as JavaScript allows you to redeclare a variable within the same scope using var.
//    console.log(a) //1
// }
//foo(2)

//------
// try {
// } catch (e) {
//   var e; //no error
// }

//--------------------------------------------------------------------
//NB:UNDERSTAND DEEPLY:

// var x=0;
// function a(){
//     var y=1;
//     console.log(x,y); // 0 1
//     function b(){
//         var x=1;
//         var y=2
//         console.log(x,y); // 1 2
//         function c(){
//             console.log(x,y); // 1 2
//             function d(){
//                 console.log(x,y); //1 2
//             }
//             d();
//         }
//         c();
//     }
//     b();
//     console.log(x,y); // 0 1   
// }
// a();

// console.log(x); //0
// // console.log(y); //reference error

// ----------------UNDERSTAND DEEPLY HOW VAR CHANGES FROM UNIDENTIFIED GLOBAL VARIABLE(ie,not giving declaration for a variable)
// NB:UNIDENTIFIED GLOBAL VARIABLE has global scope, not even has function scope like var 
//    but it is not hoisted 


// CASE-Eventhough UNIDENTIFIED GLOBAL VARIABLE has global scope, it is not hoisted like var.So, throws error until it is declared in the code
// function getCircumference(radius) {
//     console.log(circumference)   // ReferenceError: circumference is not defined
//     circumference = radius*2;
//     console.log(circumference);  //4 
//   }
// getCircumference(2) 

//---------------

// var x = 0; // Declares x within file scope (global scope), then assigns it a value of 0.
// console.log(typeof z); // "undefined", since z doesn't exist yet---consoling z will give reference error
// function a() {
//   var y = 2; // Declares y within the scope of function a, then assigns it a value of 2.
//   console.log(x, y); // 0 2
//   function b() {
//     x = 3; // Assigns 3 to existing file-scoped (global) x.
//     y = 4; // Assigns 4 to existing outer y (local to function a).
//     z = 5; // Creates a new global variable z, and assigns it a value of 5.
//     // (Would throw a ReferenceError in strict mode because z is not declared.)
//   }
//   b(); // Calls function b, modifying x, y, and creating z.
//   console.log(x, y, z); // 3 4 5
// }
// a(); // Calls function a, which also calls b.
// console.log(x, z); // 3 5
// console.log(typeof y); // "undefined", as y is local to function a---------consoling y will give reference error

//--------UNDERSTAND
// var a=1;
// var a=2; //not throw error

//let a=1;
//let a=2; //throw error  

// let a = 1;
// a = 2; //instead this not throws error

//while-
//const a=1;
// a=2;    //throws error

// const a=1;
// a=2;   //throws error


//---------UNDERSTAND

// var x=1;
// {
//     var x=2;
//     console.log(x);// 2
    
// }
// console.log(x); //2
//--------

// let x=1;
// {
//     let x=2;
//     console.log(x);// 2
    
// }
// console.log(x); //1

// NB:const and let allow the same variable name to be used in different scopes without causing conflict
// const x=1;
// {
//     const x=2;
//     console.log(x);// 2
    
// }
// console.log(x); //1

//---------
// var foo=2;
// {
//     let foo=3;
//     console.log(foo); //3-----will not throw error as foo inside block has different scope 
    
// }

// -----------------------UNDERSTAND
// NB: const have to be initialized along with declaration unlike var and let; otherwise throw error
// var a;
// let b;
// const c; //SyntaxError: Missing initializer in const declaration

//------------------------UNDERSTAND
// var declarations are hoisted to the top of their scope and initialized with undefined.
// let declarations are also hoisted, but they are not initialized. They remain in a "Temporal Dead Zone" (TDZ) until the declaration is reached in the code.(similar in const)
// both let and const have a Temporal Dead Zone (TDZ), while var does not.

//------------------------UNDERSTAND
// NB: var,let and const follows lexical scoping

// CASE var-
// Function scope: Variables declared with var are scoped to the function in which they are declared. If declared outside of any function, they are globally scoped.
// No block scope: var does not have block scope, meaning if you declare it inside a block (e.g., if, for), it is still accessible outside that block within the same function.

// CASE let and const
// Block scope: Variables declared with let are scoped to the block in which they are declared. This means they are not accessible outside the block {} in which they are defined.
// Temporal Dead Zone (TDZ): Variables declared with let exist in a "temporal dead zone" from the start of the block until the variable's declaration is processed.


//---------------------------UNDERSTAND
//NB: With JavaScript, the global scope is the JavaScript environment.In HTML, the global scope is the window object.
//   'this' in a browser environment usually refers to the global 'window' object. In this case, 'this.one' would be equivalent to 'window.one'
//    Global variables defined with the var keyword are attatched to the window object while let keyword and const keyword not.
//    Anything that is in the global scope is attached to the window object with the exception of const and let variables.

// var one = "farsana";
// console.log(this.one); // "farsana" (in a browser) but undefined in node.js

// let two = "farsana";
// console.log(this.one); // undefined

//---------------------------UNDERSTAND
// NB:You can access global variables from any other javascript that is running on the page like a script tag or via the console.

/* 
<script src="./scope.js"></script>    // if you add in scope.js the following code - var first = 'farsa' ; (can use let or const but it has to be in global scope)
<script>
  console.log(first);  // farsa
</script> 
*/
