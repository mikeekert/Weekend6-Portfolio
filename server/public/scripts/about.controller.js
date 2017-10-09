myApp.controller('AboutController', function (GithubService) {
    var vm = this;
  
    vm.user = GithubService.user;
    vm.visible = true;
  
    // get profile and repo info on load
    GithubService.githubProfile();    
  
  });
  