(function () {
  'use strict';

  var createClub = {
    transclude: true,
    controller: CreateClubsComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'home/components/create-club.html'
  }

  function CreateClubsComponentController(ClubFactory, $state) {
    var ctrl = this
   
    function createClub() {
      return ClubFactory.createClub(ctrl.newClub)
        .then(function() {
          $state.go('/clubs')
        })
    }
  }

  angular
    .module('app')
    .component('createClub', createClub)

}());