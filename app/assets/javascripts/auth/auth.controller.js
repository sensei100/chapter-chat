(function() { 
  'use strict';

  function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function() {
      $state.go('home.main');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('home.main')
    })
  }
}

AuthController.$inject = ['$scope', '$state', 'Auth']

angular
  .module('app')
  .controller('AuthController', AuthController)

}());