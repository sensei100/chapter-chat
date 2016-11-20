(function() { 
  'use strict';

  function ShowClubController($state, $stateParams, Club, Auth) {
    var ctrl = this;

    ctrl.club = Club.get({ id: $stateParams.id });

  console.log(ctrl.club);

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

  ctrl.addUser = function(user) {
    ctrl.club.users.push(user);
    ctrl.club.$update(function(result) {
    console.log(result);
  });
    $state.go($state.current, {}, {reload: true});
};

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