// Load the `got` function.
const got = require('got');

// Create a "handler" callback function.
const handleReceivedResponse = (response) => {
  console.log(JSON.parse(response.body));
};

const url = 'https://jsonplaceholder.typicode.com/todos';

// Call `got` and provide the handler callback function.
// This will get called by `got` when the response is received.
got(url).then(handleReceivedResponse);

// We can also rewrite the above using a shorter version,
// by defining the "handler" function as an anonymous function

// got(url)
//   .then((response) => {
//     console.log(response.body);
//   });

// const stringValue = '{ "name": "John" }';
// const objectValue = JSON.parse(stringValue);

// console.log(objectValue); // { name: 'John' }

// // We can access properties like a regular JS object
// console.log(objectValue.name);
