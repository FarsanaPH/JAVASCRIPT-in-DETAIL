// A “symbol” represents a unique identifier.
// Symbols are a unique and immutable primitive data type in JavaScript, introduced in ES6 
// They are often used to create unique property keys for objects, ensuring that no property key collisions occur.
// Unlike other types ,Symbol type doesn’t have a literal form.
// To create a new symbol, we use the global Symbol() function.
// We cannot create Symbol objects using the 'new' keyword, as Symbol is immutable.
// Each Symbol value is unique, even if created with the same description. 
// Symbols can be created using the Symbol() function, and their primary use case is to add hidden or special properties to objects that won’t interfere with other properties or methods.

//---------------------------------------------------------------------------------------------------------------------------------------

// Creating a Symbol
// NB: Unlike other types ,Symbol type doesn’t have a literal form. To create a new symbol, we use the global Symbol() function.
// const sym1 = Symbol("identifier1");
// console.log(sym1);         // Symbol(identifier1)
// console.log(typeof sym1);  // "symbol"

//----------
// Each Symbol value is unique, even if created with the same description as they are often used when you need unique values that won't conflict with any other value
// const sym1 = Symbol("identifier1");
// const sym2 = Symbol("identifier2");
// console.log(sym1 === sym2);  // false (even though they have the same description, they are unique)

//------------
// Can't create Symbol objects using the 'new' keyword as Symbol is immutable.
// const symObj = new Symbol();  // TypeError: Symbol is not a constructor

//------------
// Description (Optional)
// NB:Symbols can have an optional description for debugging purposes.
// const sym3 = Symbol("mySymbol");
// console.log(sym3.description);  // "mySymbol"


//---------------------------------------------------------------------------------------------------------------------------------
// SHARING SYMBOLS----[  with Symbol.for()  ]
// NB:ES6 provides you with a global symbol registry that allows you to share symbols globally
//    Use Symbol.for() method instead of Symbol() function to create a symbol that will be shared (not unique ones)
//    Symbol.for() method in JavaScript allows you to create or access symbols from a global symbol registry

// CREATE Symbol.for()-
// let symfor = Symbol.for('ssn');
// console.log(symfor);         //Symbol(ssn)
// console.log(typeof symfor);  //symbol


// NB:Symbol.for() is used to create a symbol that is shared or reused across different parts of your code, or even in different parts of a large application or library,
//    It first checks if a symbol with the same key(here, sharedSymbol) exists in the registry. If it does, it returns that existing symbol. Otherwise, it creates a new symbol and registers it globally.
// let sym1 = Symbol.for('sharedSymbol');
// let sym2 = Symbol.for('sharedSymbol');
// console.log(sym1 === sym2);  // true (Both point to the same symbol)


// Symbol.keyFor()---to get the key associated with a symbol
// let symfor = Symbol.for('sys');      // Registers 'sys' in the global symbol registry
// console.log(Symbol.keyFor(symfor));  // "sys"-------because it's in the global registry
// console.log(symfor.description);     // "sys"-------will get this way also, but description is just a optional identifier but key is used to retrieve or create the symbol in the global registry

//--
// let sym = Symbol('symboldescription');  // Creates a unique, local symbol
// console.log(Symbol.keyFor(sym));        // undefined------ because it's not in the global registry
// console.log(sym.description);           // "symboldescription"

//--------------------------------------------------------------------------------------------------------------------

// SYMBOL USAGES 
// NB:Can use symbols as unique constants for things like status values, event names, or property keys in an object to avoid conflicts.


// 1)Using Symbols as Unique Values to determine task status
// const STATUS = {
//     OPEN: Symbol('open'),
//     IN_PROGRESS: Symbol('in_progress'),
//     COMPLETED: Symbol('completed'),
//     HOLD: Symbol('On hold'),
//     CANCELED: Symbol('Canceled')
// };
// let task = {
//     status: STATUS.OPEN
// };
// if (task.status === STATUS.OPEN) {   //can't directly compare task.status === Symbol('open') as all it do is creating a new unique symbol. If want to this way, USE Symbol.for() method instead.
//     console.log('Task is open');
// }

//-----
// 2)Using Symbols as Object Property Keys --Symbols are often used as unique property keys in objects to prevent key collisions occur.
// const symKey = Symbol("key");
// const obj = {
//     [symKey]: "value",  // not symKey:"value"---- to use a symbol in an object literal {...}, we need square brackets around it.That’s because we need the value from the variable symKey as the key, not the string “symKey”.
//     name: "John"
// };
// console.log(obj);          // { name: 'John', [Symbol(key)]: 'value' }
// console.log(obj[symKey]);  // "value"  -----this is the way to obtain a property that is keyed by a symbol, you must use the symbol itself.
// console.log(obj.symkey);   // undefined-----will not get this way as symkey is a symbol not a string

