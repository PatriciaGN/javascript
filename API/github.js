class Github {
  constructor(api) {
    this.api = api;
  }

  fetch(repoName) {
    this.info = this.api.fetchRepositoryData(repoName, (repoData) => {
      return repoData;
    });
  }

  //     const githubapi = new GithubApi(repoName, getRepoData = (response) => {
  // console.log(response)

  getRepoData() {
    return this.info;
  }
}

module.exports = Github;
