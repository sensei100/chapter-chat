(function() { 
  'use strict';

  function HomeController($scope, Auth, $state) {
     Object.defineProperty($scope, "queryFilter", {
      get: function() {
        var out = {};
        out[$scope.queryBy || "$"] = $scope.query;
        return out;
      }
    });
     
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
  };
    
  HomeController.$inject = ['$scope', 'Auth', '$state']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());