(function() { 
  'use strict';

  function BookDetailsController($scope) {
    $scope.name = "test"
  };

angular
  .module('app')
  .controller('BookDetailsController', BookDetailsController);

}());