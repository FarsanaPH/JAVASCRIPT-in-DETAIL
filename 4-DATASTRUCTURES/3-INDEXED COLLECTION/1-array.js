// Indexed Collections are collections that have numeric indices i.e. the collections of data that are ordered by an index value. 
// This includes arrays and array-like constructs such as-
// 1-Array objects
// 2-TypedArray objects

// ---------------------------------------------------------------------------------------------------------------------------------------------
// ARRAY
// In JavaScript, Arrays are objects that is used to store ordered collection of data. 
// An array is an indexed collection as they allow us to access an element using its index.
// An array is an ordered set of values that has a numeric index.
// NB:If we want to insert a data between an object (keyed collection). We can't  because it does not provides methods to manage the order of elements. 
// Hence,We can’t insert a new property “between” the existing ones. Objects are just not meant for such use. So, we use array which is ordered set of data. 
// What makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area.
// There are other optimizations as well, to make arrays work really fast.

// ---
// Create Array 

// Using Array constructor-
// const arr1 = new Array(5);    //create array of length 5 - no elements in it
// const arr2 = new Array(5,6);  //create array with elements 5 and 6
// const arr3 = Array(5);
// Using Array literal-
// const arr4 = [5,6];          // create array of element 5 and 6
// const arr4 = [];
// arr4.length = 5;             // create array of length 5 - no elements in it


// NB:can create using string property split
// 'fruits' array created using String.prototype.split().
// const fruits = "Apple, Banana".split(", ");
// console.log(fruits); // [ 'Apple', 'Banana' ]

// const str = "hello";
// const chars = [...str];  //spreading string to array
// console.log(chars);      // Outputs: ['h', 'e', 'l', 'l', 'o']

// ---------------------------------------------------------------------------------------------------------------------------------------------
// Type is  Object

// const arr=[1,2,3]
// console.log(typeof arr); // object

// ---------------------------------------------------------------------------------------------------------------------------------------------
// Mutiple type values

// let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
// get the object at index 1 and then show its name
// console.log( arr[1].name ); // John
// get the function at index 3 and run it
// console.log(arr[3]()); // hello , undefined --- logs "hello" and then logs undefined (since the function doesn’t return anything).

// tricky-
// let arr = ["a", "b"];
// arr.push(function() {
//   console.log( this );
// })
// console.log(arr[2]());  // a,b,function(){...}

// --------------------------------------------------------------------------------------------------------------------------------------------
// Access and Update array elements

// const arr = ["one", "two", "three"];
// arr[2]; // three
// arr[3]; // undefined
// arr[1]=1;
// arr["length"];  OR arr.length; // 3

// ----------------------------------------------------------------------------------------------------------------------------------------------
//  “at” to access negative indices

// Some programming languages allow the use of negative indexes like fruits[-1] to get last elements but Javascript don't.Js gives 'undefined' as the result.
// NB: Use 'at' to access negative indices
// const arr = ["one", "two", "three"];
// console.log(arr[-1]);    //undefined
// console.log(arr.at(-1)); // three
// OR EXPLICITLY CAN BE DONE BY GETTING THE LAST INDEX AND THEN ACCESSING IT.
// console.log(arr[arr.length-1]); //three

// NB:Can also use method "pop" .But arr.pop() also modifies the array by removing the last element while arr.at() not.
// let fruits = ["Apple", "Orange", "Pear"];
// console.log( fruits.pop() ); // remove "Pear" and alert it
// console.log( fruits ); // Apple, Orange

// ----------------------------------------------------------------------------------------------------------------------------------------------
// Understand Length
// NB: Objects doesnot has in-built methods to find length, we have to iterate over object's keys to determine how many properties it contains. 
//     But Array has.

// const cats = [];
// cats[30] = ["Dusty"];
// console.log(cats.length); // 31

// const cats = ["Dusty", "Misty", "Twiggy"];
// console.log(cats.length); // 3
// cats.length = 2;
// console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed
// cats.length = 3;
// console.log(cats); // [ 'Dusty', 'Misty', <1 empty item> ]
// NB:simplest way to clear the array is: arr.length = 0
// cats.length = 0;
// console.log(cats); // []; the cats array is empty

