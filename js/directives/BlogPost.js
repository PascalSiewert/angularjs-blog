app.directive('blogPost',['$timeout', function() {
  return {
    restrict: 'E',
    scope: {
      postData: '='
    },
    templateUrl: 'js/directives/BlogPost.html'
  };
}]);
