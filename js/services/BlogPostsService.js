app.factory('blogPostsService', ['$http', function($http) {
  return $http.get('http://localhost/angularjs-blog/api/posts.json.php').success(function(data) {
    return data;
  }).error(function(err) {
    return err;
  });
}]);
