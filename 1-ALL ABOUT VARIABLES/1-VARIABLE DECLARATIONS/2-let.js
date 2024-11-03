// let – is a modern variable declaration while var – is an old-school variable declaration 
// block scoped
// let differs from var in that let declarations are not hoisted 
// ie,accessing a let variable before its declaration leads to error (temporal dead zone.)
// -------------------------------------------------------------------------

//let a=1;
//let a=2; //throw error within same scope  

//------------

// let x = 1;
// {
//   let x = 2; // no error
// }

//--------------
// let x = 1;
// {
//   console.log(x); // ReferenceError
//   let x = 2;
// }

//-----------------
// let x=1;
// {
//     let x=2;
//     console.log(x);// 2
// }
// console.log(x); //1

//-------------
// let x = 1;
// if (x === 1) {
//   let x = 2;
//   console.log(x); //2
// }
// console.log(x);   //1

//--------------
// var foo=2;
// {
//     let foo=3;
//     console.log(foo); //3-----will not throw error as foo is inside block with same variable name of var
    
// }

//-------------
// var a = 1;
// var b = 2;
// {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the block
//   console.log(a); // 11
//   console.log(b); // 22
// }
// console.log(a); // 11
// console.log(b); // 2

//----------------------
// const hello; 
// console.log(hello); //undefined
// hello = 'farsana';

//-------------------------------------------------------------------------
//TEMPORAL DEAD ZONE(TDZ)-the region between start of the block and declaration

// {
//     // TDZ starts at beginning of scope
//     console.log(bar); // "undefined"
//     foo=2;
//     console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//     var bar = 1;
//     let foo; // End of TDZ (for foo)
// }

//----------

//   {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // OK
  
//     // if we call 'func();' here TDZ letVar access throws `ReferenceError`
  
//     let letVar = 3; // End of TDZ (for letVar)
//     func(); // Called outside TDZ!
//   }

//-----------

//NB:Using the typeof operator for undeclared(which throw reference error) and uninitialized(which gives undefined) variables in the scope is undefined

//CASE:undeclared variable
// {
// console.log(typeof i); // "undefined"
// }

//CASE:uninitialized variable
// {
//   let i;
//   console.log(typeof i); // "undefined"
//   i = 10;
// }

// CASE:declared somewhere in the scope
// {
//   console.log(typeof i); // ReferenceError: Cannot access 'i' before initialization-----variable i (declared using let) enters the TDZ as soon as the block scope is entered so throws reference error.
//   let i = 10;
// }

//CASE:unidentified global variable-scope becomes global
// {
//     console.log(typeof i); // "undefined"
//     i = 10;
// }

//-----------------------------------------------------------------------------------------------------------------------

//NB: let declaration within a function's body throw error when we  have  same name as a parameter as it has multiple let declaration within same scope
//   (const also, while not in var due to hoisting)

// function foo(a) {    //implicitly treated as let a
//     let a = 1;  // SyntaxError: Identifier 'a' has already been declared
// }


//------also
// try {
// } catch (e) {
//   let e;     // SyntaxError: Identifier 'e' has already been declared
// }

//-------also
// function test() {
//     var foo = 33;
//     if (foo){
//       let foo = foo + 55; // ReferenceError - (due to variable shadowing and TDZ) 'foo' value not reached the 'if'  block due to variable shadowing hence foo+55 throw error as it is now in TDZ zone ie,not declared and initialized yet
//      console.log(foo);
     
//     }
//   }
//   test();

//-----------
// function go(n) {
//     console.log(n); // { a: [1, 2, 3] }
//     for (let n of n.a) {
//       console.log(n); // ReferenceError -( due to variable shadowing  and TDZ) on declaring let n, n became block scope, then on looking for n.a- n has not declared so error thrown due to TDZ. no error arise if written let i of n.a
//     }
//   }
  
//   go({ a: [1, 2, 3] });

//---------------------------------------------------------------------------
//NB: LEXICAL SCOPING- a function's scope is determined by where the function is written in the code, not by where it is called
//    ie,a function has access to variables defined in its own scope and in all outer (parent) scopes.

// function outer() {
//     let x = 10;  // Variable defined in the outer function
//     function inner() {
//         console.log(x);  //10- Access variable from outer function
//     }
//     inner();
//     console.log(x); //10  
// }
// outer();  


//--------------
// let outerVariable = 'outer';
// function outerFunction() {
//     let innerVariable = 'inner'; 
//     function innerFunction() {
//         console.log(outerVariable); // outer--Accesses variable from outerscope
//         console.log(innerVariable); // inner--Accesses variable from outer scope
//     }   
//     innerFunction();
// }
// outerFunction();

//----------------
// let outside=2;
// function exampleFunction(a, b) {  // 'a' and 'b' are parameters, part of the examplefunction's own scope
//     let localVariable = 10;       // 'localVariable' is a local variable, part of the examplefunction's own scope

//     function innerFunction() {    // This function has its own local scope
//         let innerVariable = 20;   // 'innerVariable' is local to 'innerFunction', not part of 'exampleFunction's own scope
//         console.log(a);           // 5----'a' is accessible here, as 'innerFunction' can access the scope of 'exampleFunction'
//         console.log(outside);     // 2-----'outside' is accesible here, as innerfunction can access from outer(parent) scope
        
//     }

//     console.log(localVariable);    //10---- Accessing 'localVariable' within 'exampleFunction's own scope
//     innerFunction();               // Calling 'innerFunction', which can access 'exampleFunction's scope
// }
// exampleFunction(5, 15);


