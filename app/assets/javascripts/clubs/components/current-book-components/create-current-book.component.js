(function () {
  'use strict';

  var currentBook = {
    transclude: true,
    controller: CurrentBookComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'clubs/components/current-book-components/current-book.html'
  }

  function CurrentBookComponentController(BookFactory, $state) {
    var ctrl = this;

    ctrl.createCurrentBook = createCurrentBook;
  
  function createCurrentBook() {
    return BookFactory.createCurrentBook(ctrl.newCurrentBook)
        .then(function() {
          $state.go('home.clubs')
        })
    }
  }

  angular
    .module('app')
    .component('currentBook', currentBook)

}());