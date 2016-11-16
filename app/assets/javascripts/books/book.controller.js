(function() { 
  'use strict';

  function BookController($scope, BookService) {
    $scope.searchTerm = "";

    $scope.doSearch = function() {
      BookService.get({
        q: $scope.searchTerm}, function(response) {
          $scope.bookResults = resonse.items;
          $scope.orderProp = 'volumeInfo.title';
        });
    }
  }

  BookController.$inject = ['$scope']

angular
  .module('app')
  .controller('BookController', BookController);

}());