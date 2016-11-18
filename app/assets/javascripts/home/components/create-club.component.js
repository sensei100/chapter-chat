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
    var ctrl = this;

    ctrl.createClub = createClub;
   
    function createClub() {
      return ClubFactory.createClub(ctrl.newClub)
        .then(function() {
          $state.go('home.clubs')
        })
    }
  }

  angular
    .module('app')
    .component('createClub', createClub)

}());