//“Hidden” object/key property of Symbols----- 
// NB:Symbols Are Not Enumerable ie, Symbol-keyed properties are not included in normal iteration methods like for....in to avoid overwriting behaviour.
// const symKey = Symbol("key");
// const obj = {
//     [symKey]: "value",
//     name: "John"
// };
// console.log(obj);                               // { name: 'John', [Symbol(key)]: 'value' }
// for (let key in obj){ console.log(key); }       // "name"             -------(only string-keyed property got; no symbols)
// console.log(Object.keys(obj));                  // ["name"]           -------(only string-keyed property got in array; no symbol-keyed property)
// console.log(Object.getOwnPropertyNames(obj));   // ["name"]           -------(only string-keyed property got in array; no symbol-keyed property)
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(key)]      -------(way to obtain Symbol-keyed properties in array; but only symbol)
// console.log(Reflect.ownKeys(obj));              // [ 'name', Symbol(key) ]---------(IMP-returns all keys of an object including symbolic ones)


// NB:But Object.assign copies both string and symbol properties:
// let id = Symbol("id");
// let user = {
//   name:"farsana",
//   [id]: 123
// };
// let clone = Object.assign({}, user);
// console.log( clone); // { name: 'farsana', [Symbol(id)]: 123 }

//-------------LEARN need of Using Symbols as Object Property Keys DEEPLY

// By specification, only two primitive types may serve as object property keys:
// 1)string type,
// 2)symbol type.
// If we uses another type, such as number,boolean etc it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].
// whereas symbols do not autoconvert to strings and remain unique even with same description which allows object keys not to collide each other on auto-conversion

// Using string type as property keys (default behavior)
// const obj1 = {
//     name: "John",
//     age: 30
//   };
//   console.log(obj1.name); // "John"
//   console.log(obj1["age"]); // 30

// Automatic conversion from other types to strings as keys
// const obj2 = {};
// obj2[1] = "one";       // Number key gets auto-converted to string "1"
// obj2[true] = "yes";    // Boolean key gets auto-converted to string "true"
// console.log(obj2);     // { '1': 'one', true: 'yes' }
// console.log(obj2["1"]); // "one" (1 is converted to "1")
// console.log(obj2[1]);   // "one" (it will also give)
// console.log(obj2["true"]); // "yes" (true is converted to "true")
  
// Symbols as property keys
// const sym = Symbol("id");
// const obj3 = {};
// obj3[sym] = "unique value";
// console.log(obj3);      // { [Symbol(id)]: 'unique value' }
// console.log(obj3[sym]); // "unique value"
// console.log(obj3["sym"]); // undefined (symbol keys are not converted to strings)
// console.log(obj3["id"]); // undefined (symbol keys are not converted to strings)

// why need symbols over string....look on this string operation-
// let user = { name: "John" };
// Our script uses "id" property
// user.id = "Our id value";
// ...Another script also wants "id" for its purposes...
// user.id = "Their id value"    // Boom! overwritten by another script!
  
// Symbols ensure uniqueness even if they share the same description
// const sym1 = Symbol("key");
// const sym2 = Symbol("key");
// const obj4 = {};
// obj4[sym1] = "value1";
// obj4[sym2] = "value2";
// console.log(obj4);       // { [Symbol(key)]: 'value1', [Symbol(key)]: 'value2' }
// console.log(obj4[sym1]); // "value1"
// console.log(obj4[sym2]); // "value2" (Symbols don't collide even with the same description)

//-------------------------LEARN--- SYMBOLS DONOT AUTO CONVERT TO STRING AND HOW TO CONVERT TO STRING

// Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. 
// Symbols are special. They don’t auto-convert.
// let id = Symbol("id");
// alert(id); // TypeError: Cannot convert a Symbol value to a string

// To show a symbol, we need to explicitly call .toString()
// let id = Symbol("id");
// alert(id.toString()); // Symbol(id) -------- now it works

// symbol.description property to show the description only:
// let id = Symbol("id");
// alert(id.description); // id                        

//---------------------------------------------------------------------------------------------------------------------------------------
// WELL-KNOWN SYMBOLS
// NB:ES6 provides predefined symbols which are called well-known symbols used for some internal operations.
//    These symbols allow you to customize the behavior of objects in ways that interact with the language's internal processes. 
//    Each well-known symbol is a static property of the Symbol object.

