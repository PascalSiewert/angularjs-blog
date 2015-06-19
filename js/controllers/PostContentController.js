app.controller('PostContentController', ['$scope', 'PostService', function($scope, postService) {
  postService.success(function(data) {
    $scope.post = data[0];
  });
}]);
