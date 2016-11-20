(function() { 
  'use strict';

  function NavController(Auth,$scope,$location) {

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
          debugger
          alert("Successfully logged out!");
          $location.path("/");
        }, function(error) {
          // An error occurred logging out.
        });
      }
};

NavController.$inject = ['Auth', '$scope', '$location']

angular
  .module('app')
  .controller('NavController', NavController) 


}());