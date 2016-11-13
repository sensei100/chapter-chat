(function() { 
  'use strict';

  function BookController($scope) {
    $scope.name = "test"
  }

  BookController.$inject = ['$scope']

angular
  .module('app')
  .controller('BookController', BookController);

}());