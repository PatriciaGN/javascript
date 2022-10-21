const got = require('got');
// Ideally we would write our baseURL outside the function, as best practice, as it is always the same.
// It is better to either write it outside the class or write it with a hash before,
// so that it's not accessible for someone else:
// #BASE_URL = 'https://api.github.com/repos/'
class GithubApi {
  fetchRepositoryData(repoName, callbackFunction) {
    const url = `https://api.github.com/repos/${repoName}`;
    got(url).then((response) => {
      callbackFunction(JSON.parse(response.body));
    });
  }
}

// const api = new GithubApi();

// api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
// });

module.exports = GithubApi;
