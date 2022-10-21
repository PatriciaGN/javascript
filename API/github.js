class Github {
  #api;
  #repoData; // Private fields need to be defined outside the constructor and functions or it will complain

  constructor(api) {
    this.#api = api; // The hash is to make it private so that nobody can play with it
  }

  fetch(repoName) {
    this.#api.fetchRepositoryData(repoName, (repoData) => {
      this.#repoData = repoData;
    });
  }

  //     const githubapi = new GithubApi(repoName, getRepoData = (response) => {
  // console.log(response)

  getRepoData() {
    return this.#repoData;
  }
}

module.exports = Github;
