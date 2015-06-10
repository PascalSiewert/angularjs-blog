app.directive('blogPost', function() {
  return {
    restrict: 'E',
    scope: {
      model: '='
    },
    templateUrl: 'js/directives/BlogPost.html'
  };
});
