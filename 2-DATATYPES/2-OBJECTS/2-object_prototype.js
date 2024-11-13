//                                        OBJECT PROTOTYPE AND PROTOTYPAL INHERITANCE
// 
// JavaScript is an object-oriented language built around a prototype model. 
// In JavaScript, every object has a protype which is either an object or null and every object inherits properties from its prototype, if there are any.
// DEF: A prototype is simply an object from which another object inherits properties. ie, For a given object o, the object from which o inherits properties is called the prototype of o. 
// Every single object in javascript  has an internal hidden attribute called [[Prototype]] that simply holds a reference to the prototype of that object.
// In short, every single object in JavaScript has a corresponding prototype from which it inherits properties, and this prototype is stored in that object's internal [[Prototype]] attribute.
// To create complex programs using JavaScript, one has to be proficient in working with prototypes — they form the very core of OOP in the language.

//------------------------------------------------------------------------------------------------------------------------------------------
// THE INTERNAL [[Prototype]] ATTRIBUTE

// NB:When we create an object via the object literal syntax, or equivalently via the Object() constructor, JavaScript creates an Object instance whose prototype is automatically set to Object.prototype:
// ie, For every object with no user defined  [[Prototype]] automaticaaly has Object.prototype as  [[Prototype]] attribute
// var obj =  { x: 0, y: 0 };
// internal representation of obj
// obj= {
//     x: 0,
//     y: 0,
//     [[Prototype]]: Object.prototype    // The object obj now have access to all the properties defined on Object.prototype.
// } 

//----
// var arr =  [10, -5, 60];
// internal representation of arr
// arr= {
//     0: 10,
//     1: -5,
//     2: 60,
//     length: 3,
//     [[Prototype]]: Array.prototype
// }

//---
// var a = { x: 10, y: 20 };
// internal representation of b if it has a as prototype
// var b= {
//     p: 100,
//     q: 200,
//     [[Prototype]]: a
// };

//---
// Every single object in JavaScript has a corresponding prototype, if we dont want prototype for an object set it to null.
// NB:In JavaScript, there is only one predefined object that has a null prototype ie, Object.prototype.
// var b= {
//     p: 100,
//     q: 200,
//     [[Prototype]]: null
// };

// -----------------------------------------------------------------------------------------------------------------------------------------
// THE Object.create() METHOD
// NB:Introduced in ECMAScript 5 as a way to create a new object with a given prototype.Syntax-Object.create(proto[, descriptors]) 

// a has to be made the prototype of b.We only seen internal representation of it. How to implement this in the code.
// var a = { x: 10, y: 20 };
// var b = Object.create(a);    //  creates a new empty object whose prototype is set to a----{ [[Prototype]]: a }
// console.log(b);              //  {} ------will not see   [[Prototype]]: a as it is a internal property
// console.log( b.x);           //  10
// console.log( b.y);           //  20
// b.p = 100;                   // add the properties one-by-one
// b.q = 200;
// console.log( b.p);           //100
// console.log( b.q);           //200

// Object.create() could be called with null as an arg as well.
// var o = Object.create(null);
// o.x = 10;
// o.y = 20;
// console.log(o);   // {x: 10, y: 20}

