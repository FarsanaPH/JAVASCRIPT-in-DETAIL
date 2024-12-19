// Bitwise Operators: Operate on binary numbers.

// Given value for demonstration
// const num1 = 5;  // Binary: 00000101
// const num2 = 1;  // Binary: 00000001

// Bitwise AND (&) - Both bits must be 1 to return 1.
// console.log(`${num1} & ${num2} = `, num1 & num2); // Output: 1 (00000101 & 00000001 = 00000001)

// Bitwise OR (|) - If at least one bit is 1, it returns 1.
// console.log(`${num1} | ${num2} = `, num1 | num2); // Output: 5 (00000101 | 00000001 = 00000101)

// Bitwise XOR (^) - Returns 1 if the bits are different.
// console.log(`${num1} ^ ${num2} = `, num1 ^ num2); // Output: 4 (00000101 ^ 00000001 = 00000100)

// Bitwise NOT (~) - Inverts all bits.
// console.log(`~${num1} = `, ~num1); // Output: -6 (NOT 00000101 = 11111010, which is -6 in two's complement)

// Left Shift (<<) - Shifts the bits to the left, inserting 0s on the right.
// console.log(`${num1} << 1 = `, num1 << 1); // Output: 10 (00000101 << 1 = 00001010)

// Right Shift (>>) - Shifts the bits to the right, maintaining the leftmost sign bit for negative numbers.
// console.log(`${num1} >> 1 = `, num1 >> 1); // Output: 2 (00000101 >> 1 = 00000010)

// Right Shift on a negative number
// const negNum = -5; // Binary: 11111011 (two's complement representation)
// console.log(`${negNum} >> 1 = `, negNum >> 1); // Output: -3 (sign bit is preserved)

// Zero-fill right shift (>>>) 
// const num = -5;          // Binary (signed 32-bit): 11111111 11111111 11111111 11111011
// Zero-fill right shift by 1 bit
// console.log(`${num} >>> 1 = `, num >>> 1); // Output: 2147483645
// Binary result: 01111111 11111111 11111111 11111101 (which is 2147483645 in decimal)
