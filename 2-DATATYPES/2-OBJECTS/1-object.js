// JavaScript object is a data structure that allows us to have key-value pairs; 
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
// An object is a collection of key-value pairs where each key is either a string (or symbol) and the value can be any data type, including other objects or functions.
// Comparing it to a real-world object(an object is a standalone entity, with properties and type.), a pen is an object with several properties such as color, design, the material it is made of, etc.
// In the same way, JavaScript objects can have properties that define their characteristics.
// A property is a “key: value” pair, where key (also called “property name” or “identifier”) is a string or symbol , and value can be anything.
// Imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.

//--------------------------------------------------------------------------------------------------------------------------------------------
//CREATE OBJECT
//NB: Object can be created as object literals/initializers ( {} ) or object constructor( Object() )

// let user = {name: "farsana", age:23};  // "object literal" syntax ----usually figure brackets {...} are used. That declaration is called an object literal.
// let user = new Object();               // "object constructor" syntax----------But, there is no need to use new Object().For readability, simplicity and execution speed, use the object literal method.

//---------
// let person = {
//     name: "farsana",                            // property name may be an identifier
//     2: "two",                                   // or a number
//     "property n": "multiple words",             // or a string
//     greet: function() {                         // or a function(ie,method)
//         console.log("Hello, my name is " + this.name);
//     },
//     // Another method (shorter syntax for methods in modern JavaScript)
//     getDetails() {        
//         return `${this.name} is  name.`;
//     }
// };
// console.log(person); //{'2': 'two', name: 'farsana', 'property n': 'multiple words', greet: [Function: greet], getDetails: [Function: getDetails]}


// let person = new Object();
// person.name = "Farsana";
// person.age = 25;
// person.greet = function() {
//     console.log("Hello, my name is " + this.name);
//   };
// console.log(person); //{ name: 'Farsana', age: 25, greet: [Function (anonymous)] }

//---------------------------------------------------------------------------------------------------------------------
//ADD, REMOVE OR READ DATA FROM OBJECTS
// NB:The most common way to protect an object from being changed is by using the const keyword.
// With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.

// access or read data [dot notation and square bracket notation]
// user = {name: "farsana", age:23};
// console.log(user.name)     //"farsana"
// console.log(user["age"])   //23 ----dont forget to add "" within square bracket ;otherwise will throw ReferenceError: age is not defined 
//                            //       because only two primitive types serve as object property keys-string type and symbol type. All other types are autoconverted to string ie,user[1] is user["1"] and user[true] is user["true"]
// console.log(user.location)  //undefined----no such property

// add data
// user = {name: "farsana"};
// user.location="kochi";     // dont forget to add "" for string values ;otherwise will throw ReferenceError: kochi is not defined
// user.age=23;
// console.log(user);         // { name: 'farsana',  location: 'kochi', age: 23 }

// update data
// user = {name: "farsana", age:23};
// user.name="shebeel";
// console.log(user);           //{ name: 'shebeel', age: 23 }

// delete or remove data
// user={name: "farsana", age:23};
// delete user.age;
// console.log(user);            //{ name: 'farsana' }
//-----another
// const myobj = new Object();
// myobj.a = 5;
// myobj.b = 12;
// delete myobj.a;
// console.log("a" in myobj); // false

//------------------------------------------------------------------------------------------------------------------------------
// COMPARE OBJECTS

// In JavaScript, objects are a reference type. 
// Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

// Two objects with the same properties are not equal
// const fruit = { name: "apple" };
// const fruitbear = { name: "apple" };
// fruit == fruitbear; // return false
// fruit === fruitbear; // return false

// Two objects where one referencing to other are equal
// const fruit = { name: "apple" };
// const fruitbear = fruit; // Assign fruit object reference to fruitbear
// fruit == fruitbear;  // return true
// fruit === fruitbear; // return true
// fruit.name = "grape";
// console.log(fruitbear); // { name: "grape" } -------not { name: "apple" }

