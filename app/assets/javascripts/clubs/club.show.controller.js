(function() { 
  'use strict';

  function ClubShowController($state, $stateParams, Auth, ClubFactory, Club) {
    var ctrl = this;

    Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.createCurrentBook = createCurrentBook;
  
    activate();

    function activate() {
        getClub();
      }
    
  function createCurrentBook() {
    return ClubFactory.createCurrentBook(ctrl.newCurrentBook)
        .then(function() {
          $state.go('home.clubs')
        })
    }

    function getClub() {
      return ClubFactory.getClub($stateParams.id)
        .then(setClub)
    }

    function setClub(data) {
       ctrl.club = data;
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
  .controller('ClubShowController', ClubShowController);

}());