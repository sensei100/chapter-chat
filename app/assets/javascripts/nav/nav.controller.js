(function() { 
  'use strict';

  function NavController($scope, Auth) {

  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = Auth.logout;

  Auth.currentUser()
    .then(function(user) {
      $scope.user = user;
    });

  $scope.$on('devise:new-registration', function(e, user) {
    $scope.isAuthenticated = true;
  });

  $scope.$on('devise:login', function(e, user) {
    $scope.isAuthenticated = true;
  });

  $scope.$on('devise:logout', function(e, user) {
     $scope.isAuthenticated = false;
  });

  this.logout = function() {
        Auth.logout().then(function(oldUser) {
          alert("Successfully logged out!");
          $location.path("/");
        }, function(error) {
          // An error occurred logging out.
        });
      }
};

NavController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('NavController', NavController) 


}());