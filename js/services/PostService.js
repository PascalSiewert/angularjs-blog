app.factory('PostService', ['$http', '$routeParams', function($http, $routeParams) {
  return $http.get('api/posts.json.php?postId=' + $routeParams.postId).success(function(data){
    return data;
  });
}]);
