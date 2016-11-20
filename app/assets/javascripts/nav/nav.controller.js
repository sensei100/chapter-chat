(function() { 
  'use strict';

  function NavController(Auth, $scope, $location) {
    var vm = this;

    vm.logout = function() {
      Auth.logout().then(function(oldUser) {
        alert("Successfully logged out!");
        $location.path("/");
      }, function(error) {
        // An error occurred logging out.
      });
    }

      //event listeners for user authentication and logout
      $scope.$on('devise:new-registration', function(e, user){
          return vm.user = user;
      });
      $scope.$on('devise:login', function(e, user){
          return vm.user = user;
      });
      $scope.$on('devise:logout', function(e, user){
          return vm.user = {};
      });

  };

NavController.$inject = ['Auth', '$scope', '$location']

angular
  .module('app')
  .controller('NavController', NavController) 


}());