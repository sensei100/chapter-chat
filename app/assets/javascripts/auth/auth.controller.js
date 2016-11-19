(function() { 
  'use strict';

  function AuthController($state, Auth) {
   
 var vm = this;

        vm.login = login;
        vm.register = register;

        function login() {
            Auth.login(vm.user)
                .then(goHome);
        };

        function register() {
            Auth.register(vm.user)
                .then(goHome)
        };

        function goHome() {
            $state.go('home');
        }
    };


AuthController.$inject = ['$state', 'Auth']

angular
  .module('app')
  .controller('AuthController', AuthController) 
}());