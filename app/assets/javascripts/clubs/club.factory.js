(function() {

  'use strict';

  function ClubFactory($http) {
    return {
      getClubs: getClubs
      getUserClubs: getUserClubs,
      createClub: createClub,
      updateClub: updateClub,
      deleteClub: deleteClub
    }
    
  }

  angular
    .module('app')
    .factory('ClubFactory', ClubFactory)

}());