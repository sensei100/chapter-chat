(function () {
  'use strict';

  var createCurrentBook = {
    transclude: true,
    controller: CurrentBookComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'clubs/components/current-book-components/current-book.html'
  }

  function CurrentBookComponentController(ClubFactory, $state) {
    var ctrl = this;

    ctrl.createCurrentBook = createCurrentBook;
    
  function createCurrentBook() {
    return ClubFactory.createCurrentBook(ctrl.newCurrentBook)
        .then(function() {
          $state.go('home.clubs')
        })
    }
  }

  angular
    .module('app')
    .component('createCurrentBook', createCurrentBook)

}());