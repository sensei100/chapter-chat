(function() { 
  'use strict';

  function ClubController($scope, ClubFactory, $stateParams) {
    var vm = this;
    vm.clubId = $stateParams.id

    activate();

    function activate() {
      getClub();
    }

    function getClub(clubId) {
      return ClubFactory.getClub(vm.clubId)
        .then(setClub)
    }

    function setClub(data) {
       vm.club = data;
    }
  };

  ClubController.$inject = ['$scope']

angular
  .module('app')
  .controller('ClubController', ClubController);

}());