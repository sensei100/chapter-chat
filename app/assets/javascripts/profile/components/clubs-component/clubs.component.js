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

  function ClubsComponentController() {
    var ctrl = this
    ctrl.clubs = [
      {
        name: "My first club",
      },
      {
        name: "My second club",
      }
    ]
  }

  angular
    .module('app')
    .component('clubs', clubs)

}());