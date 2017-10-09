var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl: 'views/user.html',
    controller: 'UserController as uc',
  }).when('/about', {
    templateUrl: 'views/aboutme.html',
    controller: 'AboutController',
    controllerAs: 'ac'
  }).when('/repo', {
    templateUrl: 'views/repo.html',
    controller: 'RepoController',
    controllerAs: 'rc'
  }).otherwise('/');

});