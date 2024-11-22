//                                                    KEYED COLLECTIONS
// Keyed collections are-
// 1-Map
// 2-WeakMap(keys must be objects, garbage collection---at the cost of not having support for clear, size, keys, values…)
// 3-Set
// 4-WeakSet(keys must be objects, garbage collection---at the cost of not having support for clear, size, keys, values…)

// Introduced in ES6 as an alternative to arrays and objects, which were the only data structures available in JS to that point
// Keyed collections are collections of data that are ordered by key not index. 
// These collections can be extremely useful for managing and organizing data in more flexible ways than traditional objects and arrays.
// They are associative in nature. 'Map' and 'Set' objects are keyed collections and are iterable in the order of insertion while weakmap and weakset is not iterable.

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// 1. Map
// Map is a collection of key-value pair items, resembling an Object.And they remembers the original insertion order of the keys.
// But the main difference is that Map allows keys of any type, including objects, functions, or primitive types like numbers or strings. 
// Whereas, plain JavaScript Objects  only allows strings and symbols as keys.
// NB:A key in the Map may only occur once ie, key is unique in the Map's collection. If we try to set a key that already exists, the value will be updated.

// Common Methods:
// new Map() – creates the map.
// set(key, value) - Adds or updates a key-value pair; returns the map itself-so chaining possible.
// get(key) - Retrieves the value associated with the key.
// has(key) - Checks if the key exists.
// delete(key) - Removes the key-value pair.
// clear() – removes everything from the map.
// size - Returns the number of key-value pairs.

// Example:
// const detail = new Map();
// detail.set('name', 'Alice');
// detail.set('name', 'Alice');---will not add as unique
// detail.set(1, 'Two');
// detail.set(1, 'One');---update allowed
// console.log(detail.get('name'));  // 'Alice'
// console.log(detail.get(1));       // 'One'
// console.log(detail.size);         // 2
// console.log(detail);              // Map(2) { 'name' => 'Alice', 1 => 'One' }
// console.log(detail.has('name'));      // true-- can search only  by key
// console.log(detail.has('Alice'));     // false
// console.log(detail.values());         // [Map Iterator] { 'Alice', 'One' }
// console.log(detail.keys());           // [Map Iterator] { 'name', 1 }
// console.log(detail.delete(1));        // true
// console.log(detail.delete('One'));    // false--can delete only by key

// --------------------
// Enumeration- use  for...of loop to return an array of [key, value] for each iteration.

// 3 Methods
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// for (const [key, value] of detail) {
//     console.log(`${key} goes ${value}`);   //name goes Alice , 1 goes One
// }
// --
// for (const v of detail) { // same as detail.entries()
//     console.log(v);   // [ 'name', 'Alice' ] , [ 1, 'One' ]
// }
// --
// for (const v of detail.values()) {
//     console.log(v);   // Alice , One
// }
// --
// for (const v of detail.keys()) {
//     console.log(v);   // 'name' , 1
// }
// detail.clear();
// console.log(detail.size);  //0

// ---ANOTHER EXAMPLE
// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
// ]);
// // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     alert(entry); //  [ 'cucumber', 500 ] , [ 'tomatoes', 350 ] , [ 'onion', 50 ]
//   }
// // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // cucumber, tomatoes, onion
//   }
// // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
//   }
// the same with forEach()
// recipeMap.forEach( (value, key) => {
//     console.log(`${key}: ${value}`); // cucumber: 500 , tomatoes: 350 , onion: 50
// });
  
// ---------------------UNDERSTAND
// Objects as keys in Map-

// Using objects as keys is one of the most notable and important Map features. 
// The same does not count for Object- as String as a key in Object is fine, but we can’t use another Object as a key in Object.
// let john = { name: "John" };
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// console.log( visitsCountMap.get(john) ); // 123

// the same above will look like this in object-but not useful
// let john = { name: "John" };
// let ben = { name: "Ben" };
// let visitsCountObj = {}; // try to use an object
// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced
// // That's what got written!
// console.log( visitsCountObj["[object Object]"] ); // 123--- visitsCountObj is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

// -------------------
// Chaining in Map
// let map = new Map();
// map.set('banana', 1).set('orange', 2).set('meat', 4);     //---- chaining as set(key,value) returns the map itself

// ------------------
// Convert a 2D key-value Array into a map - Using Map constructor
// const kvArray = [
//     ["key1", "value1"],
//     ["key2", "value2"],
//   ];
// const myMap = new Map(kvArray);
// console.log(myMap.get("key1")); // "value1"

// -------------------
// Converting between Map and Object
// 1-Object to Map - using Object.entries()
// const obj = {
//     'name': John,
//     'id': 1,
// }
// const map = new Map(Object.entries(obj));     // Here, Object.entries() returns the array of key/value pairs: [ ["name","John"], ["id", 1] ]. That’s what Map needs.
// console.log(map.get('name'))  // Outputs John

// 2-Map to Object - using Object.fromEntries()
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);
// let obj = Object.fromEntries(map); // make a plain object (*)
// console.log(obj)         //{ banana: 1, orange: 2, meat: 4 }
// console.log(obj.orange); // 2

