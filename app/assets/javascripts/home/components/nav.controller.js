(function() { 
  'use strict';

  function NavController($scope, Auth, $http) {

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
      $scope.isAuthenticated = false;
  });

  $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
            // Disable interceptor on _this_ login request,
            // so that it too isn't caught by the interceptor
            // on a failed login.
            var config = {
                interceptAuth: false
            };

            // Ask user for login credentials
            Auth.login(credentials, config).then(function() {
                // Successfully logged in.
                // Redo the original request.
                return $http(xhr.config);
            }).then(function(response) {
                // Successfully recovered from unauthorized error.
                // Resolve the original request's promise.
                deferred.resolve(response);
            }, function(error) {
                // There was an error logging in.
                // Reject the original request's promise.
                deferred.reject(error);
            });
        });

}

NavController.$inject = ['$scope', 'Auth', '$http']

angular
  .module('app')
  .controller('NavController', NavController) 


}());