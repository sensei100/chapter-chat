(function() {

  'use strict';

  function ClubFactory($http) {
    return {
      getClubs: getClubs,
      //getClub: getCllub.
      //getUserClubs: getUserClubs,
      createClub: createClub
      //updateClub: updateClub,
      //deleteClub: deleteClub
    }

    function getClubs() {
      return $http.get('/clubs')
        .then(handleResponse)
        .catch(handleError)
    }

    function createClub(club) {
      var req = {
        method: 'POST',
        url: '/clubs',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          club: club
        }
      };

        return $http(req)
          .catch(handleError);
        }

    function getClub() {

    }

    function getUserClub() {

    }

    function updateClub() {

    }

    function deleteClub() {

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