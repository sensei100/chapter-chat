(function() { 
  'use strict';

  function ClubController($scope) {
    $scope.name = "club name"
  }

  ClubController.$inject = ['$scope']

angular
  .module('app')
  .controller('ClubController', ClubController);

}());