// NB:Object's case:
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj).length); // 3 ---as Object.keys(obj) returns [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------------------------------------------------------------------------------
// Delete and understand how it affect array

// const cats = ["Dusty", "Misty", "Twiggy"];
// delete cats[1];
// console.log(cats); // [ 'Dusty', <1 empty item>, 'Twiggy' ]
// console.log(cats.length); // 3 -length is same, array emptied the element but not its presence.

// ------------------------------------------------------------------------------------------------------------------------------------------
// Destructing

// const arr = ["one", "two", "three"];
// first=arr[0];
// second=arr[1];
// third=arr[2];
// console.log(first); //one
// console.log(second); //two
// console.log(third); //three
// INSTEAD-
// const arr = ["one", "two", "three","four","five"];
// const [first,second,third,...rest] = arr;
// console.log(first); //one
// console.log(second); //two
// console.log(third);   //three
// console.log(rest); // [ 'four', 'five' ]

// -------------------------------------------------------------------------------------------------------------------------------------------
// Iterate over Array 

// const colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);     //red, green, blue
// }

// for...in loop- not proposed as it iterates over all properties, not only the numeric ones.
// for (const i in colors) {
//     console.log(colors[i]);   //red, green, blue
// }

// for....of loop
// for (const i of colors) {
//     console.log(i);           //red, green, blue
// }

// forEach()
// colors.forEach((i) => console.log(i)); //red, green, blue

// -------------------------------------------------------------------------------------------------------------------------------------------
// Array Copying        
// NB:All JavaScript array-copy operations create shallow copies. 

// 1- Using reference   
// let fruits = ["Banana"]
// let arr = fruits; // copy by reference (two variables reference the same array)
// console.log( arr === fruits ); // true
// arr.push("Pear");       // modify the array by reference
// console.log(arr);       // // [ 'Banana', 'Pear' ]
// console.log( fruits );  // [ 'Banana', 'Pear' ]

// --------------------
// 2- using Spreading (It is also a way to avoid mutating the original array in methods that mutate array)

//  let arr=[1,5,3];
//  let copy=[...arr];
//  console.log(copy);    // [ 1, 5, 3 ]
//  console.log(copy[1]); // 5
//  copy[1]=2;
//  console.log(copy); // [ 1, 2, 3 ]
//  console.log(arr);  // [ 1, 5, 3 ]  ---not changed when copy changed (shallow copy)
// ---
//  let person=[{name:"john",age:25},{name:"jack",age:21}];
//  let copy=[...person];
//  console.log(copy);    // [ { name: 'john', age: 25 }, { name: 'jack', age: 21 } ]
//  copy[0].name="farsana";
//  console.log(copy);    // [ { name: 'farsana', age: 25 }, { name: 'jack', age: 21 } ] 
//  console.log(person);  //  [ { name: 'farsana', age: 25 }, { name: 'jack', age: 21 } ] ---changed when copy changed bcoz object(shallow copy)
// ---
// NB:It is a way to avoid mutating the original array-
// const myArray = ["1", "2"];
// const newArr = [...myArray];   // Create a shallow copy of myArray
// newArr.push("3");              // Mutate the copy by pushing "3"
// console.log(myArray);          // [ '1', '2' ] (original array is unchanged)
// console.log(newArr);           // [ '1', '2', '3' ]

// ------------------
// 3-using from() method.
// const fruits = ["Strawberry", "Mango"];
// const fruitsCopy2 = Array.from(fruits); 
// console.log(fruitsCopy2); // ["Strawberry", "Mango"]

// --------------------
// 4-using  slice() method.
// const fruits = ["Strawberry", "Mango"];
// const fruitsCopy3 = fruits.slice();
// console.log(fruitsCopy3); // ["Strawberry", "Mango"]

// ---
// NB:these all create shallow copy . To create deep copy- use JSON. methods
// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

