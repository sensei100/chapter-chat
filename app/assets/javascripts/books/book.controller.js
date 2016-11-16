function BookController($http) {

      var vm = this;
      getBooks()

      function getBooks() {
        return $http.get('https://www.googleapis.com/books/v1/volumes', {maxResults: '40', callback: 'JSON_CALLBACK', key: 'AIzaSyCqY1fAVBTbVsXLWfExQKxqQKMgo4vO0SA'})
        
          .then(function(response) {
          console.log(response)
    })
  }
};

  BookController.$inject = ['$http']

angular
  .module('app')
  .controller('BookController', BookController);

