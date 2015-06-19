app.controller('PostController', ['$scope', 'blogPostsService', function($scope, blogPostsService) {
  $scope.posts = {};

  blogPostsService.success(function(data) {
    $scope.posts = data;
  });
}]);
