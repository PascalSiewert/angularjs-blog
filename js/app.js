var app = angular.module('BlogApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'PostController',
      templateUrl: 'views/ShowPostsView.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
