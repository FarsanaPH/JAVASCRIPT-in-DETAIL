// Comparison operators are used in logical statements to determine equality or difference between variables or values. 
// It can be used in conditional statements to compare values and take action depending on the result.

// -----------------------------------------------------------------------------------------------------------------------------------------------
//                                     VALUE COMPARISON OPERATORS in javascript include- 
// 1) == operator
// 2) === operator
// 3) The Object.is()

// --------------------
// 1) == operator — loose equality (double equals)
// This method does the type conversion of the operands before comparison and handles special cases of -0,+0 and NaN (so NaN != NaN, and -0 == +0)
// console.log(5=='5'); //true

// 2) === operator- strict equality (triple equals)
// This does not perform type coercion; both the value and the type must be identical and it also handles special cases of -0,+0 and NaN (so NaN !== NaN, and -0 === +0) 
// console.log(5==='5'); //false

// 3) The Object.is()- 
// This method determines whether two values are the same value: Object.is(value1, value2) but without type coercion and not hold special cases of -0, +0 and NaN.
// Object.is(-0,+0) returns false and Object.is(NaN,NaN) returns true.
// NB: === is preferred than Object.is() as it gives false on comparing +0 and -0 ;For NaN can be checked with isNaN.

// Example:
// console.log(Object.is('1', 1));// false
// console.log(Object.is(NaN, NaN));//true
// console.log(Object.is(-0, 0));//false
// const obj = {};
// console.log(Object.is(obj, {}));//false
// Object.is(NaN, 0 / 0); // true
// Object.is(NaN, Number.NaN); // true

// --------------------------------------------------------------------------------------------------------------------------------------------
//                                                   EQUALITY ALGORITHMS
   
// The above value comparison operators corresponds to three of four equality algorithms in JavaScript:
// 1) IsLooselyEqual: ==
// 2) IsStrictlyEqual: ===
// 3) SameValue: Object.is()
// 4) SameValueZero: used by many built-in operations

// -------------
// 1) IsLooselyEqual: ==
// isLooselyEqual checks whether its two operands are equal, after type coercion if of different types.

// 2) IsStrictlyEqual: ===
// isStrictlyEqual checks whether its two operands are equal without type coercion considering operands of different types to be different.

// 3) SameValue: Object.is()
// SameValue equality determines whether two values are functionally identical in all contexts with +0 and -0 are also considered equal and NaN equals to itself.

// 4) SameValueZero
// Similar comparison to Object.is(), but it treats -0 and +0 as equal [but NaN not equals to itself].

// -------------------------------------------------------------------------------------------------------------------------------------------------


// SUMMARY-
// Method	       Type Conversion	  -0 = +0     NaN = NaN	    
// == (Loose)	         Yes	       true         false	     
// === (Strict)	          No	       true         false	      
// Object.is()	          No	       false        true	      
// SameValueZero	      No	       true         true	      

