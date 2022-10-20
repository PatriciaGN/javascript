class Github {
  constructor(api) {
    this.api = api;
  }

  fetch(repoName) {
    this.info = setInterval = (function
      this.api.fetchRepositoryData(
        repoName,
        (repoData) => {
          return repoData;
        },
        0
      )
    );
  }

  //     const githubapi = new GithubApi(repoName, getRepoData = (response) => {
  // console.log(response)

  getRepoData() {
    return this.info;
  }
}

module.exports = Github;
