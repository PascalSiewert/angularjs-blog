app.controller('HomeController', ['$scope', 'blogPostService', function($scope, blogPostService) {
  $scope.posts = {};

  blogPostService.success(function(data) {
    $scope.posts = data;
  })
}]);
