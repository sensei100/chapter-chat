(function() {

  'use strict';

  function ClubFactory($http) {
    return {
      getClubs: getClubs,
      getClub: getClub,
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

    function getClub(clubId) {
      return $http.get('club', {params: {clubId: clubId}})
        .then(handleResponse)
        .catch(handleError);
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

  ClubFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('ClubFactory', ClubFactory)

}());