// -----------------
// Merging of two maps
// const first = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
//   ]);
// const second = new Map([
//     [1, "uno"],
//     [2, "dos"],
// ]);
// Merge maps with an array. The last repeated key wins.
// const merged = new Map([...first, ...second, [1, "eins"]]);
// console.log(merged.get(1)); // eins
// console.log(merged.get(2)); // dos
// console.log(merged.get(3)); // three
  
// --------------
// Compare 'Map' and plain 'Object' - 
// Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.
// 1-The keys of an Object are strings or symbols, whereas Map can have keys of any type.
// 2-Can get the size of a Map easily, while you have to manually keep track of size for an Object.
// 3-The iteration of maps is in insertion order of the elements.

// --------------
// Three tips  to decide where to use a Map or an Object:
// 1-Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
// 2-Use maps if there is a need to store primitive values as keys because object treats each key as a string 
// 3-Use objects when there is logic that operates on individual elements.

// ----------------------------------------------------------------------------------------------------------------------------------------------

// 2. WeakMap 
// WeakMap is a Map-like collection of key/value pairs whose keys must be objects(not primitive types), 
// and the keys are held weakly. This means that if the key Object is no longer referenced elsewhere, it can be garbage collected, which is not possible with Map.
// It supports add, has and delete, but not size, keys() and no iterations.
// It is not enumerable.So there is no method to obtain a list of the keys in a WeakMap.
// NB:Similar to Map, A key in WeakMap is unique . If we try to set a key that already exists, the value will be updated.
// NB:Difference from Map is keys must be Objects and garbage collection if not referenced.

// WeakMap Use Case: 
// 1-WeakMaps are useful when you want to associate metadata with an object but don’t want that association to prevent the object from being garbage collected.
// Example:
// let obj = { name: 'Alice' };
// const weak = new WeakMap();
// weak.set(obj, 'value');
// console.log(weak.get(obj)); // 'value'
// console.log(weak);  // WeakMap { <items unknown> }
// obj = null;  // The object is now eligible for garbage collection-ie,obj removed from memory

// With above same example-what happens with map with no garbage collection
// let obj = { name: 'Alice' };
// const map = new Map();
// map.set(obj, 'value');
// obj = null; // overwrite the reference--However, obj is still stored inside the map and we can get it by using map.keys()


// 2-Another use case of WeakMap objects is to store private data for an object, or to hide implementation details. 
// weakMap.set(john, "secret documents");   
// -----if john dies, secret documents will be destroyed automatically
// NB:The private data and methods belongs inside the object and are stored in the privates object, which is a WeakMap. Everything exposed on the instance and prototype is public; everything else is inaccessible from outside world because privates is not exported from the module.
// const privates = new WeakMap();
// function Public() {
//   const me = {
//     // Private data goes here
//   };
//   privates.set(this, me);
// }
// Public.prototype.method = function () {
//   const me = privates.get(this);
//   // Do stuff with private data in `me`
//   // …
// };
// module.exports = Public;

// 3-used for caching
// 📁 cache.js
// let cache = new WeakMap();
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculate the result for */ obj;
//     cache.set(obj, result);
//     return result;
//   }
//   return cache.get(obj);
// }
// 📁 main.js
// let obj = {/* some object */};
// let result1 = process(obj);
// let result2 = process(obj);
// obj = null; // Now, Can't get cache.size, as it's a WeakMap, but it's 0 or soon be 0 when obj gets garbage collected, cached data will be removed as well


// ---
// Why Key type Only Objects and Not Primitives?
// Primitive values (such as numbers, strings, and booleans) cannot be garbage collected because they are not reference types—they are stored directly in memory. 
// As a result, if primitives were allowed as WeakMap keys, there would be no need for the weak reference behavior that WeakMap provides.
// Objects, on the other hand, are reference types. This means that an object can be deleted from memory if it is no longer referenced elsewhere in the code. 
// Since WeakMap is designed to allow garbage collection for keys that are objects, it works specifically with objects, not primitives.

// ---------------------------------------------------------------------------------------------------------------------------------------------
// 3. Set
// A Set object is a collection of unique values of any type (whether primitive values or object references). 
// Duplicate values are automatically ignored in a Set, making it a great way to ensure a collection contains only unique elements.
// Set resemble arrays in the sense that they are also collections of values. But, unlike arrays, these data collections can only include unique values. In other words, you can’t have duplicates in a set.
// It allows enumeration

// Common Methods:
// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// add(value) - Adds a value to the set.
// has(value) - Checks if a value exists in the set.
// delete(value) - Removes a value from the set.
// clear() – removes everything from the set.
// size - Returns the number of values in the set.

// Example:
// const myset = new Set();
// myset.add(1);
// myset.add(1);  // Duplicate, ignored
// const o = { a: 1, b: 2 };
// myset.add(o);
// myset.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
// myset.add("hi");
// console.log(myset.has(1)); // true
// console.log(myset.size);   // 4
// console.log(myset);        // Set(4) { 1, { a: 1, b: 2 }, { a: 1, b: 2 }, 'hi' }
// myset.delete('hi')

