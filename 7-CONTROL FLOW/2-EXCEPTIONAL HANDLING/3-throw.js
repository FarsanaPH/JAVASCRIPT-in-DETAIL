// The throw statement allows you to create a custom error.
// The throw statement generates an error.
// The technical term for this: The throw statement throws a user-defined exception. 
// The exception can be a JavaScript String, a Number, a Boolean or an Object; but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).
// NB: The statements after throw won't be executed, and control will be passed to the first catch block in the call stack. 
// If no catch block exists among caller functions, the program will terminate.

// ------------------------------------------------------------------------------------------------------------------------------------------

// SYNTAX-
// throw expression;     -----(The expression is the expression to throw.)


// Ways to throw error-
// throw new Error("Required"); // Throws a new Error object ----it is preferred. 
// throw error;                 // Throws a previously defined value (e.g. within a catch block). The previously defined value can be String, a Number, a Boolean.


// Throwing a user-defined error-
// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//       throw new Error('Parameter is not a number!');
//     }
// }
// try {
//     getRectArea(3, 'A');
// } catch (e) {
//     console.error(e);          // Error: Parameter is not a number!
//     console.error(e.name);     // Error
//     console.error(e.message);  // Parameter is not a number!
//     console.error(e.stack);    // Error: Parameter is not a number! at (...call stack)
// }

// Throwing an existing Error-
// NB:Below shown way not promoted as it can't catch the thrown error
// readFile("foo.txt", (err, data) => {-9+63+

//     if (err) {
//       throw err;
//     }
//     console.log(data);
// });
// NB:Instead for this, we can use Promise() constructor with try and catch to handle it effectively.
// function readFilePromise(path) {
//     return new Promise((resolve, reject) => {
//       readFile(path, (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//     });
// }
// try {
//     const data = await readFilePromise("foo.txt");
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// --------------------------------------------------------UNDERSTAND

// Understand the need of throw operator
// let json = '{ bad json }';
// try {
//   let user = JSON.parse(json); // <-- when an error occurs in fetching data from network...
//   console.log( user.name ); // this line doesn't work
// } catch (err) {
//   // ...the execution jumps here
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name );    // SyntaxError
//   console.log( err.message ); // Expected property name or '}' in JSON at position 2
// }

// Now what if we fetched data successfully, but it's not contain the complete data we want. 
// There comes the need of THROW OPERATOR to efficiently handle the custom errors.
// let json = '{ "age": 30 }';     // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   console.log( user.name );    // Output: undefined 
//   //will not move to catch as there is no error in try.
// } catch (err) {
//   console.log( "doesn't execute" );
// }
// So use throw operator to handle the error.
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); 
//   }
//   console.log( user.name );
// } catch (err) {
//   console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
// }

// Rethrowing-
// Catch should only process errors that it knows and “rethrow” all others.
// The “rethrowing” technique can be explained in more detail as follows:-
// 1-Catch gets all errors.
// 2-In the catch (err) {...} block, we analyze the error object err.
// 3-If we don’t know how to handle it, we do throw err.
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   blabla(); // unexpected error---blablabla() function not defined
//   console.log( user.name );
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log( "JSON Error: " + err.message );
//   } else {
//     throw err; // unknown error -rethrow 
//   }
// }

// The thrown error can be caught by another try...catch
// function readData() {
//     let json = '{ "age": 30 }';
//     try {
//       // ...
//       blabla(); // error!
//     } catch (err) {
//       // ...
//       if (!(err instanceof SyntaxError)) {
//         throw err; // rethrow (don't know how to deal with it)
//       }
//     }
//   }  
// try {
//     readData();
// } catch (err) {
//     alert( "External catch got: " + err ); // caught it!
// }

  