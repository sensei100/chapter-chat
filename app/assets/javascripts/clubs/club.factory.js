(function() {

  'use strict';

  function ClubFactory($http, $stateParams) {
    return {
      getClubs: getClubs,
      getClub: getClub,
      // getUserClub: getUserClubs,
      createClub: createClub,
      updateClub: updateClub,
      deleteClub: deleteClub,
      createCurrentBook: createCurrentBook
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

    function getClub(id) {
      return $http.get('clubs/' + $stateParams.id)
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

    function createCurrentBook(currentBook) {
      var req = {
        method: 'POST',
        url: '/currentbooks',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          currentBook: currentBook
        }
      };

        return $http(req)
          .catch(handleError);
        }
  }

  ClubFactory.$inject = ['$http', '$stateParams']

  angular
    .module('app')
    .factory('ClubFactory', ClubFactory)

}());