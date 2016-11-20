(function() { 
  'use strict';

  function HomeController($scope, Auth, $state) {
     Object.defineProperty($scope, "queryFilter", {
      get: function() {
        var out = {};
        out[$scope.queryBy || "$"] = $scope.query;
        return out;
      }
    });
     
  };
    
  HomeController.$inject = ['$scope', 'Auth', '$state']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());