// ------------------------------------------------------------------------------------------------------------------------------------------
// Sparse Array - Array with empty elements

// Array constructor:
// const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
// const arr = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]
// console.log(arr[2]); // undefined

// Directly setting a slot with index greater than array.length:
// const c = [1, 2];
// c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
// const d = [1, 2];
// d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
// const e = [1, 2, 3, 4, 5];
// delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]

// ---------------------------------------------------------------------------------------------------------------------------------------------
// Iteration and Spreading on Sparse array 

// NB:Some iterations and spreading on sparse array give undefined. So it is not preferred.

// const arr = [1, 2, , , 5]; 
// console.log(arr[2]); // undefined

// For...of
// for (const i of arr) {
//     console.log(i);     // Logs: 1 2 undefined undefined 5
// }

// Copying Array-Using Spreading
// const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]
 
// --------

// NB:Some iterations and spreading on sparse array will not logs the empty space (with undefined).  

// const arr = [1, 2, , , 5]; 
// for (const key in arr) {
//   console.log(key);     // Logs: '0' '1' '4'
// }

// In array iteration methods, empty slots are skipped.
// const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
// arr.forEach((i) => console.log(i)); // 1 2 5
// const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
// const hasFalsy = arr.some((k) => !k); // false

// Property enumeration
// const keys = Object.keys(arr); // [ '0', '1', '4' ]

// Spreading into an object uses property enumeration, not the array's iterator
// const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }

// -------------------------------------------------------------------------------------------------------------------------------------------
// Grouping elements by array

// const inventory = [
//     { name: "asparagus", type: "vegetables" },
//     { name: "bananas", type: "fruit" },
//     { name: "goat", type: "meat" },
//     { name: "cherries", type: "fruit" },
//     { name: "fish", type: "meat" },
// ];
// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result);
// Logs-
// {
//   vegetables: [{ name: 'asparagus', type: 'vegetables' }],
//   fruit: [
//     { name: 'bananas', type: 'fruit' },
//     { name: 'cherries', type: 'fruit' }
//   ],
//   meat: [
//     { name: 'goat', type: 'meat' },
//     { name: 'fish', type: 'meat' }
//   ]
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------
// Multi-dimensional array

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log( matrix[0][1] ); // 2, the second value of the first inner array

// const a = new Array(4);
// for (let i = 0; i < 4; i++) {
//   a[i] = new Array(4);
//   for (let j = 0; j < 4; j++) {
//     a[i][j] = `[${i}, ${j}]`;
//   }
// }
// console.log(a);
// Logs-
// Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
// Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
// Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
// Row 3: [3, 0] [3, 1] [3, 2] [3, 3]

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Use Array to store other properties
// NB:Not proposed as breaks the purpose of array. It is an Object functionality and allows only this way storing as array is an object.

// const arr = [1, 2, 3];
// arr.property = "value";
// console.log(arr.property); // "value"
// console.log(arr.length); // 3

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Array Methods
// NB:Methods donot mutate array-  concat(), join(), filter(), flat(), flatMap(), map(), slice()
//    Methods mutate array- push(), pop(), shift(), unshift(), splice(), sort(), reverse(), copyWithin(), fill()

// NB:Methods does not show undefined for empty slots.(either leave or show <empty item>) -
//    concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice(). 
//    Methods  show undefined for empty slots -
//    entries(), fill(), find(), findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(), values(), and with().


// -----
// concat()- method returns an array joining two or more arrays.
// let myArray = ["1", "2", "3"];
// let conc=myArray.concat("a", "b", "c");
// console.log(conc);     // ["1", "2", "3", "a", "b", "c"]
// console.log(myArray);  // [ '1', '2', '3' ] 

// join() - method returns string joining all elements of an array into a string.
// NB:Can be used to convert an array to a string
// const myArray = ["Wind", "Rain", "Fire"];
// const list = myArray.join(" - "); 
// console.log(list);   //  "Wind - Rain - Fire"
// --another 
// const fruits = ["Apple", "Banana"];
// const fruitsString = fruits.join(", ");
// console.log(fruitsString); // "Apple, Banana"

