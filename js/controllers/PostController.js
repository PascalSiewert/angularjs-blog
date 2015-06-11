app.controller('PostController', ['$scope', 'blogPostService', function($scope, blogPostService) {
  $scope.posts = {};

  blogPostService.success(function(data) {
    $scope.posts = data;
  })
}]);
