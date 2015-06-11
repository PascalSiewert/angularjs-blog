var app = angular.module('BlogApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'PostController',
      templateUrl: 'views/posts.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
