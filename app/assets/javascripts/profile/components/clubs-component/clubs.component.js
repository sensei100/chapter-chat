(function () {
  'use strict';

  var clubs = {
    transclude: true,
    controller: ClubsComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'profile/components/clubs-component/clubs.html'
  }

  function ClubsComponentController(ClubFactory) {
    var ctrl = this
    activate()

    function activate() {
      getClubs()
    }

    function getClubs() {
      return ClubFactory.getClubs()
        .then(setClubs)
    }

    function setClubs(data) {
      ctrl.clubs = data
    }
  }

  angular
    .module('app')
    .component('clubs', clubs)

}());