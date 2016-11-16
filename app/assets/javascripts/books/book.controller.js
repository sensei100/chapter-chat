function BookController($scope, $http) {

      var vm = this;
      $scope.searchTerm = "jQuery";
      getBooks()

      function getBooks() {
        return $http.get('https://www.googleapis.com/books/v1/volumes?q=?&maxResults=40&callback=JSON_CALLBACK&key=AIzaSyCqY1fAVBTbVsXLWfExQKxqQKMgo4vO0SA')
        
          .then(function(response) {
          console.log(response)
    })
  }
};

  BookController.$inject = ['$scope', '$http']

angular
  .module('app')
  .controller('BookController', BookController);

