(function() { 
  'use strict';

  function AboutController($scope) {
    $scope.name = "test"
  };

angular
  .module('app')
  .controller('AboutController', AboutController);

}());