(function() { 
  'use strict';

  function ProfileController($scope) {
    $scope.username = "Jen"
  }

  ProfileController.$inject = ['$scope']

angular
  .module('app')
  .controller('ProfileController', ProfileController);

}());