//------------------------------------------------------------------------------------------------------------------------------------------
// MULTIWORD KEYS

// Can use multiword property names, but they must be quoted:
// let user = {
//     name: "farsana",
//     age: 23,
//     "likes coding": true  // multiword property name must be quoted
//   };
// console.log(user);        //{ name: 'John', age: 30, 'likes birds': true }

// dot operator throw error while [] works on multiproperty names
// let user = { name:"farsana", age:23, "likes coding": false };
// user.likes coding = true;           //syntax error-----dot operator need valid property name.It does not work if the property name contain spaces or special characters
// user["likes coding"] = true;        // this works

//--------------------------------------------------------------------------------------------------------------------------------------
// SQUARE BRACKETS

// 1)Works on multiproperty names
// let user = { name:"farsana" };
// user["likes coding"]=true;       
// user.likes coding=true;          //not works---syntax error

// 2)works on number starting property names
// let user= { name:"farsana" };
// user.8:30="getup";          //syntax error--dot operator need valid property name.It does not work if the property name contain spaces or special characters
// user["8:30"]="getup";       //this works
// console.log(user);          //{ name: 'farsana', '8:30': 'getup' }
// console.log(user.8:30);     //not works---syntax error
// console.log(user["8:30"]);  //getup

// 3)works on property names held in variables---This allows accessing any property as determined at runtime
// let user = { name:"farsana" };
// let key="age";                    
// user[key]=23;                    // not added "" within [] as key is a variable.... user[key] means user["age"]
// console.log(user);               // { name: 'farsana', age: 23 }
// console.log(user[key]);          // 23
// console.log(user.key);           // undefined-----cant get with dot operator; as it means a property name named "key" in user
// console.log(user.age);           // 23
// key="location";                  // same key variable used
// user[key]="kochi"; 
// console.log(user);              // { name: 'farsana', age: 23, location: 'kochi' }
  

// 4)Dynamicity of square bracket--i.e. not determinable until runtime.
// let user = { name:"farsana" };
// let key = prompt("What do you want to know about the user?","name");         //--default prompt value set to "name"
// alert( user[key] );   // farsana-----if prompted "name" ie, key="name"

//-------------------------------------------------------------------------------------------------------------------------------
// COMPUTED PROPERTIES-------Allows the use of variables as keys.
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// let fruit = prompt("Which fruit to buy?", "apple");      //---default prompt value set to "apple"
// let bag = {
//   [fruit]: 5,      // the name of property taken from the variable fruit---So, if a visitor enters "apple", bag will become {apple: 5}.
// };
// alert( bag.apple ); // 5 if fruit="apple"
// alert( bag[fruit]) // 5 (since fruit === "apple"
//----same as
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};
// bag[fruit] = 5;   // if a visitor enters "apple", bag will become {apple: 5}.


// Can use for more complex expressions inside square brackets:
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

//--------------------------------------------------------------------------------------------------------------------------------
// Objects and Functions (Methods)

// let person={ name:"farsana" , age:23 , greet:function(){ console.log("Hello, my name is " + this.name);} }
// person.greet();  //  "Hello, my name is Farsana"

//---------------------------------------------------------------------------------------------------------------------------------
// Nested Objects

// let personWithAddress = {
//     name: "Farsana",
//     address: {
//         city: "Mumbai",
//         country: "India"
//     }
// };
// console.log(personWithAddress);               // { name: 'Farsana', address: { city: 'Mumbai', country: 'India' } }
// console.log(personWithAddress.address);       // { city: 'Mumbai', country: 'India' }
// console.log(personWithAddress.address.city);  // "Mumbai"

//-------------------------------------------------------------------------------------------------------------------------------
// Check presence of Properties in an object

