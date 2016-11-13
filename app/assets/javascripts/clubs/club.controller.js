function ClubController($scope) {
  $scope.name = "test"
};

angular
  .module('app')
  .controller('ClubController', ClubController);