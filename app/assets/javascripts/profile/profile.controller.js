(function() { 
  'use strict';

  function ProfileController($scope) {
    $scope.name = "home"
  }

  ProfileController.$inject = ['$scope']

angular
  .module('app')
  .controller('ProfileController', ProfileController);

}());