// let person={ name:"farsana" , age:23 , 8:"id" ,greet:function(){ console.log("Hello, my name is " + this.name);} }
// person.__proto__.welcome = function() { 
//     console.log("Hello!"); 
// };
// console.log("name" in person);    // true
// console.log("age" in person);     // true
// console.log("8" in person);       //true
// console.log(8 in person);         //true
// console.log(7 in person);         //false
// console.log("greet" in person);   //true
// console.log("welcome" in person); //true --------prototype also said as true hence use Object.hasOwn()  to check a property is in prototype or own
// console.log(person.hasOwnProperty("greet"));     // true  ---Object.hasOwn() is used to exclude properties from the object's prototype chain and only show "own properties"
// console.log(person.hasOwnProperty("welcome"));  // false 

//--------------------------------------------------------------------------------------------------------------------------------
// Enumerating properties

// There are three native ways to list/traverse object properties:
// for....in loop(key gives property names obj[key] gives its values)---This method iterates over all enumerable properties of an object, including those in its prototype chain.
// Object.keys()---This method returns an array containing only the own enumerable properties (keys) of the object, not those from the prototype chain.
// Object.getOwnPropertyNames()---This method returns an array of all own properties (including non-enumerable ones) of the object, excluding the prototype properties.


// for....in loop - Iterate Over Properties (It includes own and prototype properties)
// let person={ name:"farsana" , age:23 , greet:function(){ console.log("Hello, my name is " + this.name);} }
// person.__proto__.welcome = function() { console.log("Hello"); }; // Adding a property to the prototype
// for (let key in person) {
//     console.log(key)                           // 'name','age','greet','welcome'-----prototype included
//     console.log(person[key])                   // farsana,23,[Function: greet],[Function (anonymous)]
//     console.log(key + ": " + person[key]);     // name: Farsana, greet: function(){ console.log("Hello, my name is " + this.name);}, welcome: function() { console.log("Hello"); }
// }
// --another example with prototype (to remove included properties of prototype)
// let animal = {
//     eats: true
//   }; 
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
//     if (isOwn) {
//       console.log(`Own: ${prop}`); // Own: jumps
//     } else {
//       console.log(`Inherited: ${prop}`); // Inherited: eats
//     }
// }

// ----
// Object Methods- (It only includes own properties)
// let sym=Symbol("id");
// let personWithAddress = {
//     name: "Farsana",
//     address: {
//         city: "Mumbai",
//         country: "India"
//     },
//     greet:function(){ console.log("Hello, my name is " + this.name);},
//     [sym]:123,
// };
// personWithAddress.__proto__.welcome = function() { console.log("Hello"); }; // Adding a property to the prototype

// NB: ----prototype will not be included in all of these methods
// console.log(personWithAddress);                                    //  {name: 'Farsana', address: { city: 'Mumbai', country: 'India' },  greet: [Function: greet], [Symbol(id)]: 123 } 
// console.log(Object.keys(personWithAddress));                       //  ["name", "address" ,"greet"]    
// console.log(Object.values(personWithAddress));                     //  ["Farsana", {city: "Mumbai", country: "India"}, [Function: greet]] 
// console.log(Object.entries(personWithAddress));                    //  [ [ 'name', 'Farsana' ], [ 'address', { city: 'Mumbai', country: 'India' } ], [ 'greet', [Function : greet] ]] ---converts an object into an array of key-value pairs.
// let person = [ ['name', 'Farsana'], ['age', 25], ['job', 'Developer'] ];
// console.log(Object.fromEntries(person));                           //  { name: 'Farsana', age: 25, job: 'Developer' } -----converts an iterable (such as an array or a Map) of key-value pairs and transforms it into an object.Reverse of object.entries
// console.log(Object.getOwnPropertyNames(personWithAddress));        //  [ 'name', 'address', , 'greet' ] 
// console.log(Object.getOwnPropertySymbols(personWithAddress));      //  [  Symbol(id) ]
// console.log(Reflect.ownKeys(personWithAddress));                   //  [ 'name', 'address' , 'greet', Symbol(id) ]  ----symbol included
// console.log(personWithAddress.hasOwnProperty("name"))              //true

