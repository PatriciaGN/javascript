const got = require('got');

const fetchRepositoryInfo = (repoName, callbackFunction) => {
  const url = `https://api.github.com/repos/${repoName}`;
  const newResponse = got(url).then((response) => {
    callbackFunction(JSON.parse(response.body));
  }); // We don't need to store it in newResponse
};

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});

module.exports = fetchRepositoryInfo;
