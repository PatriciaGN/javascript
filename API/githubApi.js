const got = require('got');

class GithubApi {
  fetchRepositoryData(repoName, callbackFunction) {
    const url = `https://api.github.com/repos/${repoName}`;
    const newResponse = got(url).then((response) => {
      callbackFunction(JSON.parse(response.body));
    });
  }
}

// const api = new GithubApi();

// api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
// });

module.exports = GithubApi;
