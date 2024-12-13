// An assignment operator assigns a value to its left operand based on the value of its right operand. 
// The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. 
// That is, x = f() is an assignment expression that assigns the value of f() to x.

// -------------------------------------------------------------------------
// Assignment Operators: Used to assign values to variables.
// include operations like =, +=, -=, *=, etc.

// let a = 5;     // Simple assignment
// a += 2;        // Equivalent to a = a + 2; (a is now 7)
// a -= 1;        // Equivalent to a = a - 1; (a is now 6)
// a *= 3;        // Equivalent to a = a * 3; (a is now 18)
// a /= 2;        // Equivalent to a = a / 2; (a is now 9)

// -----
// Avoid chaining assignment

// NB: chaining assignments in the same statement is discouraged
// const z = y = x = f();  ---here All three are assigned the result of f() but only z declared with const, y and x become global variables
// instead can do-
// const x, y, z;
// x = y = z = f(); // All three are assigned the result of f() and all are declared with const.
