(function() { 
  'use strict';

  function ClubController($scope) {
    $scope.name = "club name"
  };

angular
  .module('app')
  .controller('ClubController', ClubController);

}());