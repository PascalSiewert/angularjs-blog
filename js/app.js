var app = angular.module('BlogApp', ['ngRoute', 'ngAnimate', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/posts', {
      controller: 'PostController',
      templateUrl: 'views/ShowPostsView.html'
    })
    .when('/posts/:postId', {
      controller: 'PostContentController',
      templateUrl: 'views/PostContentView.html'
    })
    .otherwise({
      redirectTo: '/posts'
    });
});

app.run(function($rootScope, $templateCache) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if(typeof(current) !== 'undefined') {
      $templateCache.remove(current.templateUrl);
    }
  });
});
