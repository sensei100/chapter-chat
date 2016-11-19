(function() { 
  'use strict';

  function AuthController($scope, $state, Auth) {

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };
   
 $scope.register = function(){
      Auth.register($scope.user, config).then(function(user){
        console.log(user);
        $state.go('home.main');
      }, function(error){
        console.log(error)
      });
    };

    $scope.login = function(){
      Auth.login($scope.user, config).then(function(user){
        console.log(user);
        $state.go('home.main');
      }, function(error){
        console.log(error)
      });
    }

  }

AuthController.$inject = ['$scope', '$state', 'Auth']

angular
  .module('app')
  .controller('AuthController', AuthController)

}());