(function() { 
  'use strict';

  function NavController($scope, Auth) {

   var vm = this

        vm.signedIn = Auth.isAuthenticated;
        vm.logout = Auth.logout;
        vm.getCurrentUser = getCurrentUser;

        activate();

        function activate() {
            getCurrentUser()
        }

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser)
        }

        function setCurrentUser(user) {
            return vm.user = user;
        };

        $scope.$on('devise:new-registration', function(e, user){
            return vm.user = user;
        });
        $scope.$on('devise:login', function(e, user){
            return vm.user = user;
        });
        $scope.$on('devise:logout', function(e, user){
            return vm.user = {};
        });


}

NavController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('NavController', NavController) 


}());