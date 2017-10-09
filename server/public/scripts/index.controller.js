myApp.controller('IndexController', function (GithubService) {
    
    console.log('IndexController loaded.');
    var vm = this;
    vm.visible = false;
    vm.user = GithubService.user;
    vm.repos = GithubService.repos;
  
    // get profile and repo info on load
    GithubService.githubProfile();
    GithubService.githubRepos();
  });
  