// let animal = {
//    eats: true
//  };
// let rabbit = Object.create(animal, {
//    jumps: {
//      value: true
//    }
// });
// console.log(rabbit.jumps); // true


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greet = function() {   
//     console.log("Hello, " + this.name);
// };
// let farsana = new Person("Farsana", 25);
// let farsanaph=Object.create(farsana);     //Inherits both direct properties (e.g., name, age) and prototype methods (e.g., greet), but those properties are inherited, not copied.If you modify farsana's properties, the changes are reflected in farsanaph since it's tied to farsana.
// console.log(farsanaph.name);   //Farsana
// farsanaph.greet();             //Hello, Farsana---------Object.create can inherit the property from object type as well as  prototype property
// farsanaph.name="farsanaph";
// console.log(farsanaph.name);  //farsanaph
// console.log(farsana.name);    //Farsana
// LIMITATIONS-
// Doesn't copy non-enumerable properties.
// Doesn't copy getters/setters — it only inherits them.
// Modifications to inherited properties can affect the original object (farsana), since farsanaph only references properties on farsana ;
// but here not affected farsana because name is in primitive values...it will affects array and objects within it .

//--
// The Object.create provides an easy way to shallow-copy an object with all descriptors: including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].
// Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)) 

// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }
// Person.prototype.greet = function() {
//    console.log("Hello, " + this.name);
// };
// let farsana = new Person("Farsana", 25);
// // Create a true clone of the farsana object
// let clone = Object.create(
//    Object.getPrototypeOf(farsana),           // Get the prototype of farsana
//    Object.getOwnPropertyDescriptors(farsana) // Get property descriptors of farsana
// );
// console.log(clone.name);      // Output: "Farsana"
// console.log(clone.age);       // Output: 25
// clone.greet();                // Output: "Hello, Farsana"
// // Verify that clone and farsana are independent
// clone.name = "CloneFarsana";  // Modify the clone's name property
// console.log(farsana.name);    // Output: "Farsana" (original object remains unchanged)
// console.log(clone.name);      // Output: "CloneFarsana" (clone is modified independently)

 

// DISADV: Object.create() doesn't allow us to conveniently initialise the object to-be-created with a given set of properties. 
//         That is, we have to manually go on and add each property one-by-one after the object is created.

//-------------------------------------------------------------------------------------------------------------------------------------------
// PROTOTYPE CHAINS
// As we said, every single object in JavaScript has a corresponding prototype.
// It means that a prototype also have a prototype as it is also an object. Thus, we have a prototype chain.
// DEF: For a given object o, its prototype chain is simply a list of prototypes whose first item is the prototype of o, and any subsequent item is the prototype of the previous item, and the last item is simply null
// Simply, prototype chain is a list that specifies the prototype of an object, then the prototype of that prototype, then the prototype of the prototype of that prototype, and so on until raches null.

// var a = { x: 10, y: 20 };
// var b = Object.create(a);
// var c = Object.create(b);
// prototype chain of c -  b → a → Object.prototype → null    

//-------------------------------------------------------------------------------------------------------------------------------------------
// PROPERTY RETRIEVAL  MECHANISMS

// var o1 = { a: 100, b: 200, c: 300 };
// var o2 = { a: 10, b: 20 };
// var o3 = { a: 1 }; 
// Assume, o3 → 02 → 01 → Object.prototype → null  is the prototype chain
// o3.a returns 1; o3.b returns 20; o3.c returns 300; o3.nonExistent returns undefined.
// o2.a returns 10; o2.b returns 20; o2.c returns 300; o2.nonExistent returns undefined
// o1.a returns 100; o1.b returns 200; o1.c returns 300; o1.nonExistent returns undefined;
// NB:On accessing, If a property is found on the given object then its value is accessed. Otherwise, searching moves to the next prototype down the chain until it reaches null.If null prototype is reached, then undefined is returned.

// PROPERTY SHADOWING
// Properties defined on an object shadow properties available on its prototype referred to as property shadowing.

//-------------------------------------------------------------------------------------------------------------------------------------------
// PROPERTY ASSIGNMENT MECHANISMS

// For an object o, If the property is a non-writable data property or a setter-less accessor property it helps to avoid reassignments ( like o.prop = value; ).Thus prevent our application from any kind of bugs or weird behavior.
// If the script is running in strict mode, the assignment will give an error. Otherwise, the property assignment will go silently ignored.
// In JavaScript this notion extends to the prototype chain of the object o; not just on the object itself.

// CASE1: prevent reassignments when the property is the object's own data property or own accessor property:
// var obj = {};
// // non-writable data property
// Object.defineProperty(obj, 'x', { value: 'old' });
// // accessor property without a setter function.
// Object.defineProperty(obj, 'y', {
//     get: function() { return 'old'; }
// });
// obj.x = 'new';
// console.log(o.x);   // old
// obj.y = 'new';
// console.log(o.y);   // old

// CASE2: prevent reassignments when the property is an prototype inherited property:
// var o = {};
// // non-writable data property
// Object.defineProperty(o, 'x', { value: 'old' });
// // setter-less accessor property
// Object.defineProperty(o, 'y', {
//     get: function() { return 'old'; }
// });
// var a = Object.create(o);    // a inherited from prototype o
// a.x = 'new';       // assignment cancels eventhough they are new properties on object 'a' because x and y are non-writable data property or a accessor property without a setter function in its prototype. Property assignment expressions also involve a search for the property's key on an object's prototype chain like in own object 
// console.log(a.x);  // old ----- A non-writable data property with a value of 'old'.
// a.y = 'new';       // no assignment occurs
// console.log( a.y); // old----A setter-less accessor property with a getter that returns 'old' 
// console.log(a);    // {}

// NB: if the inherited accessor property y here (defined on the object o) had a setter function, it would've been called in executing a.y = 'new'.
// var o = {};
// // non-writable data property
// Object.defineProperty(o, 'x', { value: 'old' });
// // setter-less accessor property
// Object.defineProperty(o, 'y', {
//     get: function() { return 'old'; },
//     set: function(value) {
//         console.log('Setter called with value:', value);
//     }
// });
// var a = Object.create(o);
// a.x = 'new';
// console.log('a.x:', a.x); // a.x: old ---A non-writable data property with a value of 'old'.
// a.y = 'new';              // output:Setter called with value: new    ----------a.y does not change to 'new' even though the setter is called is that the setter does not actually store the value ....it is just logging th value
// console.log('a.y:', a.y); // a.y: old ---a.y doesn't change to 'new' is because a.y is an accessor property (getter and setter), and the getter on the prototype (o.y) always returns 'old'
// console.log(a);           // {}  -------no property in this- as a.x and a.y all are taken from prototype


// NB:look to understand getter and setter resetting
// var o={};
// Object.defineProperty(o, 'y', {
//     get: function() { return this._y; },
//     set: function(value) {
//         console.log('Setter called with value:', value);
//         this._y = value; // Now the value is stored
//     }
// });
// var a = Object.create(o);
// a.y = 'new';      // Setter called with value: new
// console.log(a.y); // Outputs 'new'
// console.log(a);   // { _y: 'new' }

//------NEED OF GETTER AND SETTER
// As we know, accessor properties are merely a decoration over using two different methods to accomplish a task on an object. 
// For instance, instead of defining a getX() and setX() method on a Point object, we could just define an accessor property x with a given getter and setter function to take care of that property's retrieval and assignment, respectively.
// This effectively means that we could define accessor properties on an instance's prototype and thus get its functionality to be used by all instances

// ----NON-WRITABLE DATA PROPERTIES USED RARELY
// non-writable data properties on the prototype preventing the assignment of the identically-named property on any of the derived objects is not employed frequently as
// Data properties, that directly contain given data, are only meant to denote the traits of an object, and are therefore meant to be defined on instances directly, NOT on their prototypes.

// RECAP: A property assignment on an object would have no effect (in non-strict mode) or throw an error (in strict mode)
// if the property is a non-writable own/inherited data property or a setter-less own/inherited property.

//--------------------------------------------------------------------------------------------------------------------------------------------
// OWN VS INHERITED/SHARED PROPERTIES - hasOwnProperty() METHOD

// In JavaScript, an object can  have own properties and proties inherited from prototype Chain . 
// A property that is accessible on an object could be its own property or an inherited property.
// DEF: For a given object, any property that's defined directly on the object is called its own property and any property that's defined somewhere in its prototype chain, but not on the object itself, is called its inherited property.

// hasOwnProperty() METHOD - HELPS TO KNOW OWN PROPERTY OR NOT
// var a = { x: 0, y: 0 };
// console.log(a.hasOwnProperty('x')); //true
// console.log(a.hasOwnProperty('y')); //true
// console.log(a.hasOwnProperty('z')); //false

// var proto = { z: 0 };
// var a = Object.create(proto);
// a.x = 0;
// a.y = 0;
// console.log(a.hasOwnProperty('x'));      //true
// console.log(a.hasOwnProperty('y'));      //true
// console.log(a.hasOwnProperty('z'));      //false
// console.log(proto.hasOwnProperty('z'));  //true

//-------------------------------------------------------------------------------------------------------------------------------------------
// THE PROTOTYPE AND THE 'in' OPERATOR

// The 'in' operator, operating on an object and a property name, determines if the property is the object's own or inherited property. 
// In other words, 'in' simply tells us whether a given property is accessible on an object.
// This means that starting from the object itself, it effectively traverses the whole prototype chain of that objet in search of the property, until it's found.

// var proto = { y: 0 }
// var obj = Object.create(proto);
// obj.x = 0;
// console.log('x' in obj);               //true---own property
// console.log('y' in obj);               //true---from proto
// console.log('hasOwnProperty' in obj);  //true ----from Object.prototype
// console.log('nonExistent' in obj);     //false----doesn't exist on obj, nor on any object in its prototype chain.

//---
// NB:The in operator together with hasOwnProperty() can be used to determine -
// if an arbitrary property of a given object is its own property, inherited property, or simply a non-existing property.

// //Define an object with a prototype property
// var proto = { inheritedProp: 'I am inherited' };
// // Create an object that inherits from 'proto'
// var obj = Object.create(proto);
// // Add an own property to 'obj'
// obj.ownProp = 'I am own';
// // Testing properties
// console.log('inheritedProp' in obj);              // true (inherited property)
// console.log(obj.hasOwnProperty('inheritedProp')); // false (inherited, not own)
// console.log('ownProp' in obj);                    // true (own property)
// console.log(obj.hasOwnProperty('ownProp'));       // true (own property)
// console.log('nonExistentProp' in obj);            // false (non-existent)
// console.log(obj.hasOwnProperty('nonExistentProp')); // false (non-existent)

//--------------------------------------------------------------------------------------------------------------------------------------------
// THE PROTOTYPE PROPERTY OF FUNCTIONS

// When a constructor function is called, i.e. with the new keyword.
// 1-A new empty object is created.
// 2-The prototype of this object is set to F.prototype
// 3-The [[Call]] internal method of the function is executed with its this set to the object created in step 1.
// 4-The object created in step 1 is returned.


// function F() {} // Constructor function
// var obj = new F();--------here obj is the instance of constructor function, F() is the constructor function , new keyword invoke the creation of a new object and sets its prototype to be the object referenced by F.prototype. The this value inside the constructor F is bound to this new object.
// F.prototype is the prototype of objects created by the constructor function F(), not the prototype of F() itself.
// console.log(Object.getPrototypeOf(obj) === F.prototype); // true
// F.prototype is not the prototype of the constructor function F itself. The prototype of the function F (like all functions) is Function.prototype.
// console.log(Object.getPrototypeOf(F) === Function.prototype); // true
// Relationships:
// console.log(Object.getPrototypeOf(obj));         // F.prototype
// console.log(Object.getPrototypeOf(F));           // Function.prototype
// console.log(Object.getPrototypeOf(Function));    // Function.prototype

//---
//function Point(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.setTo = function(x, y) {
//     this.x = x;
//     this.y = y;
// }
// var p1 = new Point();
// console.log(p1.x); // 0
// console.log(p1.y); // 0
// p1.setTo(5, 15);   // Use the setTo method to update the coordinates of p1
// console.log(p1.x); // 5
// console.log(p1.y); // 15

//----
// NB:prototype change affect the properties of object instances but not already the existing omes
// function Person(){
//    this.name = "Elon Musk"
// }
// Person.prototype.age=25;
// const person1 = new Person();
// Person.prototype={age : 30};
// const person2 = new Person();

// console.log(person1.age);  //25
// console.log(person2.age);  //30

//----
// With an accessor property on the prototype.

// CASE1-doesn't explicitly use Item.prototype, but the behavior of the Object.defineProperty method in the constructor function (Item) acts similarly in that the discount property is defined for each instance created by the Item constructor
// function Item(sellingPrice, actualPrice) {
//     this.sellingPrice = sellingPrice;
//     this.actualPrice = actualPrice;
//    //'discount' is defined as an instance-specific property with getter/setter
//     Object.defineProperty(this, 'discount', {
//         get: function() {
//             return (this.actualPrice - this.sellingPrice)
//                      / this.actualPrice * 100;
//         },
//         set: function(perc) {
//             this.sellingPrice = this.actualPrice
//                                       - perc / 100 * this.actualPrice;
//         },
//         configurable: true,
//         enumerable: true
//     })
// }
// var item = new Item(25, 50);
// console.log(item);                  // Item { sellingPrice: 25, actualPrice: 50, discount: [Getter/Setter] }
// console.log(item.sellingPrice);     //25
// console.log(item.actualPrice);      //50
// console.log(item.discount);         // 50---(50 - 25) / 50 * 100 = 50% 
// item.discount = 20;                 // doesn't create a new own property discount on instance item  but invoke the setter
// console.log(item.sellingPrice);     // 40-----New selling price
// console.log(item.discount);         // 20% discount (reflecting the new price)

// CASE 2-explicitly using Item.prototype
// function Item(sellingPrice, actualPrice) {
//     this.sellingPrice = sellingPrice;
//     this.actualPrice = actualPrice;
// }
// 
// //Define 'discount' logic on the prototype
// Object.defineProperty(Item.prototype, 'discount', {
//     get: function() {
//         return (this.actualPrice - this.sellingPrice) / this.actualPrice * 100;
//     },
//     set: function(perc) {
//         this.sellingPrice = this.actualPrice - (perc / 100 * this.actualPrice);
//     },
//     configurable: true,
//     enumerable: true
// });
// var item1 = new Item(25, 50);
// console.log(item2.discount); // 50


// -------------------------------------------------------------------------------------------------------------------------------------------
// PROTOTYPAL INHERITANCE

// In prototypal inheritance, you create an prototype object, and other objects can directly inherit from it.
// It is a feature in javascript used to add methods and properties in objects. 
// It is a method by which an object can inherit the properties and methods of another object. 
// Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.


// CASE1: with Object.create- creates an empty object with prototype attribute referencing to another object literal ie, the prototype 
// Define prototype object
// const personPrototype = {
//     greet: function() {   //not using this.greet because this keyword refers to the object that is currently calling the function and personPrototype is not a function but another object literal
//         console.log("Hello, my name is " + this.name);
//     }
// };
// const farsana = Object.create(personPrototype); // Create a new empty object using Object.create , inheriting from the prototype
// farsana.name = "Farsana";
// farsana.greet();  // "Hello, my name is Farsana"-------this.name is refeering farsana.name

// CASE 2: with constructor function 
// Define prototype function
// //object type - 
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.details = function() {         // Methods available on each instance
//                        console.log(`${this.name}  and ${this.age} is details...`);
//                    };
// }
// // prototype of instances of constructor function-
// Person.prototype.greet = function() {    // Methods available on prototype---Methods are typically defined on the prototype object of the constructor, so that all objects of the same type share the same method.
//     console.log("Hello, " + this.name);
// };
// // object instance-
// let farsana = new Person("Farsana", 25);
// console.log(farsana.name);  // Farsana
// farsana.greet();            // "Hello, Farsana"

//CASE 3:Inheriting from parent (like extends in classical inheritance but here have to inherit properties within constructor using call and methods in prototypes using Object.create seperately)
// NB:When a child constructor function inherits from a parent constructor function, 
// it inherits the properties inside the parent constructor function using call or apply and
// The methods and properties defined on the parent constructor function's .prototype using Object.create().

// Parent constructor function
// function Shape(x, y, fill = '#000') {
//     this.x = x;
//     this.y = y;
//     this.fill = fill;
// }
// Shape.prototype.move = function(x, y) {
//     console.log('Moving the shape to (${x}, ${x}).');
// }
// Shape.prototype.delete = function(x, y) {
//     console.log('Deleting the shape.');
// }

// Child constructor function
// function Rect(width, height, x, y, fill) {
//     Shape.call(this, x, y, fill);   // Inherit properties from Animal constructor-----properties inside constructor inherited-(now need to inherit Shape.prototype in Rect.prototype)
//     this.width = width;
//     this.height = height;
// }
// Inherit methods from Shape.prototype to Rect.prototype 
// Object.setPrototypeOf(Rect.prototype, Shape.prototype);//------Rect.prototype = new Shape(); also work but not used as it creates redundant properties x, y and fill on Rect.prototype that won't ever be used.Also discoraged to use [ Rect.prototype = Object.create(Shape.prototype); ] as it is error prone.
// Rect.prototype.draw = function() {               // Adding method to the child's prototype-prototype own method  of Rect
//     console.log('Drawing the rectangle.');
// }

//object instance-
// obj= new Rect(2,4,7,8);
// console.log(obj.width);  //2----Rect property
// console.log(obj.height); //4----Rect property
// console.log(obj.x);      //7----property inherited from  constructor
// console.log(obj.y)       //8----property inherited from Shape's constructor
// console.log(obj.fill);   //#000----property inherited from Shape's constructor;default value given 
// obj.draw();              // Drawing the rectangle ----Rect method
// obj.move(5,10);          // Moving the shape to (5,10) ----Shape method inherited from  Shape.prototype
// obj ---> Rect.prototype ---> Shape.prototype ---> Object.prototype ---> null 

//-----
// COMPARE WITH CLASSICAL INHERITANCE (introduced in ES6)

// In classical inheritance, you define a class (similar to a blueprint) and create instances from it.
// Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern.
// While classes are built on top of existing prototype inheritance model and they abstract most of the prototypal mechanism away; understanding how prototypes work is still useful as, under the hood, the class syntax still uses prototypal inheritance.
// For example, when you define methods inside a class, those methods are added to the prototype of the class, not directly to the instances.

// ADV:No need for seperate [Constructorfnc].prototype, as properties inside constructor are considered as own properties and properties outside constructors within the class are considered as properties in prototype.
//     Simply use extends from parent instead of seperately using Object.create in prototypal inheritance to inherit the prototype of the parent constructor function's instance

// CASE1:without inheriting from parent
// Define a class 
// class Person {
//     constructor(name,age) {   // properties defined within the constructor are assigned directly to each instance.
//         this.name = name;
//         this.age  = age;
//     }

//     greet() {  //no need for seperate Person.prototype, as properties inside constructor are considered as own properties and properties outside constructors within the class are considered as properties in prototype.
//         console.log("Hello, my name is " + this.name);
//     }
// }
// // Create an instance of the class
// const john = new Person("John",23);
// console.log(john.age)  //23
// john.greet();          // Output: "Hello, my name is John"

// CASE2: classes inheriting from classes using extends
// //Base class (Shape)
// class Shape {
//     constructor(x, y, fill = '#000') {
//         this.x = x;
//         this.y = y;
//         this.fill = fill;
//     }
//     move(x, y) {  
//         console.log(`Moving the shape to (${x}, ${y}).`);
//     }
//     delete() {
//         console.log('Deleting the shape.');
//     }
// }
// // Derived class (Rect) inheriting from Shape
// class Rect extends Shape {
//     constructor(width, height, x, y, fill) {  
//         super(x, y, fill);  // Call the parent class constructor (Shape)- own property and prototype; all inherited from parent class
//         this.width = width;
//         this.height = height;
//     }
//     draw() {
//         console.log('Drawing the rectangle.');
//     }
// }
// // Creating an instance of Rect
// const obj = new Rect(2, 4, 7, 8);
// // Accessing properties and methods
// console.log(obj.width);  // 2 ---- Rect property
// console.log(obj.height); // 4 ---- Rect property
// console.log(obj.x);      // 7 ---- Shape property from its constructor
// console.log(obj.y);      // 8 ---- Shape property from its constructor
// console.log(obj.fill);   // #000 ---- Shape property from its constructor; default value given
// obj.move(10, 20);        // Moving the shape to (10, 20) ---- Shape method from its prototype
// obj.draw();              // Drawing the rectangle ---- Rect method
// // understand
// console.log(obj instanceof Rect);   // Output: true
// console.log(obj instanceof Shape);  // Output: true (because Rect extends Shape)
// console.log(obj instanceof Object);  // Output: true (because all objects inherit from Object)
// obj ---> Rect.prototype ---> Shape.prototype ---> Object.prototype ---> null

// NB:JavaScript's predefined APIs are built around the idea of classes inheriting from classes. 
// The Number class inherits from Object, and so does String, Boolean, Array — they all are based on the Object class.


//---SUMMARY---LOOKOUT---
// In prototype method-
// function Shape() {}
// function Rect() {}
// Object.setPrototypeOf(Rect.prototype, Shape.prototype);
// const obj = new Rect();
// obj ---> Rect.prototype ---> Shape.prototype ---> Object.prototype ---> null

// In classical method-
// class Base {}
// class Derived extends Base {}
// const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null

//--------------------------------------------------------------------------------------------------------------------------------------------
// RETRIEVING PROTOTYPES VIA  Object.getPrototypeOf() AND  __proto__

// 1)THE __proto__ PROPERTY ---- A non-standard way to retrieve the prototype of an object 
// The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... } but there is a special method for it too...Object.create() 

// For a given object o, its __proto__ property simply returns a reference to the prototype of o.
// The __proto__ property is an accessor property defined on Object.prototype. Hence, it's available on almost all objects in JavaScript.
// console.log([1, 2, 3].__proto__)        //Array.prototype 
// { x: 0 }.__proto__ === Object.prototype //true
// 10 .__proto__ === Number.prototype      //true
// '10'.__proto__ === String.prototype     //true
// var a = {};
// Object.create(a).__proto__ === a        //true
// function F() {}
// F.__proto__ === Function.prototype      //true 
// F.__proto__ === F.prototype             //false
// function F() {}
// Finstance = new F()
// F.__proto__ === Function.prototype      //true
// Finstance.__proto__ === F.prototype     //true
// NB:For a function, its __proto__ property and prototype property don't hold the same objects. F.__proto__ holds the prototype of the function object F which is Function.prototype, whereas F.prototype holds the prototype of all instances of F()

//----
// NOTE:Prototype of an object is different from the prototype property of its constructor ie, F.__proto__ is different from F.prototype
// The prototype of an object (accessed via __proto__ or Object.getPrototypeOf()) refers to the object from which it is inheriting properties.
// The prototype property of a constructor refers to the object that will be used as the prototype for all instances created by that constructor.
// F.__proto__ is the prototype of function F (ie,Function.prototype) and  F.prototype is the prototype property of constructor function F from whcih its all instances inherit.

//-------
// 2)Object.getPrototypeOf() METHOD - standard method

// For a given object o, Object.getPrototypeOf(o) simply returns a reference to the prototype of o.
// Object.getPrototypeOf([1, 2, 3]) === Array.prototype     //true
// Object.getPrototypeOf({ x: 0 }) === Object.prototype     //true
// Object.getPrototypeOf(10) === Number.prototype           //true
// Object.getPrototypeOf('10') === String.prototype         //true
// var a = {}
// b=Object.create(a)
// Object.getPrototypeOf(b) === a            //true
// function F() {}
// Finstance = new F()
// Object.getPrototypeOf(F) === F.prototype                 //false
// Object.getPrototypeOf(F) === Function.prototype          //true
// Object.getPrototypeOf(Finstance) === F.prototype         //true



//------UNDERSTAND 
// [1, 2, 3] → Array.prototype → Object.prototype → null          //---can desugar to their constructor form- const array = new Array(1, 2, 3);
// 10 → Number.prototype → Object.prototype → null
// '10' → String.prototype → Object.prototype → null
// { x: 0 } → Object.prototype → null
// /abc/ → RegExp.prototype → Object.prototype → null             //---can desugar to their constructor form- const regexp = new RegExp("abc");

// a={ name: farsana }
// b=Object.create(a)
// b → a → Object.prototype → null

// function Fn() {}
// Finstance = new Fn()
// Fn → Function.prototype → Object.prototype → null
// Finstance → Fn.prototype → Object.prototype → null      //NB:The prototype property of a constructor function (like Fn.prototype) is just an object, not a function.


// ----LOOK OUT
// MONKEY PATCHING
// A misfeature of adding custom methods or properties to already built-in objects (or classes). It is  discouraged as it can lead to conflicts or unintended side effects,.
// For eg:Adding a method named Mymethos on Array.prototype and then using myMethod on all array instances.
// Array.prototype.myMethod = function() {
//    console.log("This is a custom array method.");
// };
// let arr = [1, 2, 3];
// arr.myMethod(); // Output: "This is a custom array method."

// 
//--------------------------------------------------------------------------------------------------------------------------------------------
// SETTING PROTOTYPES VIA Object.setPrototypeOf() AND __proto__

// This is used when we  want to change prototype to some other object.
// It can be done by-
// 1)Assign a value to the object's __proto__ property.
// 2)Call the Object.setPrototypeOf() method. -----syntax: Object.setPrototypeOf(obj, proto)

// Using __proto__ property.
// var a = { x: 10, y: 20 };
// var b = { p: 100, q: 200 };
// b.__proto__ = a;         // prototype of b changed from Object.prototype to a
// console.log(b.x); //10
// console.log(b.y); //20
// console.log(b.p); //100
// console.log(b.q); //200

// Using Object.setPrototypeOf() method.
// var a = { x: 10, y: 20 };
// var b = { p: 100, q: 200 };
// Object.setPrototypeOf(b,a)     // prototype of b changed from Object.prototype to a
// console.log(b.x); //10
// console.log(b.y); //20
// console.log(b.p); //100
// console.log(b.q); //200

//---
// NB:SETTING PROTOTYPES DISCOURAGED
// The best way is to use Object.create() instead of Object.setPrototypeOf() 
// since it doesn't modify prototype of an existing object but rather introduces a new object into the code with a given prototype. 
// This doesn't disrupt given optimizations made by the engine and also lead to bugs.

// ---------------------------------------------------------------------------------------------------------------------------------------------
// BORROWING FROM PROTOTYPES:
// we can take a method from one object and copy it into another.
// Some methods of native prototypes are often borrowed.

// eg: if we’re making an array-like object, we may want to copy some Array methods to it.we can borrow Array.prototype to it
// let obj = {
//    0: "Hello",
//    1: "world!",
//    length: 2,
//  };
//  obj.join = Array.prototype.join;    //can use Object.setPrototype(obj,Array.prototype) but borrowing method is preffered as setting prototype will lead to errors as only one prototype allowed for an object at one time.
//  console.log( obj.join(',') ); // Hello,world!


//----
// NATIVE PROTOTYPES:
// Built-in prototype objects in JavaScript are known as native prototypes
// such as Object.prototype, Array.prototype, Function.prototype, String.prototype, Number.prototype, Boolean.prototype, Date.prototype and others. 

//---------------------------JUST UNDERSTAND-------------------------------------------------------------------------------------------------------
//                                                        F.prototype
// new objects can be created with a constructor function, like new F()
// If F.prototype is an object, then the 'new' operator uses it to set as [[Prototype]] for the new object instance.
// The value of F.prototype should be either an object or null: other values won’t work.
// The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.

//---
// Default F.prototype - constructor property-
// NB:Every function has the "prototype" property even if we don’t supply it.
// The default "prototype" is an object with the only property constructor that points back to the function itself.

// function Rabbit() {}
/* default prototype-(internal)
   Rabbit.prototype = { constructor: Rabbit };
*/
// let rabbit = new Rabbit();                               //---Naturally, if we do nothing, the constructor property is available to all rabbits instance through [[Prototype]]:
// console.log( Rabbit.prototype.constructor == Rabbit );   // true

// ------
// NB:If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.
// let animal = {
//    eats: true
// };
// function Rabbit(name) {
//    this.name = name;
// }
// Rabbit.prototype = animal;                  //"When a new Rabbit is created, assign its [[Prototype]] to animal".
// let rabbit = new Rabbit("White Rabbit");    //  rabbit.__proto__ == animal   ---- ie, prototype of instance is now animal 
// console.log(rabbit.name);                   // White Rabbit ----- because 'name' is on the instance
// console.log( rabbit.eats );                 // true ----inherited from Rabbit.prototype (which is now { eats: true })
// console.log(rabbit.__proto__ === Rabbit.prototype); //true-----because rabbit's prototype is animal, and Rabbit.prototype is also set to animal.
// console.log(rabbit.constructor === Rabbit); // false  -----constructor is no longer pointing to the Rabbit function as Rabbit.prototype changed from Rabbit.prototype = { constructor: Rabbit }; to animal

// look-already existing objects keep the old one.
// function F() {}
// F.prototype = {
//    eats:true
// };
// // Create the first object
// let obj1 = new F();
// console.log(obj1.__proto__ === F.prototype); //true
// // Change F's prototype
// F.prototype = {
//     jumps:true
// };
// // Create the second object after changing the prototype
// let obj2 = new F();
// console.log(obj1.__proto__ === F.prototype);  // false (still pointing to the old prototype)
// console.log(obj2.__proto__ === F.prototype);  // true (pointing to new prototype)


// ----
// To keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

// Dont use below model:
// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true
// };
// let rabbit = new Rabbit();
// console.log( rabbit.jumps );                 // true
// console.log(rabbit.constructor === Rabbit); // false

// Instead use:(SUGGESTED)
// function Rabbit() {}
// Rabbit.prototype.jumps = true  // Not overwrite Rabbit.prototype totally, just add to it then the default Rabbit.prototype.constructor is preserved
// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // true

// Or instead, alternatively recreate the constructor property manually:
// function Rabbit() {}
// Rabbit.prototype = {
//     jumps: true,
//     constructor: Rabbit
// };
// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // true

//----
// NB:can use instance.constructor in situations where dont know the constructor name but has to create another one object of the same kind.
// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }
// let rabbit = new Rabbit("White Rabbit");   //same as   
// let rabbit2 = new rabbit.constructor("Black Rabbit");   //rabbit.constructor is Rabbit ----handy when we dont know the constructor name
// console.log(rabbit.name);    // White Rabbit
// console.log(rabbit2.name);   // Black Rabbit

//-----------------UNDERSTAND----------------------------------------------------------------------------------------------------------------------
// NOTE:Property given in a method added to object instance only after the method is called eventhough the property is in the method of prototype of the object
// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         console.log(`I walk`);
//       }
//       else{
//         console.log(`I sleep`);
        
//       }
//     },
//     sleep() {
//        this.isSleeping = true;
//     }
//   };
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
//   console.log(rabbit); //{ name: 'White Rabbit' }
//   // modifies rabbit.isSleeping
//   rabbit.sleep();
//   console.log(rabbit); // { name: 'White Rabbit', isSleeping: true }
//   console.log(rabbit.isSleeping); // true
//   console.log(animal.isSleeping); // undefined (no such property in the prototype)
//   rabbit.walk(); // I sleep
//   animal.walk(); // I walk