// push() - method returns an array by adding one or more elements to the end of an array 
// NB: fruits.push(2) is equal to fruits[fruits.length] = 2
// const myArray = ["1", "2"];
// myArray.push("3");
// console.log(myArray); // ["1", "2", "3"]
// --
// const fruits = ["Apple", "Banana"];
// const newLength = fruits.push("Orange");
// console.log(fruits);    // ["Apple", "Banana", "Orange"]
// console.log(newLength); // 3--not logging array but length
// NB:Way to avoid mutating the original array-
// const myArray = ["1", "2"];
// const newArr = [...myArray];   // Create a shallow copy of myArray
// newArr.push("3");              // Mutate the copy by pushing "3"
// console.log(myArray);          // [ '1', '2' ] (original array is unchanged)
// console.log(newArr);           // [ '1', '2', '3' ]

// pop() -method removes the last element from an array and returns that element.
// const myArray = ["1", "2", "3"];
// console.log(myArray.pop());     //  "3"
// console.log(myArray);  //  ["1", "2"]
// ---
// const fruits = ["Apple", "Banana", "Orange"];
// const removedItem = fruits.pop();
// console.log(fruits); // ["Apple", "Banana"]
// console.log(removedItem); // Orange

// shift() - method removes the first element from an array and returns that element.
// const myArray = ["1", "2", "3"];
// const first = myArray.shift();
// console.log(first);     // "1"
// console.log(myArray);  //  ["2", "3"]

// unshift() - method returns an array by adding one or more elements to the front of an array.
// const myArray = ["1", "2", "3"];
// myArray.unshift("4", "5");
// console.log(myArray);        // ["4", "5", "1", "2", "3"]

// slice(start index, endindex+1) - method returns a new array extracting a section of an array. Original array remains same.
// let myArray = ["a", "b", "c", "d", "e"];
// let one = myArray.slice(1,4);  // removal starts at index 1 and extracts all elements till reaching ending index 4-1 (3)
// let two = myArray.slice(1);    // removal starts at index 1 and extracts all elements till end
// let three = myArray.slice(-1); // removal starts at index -1 and extracts all elements till end; but no next element as -1 is last element
// let four = myArray.slice(-3);  // removal starts at index -3 and extracts all elements till end
// console.log(myArray);  // [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(one);      // [ 'b', 'c', 'd' ]  
// console.log(two);      // [ 'b', 'c', 'd', 'e' ]   
// console.log(three);    // [ 'e' ]
// console.log(four);     // [ 'c', 'd', 'e' ]
// console.log(myArray);  // [ 'a', 'b', 'c', 'd', 'e' ] (unchanged)


// splice(start, deleteCount, add item1, add item2, ..) - method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array. 
// NB: difference from slice is- splice mutates original array, removes start at given index and remove elements consecutive from the starting index, and can optionally add new elements.
// const myArray = ["1", "2", "3", "4", "5"];  
// const removed =myArray.splice(0, 3, "a", "b", "c", "d");  // starts at index 0 and extract 3 consecutive elements from starting index and add a,b,c,d in that place.
// console.log(myArray);  // [  'a', 'b', 'c', 'd','4', '5' ] (modified)
// console.log(removed);  // [ '1', '2', '3']
// --
// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const removedItems = fruits.splice(0,2); --removal starts at index 0 and removes 2 item from starting index.
// console.log(fruits);        //  ["Strawberry", "Mango", "Cherry"]
// console.log(removedItems);  // ["Apple", "Banana"]
// --
// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const removedItems = fruits.splice(2); -- removal starts at index 2 and remove items til end
// console.log(fruits);        //  ["Apple", "Banana"] 
// console.log(removedItems);  //  ["Strawberry", "Mango", "Cherry"]
// --
// const myArray = ["1", "2", "3", "4", "5"]; 
// const removedItems = myArray.splice(-3); ---- removal starts at index -3 and remove items til end
// console.log(removedItems); // [ '3', '4', '5' ]
// console.log(myArray);      // [ '1', '2' ]


