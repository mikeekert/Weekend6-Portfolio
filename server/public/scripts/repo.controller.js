myApp.controller('RepoController', function (GithubService) {
    console.log('repoController loaded.');
    var vm = this;
  
    vm.user = GithubService.user;
    vm.repos = GithubService.repos;
  
    // get profile and repo info on load
    GithubService.githubProfile();
    GithubService.githubRepos();
  
    
    this.date = new Date();
    
  
  });
  