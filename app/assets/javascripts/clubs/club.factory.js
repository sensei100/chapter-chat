(function() {

  'use strict';

  function ClubFactory($http) {
    return {
      getClubs: getClubs
      //getUserClubs: getUserClubs,
      //createClub: createClub,
      //updateClub: updateClub,
      //deleteClub: deleteClub
    }

    function getClubs() {
      return $http.get('/clubs')
        .then(handleResponse)
        .catch(handleError)
    }

    function handleResponse(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    }
  }

  angular
    .module('app')
    .factory('ClubFactory', ClubFactory)

}());