// with() - returns a new array with the element at the given index replaced with the given value.
// const arr = [1, 2, 3, 4, 5];
// const replace=arr.with(2, 6);
// console.log(replace); // [1, 2, 6, 4, 5] ---replace index 2 with 6.
// console.log(arr); // [1, 2, 3, 4, 5] -- org array not changed

// at() - method returns the element at the specified index in the array, or 'undefined' if the index is out of range.
// const myArray = ["a", "b", "c", "d", "e"];
// myArray.at(-2); // "d"  - the second-last element of myArray

// reverse() - method transposes the elements of an array.
// const myArray = ["1", "2", "3"];
// myArray.reverse();
// console.log(myArray);  // [ '3', '2', '1' ]

// flat() - method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let myArray = [1, 2, [3, 4]];
// let flat = myArray.flat();
// console.log(myArray);  // [ 1, 2, [ 3, 4 ] ]
// console.log(flat);     // [ 1, 2, 3, 4 ]

// sort() - method  returns array by sorting the elements of an array
// const myArray = ["Wind", "Rain", "Fire"];
// myArray.sort();
// console.log(myArray); // [ 'Fire', 'Rain', 'Wind' ]

// forEach() - method executes callback on every array item but  does not return a new array or any value. Instead, it always returns undefined.
// const a = ["a", "b", "c"];
// a.forEach((element) => {
//   console.log(element);  // a , b , c
// });
// --
// let result = a.forEach((element) => {
//     return element ;
// });
// console.log(result);  // Output: undefined

// map() - method returns a new array  executing callback on every array item.
// const a1 = ["a", "b", "c"];
// const a2 = a1.map((item) => item.toUpperCase());
// console.log(a2); // ['A', 'B', 'C']

// flatMap() - method runs map() followed by a flat() of depth 1.
// const a1 = ["a", "b", "c"];
// const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
// console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']

// filter() - method returns a new array containing the items for which callback returned true.
// const a1 = ["a", 10, "b", 20, "c", 30];
// const a2 = a1.filter((item) => typeof item === "number");
// console.log(a2); // [10, 20, 30]

// find() - method Searches for an element in the array that satisfies a provided testing function and returns the first element that passes the test.
// const a1 = ["a", 10, "b", 20, "c", 30];
// const i = a1.find((item) => typeof item === "number");
// console.log(i); // 10
// ---
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// const userToUpdate = users.find(user => user.name === "Alice");
// console.log(userToUpdate);  // { name: 'Alice', age: 25 }
// userToUpdate.name="farsana";
// console.log(userToUpdate);  // { name: 'farsana', age: 25 }
// console.log(users);         // [ { name: 'farsana', age: 25 }, { name: 'Bob', age: 30 },{ name: 'Charlie', age: 35 } ] --Alice changed to farsana


// findLast() - method returns the last item for which callback returned true.
// const a1 = ["a", 10, "b", 20, "c", 30];
// const i = a1.findLast((item) => typeof item === "number");
// console.log(i); // 30

// findIndex() - method Searches for an element in the array that satisfies a provided testing function and returns the index of the first element that passes the test.
// const a1 = ["a", 10, "b", 20, "c", 30];
// const i = a1.findIndex((item) => typeof item === "number");
// console.log(i); // 1
// const j = a1.findIndex((item) => typeof item === "boolean");
// console.log(j); // -1

// findLastIndex() - method returns the index of the last item for which callback returned true.
// const a1 = ["a", 10, "b", 20, "c", 30];
// const i = a1.findLastIndex((item) => typeof item === "number");
// console.log(i); // 5

// indexOf() - method searches the array for searchElement and returns the index of the first match.
// const a = ["a", "b", "a", "b", "c"];
// console.log(a.indexOf("b")); // 1
// Now try again, starting from after the last match
// console.log(a.indexOf("b", 2)); // 3
// console.log(a.indexOf("c")); // 4
// console.log(a.indexOf("z")); // -1, because 'z' was not found-not means last element