// Enumeration- use  for...of loop to return values for each iteration.
// for (const item of myset) {
//     console.log(item);    // 1, { a: 1, b: 2 } , { a: 1, b: 2 }
// }

// ---ANOTHER EXMPLE
// let set = new Set(["oranges", "apples", "bananas"]);
// for (let value of set) {
//     console.log(value);    // "oranges" , "apples" , "bananas"
// }
// // the same with forEach:
// set.forEach((value) => {
//   console.log(value);     // "oranges" , "apples" , "bananas"
// });

// ----ANOTHER EXAMPLE
// let set = new Set();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// console.log( set.size ); // 3
// for (let user of set) {
//     console.log(user); // { name: 'John' }, { name: 'Pete' }, { name: 'Mary' }
// }
// for (let user of set) {
//   console.log(user.name); // John , Pete , Mary
// }

// ---
// Compare 'Set' and 'Array'
// Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index -(arr.splice(arr.indexOf(val), 1)).
// The value NaN cannot be found with indexOf in an array.
// Set objects store unique values. You don't have to manually keep track of duplicates. They are automatically deleted.

// ---
// Converting between Set and Array
// Conversion from Set to Array using Array.from or the spread syntax. 
// a=Array.from(myset);   // [ 1, 'hi' ]
// console.log(a);
// b=[...myset];   
// console.log(b);        // [ 1, 'hi' ]

// Conversion from array to Set using Set constructor
// NB: Set objects store unique values—so any duplicate elements from an Array are deleted when converting!
// mySet2 = new Set([1, 2, 2, 3, 4]);
// console.log(mySet2);  //Set(4) { 1, 2, 3, 4 }

// ------------------------------also look this example of conversion of array to set
// Method 1-using Array.from
// let users = ["John", "Murray", "Jane", "Jane", "Anne"];
// function unique(users) {
//         return Array.from(new Set(users));
// }
// console.log(unique(users)); //[ 'John', 'Murray', 'Jane', 'Anne' ]

// Method 2-using destructing
// let users = ["John", "Murray", "Jane", "Jane", "Anne"];
// let set = new Set(users);
// let arrFromSet = [...set];
// console.log(arrFromSet);

// NB: to remove duplicate elements from an array
// const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];
// console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32] 
// 0R
// console.log(Array.from(new Set(numbers))); // [2, 13, 4, 5, 6, 7, 32]


// ---------------------
// Relation to Strings-
// Case sensitive (set will contain "F" and "f")
// let str=new Set("Firefox"); // Set(7) { 'F', 'i', 'r', 'e', 'f', 'o', 'x' }
// console.log(str);
// Duplicate omission ("f" occurs twice in the string but set will contain only one)
// let str=new Set("firefox"); 
// console.log(str);  // Set(6) { 'f', 'i', 'r', 'e', 'o', 'x' }

// -----------------------------------------------------------------------------------------------------------------------------------------------
// 4. WeakSet
// A WeakSet is similar to Set, but its elements must be objects.
// WeakSet is weak as the objects in the collection are held weakly, this allows the objectsto be garbage collected if there are no other references to them.
// It supports add, has and delete, but not size, keys() and no iterations.
// It is not enumerable
// NB:Difference from Set is keys must be Objects and garbage collection if not referenced.

// Example:
// let events = new WeakSet();
// let event1 = { type: "concert", day: "Saturday" };
// let event2 = { type: "book launch", day: "Wednesday"};
// events.add(event1);
// events.add(event2);
// events.add(event2);---will not add as unique
// console.log(events.has(event1)); // true
// console.log(events);  // WeakSet { <items unknown> }
// event1 = null;  // The events will be cleaned automatically -object event1 is now eligible for garbage collection
// console.log(events.has(event1)); // false----removed automatically

// const ws = new WeakSet();
// const foo = {};
// const bar = {};
// ws.add(foo);
// ws.add(bar);
// ws.has(foo); // true
// ws.has(bar); // true

// WeakSet Use Case: WeakSets are used for tracking purposes without preventing them from being garbage collected; means you don't have to worry about manually cleaning up references to objects (like DOM elements) when you're done with them. Once there are no other references to the object, it will be garbage collected, which helps avoid memory leaks.

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Key Differences between Map/Set and WeakMap/WeakSet:
// Types of Keys: Map and Set can accept keys or values of any type, while WeakMap and WeakSet require keys to be objects.
// Garbage Collection:Map and Set hold strong references to their entries.While, WeakMap and WeakSet allow for garbage collection of their entries if the object references are no longer needed. 
// Enumerable: Map/Set are enumerable while WeakMap/WeakSet not.

// -----UNDERSTAND
// The main advantage of WeakMap and WeakSet is that they have weak reference to objects, so they can easily be removed by garbage collector.
// That comes at the cost of not having support for clear, size, keys, values…
// WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. 
// Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.