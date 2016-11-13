angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController as vm'
      })
      .state('home.clubs', {
        url: '/clubs',
        templateUrl: 'clubs/clubs.html',
        controller: 'ClubController as vm'
      })
       .state('home.books', {
        url: '/books',
        templateUrl: 'books/books.html',
        controller: 'BookController as vm'
      })
        .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'AboutController as vm'
      })
        .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileController as vm'
      })
        .state('booksDetails', {
        url: '/books/details',
        templateUrl: 'views/books/details.html',
        controller: 'BookDetailsController as vm'
      });

        $urlRouterProvider.otherwise('/');
  });