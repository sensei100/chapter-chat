(function() { 
  'use strict';

  function ShowClubController($state, $stateParams, Club, Auth) {
    var ctrl = this;

    ctrl.group = Group.get({ id: $stateParams.id });

  console.log(ctrl.group);

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.createCurrentBook = createCurrentBook;
  
  function createCurrentBook() {
    return ClubFactory.createCurrentBook(ctrl.newCurrentBook)
        .then(function() {
          $state.go('home.clubs')
        })
    }

  ctrl.isCreator = function(user, group) {
    if(user.id === group.user_id) {
      return true;
    }
  };
}

angular
  .module('app')
  .controller('ShowClubController', ShowClubController);

}());