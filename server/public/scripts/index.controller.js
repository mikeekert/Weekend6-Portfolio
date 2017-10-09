myApp.controller('IndexController', function (GithubService, $location) {

    console.log('IndexController loaded.');
    var vm = this;
    vm.visible = false;
    vm.user = GithubService.user;
    vm.repos = GithubService.repos;

    // get profile and repo info on load
    GithubService.githubProfile();
    GithubService.githubRepos();

    var repoToggle = true;
    var bioToggle = true;

    vm.toggleRepo = function () {
        if ($location.path() == '/repo') {
            repoToggle = false;
        }
        console.log('repo false/true:', repoToggle);
        if (repoToggle) {
            console.log('repo is true- moving to /repo');
            $location.url('/repo');
            repoToggle = !repoToggle;
        } else {
            $location.url('/');
            repoToggle = !repoToggle;
        }
    };

    vm.toggleBio = function () {
        if ($location.path() == '/about') {
            bioToggle = false;
            console.log('bio now set to false');
        }
        console.log('toggle bio');
        if (bioToggle) {
            $location.url('/about');
            bioToggle = !bioToggle;
        } else {
            $location.url('/');
            bioToggle = !bioToggle;
        }
    };
});