// Relational Operators: Compare the relationship between operands.
// include operations like ( <, in, instanceof)

// ---------------------------------------------------------------------------------------------------------------------------
// console.log('apple' < 'banana'); // true (alphabetical comparison)

// -------------------------------------------------------------------------------------------------------------------------
// in Operator:

// Arrays
// console.log(10 in [0, 10, 20]);  // false (checks if 10 is a property/key)
// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// 0 in trees; // returns true
// 3 in trees; // returns true
// 6 in trees; // returns false
// "bay" in trees; // returns false ---(you must specify the index number, not the value at that index)
// "length" in trees; // returns true (length is an Array property)

// Custom objects
// const myCar = { make: "Honda", model: "Accord", year: 1998 };
// "make" in myCar; // returns true
// "model" in myCar; // returns true

// ---------------------------------------------------------------------------------------------------------------------
// instanceof Operator:
// SYNTAX-
// object instanceof objectType

// const theDay = new Date(1995, 12, 17);
// if (theDay instanceof Date) {
//   // statements to execute
// }

// ---------------------------------------------------------------------------------------------------------------------