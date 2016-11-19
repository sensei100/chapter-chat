(function() { 
  'use strict';

  function NavController($scope, Auth) {

    console.log(Auth.currentUser.inspect);
    $scope.signedIn = Auth.isAuthenticated;
   

    Auth.currentUser().then(function(user){
    $scope.isAuthenticated = true;
  });

    //event listeners for user authentication and logout

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
      $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
      $scope.user = user;
      $scope.isAuthenticated = false;
  });

}

NavController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('NavController', NavController) 


}());