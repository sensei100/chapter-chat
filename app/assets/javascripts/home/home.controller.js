(function() { 
  'use strict';

  function HomeController($scope) {
    $scope.name = "home"
  }

  HomeController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());