// TYPED ARRAYS


// Typed arrays in JavaScript are array-like objects that provide a way to work with binary data directly. 
// Typed arrays ensure that all elements in the array are strictly of the same type, such as integers or floating-point numbers.
// They allow you to create, access, and manipulate raw binary data efficiently-
// which is especially useful for tasks like working with files, images, audio, and network protocols. 
// Typed arrays were introduced as part of the WebGL API for handling binary data.
// It is also used for cases such as canvas, web audio API, XMLHttpRequests, Fetch API, Web Sockets, Web Workers, Media Source API, and File APIs.

// There is no JavaScript property or object named TypedArray, but properties and methods can be used with typed array objects.
// Methods like pop, push, shift,  unshift, concat, flat, flatMap , splice and toSpliced are not available in TypedArray as they change the length of array.
// Behind these, All other array methods are shared between Array and TypedArray.
// Benefits:
// Performance: Typed arrays allow for more efficient manipulation of binary data, compared to regular arrays or objects.
// Type-specific: Typed arrays interpret data as specific numeric types, such as integers or floating-point numbers, instead of general JavaScript numbers.

// Common Typed Arrays:
// Int8Array: 8-bit signed integer.
// Uint8Array: 8-bit unsigned integer.
// Int16Array: 16-bit signed integer.
// Uint16Array: 16-bit unsigned integer.
// Int32Array: 32-bit signed integer.
// Uint32Array: 32-bit unsigned integer.
// Float32Array: 32-bit floating point.
// Float64Array: 64-bit floating point.

// Typed arrays come in two parts:
// ArrayBuffer: A fixed-length block of raw binary data.
// Typed array views: Views over the ArrayBuffer that interpret its content as specific types of numbers (integers, floats, etc.).

// Key Concepts:
// 1-Typed Arrays: These are arrays that store data of a specific numeric type, such as Int8Array (8-bit integers), Uint8Array (unsigned 8-bit integers), Float32Array (32-bit floating points), and more.
// let int8 = new Int8Array(4);  // Creates a typed array with 4 elements
// int8[0] = -128;
// int8[1] = 127;
// console.log(int8);  // Int8Array [-128, 127, 0, 0]
// 2-ArrayBuffer: This is a fixed-length block of memory used to store raw binary data. It is a container that holds the data for the typed arrays.
// let buffer = new ArrayBuffer(16);  // Creates a buffer of 16 bytes
// 3-DataView: A DataView provides a low-level interface to read and write data from an ArrayBuffer at specific byte offsets. It's helpful when working with various types in the same buffer.
// let view = new DataView(buffer);
// view.setInt8(0, 42);  // Set value at byte 0
// console.log(view.getInt8(0));  // Output: 42


// Example of usage:

// 1-using a TypedArray- like Int32Array to directly interpret the data in the buffer as an array of 32-bit integers (4 bytes per integer).
// Create an ArrayBuffer of 16 bytes
// let buffer = new ArrayBuffer(16);
// Create a 32-bit integer typed array view over the buffer
// let int32View = new Int32Array(buffer);
// Assign values to the view
// int32View[0] = 42;   // First 4 bytes are treated as a 32-bit integer (42)
// int32View[1] = 100;  // Next 4 bytes are treated as a 32-bit integer (100)
// console.log(int32View[0]);  // 42
// console.log(int32View[1]);  // 100

// 2- usin DataView - here, you get more control over how each part of the buffer is interpreted. You can write or read multiple types of data (e.g., mix of integers, floats, bytes) at any byte offset.
// Create an ArrayBuffer of 16 bytes
// let buffer = new ArrayBuffer(16);
// Create a DataView over the buffer
// let dataView = new DataView(buffer);
// Assign values using DataView methods
// dataView.setInt32(0, 42);   // Set a 32-bit integer (42) at byte offset 0
// dataView.setInt32(4, 100);  // Set a 32-bit integer (100) at byte offset 4
// console.log(dataView.getInt32(0));  // Outputs: 42
// console.log(dataView.getInt32(4));  // Outputs: 100

// 3-Example of Mixing Data Types in DataView (Something You Can't Do with Typed Arrays)
// let buffer = new ArrayBuffer(10);
// let view = new DataView(buffer);
// Set a 16-bit integer at byte offset 0
// view.setInt16(0, 500);
// Set an 8-bit integer at byte offset 2
// view.setInt8(2, 42);
// Set a 32-bit float at byte offset 3
// view.setFloat32(3, 3.14);
// console.log(view.getInt16(0));  // 500
// console.log(view.getInt8(2));   // 42
// console.log(view.getFloat32(3)); // 3.14


// -----------------------------------------------------------------------------------------------------------------------------------------------