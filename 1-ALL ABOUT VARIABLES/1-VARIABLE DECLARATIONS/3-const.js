// NB:block scoped
//    const – is like let, but value of the variable can’t be changed .However, if a constant is an object, its properties can be added, updated, or removed.
//    It does not mean the value it holds is immutable — just means that the variable identifier cannot be reassigned.ie,"create a variable whose identity remains constant", not "whose value remains constant" 
//    you must initialize them when you declare them otherwise throw error
//    used for variables where we not need to assign a new value after you've initialized them.
//    Always use const if the value should not be changed
//    Always use const if the type should not be changed (Arrays and Objects)


//----------------
// const FOO; // SyntaxError: Missing initializer in const declaration

//----------------
// NB:cant redeclare within same scope
// const myBirthday = '18.04.1982';
// const myBirthday = '01.01.2001'; //throw error

//-----------------
// const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // error, can't reassign the constant!

//-----------------
//NB:cant redeclare within same scope but cn in different scope

// const a=1;
// {
//     const a=1;  //no error
// }

//------------------

// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }
//-----------------
// const x = 1;
// if (x === 1) {
//   const x = 2;    //no error -new scope
//   console.log(x); //2
// }
// console.log(x);   //1

//------------------
// const hello; //error- has to initialize with declaration
// console.log(hello); 
// hello = 'farsana';

//-------------------

// const MY_FAV = 7;
// if (MY_FAV === 7) {
//   // This is fine because it's in a new block scope
//   const MY_FAV = 20;
//   console.log(MY_FAV); // 20

//   // var declarations are not scoped to blocks so on hoisting to global scope throws reference error on conflicting with first const MY_FAV 
//   var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
// }
// console.log(MY_FAV); // 7

//----------------------------------------------

//NB:const also works on objects and arrays. Attempting to overwrite the object or array throws an error;
//   but can redeclarer to properties of array and object as it is directing the same array and object itself

// const MY_ARRAY = [1,2];
// MY_ARRAY = [3,2];     //throws error
// MY_ARRAY.push(3);    // this is allowed
// console.log(MY_ARRAY); // output: [1,2,3]
//----
// const MY_OBJECT = { name:"farsana"};
// MY_OBJECT = { name:shebeel }; //throws error
// MY_OBJECT.age = 23;  // this is allowed
// console.log(MY_OBJECT); // Output: { name: "farsana", age: 23 }

//------------------------------------------------
//LEXICAL SCOPING

// const dog = 'snickers';
// function logDog() {
//   console.log(dog);
// }
// function go() {
//   const dog = 'sunny';
//   logDog(); //snickers
// }
// go();

//-------------------------------------------------


// NB:widespread practice to use constants as aliases for difficult-to-remember values (that are known before execution.)
//    prefer to use screaming snake casing( all letters are uppercase, and words are separated by underscores)

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00


// NB:In below, The value of birthday is known prior to execution and directly written into the code.. So we could use upper case for it.
// In contrast, age is evaluated in run-time so,lowercase for it.
// const BIRTHDAY = '18.04.1982'; // make birthday uppercase
// const age = someCode(BIRTHDAY); // make age lowercase

//------------------
// const CENTIMETRES_PER_INCH = 2.54;
// var inches = Number(prompt('Inches?'));
// var centimetres = inches * CENTIMETRES_PER_INCH;
// console.log(centimetres + ' centimetres.');       // output will not obtain in node.js compiler as it does not supportbrowser-specific prompt



//-------------------------------------------------------------------------------------------------
// NB:DECLARE A VARIABLE WITHOUT var, let, or const 
//  all undeclared variables are global variables.

// In non-strict mode, the undeclared variable is automatically created as a global variable(UNIDENTIFIED GLOBAL VARIABLE/IDENTIFIER), even if it is inside a function or block.
// function myFunction() {
//     x = 10; // No var, let, or const
//     console.log(x); // 10
// }
// myFunction();
// console.log(x); // 10


// NB:In strict mode, undeclared variables cause an error. This is because strict mode requires you to declare all variables explicitly to avoid accidental global variable creation.
// "use strict";
// function myFunction() {
//     x = 10; // No var, let, or const
//     console.log(x); // ReferenceError: x is not defined
// }
// myFunction();







