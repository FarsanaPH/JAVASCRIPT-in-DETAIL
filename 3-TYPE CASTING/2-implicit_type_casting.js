//                              IMPLICIT TYPE CONVERSION/ IMPLICIT TYPE CASTING/ TYPE COERCION/ TYPE JUGGLING
// automatic or implicit conversion of values from one data type to another by the language itself when it expect that datatype
// Implicit type conversion happens when the compiler or runtime automatically converts data types. 
// JavaScript is loosely typed language and most of the time, operators automatically convert a value to the right type.

// ---------------------------------------------------------------------------------------------------------------------------------------------

// CASE: STRING TYPE CASTING
// Arithmetic addition-
// NB:js use string concatenation or addition on seeing "" with + operator.
// let sum = "5" + 9; // Implicitly converts 5 (number) to '5' (string) 
// console.log(sum);  // "59"
// 1 + "2" + 1 // "121"
// 1 + 2 + "1" // "31"
// 3 + "" // "3"
// "name" + {} // "name[object Object]""    
// "5" + null  // returns "5null"   because null is converted to string "null"


// CASE : NUMBER TYPE CASTING
// NB;js performs inbuilt Number() function on the value. This is pretty straightforward, any string containing only numeric characters will be converted to it's number equivalent, but a string containing a non-numeric character returns NaN.
// Arithmetic multiplication-
// let mul = "5" * 2;  //   Number("5")*2  -5*2
// console.log(mul);   // 10
// 3 * "3"  // 9
// 3 * "" // 0
// 3 * "a" // NaN
// 3 * "3a" // NaN
// 3 * "1+1" // NaN-----Number("1+1") gives NaN then NaN * 3 gives NaN
// "5" * "2"   // returns 10        because string "5" and "2" are converted to number 5 and 2
// Arithmetic substraction-
// "5" - 2     // returns 3         because "5" is converted to number 5
// 5 + null    // returns 5         because null is converted to number 0


// CASE : BOOLEAN TYPE CASTING
// NB:Inside if statements or when explicitly converting to a boolean using Boolean(), The values 0, -0, '' (empty string), NaN, undefined, and null, evaluate to false and all other values evaluate to true, even empty arrays and objects.  
// val = 1;
// if (val) {          // implicitly converts val value 1 to boolean True 
//    console.log( 'yes, val exists' );
// }
// Other cases-outside if and Boolean()
// []==false   //true
// true + true //2
// 10 - true   //9


// Implicit conversion with == operator and != operator
// console.log( 125 == '125' );  //true


// ARRAY CASE
// 4 * [] // 0
// 4 * [2] // 8
// 4 * [1, 2] // NaN
// 4 / [2] // 2
// 4 + [2] // "42"
// 4 + [1, 2] // "41,2"
// 4 + [1,2,3] // "41,2,3"
// "me" + [1,2,3] // "me1,2,3"
// [1,2,3].join() // "1,2,3" 
// [].toString() // ""
// [].join() // ""


// JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:
// document.getElementById("demo").innerHTML = myVar;       
// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"   
// "name" + {} // "name[object Object]"                                                                                                    
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"                                                                                                                                                  
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"      z                                                              
// if myVar = 123             // toString converts to "123"                                     
// if myVar = true            // toString converts to "true"                          
// if myVar = false           // toString converts to "false"    // console.log(2+"4");  //"24"  ----here js sees string hence performed string concatenation



// const zoo = {
//     toString: () => "4"
// }
// console.log(2+zoo);       // "24"
// console.log(2 * zoo)      // 8
// console.log(2 / zoo)      // 0.5
// ---
// const foo = {
//     toString: () => 4
// }
// console.log(2+foo);   //6   ----here toString() method on foo, which returns the number 4 (not a string but a number).
// "four" + foo // "four4"     ----here js sees string hence performed string concatenation
// 2 * foo      // 8
// 2 / foo      // 0.5
// ---
// const foo = {
//     valueOf: () => 3
// }
// 3 + foo // 6
// 3 * foo // 9
//   --
// When both the toString and valueOf methods are defined on an Object, Javascript uses the valueOf method instead.
// const bar = {
//     toString: () => 2,    // Used in string context
//     valueOf: () => 5      // Used in numeric context
// }
// console.log("sa" + bar); // "sa5"  (string concatenation)
// console.log(3 * bar);    // 15     (multiplication)
// console.log(2 + bar);    // 7      (addition)
  











 
   

   