//--------------------------------------------------------------------------------------------------------------------------------
// Object.create() METHOD
// NB:Objects can also be created using the Object.create() method. 
// This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

// Animal properties and method encapsulation
// const Animal = {
//     type: "Invertebrates", // Default value of properties
//     displayType() {
//       // Method which will display type of Animal
//       console.log(this.type);
//     },
// };

// Create new animal type called animal1
// const animal1 = Object.create(Animal);
// animal1.displayType(); //  Invertebrates

// Create new animal type called fish
// const fish = Object.create(Animal);
// fish.type = "Fishes";
// fish.displayType(); //  Fishes

//---------------------------------------------------------------------------------------------------------------------------------
// Object Prevention Methods

// NB:The most common way to protect an object from being changed is by using the const keyword.
// With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.

// Prevention methods-
// Object.preventExtensions() -stops adding properties.
// Object.seal() -prevents adding and deleting properties.
// Object.freeze() -prevents any modifications, additions, or deletions.

// Prevents re-assignment (Object is already const)
// const car = { type: "Fiat", model: "500", color: "white" };
// console.log(car); // { type: "Fiat", model: "500", color: "white" }

// Object.preventExtensions()---Prevents adding properties; delete and modify property allowed
// Object.preventExtensions(car);
// console.log(Object.isExtensible(car)); // false
// car.year = 2020;  // No effect, can't add new properties
// console.log(car); // { type: "Fiat", model: "500", color: "white" }
// car.model="501";  // can modify existing properties
// console.log(car); // { type: 'Fiat', model: '501', color: 'white' }

// Object.seal() -Prevents adding and deleting properties; modification allowed
// Object.seal(car);
// console.log(Object.isSealed(car)); // true
// delete car.model;  // No effect, can't delete properties
// console.log(car);  // { type: "Fiat", model: "500", color: "white" }

//  Object.freeze() -prevents any modifications, additions, or deletions.
// Object.freeze(car);
// console.log(Object.isFrozen(car)); // true
// car.color = "red";  // No effect, can't modify properties
// console.log(car);   // { type: "Fiat", model: "500", color: "white" }

//---------------------------------------------------------------------------------------------------------------------------------

// Shallow vs. Deep Copy

// Shallow Copy using Object.assign  -(Object.assign only copies top-level properties)
// Top-level properties are the properties that exist directly on the object itself, not inside nested objects.
// When copying an object using Object.assign(), the properties that contain primitive values (e.g., strings, numbers, booleans) are copied by value.
// However, if a property contains a reference to another object (e.g., a nested object or an array), only the reference to that object is copied, not the object itself.
// This means both the original object and the shallow copy share the same reference to the nested object.

// let original = {
//     name: "Farsana",        // Top-level property (primitive)
//     address: {              // Top-level property (object)
//       city: "Mumbai",       // Nested property inside 'address'
//       country: "India"      // Nested property inside 'address'
//     }
// };
// let shallowcopy = Object.assign({}, original);
// console.log(shallowcopy.address === original.address);  // true--- (points to the same object)
// console.log(shallowcopy.name);           // "Farsana" ----(name primitive copied by value)
// console.log(shallowcopy.address);        // { city: "Mumbai", country: "India" } ------(address object copied by reference)

// Modifying the 'address' object and primitive 'name' in the shallowcopy
// shallowcopy.name="shebeel";
// shallowcopy.address.city = "Delhi";

// Since the 'address' object is shared between original and shallowcopy,the change affects both 
// but in 'name' primitive which is copied by value the change will not affect the original
// console.log(original.address.city);       // "Delhi"
// console.log(shallowcopy.address.city);    // "Delhi"
// console.log(original.name);               // "Farsana"
// console.log(shallowcopy.name);            // "shebeel"

