(function() { 
  'use strict';

  function HomeController($scope) {
    $scope.name = "test"
  };

angular
  .module('app')
  .controller('HomeController', HomeController);

}());