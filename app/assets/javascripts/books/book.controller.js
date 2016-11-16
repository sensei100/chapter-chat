(function() { 
  'use strict';

  function BookController($scope, $resource) {
    $scope.name = "test"
  }

  BookController.$inject = ['$scope']

angular
  .module('app')
  .controller('BookController', BookController);

}());