//---
// Deep Copy using JSON (all nested objects are copied)
// let original = {
//     name: "Farsana",        // Top-level property (primitive)
//     address: {              // Top-level property (object)
//       city: "Mumbai",       // Nested property inside 'address'
//       country: "India"      // Nested property inside 'address'
//     }
// };
// Creating a deep copy of the 'original' object
// let deepCopy = JSON.parse(JSON.stringify(original));
// console.log(deepCopy.address === original.address);  // false (both have independent address objects)

// Modifying the 'name' (a primitive) in the deep copy
// deepCopy.name = "Shebeel";
// console.log(deepCopy.name);      // "Shebeel" (name changed in deepCopy)
// console.log(original.name);      // "Farsana" (name remains unchanged in original)

// Modifying the 'address.city' (an object property) in the deep copy
// deepCopy.address.city = "Delhi";
// console.log(deepCopy.address.city);   // "Delhi" (changed in deepCopy)
// console.log(original.address.city);   // "Mumbai" (remains unchanged in original)

//----------------------------------------------------------------------------------------------------------------------------------------
// Special Object Properties
// Using 'this' keyword in methods

// this keyword in method of object literal
// let user = {
//     name: "John",
//     age:23,
//     greet: function() {
//         console.log("Hi, I'm " + this.name);
//     }
// };
// user.greet();  // Output: "Hi, I'm John"

// this keyword in the method of constructor function's prototype
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// User.prototype.greet = function() {
//     console.log("Hi, I'm " + this.name);
// };
// let userinstance = new User("John", 23);
// userinstance.greet();   // Hi, I'm John

// ----
// Computed Property Names--------variable name as keys
// let key = "job";
// let employee = {
//     [key]: "Developer"  // Computed property name
// };
// console.log(employee.job);  // Output: "Developer"
// console.log(employee["job"]);  // Output: "Developer"
// console.log(employee[key]);  // Output: "Developer"

//------------------------------------------------------------------------------------------------------------------------------------------

// PROTOTYPES AND INHERITANCE
// All objects in JavaScript inherit from at least one other object. The object from which properties and methods are inherited is known as the prototype. 
// Every function in JavaScript, including constructor functions(here, Person(name, age)), automatically has a prototype property.
// The prototype is an object associated with a constructor function. It contains properties and methods that are shared among all instances created by that constructor.
// When you create objects using a constructor function, those objects inherit properties and methods from the prototype associated with that constructor.
// In this example:
// Person.prototype.greet adds the greet method to the Person's prototype.
// Any instance of Person, such as farsana, can call greet().This method is not directly stored on the farsana object but is inherited through the prototype.

// Creating an object with a user-defined constructor function 
// object type - Sometimes we need to create many objects of the same type.To create an object type we use an object constructor function that specifies its name, properties, and methods.It is considered good practice to name constructor functions with an upper-case first letter.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.details = function() {         // Methods available on each instance----but discouraged as methods are defined in prototype
//                        console.log(`${this.name}  and ${this.age} is details...`);
//                    };
// }
// prototype of instances of constructor function-
// Person.prototype.greet = function() {    // Methods available on prototype---Methods are typically defined on the prototype object of the constructor, so that all objects of the same type share the same method.
//     console.log("Hello, " + this.name);
// };
// object instance-
// let farsana = new Person("Farsana", 25);

// console.log(farsana)      // Person { name: 'Farsana', age: 25 , details: [Function (anonymous)] }   
// console.log(Person);    // [Function: Person]
// console.log(Person.toString());      //function Person(name, age) { this.name = name; this.age = age; }
// Check if property is found directly on the object
// console.log(farsana.hasOwnProperty('name'));  // true (name is directly on farsana)
// Check if the greet method exists on farsana
// console.log(farsana.hasOwnProperty('greet')); // false (greet is on the prototype)
// But we can still call greet, as it's found in the prototype chain
// farsana.greet();  // "Hello, Farsana"
// console.log(farsana.name);  // Farsana
// console.log(Person.age);    //undefined----because When you use new Person("Farsana", 25), the properties name and age are not defined on the Person constructor function itself.It is defined on the instance (in this case, farsana), not to the 