// 1. Symbol.hasInstance: Customize instanceof behavior
// class MyClass {
//     static [Symbol.hasInstance](instance) {        
//         return typeof instance === 'number';  // Returns true for numbers--------here checks 42==='number' or 'hello'==='number'
//     }
// }
// console.log(42 instanceof MyClass); // true
// console.log("Hello" instanceof MyClass); // false
//------------------another example
// class Stack {
//     static [Symbol.hasInstance](obj) {       
//         return Array.isArray(obj);           //checks  Array.isArray( [] )
//     }
// }
// console.log([] instanceof Stack); // true


// 2. Symbol.iterator: Make an object iterable
//                     When an object has a Symbol.iterator method, it tells JavaScript that this object is iterable. The method should return an iterator, which is an object that implements the next() method.
// const myIterable = {
//     *[Symbol.iterator]() {  // Generator function for custom iteration
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// };
// for (let value of myIterable) {
//     console.log(value); // 1, 2, 3
// }
//--------another example
// class List {
//     constructor() {
//         this.elements = [];
//     }
//     add(element) {
//         this.elements.push(element);
//         return this;
//     }
//     *[Symbol.iterator]() {
//         for (let element of this.elements) {
//             yield  element;
//         }
//     }
// }
// let chars = new List();
// chars.add('A')
//      .add('B')
//      .add('C');
// because of the Symbol.iterator
// for (let c of chars) {
//     console.log(c);
// }
//output:
// A
// B
// C


// 3. Symbol.isConcatSpreadable: Control whether an object is spreadable in concat()
// normal array spreading
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// console.log(arr1.concat(arr2)); // [1, 2, 3, 4] (normal array spreading)

// without [Symbol.isConcatSpreadable]
// let arr1 = [1, 2];
// let obj1={0:'a', 1:'b'};
// console.log(arr1.concat(obj1));   // [ 1, 2, { '0': 'a', '1': 'b' } ] -----object is not spreading

// with [Symbol.isConcatSpreadable]: true
// let arr1 = [1, 2];
// let Spreadableobj = {  0: 'a', 1: 'b', length: 2, [Symbol.isConcatSpreadable]: true };
// console.log(arr1.concat(SpreadableObj));  // [ 1, 2, 'a', 'b' ]  -----object is not spreading

// with [Symbol.isConcatSpreadable]: false
// let arr1 = [1, 2];
// let nonSpreadableObj = { 0: 'a', 1: 'b', length: 2,  [Symbol.isConcatSpreadable]: false };
// console.log(arr1.concat(nonSpreadableObj)); // [1, 2, {0: 'a', 1: 'b', length: 2, Symbol(Symbol.isConcatSpreadable): false}]


// 4. Symbol.toPrimitive: Customize object-to-primitive conversion
//                        The Symbol.toPrimitive method takes a hint argument that has one of three values: “number”, “string”, and “default”.
// without [Symbol.toPrimitive]
// const obj={name:'farsana',age:23};
// console.log(+obj);        //  NaN
// console.log(`${obj}`);    // "[object Object]"

// with [Symbol.toPrimitive]
// const myObj = { 
//      name:'farsana',age:23,
//     [Symbol.toPrimitive](hint) {
//         if (hint === 'number') {
//             return this.age;
//         }
//         return "default value";
//     }
// };
// console.log(+myObj); // 23 (number conversion)
// console.log(`${myObj}`); // "default value" (string conversion)
//--------------another example
// function Money(amount, currency) {
//     this.amount = amount;
//     this.currency = currency;
// }
// Money.prototype[Symbol.toPrimitive] = function(hint) {
//     var result;
//     switch (hint) {
//         case 'string':
//             result = this.amount + this.currency;
//             break;
//         case 'number':
//             result = this.amount;
//             break;
//         case 'default':
//             result = this.currency;
//             break;
//     }
//     return result;
// }
// var price = new Money(799, 'USD');
// console.log(String(price)); // 799USD
// console.log(+price + 1); // 800
// console.log('Price is ' + price); // Price is USD

//-----EXTRA
// 5. Symbol.match: Custom behavior for String.prototype.match()
// const myMatcher = {
//     [Symbol.match](str) {
//         return str.includes('test') ? ['matched'] : null;
//     }
// };
// console.log('This is a test'.match(myMatcher)); // ["matched"]

// 6. Symbol.replace: Custom behavior for String.prototype.replace()
// const myReplacer = {
//     [Symbol.replace](str, replacement) {
//         return str.split(' ').join(replacement);
//     }
// };
// console.log('Hello world!'.replace(myReplacer, '-')); // "Hello-world!"

// 7. Symbol.split: Custom behavior for String.prototype.split()
// const mySplitter = {
//     [Symbol.split](str) {
//         return str.split('').reverse();
//     }
// };
// console.log('Hello'.split(mySplitter)); // ['o', 'l', 'l', 'e', 'H']




