// lastIndexOf() - method works like indexOf, but starts at the end and searches backwards.
// const a = ["a", "b", "c", "d", "a", "b"];
// console.log(a.lastIndexOf("b")); // 5
// Now try again, starting from before the last match
// console.log(a.lastIndexOf("b", 4)); // 1
// console.log(a.lastIndexOf("z")); // -1

// every() - method returns true if callback returns true for every item in the array.
// NB:Boolean output
// const a1 = [1, 2, 3];
// console.log(a1.some(num=>num>0));  // true
// --
// function isNumber(value) {
//     return typeof value === "number";
// }
// const a1 = [1, 2, 3];
// console.log(a1.every(isNumber)); // true
// console.log(a1.every(num=>num>0));  // true
// const a2 = [1, "2", 3];
// console.log(a2.every(isNumber)); // false

// some() - method returns true if callback returns true for at least one item in the array.
// const a1 = [1, 2, 3];
// console.log(a1.some(num=>num>5));  // false
// ----
// function isNumber(value) {
//     return typeof value === "number";
// }
// const a1 = [1, 2, 3];
// console.log(a1.some(isNumber)); // true
// const a2 = [1, "2", 3];
// console.log(a2.some(isNumber)); // true
// const a3 = ["1", "2", "3"];
// console.log(a3.some(isNumber)); // false

// includes() - method returns true if an array contains a certain element. 
// const a1 = [1, 6, 2, 4, 5, 6];
// console.log(a1.includes(2)); //true
// console.log(a1.includes(6, 3)); // true (search starts from index 3)

// reduce() - method returns a single value applying callback(accumulator, currentValue, currentIndex, array) for each value in the array.
// const a = [10, 20, 30];
// const total = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total); // 60

// reduceRight() - method works like reduce(), but starts with the last element.
// const a = [10, 20, 30];
// const total = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total); // 60

// -------------------------
// toString()-

// let arr = [1, 2, 3];
// console.log( arr );           // [ 1, 2, 3 ]
// console.log( String(arr)  );  // "1,2,3"

// NB:In concatenation, array is first converted to string.
// console.log( [] + 1 ); // "1"   
// console.log( [1] + 1 ); // "11"
// console.log( [1,2] + 1 ); // "1,21"
// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

// ------------------------
// Array.from() - This method creates a new, shallow-copied Array instance from an iterable or array-like object.
// console.log(Array.from('foo'));  // ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], (x) => x + x)); //[2, 4, 6]

// Array.isArray() - This method determines whether the passed value is an Array.
// console.log(Array.isArray([1, 3, 5])); //true
// console.log(Array.isArray('[]')); // false
// console.log(Array.isArray(new Array(5))); // true

// Array.of() - This method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// console.log(Array.of('foo', 2, 'bar', true)); // ["foo", 2, "bar", true]
// console.log(Array.of()); // []


// --------------------------------------------------------------------------------------------------------------------------------------------------
// Don’t use == to compare arrays 

// Two objects are equal == only if they’re references to the same object.Array also an object.ie, arr=[]; then anyarr=arr;
// console.log( [] == [] ); // false
// console.log( [0] == [0] ); // false
// console.log( 0 == [] ); // true
// console.log('0' == [] ); // false
// console.log( '' == [] ); // true

// -----------------------------------------------------------------------------------------------------------------------------------------------
// NOTE:
// Arrays in JavaScript can work both as a queue and as a stack

// Queue is one of the most common uses of an array. 
// In computer science, this means an ordered collection of elements which supports two operations:
// push - appends an element to the end.
// shift - get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
// It follows FIFO - First-In-First-Out

// Stack is another usecase of array.Here, New elements are added or taken always from the “end”.
// It supports two operations:
// push - adds an element to the end.
// pop - takes an element from the end.
// It follows LIFO - Last-In-First-Out

// ------------------------------------------------------------------------------------------------------------------------------------------------
