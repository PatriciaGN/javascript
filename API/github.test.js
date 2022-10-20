const Github = require('./github');
const GithubApi = require('./githubapi');

describe('Github', () => {
  beforeEach(() => {});
  //   const api = new GithubApi();
  // const candyDouble2 = { getName: () => 'Skittle', getPrice: () => 3.99 };

  describe('fetch', () => {
    it('gets the repo data fetched by the Api class', () => {
      const mockedApi = {
        fetchRepositoryData: (repoName, callback) => {
          callback({
            name: 'sinatra/sinatra',
            description: 'Some fake description',
          });
        },
      };
      const github = new Github(mockedApi);
      github.fetch('sinatra/sinatra');
      expect(github.getRepoData()).toEqual({
        name: 'sinatra/sinatra',
        description: 'Some fake description',
      });
    });
  });
});
