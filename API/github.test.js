const Github = require('./github');
const GithubApi = require('./githubapi');

describe('Github', () => {
  describe('fetch', () => {
    //This is the one done by coach
    it('can get repo data from sinatra', (done) => {
      const api = new GithubApi();
      const github = new Github(api);
      github.fetch('sinatra/sinatra');

      setTimeout(() => {
        const repoData = github.getRepoData();
        expect(repoData.full_name).toEqual('sinatra/sinatra');
        done();
      }, 2000); // This are integration tests as they use a real API
    });

    it('can get repo data from jest', (done) => {
      const api = new GithubApi();
      const github = new Github(api);
      github.fetch('facebook/jest');

      setTimeout(() => {
        const repoData = github.getRepoData();
        expect(repoData.full_name).toEqual('facebook/jest');
        done();
      }, 2000); // This are integration tests as they use a real API
    });

    it('can get repo data from sinatra', (done) => {
      // const api = new GithubApi();
      const mockedApi = {
        // Unit test: Mocking the API
        fetchRepositoryData: (_, cb) => {
          const mockData = { full_name: 'sinatra/sinatra' };
          cb(mockdata);
        },
      };
      const github = new Github(api);
      github.fetch('sinatra/sinatra');

      setTimeout(() => {
        const repoData = github.getRepoData();
        expect(repoData.full_name).toEqual('facebook/jest');
        done();
      }, 0); // We can use 0 mseconds as we don't need to wait for the real API
    });
  });
});

//     it('gets the repo data fetched by the Api class', () => {
//       const mockedApi = {
//         fetchRepositoryData: (repoName, callback) => {
//           callback({
//             name: 'sinatra/sinatra',
//             description: 'Some fake description',
//           });
//         },
//       };
//       const github = new Github(mockedApi);
//       github.fetch('sinatra/sinatra');
//       expect(github.getRepoData()).toEqual({
//         name: 'sinatra/sinatra',
//         description: 'Some fake description',
//       });
//     });
//   });
// });

// it('can get repo data', (done) => {
//   const api = new GithubApi();
//   const github = new Github(api);
//   github.fetch('sinatra/sinatra');

//   setTimeout(() => {
//     const repoData = github.getRepoData();
//     expect(repoData.full_name).toEqual('sinatra/sinatra');
//     done();
//   }, 500);
// });

// npm install @types/jest to avoid autocorrect
