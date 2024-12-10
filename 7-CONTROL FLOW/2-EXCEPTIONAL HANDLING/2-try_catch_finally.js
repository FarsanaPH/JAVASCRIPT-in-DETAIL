// When an error occurs, JavaScript will normally stop and generate an error message.
// The try...catch...finally statements combo handles errors without stopping JavaScript.
// The try statement defines the code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to execute whether or not an exception is thrown.
// The throw statement defines a custom error.

// If try statement has error, the line next to end of try is not executed and the error is moved to catch.
// If try statement has no error then catch block is ignored but finally block will execute whether or not an exception is thrown

// Both catch and finally are optional, but you must use one of them.
// Using throw with try and catch, lets you control program flow and generate custom error messages.


// ---

// It works like this:
// First, the code in try {...} is executed.
// If an error occurs, then further lines of try will not execute, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.
// If there were no errors, then catch (err) is ignored. The execution reaches the end of try and goes on, skipping catch.

// SYNTAX-
// try {
//     tryCode - Code block to run
//   }
//catch(err) {
//     catchCode - Code block to handle errors
// }
// finally {
//     finallyCode - Code block to be executed regardless of the try result
// }

// try...catch-
// try {
//     lalala; // error, variable is not defined!
//     console.log("will not reach here")   ---will not execute 
// } catch (err) {        //---The error is converted to string as "name: message"
//     console.log(err);  // ReferenceError: lalala is not defined
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // lalala is not defined
//     console.log(err.stack);   // ReferenceError: lalala is not defined at (...call stack) 
// }
// ----
// let json = '{ bad json }';
// try {
//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log( user.name ); // this line doesn't work
// } catch (err) {
//   // ...the execution jumps here
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name );  // SyntaxError
//   console.log( err.message ); // Expected property name or '}' in JSON at position 2
// }
// // -----another
// function doSomethingErrorProne() {
//     if (ourCodeMakesAMistake()) {
//       throw new Error("The message");
//     } else {
//       doSomethingToGetAJavaScriptError();
//     }
//   }
  
//   try {
//     doSomethingErrorProne();
//   } catch (e) {
//     // Now, we actually use `console.error()`
//     console.error(e.name); // 'Error'
//     console.error(e.message); // 'The message', or a JavaScript error message
//   }

// ----another
// we can use instance of to find which type of error.
// try {
//     willGiveErrorSometime();
// } catch (error) {
    //   if (e instanceof EvalError) {
    //     console.error(`${e.name}: ${e.message}`);
    //   } else if (e instanceof RangeError) {
    //     console.error(`${e.name}: ${e.message}`);
    //   }
    //   // etc.
    //   else {
    //     // If none of our cases matched leave the Error unhandled
    //     throw e;
    // }
// }

// ----------------------------------------------------
// try...catch...finally 
// NB:finally clause will run always whether or not an exception is thrown
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
// ----another
// function riskyFunction() {
//     console.log("Executing riskyFunction..."); 
//     blablabla;   //Simulate an error-not declared
// }
// try {
//     riskyFunction(); // Calling the function that may throw an error
//     console.log("This will not run if an error is thrown above.");
// } catch (error) {
//     console.log("Caught an error:", error.message); 
// } finally {
//     console.log("Finally block executed. Cleanup code goes here.");
// }
// Logs-
// Executing riskyFunction...
// Caught an error: blablabla is not defined
// Finally block executed. Cleanup code goes here.

// -------------UNDERSTAND---------------------------------------------------------------------------------------------------

// try...catch only works for runtime errors-
// For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript
// ie, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.
// try {
//     {{{{{{{{{{{{  ---- the code is syntactically wrong, it is a parse-time error.
// } catch (err) {
//     console.log("The engine can't understand this code, it's invalid");
// }


// -----------------
// try...catch works synchronously-
// NB: If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
// That’s because the function itself is executed later, when the engine has already left the try...catch construct.
// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 1000);
// } catch (err) {
//     alert( "won't work" );
// }
// To make it work, try...catch must be inside the function.
// setTimeout(function() {
//     try {
//       noSuchVariable; // try...catch handles the error!
//     } catch {
//       alert( "error is caught here!" );
//     }
// }, 1000);

// ---------------

// NB: Note that variables are local inside try...catch...finally. 
// Hence if want to use it outside the block, declare it before the try...catch...finally

// --------------
// NB:If the finally block returns a value, this value becomes the return value of the entire try…catch…finally production, 
// regardless of any return statements in the try and catch blocks:

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
// -----another----------------
// NB: here, shows Overwriting of return values in try and catch by return in the finally block

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
// ------another--
// Overwriting of return values by the finally block also applies to exceptions thrown or re-thrown inside of the catch block:
// function f() {
//     try {
//       throw "bogus";
//     } catch (e) {
//       console.log('caught inner "bogus"');
//       // This throw statement is suspended until
//       // finally block has completed
//       throw e;
//     } finally {
//       return false; // overwrites the previous "throw"
//     }
//     // "return false" is executed now
// }
// try {
//     console.log(f());
// } catch (e) {
//     // this is never reached!
//     // while f() executes, the `finally` block returns false,
//     // which overwrites the `throw` inside the above `catch`
//     console.log('caught outer "bogus"');   //this will not execute as no error in function f();
// }
// Logs:
// caught inner "bogus"
// false
  


// ------------------------------------------------------------------------------------------------------------------------------------------
