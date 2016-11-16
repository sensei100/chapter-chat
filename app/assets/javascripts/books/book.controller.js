function BookController($scope, BookFactory) {

      var vm = this;
      vm.books = [];
      $scope.searchTerm = "jQuery";

      activate();

      function activate() {
      $scope.getBooks;
    }
      
      $scope.getBooks = function () {
        BookFactory.get('?q=$scope.searchTerm&maxResults=40&callback=JSON_CALLBACK&key=AIzaSyCqY1fAVBTbVsXLWfExQKxqQKMgo4vO0SA', function(response) {
          vm.books = response.items;
          $scope.orderProp = 'volumeInfo.title';
        });
         
      }     
};

  BookController.$inject = ['$scope', '$http']

angular
  .module('app')
  .controller('BookController', BookController);

