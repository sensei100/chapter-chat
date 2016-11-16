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

    $scope.clubs = [
      {
        name: "Jen's Club",
        location: "PA"
      },
      {
        name: "Testing",
        location: "Anywhere"
      },
      {
        name: "Third Club",
        location: "Minneapolis"
      }
    ];
  };
    
  HomeController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());