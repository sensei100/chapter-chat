(function() { 
  'use strict';

  function BookController($scope) {
    $scope.name = "test"
  };

angular
  .module('app')
  .controller('BookController', BookController);

}());