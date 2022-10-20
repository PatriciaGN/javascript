const got = require('got');

const fetchJson = (url, callbackFunction) => {
  got(url).then((response) => {
    callbackFunction(JSON.parse(response.body));
  });
};

fetchJson('https://jsonplaceholder.typicode.com/todos', (result) => {
  console.log(result);
});

module.exports = fetchJson;
