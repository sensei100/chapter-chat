(function() { 
  'use strict';

  function ClubController(ClubFactory, $stateParams) {
    var vm = this;

    activate();

    function activate() {
      getClubs()
      if (!!$stateParams.id) {
        getClub();
      }
    }

    function getClubs() {
      return ClubFactory.getClubs()
                        .then(setClubs)

      function setClubs(data) {
        vm.clubs = data;
      }                
    }

    
  };

  ClubController.$inject = ['ClubFactory', '$stateParams']

angular
  .module('app')
  .controller('ClubController', ClubController);

}());