angular
  .module('jeopardy')
  .controller('ReaderController', function($scope, $rootScope) {

    $scope.addScore = function(userAnswer, actualAnswer, value){
             if(userAnswer === actualAnswer.toLowerCase().replace(/(<([^>]+)>)/ig,"").replace(/\\\//g,"")){
             $rootScope.score += value * 2;
             } else {
               $rootScope.score -= value * 2;
             }
           };

    $scope.disable = function(id){
        $('#this'+id).prop('disabled', true);
          $('#' + id).modal('hide');
      };
      
  });
