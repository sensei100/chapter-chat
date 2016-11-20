(function() { 
  'use strict';

  function AuthController(Auth,$scope,$location) {
    // might need an auth service
    this.credentials = {
      email: '',
      password: ''
    }

    this.config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    this.signIn = function() {
      Auth.login(this.credentials, this.config).then(function(user) {
        // Successfully redirects. Since route has otherwise - it sends to '/' path
        $location.path('/home.main');
      }, function(error) {
        alert("There was a problem logging in.");
      });
    } 

  }

AuthController.$inject = ['Auth', '$scope', '$location']

angular
  .module('app')
  .controller('AuthController', AuthController)

}());