angular
  .module('jeopardy')
  .controller('ReaderController', function($scope, $rootScope) {

    $scope.addScore = function(input, answer, val){
             if(input === answer){
             $rootScope.score += val;
             } else {
               $rootScope.score -= val;
             }
           };

    $scope.disable = function(id){
        $('#this'+id).prop('disabled', true);
      };



  });
