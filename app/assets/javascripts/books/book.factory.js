(function() {

  'use strict';

  function BookFactory($scope, $http) {
      return {
      getBooks: getBooks
    }

    function getBooks() {
        return $http.get('https://www.googleapis.com/books/v1/volumes')
        
          .then(handleResponse) 
          .catch(handleError);
          
    }
  
    
    
    function handleResponse(response) {
      console.log(response)
      return response.items
    }

    function handleError(error) {
      console.log(error) 
    }
  }

  BookFactory.$inject = ['$scope', '$http']

  angular
    .module('app')
    .factory('BookFactory', BookFactory)

}());