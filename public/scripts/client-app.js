var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hasPrefix('');
  $routeProvider
    .when('/home', {
      template: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/admin', {
      template: '/views/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })
    .otherwise({
      redirectTo: '/home'
    });//End route

}]);//End config;