// Can also add a property to a previously defined object instance.However it does not affect another objects instance created with the same constructor function Person
// farsana.place="kochi";
// console.log(farsana)  //Person { name: 'Farsana', age: 25, details: [Function (anonymous)], place: 'kochi' }

// To affect all object's instance created with the same constructor function, you have to add the property to the prototype of a constructor function
// Person.prototype.color = "black";
// console.log(farsana.color); // 'black'
// console.log(Person.color);  // 'undefined'-------will not get this way as it is on prototype of function Person;we have to call Person.prototype.color to get value
// console.log(Person.prototype.color);  // 'black'-----but work this way instead od calling directly Person.color
// console.log(Object.getPrototypeOf(farsana).color); // 'black'----- Object.getPrototypeOf(farsana) is Person.prototype
// console.log(Person.prototype.place);  // undefined-----because place is defined on instance farsana.
// Learn individual changes in properties of an instance and how it does not affect prototypes or other instances
// farsana.color="red";
// console.log(farsana.color); // 'red'
// console.log(Object.getPrototypeOf(farsana).color); // 'black'-----The color of instance farsana's prototype not changed it is still black , eventhough color of instance farsana changed to red

// ---------
// Check for instance of a constructor - with instanceOf operator
// NB:To check if an object is an instance of a constructor (or class), you can use the instanceof operator in JavaScript. 
// This operator checks whether an object is derived from a constructor’s prototype.


// function Person(name) {
//     this.name = name;
// }
// const person1 = new Person("Alice");
// // Check if person1 is an instance of constructor function Person
// console.log(person1 instanceof Person);  // Output: true
// // Check if person1 is an instance of Object (Person inherits from Object)
// console.log(person1 instanceof Object);  // Output: true
// ---look out an example with class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }
// const myDog = new Dog("Buddy");
// console.log(myDog instanceof Dog);     // Output: true
// console.log(myDog instanceof Animal);  // Output: true (because Dog extends Animal)
// console.log(myDog instanceof Object);  // Output: true (because all objects inherit from Object)



//---------
// NB:If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. 
// Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

// Return a non-primitive
// function CustomObject(property) {
//     this.property =property;
//     return { override: "This object will be returned instead" };  // Return a non-primitive
// }
// let obj = new CustomObject("red");
// console.log(obj);  // { override: "This object will be returned instead" }
  
// Return Primitive value
// function CustomPrimitive() {
//     this.name = "This will be returned";
//     return "Hello";  // Primitive value is returned
//   }
// let primitive = new CustomPrimitive();
// console.log(primitive);  // CustomPrimitive { name: "This will be returned" }  

//--------------------------------------------------------------------------------------------------------------------------------------

// GETTERS AND SETTERS
// A getter is a function associated with a property that gets the value of a specific property.
// A setter is a function associated with a property that sets the value of a specific property. Together, they can indirectly represent the value of a property. 
// With getter and setter , we can change the default value of a specific property.
// Getters and setters can be either-
// 1)defined within object initializers, or
// 2)added later to any existing object.

