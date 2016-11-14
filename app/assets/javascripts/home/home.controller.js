(function() { 
  'use strict';

  function HomeController($scope) {

    var vm = this;

    $scope.query = {}
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

    $scope.orderProp = "name";
  };
    
  HomeController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());