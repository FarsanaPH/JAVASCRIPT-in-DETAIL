// JavaScript Object Notation (JSON) is a standard text-based data format (for representing structured data) following JavaScript object syntax. 
// It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// JSON SYNTAX- 
// Proper format for a collection is { "key": "value" } -----NB:common errors in json syntax- always use double quotes, always quotify your keys, and remove all callback functions.
// JSON is purely a string with a specified data format( very much resembles JavaScript object literal format. ) — it contains only properties, no methods.  
// We can include the same basic data types inside JSON as  in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals.

// We can work with JSON using JavaScript, including parsing(read) JSON so you can access data within it, and creating JSON.
// JSON exists as a string — It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available for converting between the two.
// NB: Converting a native object to a string [so it can be transmitted across the network] is called serialization , whereas Converting a string to a native object[ while parsing so that you can access the data ] is called deserialization .

// JSON is independent of a system's programming language, despite being derived from JavaScript making it a universal data representation understood by all systems.. 
// JSON string can be stored in its own file [basically just a text file] with an extension of .json, and a MIME type of application/json.
// We can validate JSON using an application like JSONLint.
// ----------------------------------------------------------------------------------------------------------------------------------

// Why use JSON?
// JSON is independent of our system's programming language, despite being derived from JavaScript. Not only is language-independent, but it also represents data that speaks common elements of many programming languages, effectively making it a universal data representation understood by all systems.

// Key Features:
// Text format: JSON is a plain text format, which means it's readable by both humans and machines.
// Language-independent: Although it is derived from JavaScript, JSON is supported by many programming languages, including Python, Ruby, PHP, Java, and more.
// Structured data: JSON allows you to represent structured data as key-value pairs, arrays, and nested objects.

// -------------------------------------------------------------------------------------------------------------------------------------
// JSON SYNTAX-

// proper format-{ "key": "value" }   --NB:always use double quotes, always quotify your keys, and remove all callback functions.
//  Values: Can be a string, number, boolean, array, object, or null.

// const superHeroes={
//     "squadName": "Super hero squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//       {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//       },
//       {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "powers": [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name": "Eternal Flame",
//         "age": 1000000,
//         "secretIdentity": "Unknown",
//         "powers": [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }
  

// NB: Can access the data inside it using same dot/bracket notation like in the JavaScript object 
// superHeroes.homeTown;                    // "Metro City"
// superHeroes["active"];                   //  true
// superHeroes["members"][1]["powers"][2];  // "Superhuman reflexes"
// ------------------------------------------------------------------------------------------------------------------------------------------
// JSON VS JAVASCRIPT

// In JavaScript, objects are similar to JSON, but in JSON, keys must be quoted with double quotes, and there can’t be any functions or undefined values.

// IN JAVASCRIPT-
// let jsObj = {
//     name: "John",
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// JSON Equivalent-
// {
//     "name": "John"
// }

// -------------------------------------------------------------------------------------------------------------------------------------------
// Use Cases of JSON:

// 1-Data transfer between server and client:
// commonly used for APIs (like REST APIs) to transfer data over HTTP. A server can send data to the browser as JSON, and the browser can process that data.
// 2-Configuration files: 
// JSON is used for configuration files in various tools, libraries, and applications (e.g., package.json in Node.js).
// 3-Storing data: 
// Some databases like MongoDB use a JSON-like format to store data.

// --------------------------------------------------------------------------------------------------------------------------------------------
// JSON Methods in JavaScript:
// JSON.parse() VS JSON.stringify()

// Methods like JSON.parse() and JSON.stringify() in JavaScript help in converting between JSON and JavaScript objects.


// JSON.stringify(): Converts a JavaScript object into a JSON string.
// const person = { name: "John", age: 30 };
// const jsonString = JSON.stringify(person);

// JSON.parse()- Converts a JSON string into a JavaScript object.
// const jsonString = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonString);

// NB:If we retrieve the response as text rather than JSON, we call text() method of the response-then use parse() to convert the text to a JavaScript object.
// If Content-Type: application/json , we can use use JSON.parse directly - but simple way is to use response.json() which is easier and cleaner.
// If Content-Type: text/plain or text/html , we use response.text() first then use JSON.parse()
// ----------------------------------------------------------------------------------------------------------------------------------------------






