var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'views/user.html',
      controller: 'UserController as uc',
    }).when('/about', {
      templateUrl: 'views/aboutme.html',
      controller: 'AboutController',
      controllerAs: 'ac'
    });
});
