(function() {

  'use strict';

  function BookFactory($http, $stateParams) {
      return {
      getBooks: getBooks,
      createBook: createBook
    }

    function getBooks() {
        return $http.get('/currentbooks')
          .then(handleResponse) 
          .catch(handleError);     
    }
  
    function handleResponse(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    }
    
    function createBook(book) {
      var req = {
        method: 'POST',
        url: '/books',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          book: book
        }
      };

        return $http(req)
          .catch(handleError);
        }
  }

  BookFactory.$inject = ['$http', '$stateParams']

  angular
    .module('app')
    .factory('BookFactory', BookFactory)

}());