// 1)Within object initializers-
// Within object initializers, getters and setters are defined like regular methods, but prefixed with the keywords get or set.
// The getter method must not expect a parameter, while the setter method expects exactly one parameter (the new value to set). 
// const myObj = {
//     a: 7,
//     get b() {
//       return this.a + 1;
//     },
//     set c(x) {
//       this.a = x / 2;
//     },
// };  
// console.log(myObj.a); // 7         ----returned from the get a() method. NOTE:It is not called as myObj.a() as we call functions because getter and setter is considered as a property not a function.
// console.log(myObj.b); // 8         
// myObj.c = 50;         // a=50/2=25  -----modyfying 'a' using set c() method
// console.log(myObj.a); // 25
//-------anotehr example
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     //Getter for fullName
//     get fullName() {
//        return `${this.firstName} ${this.lastName}`;
//     },
//     //Setter for fullName
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     }
// };
// Accessing the full name using the getter
// console.log(person.fullName);  // Output: "John Doe"
// Modifying the first and last names using the setter
// person.fullName = "Jane Smith";
// console.log(person.fullName);  // Output: "Jane Smith"
// -----------another example of getter and setter with prototype
// let user = {
//     name: "John",
//     surname: "Smith",
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },
//    get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
// };
// let admin = {
//     __proto__: user,
//     isAdmin: true
// };
// alert(admin.fullName); // John Smith 
// // setter triggers!
// admin.fullName = "Alice Cooper"; 
// alert(admin.fullName); // Alice Cooper, state of admin modified
// alert(user.fullName); // John Smith, state of user protected


// 2)Using Object.defineProperty--added later to any existing object.
// Using Object.defineProperties() method, Getters and setters can also be added to an object at any time after creation 
// This method's first parameter is the object on which you want to define the getter or setter. 
// The second parameter is an object whose property names are the getter or setter names, and whose property values are objects for defining the getter or setter functions.

// const myObj = { a: 7 };
// Object.defineProperties(myObj, {     // method is Object.defineProperties(object, descriptors)
//   b: { // getter property name
//     get() {
//       return this.a + 1;
//     },
//   },
//   c: {
//     set(x) {   // setter property name
//       this.a = x / 2;
//     },
//   },
// });
// myObj.c = 50; // Runs the setter, which assigns 50 / 2 (25) to the 'a' property
// console.log(myObj.b); // Runs the getter, which yields a + 1 ie, 26
//------another example in another style
// let person = {
//     firstName: "John",
//     lastName: "Doe"
// };           
// Object.defineProperty(person, 'fullName', {       // method is Object.defineProperty(object, property, descriptor)
//     get: function() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set: function(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     }
// });
// Accessing the full name using the getter
// console.log(person.fullName);  // Output: "John Doe"
// Modifying the first and last names using the setter
// person.fullName = "Jane Smith";
// console.log(person.fullName);  // Output: "Jane Smith"
// Checking that the firstName and lastName properties are updated
// console.log(person.firstName);  // Output: "Jane"
// console.log(person.lastName);   // Output: "Smith"


//-----------------------------------------UNDERSTAND------------------------------------------------------------------------------------

// There are many other kinds of objects in JavaScript:
// Array to store ordered data collections,
// Date to store the information about the date and time,
// Error to store the information about an error.
// …And so on.
// Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to “object” data type. And they extend it in various ways.

//---------------------------------------LOOKOUT----------------------------------------------------------------------------------------
// GENERAL METHODS-
// Copies properties from a source object to a target object
//Object.assign(target, source)

// Creates an object from an existing object
//Object.create(object)

// Returns an array of the key/value pairs of an object
//Object.entries(object)

// Creates an object from a list of keys/values
//Object.fromEntries()

// Returns an array of the keys of an object
// Object.keys(object)

// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)

//------
// PROPERTY MEANAGEMENT PROPERTIES
// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)

// -----
// OBJECT PREVENTION METHODS
// Prevents re-assignment
// const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
// Object.preventExtensions(object)

// Returns true if properties can be added to an object
// Object.isExtensible(object)

// Prevents adding and deleting object properties
// Object.seal(object)

// Returns true if object is sealed
// Object.isSealed(object)

// Prevents any changes to an object
// Object.freeze(object)

// Returns true if object is frozen
// Object.isFrozen(object)

//----------workout
//find total sum of salaries in object
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);  //390
 
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='number'){
//              obj[key]*=2;
//         }
//     }
//     console.log(obj);
// }
// multiplyNumeric(menu);   //{ width: 400, height: 600, title: 'My menu' }


