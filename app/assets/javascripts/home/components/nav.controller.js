(function() { 
  'use strict';

  function NavController($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function (user){
    $scope.user = user;
  });

}

NavController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('NavController', NavController) 


}());