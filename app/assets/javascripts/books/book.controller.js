function BookController($scope, BookFactory) {

      var vm = this;
      $scope.searchTerm = "jQuery";
      
      $scope.getBooks = function () {
        BookFactory.get('?q=$scope.searchTerm&maxResults=40&callback=JSON_CALLBACK&key=AIzaSyCqY1fAVBTbVsXLWfExQKxqQKMgo4vO0SA', function(response) {
           $scope.bookResults = response.items;
          $scope.orderProp = 'volumeInfo.title';
        });
         
      }     
};

  BookController.$inject = ['$scope', '$http']

angular
  .module('app')
  .controller('BookController', BookController);

