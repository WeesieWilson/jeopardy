angular
  .module('jeopardy')
  .service('ApiService', function($http, $q){
    var url = 'http://jservice.io/api/category?id=';
    

    function getCategories(){
      var defer = $q.defer();
      var randomNumber = Math.floor(Math.random() * 1200);
      $http.get(url + randomNumber).then(function(data) {
        defer.resolve(data);
      })
      return defer.promise;
    }

    function sixCat() {
      return $q.all([getCategories(),getCategories(),getCategories(),getCategories(),getCategories(),getCategories()])
    }








    return {
      getCategories: getCategories,
      sixCat: sixCat

    }

  });
