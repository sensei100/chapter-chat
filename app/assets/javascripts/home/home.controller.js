(function() { 
  'use strict';

  function HomeController($scope) {
     Object.defineProperty($scope, "queryFilter", {
      get: function() {
        var out = {};
        out[$scope.queryBy || "$"] = $scope.query;
        return out;
      }
    });

  };
    
  HomeController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());