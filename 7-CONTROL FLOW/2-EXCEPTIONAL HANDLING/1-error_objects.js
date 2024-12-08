//                                              ERROR OBJECT AND OVERVIEW OF TRY...CATCH..FINALLY AND THROW
// In JS, The throw operator generates an error.
// The syntax is-
// throw <error object>.

// Error objects have following properties:
// name – the string with error name (error constructor name).
// message – the human-readable error message.
// stack (non-standard, but well-supported) – the stack at the moment of error creation.

// NB:The error object can be anything. It can be  a number ,string , boolean or objects.

// But it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).
// ie,
// let error = new Error(message);
// OR
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);
// .....

// NB:For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. 
// And message is taken from the argument.
// let error = new Error("Things happen o_O");
// console.log(error.name); // Error
// console.log(error.message); // Things happen o_O

// Throwing generic error-
// try {
//     throw new Error("Whoops!");
// } catch (e) {
//     console.error(`${e.name}: ${e.message}`);
// }

// Handling specific error type-
// try {
//     foo.bar();
// } catch (e) {
//     if (e instanceof EvalError) {
//       console.error(`${e.name}: ${e.message}`);
//     } else if (e instanceof RangeError) {
//       console.error(`${e.name}: ${e.message}`);
//     }
//     // etc.
//     else {
//       // If none of our cases matched leave the Error unhandled
//       throw e;
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------
// Understand try...catch-
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
//   console.log( user.name );    // Output: undefined ----will not move to catch as there is no error in try.
// } catch (err) {
//   console.log( "doesn't execute" );
// }
// So use throw operator to handle the error.
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }
//   console.log( user.name );
// } catch (err) {
//   console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
// }

// Rethrowing-
// Catch should only process errors that it knows and “rethrow” all others.
// The “rethrowing” technique can be explained in more detail as:
// Catch gets all errors.
// In the catch (err) {...} block we analyze the error object err.
// If we don’t know how to handle it, we do throw err.
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
//     throw err; // rethrow (*)
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


// try...catch...finally 
// NB:finally clause will run always
// try {
//     work work
// } catch (err) {
//     handle errors
// } finally {
//     cleanup the working space
// }
// eg:-
// openMyFile();
// try {
//   writeMyFile(theData); // This may throw an error
// } catch (e) {
//   handleError(e); // If an error occurred, handle it
// } finally {
//   closeMyFile(); // Always close the resource
// }

// NB: Note that variables are local inside try...catch...finally. Hence if want to use it outside the block, declare it before the try...catch...finally

// NB:If the finally block returns a value, this value becomes the return value of the entire try…catch…finally production, 
// regardless of any return statements in the try and catch blocks:
// function f() {
//     try {
//       console.log(0);
//       throw "bogus";
//     } catch (e) {
//       console.log(1);
//       // The below return statement is suspended
//       // until finally block has completed
//       return true;
//       console.log(2); // not reachable
//     } finally {
//       console.log(3);
//       return false; // overwrites the previous "return" in catch
//       console.log(4); // not reachable
//     }
//     // "return false" is executed now
//     console.log(5); // not reachable
// }
// console.log(f()); // 0, 1, 3, false
// -----another
// function func() {
//     try {
//       return 1;
//     } catch (err) {
//       /* ... no error*/  
//     } finally {
//       console.log( 'finally' );
//     }
// }
// console.log( func() );   // finally , 1
// What happens is-
// The try block is executed, and return 1; is reached but it suspended.
// The finally block is always executed, regardless of whether there was an exception or not. So, the  ('finally'); is shown.
// After the finally block completes, the function proceeds to complete the return 1; statement.


// -------------------UNDERSTAND--------
// JavaScript Errors-
// ErrorName	                                  Description
// EvalError	                      An error has occurred in the eval() function
// RangeError                        A number "out of range" has occurred
// ReferenceError	                  An illegal reference has occurred--if not declared
// SyntaxError	                      A syntax error has occurred
// TypeError	                      A type error has occurred---when unexpected type arrives
// URIError	                      An error in encodeURI() has occurred