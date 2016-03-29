angular
  .module('jeopardy')
  .controller('HomeController', function($scope, ApiService, $rootScope) {

  $rootScope.score = 0;

    ApiService.getCategories()
        .then(function(catof1) {
        });

    ApiService.sixCat()
        .then(function(data) {
        $scope.categories = data;
        });

    });
